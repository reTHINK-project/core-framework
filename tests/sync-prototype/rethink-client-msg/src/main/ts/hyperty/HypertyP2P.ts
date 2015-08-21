import * as bus from 'rethink/sync/hyper/MiniBus';
import * as sync from 'rethink/sync/hyper/Syncher';
import * as so from 'rethink/sync/hyper/SyncObject';
import * as adapter from 'lib/adapter';

/// <reference path="es6-promise.d.ts" />
/// <reference path="MediaStream.d.ts" />
/// <reference path="RTCPeerConnection.d.ts" />

interface BindMediaStream {
    bind: (element: any) => void;
}

var _iceConfig = {iceServers: [{url: "stun:stun.l.google.com:19302"}]}; //default ICE config

interface CallEvent {    
    accept(): void;
    reject(): void;
}

interface MediaRequest {
    video?: Object; 
    audio?: Object;
}

var Direction = {
    OFFER:     'offer',
    ANSWER:    'answer'
}

export default class HypertyP2P {
    private _mb: bus.MiniBus;
    private _syn: sync.Syncher;
    
    private _localStream: MediaStream;
    
    private _oncall;
    private _onstream;
    
    private _data: any;
    private _pc: RTCPeerConnection;
    
    constructor(mb: bus.MiniBus) {
        this._mb = mb;
        this._syn = new sync.Syncher(mb);
        this._syn.addSchema('Communication', {});
        this._syn.observe((request) => {
            if(request.cType == sync.CreateType.CREATE_REQ) {
                if(this._oncall) {
                    this._oncall({
                        accept: () => {            
                            var obj = request.accept();
                            this._data = obj.data;
                            
                            obj.observeFilter('offer.candidates.*', (event) => {
                                this.addIceCandidate(event.data[0]);
                            });

                            this.initPC(Direction.ANSWER);
                            var sdp = new RTCSessionDescription({"type": Direction.OFFER, sdp: obj.data.offer.sdp});
                            this._pc.setRemoteDescription(sdp);
                            this._pc.createAnswer((desc) => {
                                obj.data.answer = {
                                    sdp: desc.sdp,
                                    candidates: []
                                };
                                
                                this._pc.setLocalDescription(desc); //fires onicecandidate
                            });
                        },
                        
                        reject: () => {
                            request.reject();
                        }     
                    });
                } else {
                    request.reject();    
                }
            }
        });
    }
    
    public get localStream() {
        return this._localStream;
    }
    
    public requestMedia(request: MediaRequest): Promise<MediaStream> {
        return new Promise<MediaStream>((resolve, reject) => {
            adapter.getUserMedia(request, (stream) => {
                this._localStream = stream;
                resolve(stream);
            }, (error) => {
                reject(error); 
            });
        });
    }
    
    public onCall(callback: (call: CallEvent) => void): void {
        this._oncall = callback;
    }
    
    public onStream(callback: (call: BindMediaStream) => void): void {
        this._onstream = callback;
    }
    
    public call(to: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            this.initPC(Direction.OFFER);
            this._pc.createOffer((desc) => {
                var data = {
                    offer: {
                        sdp: desc.sdp, 
                        candidates: []
                    }
                }
            
                this._syn.create(to, 'Communication', to, data).then((obj) => {
                    this._data = obj.data;
                    this._pc.setLocalDescription(desc); //fires onicecandidate
                    
                    obj.observeFilter('answer', (event) => {
                        var sdp = new RTCSessionDescription({"type": Direction.ANSWER, sdp: obj.data.answer.sdp});
                        this._pc.setRemoteDescription(sdp);
                    });
                    
                    obj.observeFilter('answer.candidates.*', (event) => {
                        this.addIceCandidate(event.data[0]);
                    });
                    
                    resolve(true);
                }).catch((error) => {
                    resolve(false);
                }); 
            });
        });
    }
    
    private initPC(direction: string): void {
        this._pc = new RTCPeerConnection(_iceConfig);
        this._pc.addStream(this._localStream);

        this._pc.onicecandidate = (evt) => {
            if(evt.candidate != null) {
                this._data[direction].candidates.push(evt.candidate);
            }
        };

        this._pc.onaddstream = (evt) => {
            if(this._onstream) {
                evt.stream['bind'] = (element) => {
                    var win: any = window;
                    element.src = win.URL.createObjectURL(evt.stream);    
                }
                
                this._onstream(evt.stream); 
            }
        };
    }
    
    private addIceCandidate(candidate: any): void {
        var ice = new RTCIceCandidate(candidate);
        this._pc.addIceCandidate(ice, () => {}, () => {});
    }
}
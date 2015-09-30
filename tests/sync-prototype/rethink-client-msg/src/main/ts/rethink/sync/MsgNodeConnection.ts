import * as inter from 'rethink/sync/interfaces';
import * as SockJS from 'cdn/sockjs';

export default class MsgNodeConnection implements inter.IConnection {
    private _msgNodeURL: string;
    private _sock: any = null;
    
    private _msgCallback: (Message) => void = null;
    
    constructor(msgNodeURL: string) {
        this._msgNodeURL = msgNodeURL;
    }
    
    public get serverURL(): string {
        return this._msgNodeURL;
    }
    
    public send(msg: inter.Message): void {
        this.open(() => {
            this._sock.send(JSON.stringify(msg));
        });
    }
    
    public onMessage(callback: (Message) => void) {
        this._msgCallback = callback;
    }
        
    public close(): void {
        if(this._sock != null) {
            this._sock.close();
        }
    }
    
    private waitReady(callback: () => void) {
        if(this._sock.readyState == 1) {
            callback();
        } else {
            setTimeout(() => {
                this.waitReady(callback);
            });
        }
    }
    
    private open(callback: () => void): void {        
        if(this._sock == null) {
            if(this._msgNodeURL.substring(0, 2) == 'ws') {
                this._sock = new WebSocket(this._msgNodeURL);
            } else {
                this._sock = new SockJS(this._msgNodeURL);
            }
            
            this._sock.onopen = () => {
                console.log('OPEN');
                callback();
            }
            
            this._sock.onmessage = (e) => {
                var msg: inter.Message = JSON.parse(e.data);
                if(this._msgCallback != null)
                    this._msgCallback(msg);
            }
            
            this._sock.onclose = () => {
                console.log('CLOSE');
                this._sock = null;
            }
        } else {
            this.waitReady(callback);
        }
    }
}
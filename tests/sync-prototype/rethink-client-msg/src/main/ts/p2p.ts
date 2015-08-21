import MsgNodeConnection from 'rethink/sync/MsgNodeConnection';
import * as find from 'lib/find';
import * as bus from 'rethink/sync/hyper/MiniBus';
import HypertyP2P from 'hyperty/HypertyP2P';

var hypertyInstURL = 'hyperty-instance://sp1/h' + (Math.floor(Math.random() * 100) + 1);
console.log('Starting ' + hypertyInstURL);

var video = <HTMLVideoElement>document.querySelector('video');

var offerBtn = <HTMLButtonElement>find.byId('offerBtn');
var offerInp = <HTMLInputElement>find.byId('offerInp');
var clientLbl = <HTMLLabelElement>find.byId('clientId');
clientLbl.innerText = hypertyInstURL;

//runtime components----------------------------------------------------------------------------------
var con = new MsgNodeConnection('ws://localhost:9090/ws');

//unsecure hyperty allocation address
con.send({
    header: {
        id: 1,
        "type": 'create',
        "from": 'runtime://localhost:8080',
        "to": 'bus://localhost:9090',
        "comp": 'address'
    }, 
    body: {
        res: hypertyInstURL
    }
});

var media = {
    audio: true,
    video: {mandatory: {minWidth: 1280, minHeight: 720}}
};


var mb = new bus.MiniBus(hypertyInstURL, con);
var hyper = new HypertyP2P(mb);
hyper.requestMedia(media);

hyper.onCall((callEvent) => {
    callEvent.accept();
});

hyper.onStream((stream) => {
    stream.bind(video);
});

offerBtn.addEventListener('click', () => {
    hyper.call(offerInp.value);
});

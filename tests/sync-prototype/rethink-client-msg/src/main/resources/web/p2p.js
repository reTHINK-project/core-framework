define(["require", "exports", 'rethink/sync/MsgNodeConnection', 'lib/find', 'rethink/sync/hyper/MiniBus', 'hyperty/HypertyP2P'], function (require, exports, MsgNodeConnection_1, find, bus, HypertyP2P_1) {
    var hypertyInstURL = 'hyperty-instance://sp1/h' + (Math.floor(Math.random() * 100) + 1);
    console.log('Starting ' + hypertyInstURL);
    var video = document.querySelector('video');
    var offerBtn = find.byId('offerBtn');
    var offerInp = find.byId('offerInp');
    var clientLbl = find.byId('clientId');
    clientLbl.innerText = hypertyInstURL;
    var con = new MsgNodeConnection_1.default('ws://localhost:9090/ws');
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
        video: { mandatory: { minWidth: 1280, minHeight: 720 } }
    };
    var mb = new bus.MiniBus(hypertyInstURL, con);
    var hyper = new HypertyP2P_1.default(mb);
    hyper.requestMedia(media);
    hyper.onCall(function (callEvent) {
        callEvent.accept();
    });
    hyper.onStream(function (stream) {
        stream.bind(video);
    });
    offerBtn.addEventListener('click', function () {
        hyper.call(offerInp.value);
    });
});

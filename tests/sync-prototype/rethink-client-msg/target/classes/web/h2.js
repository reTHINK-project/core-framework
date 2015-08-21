define(["require", "exports", 'rethink/sync/MsgNodeConnection', 'rethink/sync/hyper/MiniBus', 'rethink/sync/hyper/Syncher'], function (require, exports, MsgNodeConnection_1, bus, sync) {
    var hypertyInstURL = 'hyperty-instance://sp1/h2';
    console.log('Starting ' + hypertyInstURL);
    var testLbl = document.getElementById('test');
    testLbl.innerText = 'My Test';
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
    var mb = new bus.MiniBus(hypertyInstURL, con);
    var db = new sync.Syncher(mb);
    db.addSchema('Persons', {});
    db.observe(function (event) {
        console.log('ACCEPT');
        event.accept();
    });
});

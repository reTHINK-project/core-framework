import MsgNodeConnection from 'rethink/sync/MsgNodeConnection';

import * as bus from 'rethink/sync/hyper/MiniBus';
import * as sync from 'rethink/sync/hyper/Syncher';

var hypertyInstURL = 'hyperty-instance://sp1/h2';

console.log('Starting ' + hypertyInstURL);
var testLbl = <HTMLLabelElement>document.getElementById('test');
testLbl.innerText = 'My Test';

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

//hyperty components----------------------------------------------------------------------------------
var mb = new bus.MiniBus(hypertyInstURL, con);
var db = new sync.Syncher(mb);
db.addSchema('Persons', {});

db.observe((event) => {
    console.log('ACCEPT');
    event.accept();
});


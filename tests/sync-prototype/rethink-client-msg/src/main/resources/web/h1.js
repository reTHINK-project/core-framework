define(["require", "exports", 'rethink/sync/MsgNodeConnection', 'rethink/sync/hyper/MiniBus', 'rethink/sync/hyper/Syncher'], function (require, exports, MsgNodeConnection_1, bus, sync) {
    var hypertyInstURL = 'hyperty-instance://sp1/h1';
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
    db.create('PTIN', 'Persons', 'hyperty-instance://sp1/h2').then(function (sObj) {
        var data = sObj.data;
        data['1'] = { name: 'Micael', birthdate: new Date(1981, 1, 28), email: 'micaelpedrosa@gmail.com', phone: '911932795' };
        data['1'].obj1 = { name: "xpto" };
        data['2'] = { name: 'Luis Duarte', birthdate: new Date(1991, 11, 2), email: 'lduarte.suil@gmail.com', phone: '910000000', obj1: { name: "xpto" } };
        setTimeout(function () {
            data['1'].name = 'Micael Pedrosa';
            data['1'].birthdate = new Date(1982, 1, 28);
            data['1'].obj1.name = 'XPTO';
            delete data['2'];
            setTimeout(function () {
                data['1'].arr = [1, 0, { x: 10, y: 20 }];
                setTimeout(function () {
                    data['1'].arr[1] = 2;
                    setTimeout(function () {
                        data['1'].arr.push(3);
                        data['1'].arr.push({ x: 1, y: 2 });
                        setTimeout(function () {
                            data['1'].arr.splice(1, 2, 10, 11, 12);
                            data['1'].arr[5].x = 10;
                            setTimeout(function () {
                                data['1'].arr.pop();
                            });
                        });
                    });
                });
            });
        });
    }, function (error) {
        console.log(error);
    });
});

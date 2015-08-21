import MsgNodeConnection from 'rethink/sync/MsgNodeConnection';
import * as bus from 'rethink/sync/hyper/MiniBus';
import * as sync from 'rethink/sync/hyper/Syncher';

var hypertyInstURL = 'hyperty-instance://sp1/h1';

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

//create resourceURL -> hyperty-instance://sp1/h1/PTIN ???
db.create('PTIN', 'Persons', 'hyperty-instance://sp1/h2').then((sObj) => {
    var data = sObj.data;
    //apply changes to resource data...
    data['1'] = {name: 'Micael', birthdate: new Date(1981, 1, 28), email: 'micaelpedrosa@gmail.com', phone: '911932795'};
    data['1'].obj1 = {name: "xpto"};
    
    data['2'] = {name: 'Luis Duarte', birthdate: new Date(1991, 11, 2), email: 'lduarte.suil@gmail.com', phone:'910000000', obj1: {name: "xpto"}};
    
    //changes in diferent flux of execution...
    setTimeout(() => {
        data['1'].name = 'Micael Pedrosa';
        data['1'].birthdate = new Date(1982, 1, 28);
        data['1'].obj1.name = 'XPTO';
        delete data['2'];
    
        setTimeout(() => {
            data['1'].arr = [1, 0, {x:10, y:20}];
            
            setTimeout(() => {
                data['1'].arr[1] = 2;
                //data['1'].arr.splice(0, 1); //BUG... splice afects update object, but index is unchanged...
                
                setTimeout(() => {
                    data['1'].arr.push(3);
                    data['1'].arr.push({x:1, y:2});
                    
                    setTimeout(() => {
                        data['1'].arr.splice(1, 2, 10, 11, 12);
                        data['1'].arr[5].x = 10;
                        
                        setTimeout(() => {
                            data['1'].arr.pop();
                            
                            //TODO: test when removed from Resource, but with existent reference outside, does it observe?
                        });
                    });
                });
            });
        });
    }); 
}, (error) => {
    console.log(error);
});


import Syncher from 'sync/Syncher';

console.log('sync-test start...');

let mockBus = {
  owner: 'hyper-1',

  subscribe: function(comp, callback) {
    console.log('sub (' + this.owner + '): ', comp);
  },

  publish: function(msg) {
    console.log('pub (' + this.owner + '): ', msg);
  }
};

let db = new Syncher(mockBus);
db.addSchema('Persons', {});

let sObj = db.create('PTIN', 'Persons');
db.addSubscription('PTIN', 'hyper-2');

let data = sObj.data;

//apply changes to resource data...
data['1'] = {
  name: 'Micael',
  birthdate: new Date(1981, 1, 28),
  email: 'micaelpedrosa@gmail.com',
  phone: '911932795'
};
data['1'].obj1 = {name: 'xpto'};

data['2'] = {
  name: 'Luis Duarte',
  birthdate: new Date(1991, 11, 2),
  email: 'lduarte.suil@gmail.com',
  phone: '910000000',
  obj1: {name: 'xpto'}
};

//changes in diferent flux of execution...
setTimeout(() => {
  data['1'].name = 'Micael Pedrosa';
  data['1'].birthdate = new Date(1982, 1, 28);
  data['1'].obj1.name = 'XPTO';
  delete data['2'];

  setTimeout(() => {
    data['1'].arr = [1, 0, {x: 10, y: 20}];

    setTimeout(() => {
      data['1'].arr[1] = 2;
      //data['1'].arr.splice(0, 1); //BUG... splice afects update object, but index is unchanged...

      setTimeout(() => {
        data['1'].arr.push(3);
        data['1'].arr.push({x: 1, y: 2});

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

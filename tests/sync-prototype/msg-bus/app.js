import MsgNodeConnection from 'MsgNodeConnection';
import MessageBus from 'MessageBus';
import Pipeline from 'Pipeline';

console.log('start...');

let msgNode = new MsgNodeConnection('ws://localhost:9090/ws');
let msgBus = new MessageBus(msgNode);

//config outbound handlers. Intercept sent messages by the MessageBus.
msgBus.outbounds = [
  function(ctx) {
    console.log('Sending: ', ctx.msg);
    ctx.next();
  }
];

//config inbound handlers. Intercept received messages by the MessageBus.
msgBus.inbounds = [
  function(ctx) {
    console.log('Receiving: ', ctx.msg);
    ctx.next();
  }
];

msgBus.send({
  header: {
    type: 'create',
    from: 'runtime://localhost:8080',
    to: 'bus://localhost:9090',
    comp: 'address'
  },
  body: {
    res: 'hyper-1'
  }
});

//testing pipeline...
let pipeline = new Pipeline((error) => {
  console.log('ERROR: ', error);
});

pipeline.handlers = [
  function(ctx) {
    console.log('HANDLER-1: ', ctx.msg);
    ctx.fail('Error');
    //ctx.deliver();
    setTimeout(() => {
      ctx.next();
    }, 3000);
  },
  function(ctx) {
    console.log('HANDLER-2: ', ctx.msg);
    ctx.next();
  }
];

pipeline.process({id: 1, value: 'Micael'}, (msg) => {
  console.log('DELIVER: ', msg);
});

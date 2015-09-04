// import * as config from './configs/config';
// import ExternalAgents from './rethink/externalAgents';
// import signalingBus from './rethink/mbus/signalingBus';
//
// var externalAgent = new ExternalAgents();
//
// console.log('RETHINK');
//
// signalingBus.addEventListener('send:stream', function(event) {
//
//   console.log('signalingBus event: ', event);
//
// });
//
// window.addEventListener('message', function(event) {
//
//   var message = event.data;
//
//   //new webkitMediaStream()
//   // console.log('Stream: ', message.stream);
//
//   switch (message.type) {
//     case 'callTo':
//       externalAgent.callTo(message.name, message.stream);
//       break;
//
//     case 'accept':
//       externalAgent.accept();
//       break;
//
//     default:
//
//   }
//
// });
//
// externalAgent.addEventListener('token:created', function(token) {
//   // _this.trigger('token:created', token);
//
//   window.parent.postMessage({
//     type: 'token:created',
//     message: token
//   }, '*');
//
// });
//
// externalAgent.addEventListener('remote:stream:added', function(stream) {
//   // console.log('remote stream added: ', stream);
//   // _this.trigger('remote:stream:added', stream);
//
//   window.parent.postMessage({
//     type: 'remote:stream:added',
//     message: stream.id
//   }, '*');
//
// });
//
// externalAgent.addEventListener('local:stream:added', function(stream) {
//   // console.log('local stream added: ', stream);
//   // _this.trigger('local:stream:added', stream);
//
//   window.parent.postMessage({
//     type: 'local:stream:added',
//     message: window.URL.createObjectURL(stream)
//   }, '*');
//
// });
//
// externalAgent.addEventListener('call:incoming', function(data) {
//   // _this.trigger('call:incoming', data);
//
//   window.parent.postMessage({
//     type: 'call:incoming',
//     message: data
//   }, '*');
//
// });
//
// // _this.externalAgent = externalAgent;
// window.externalAgent = externalAgent;

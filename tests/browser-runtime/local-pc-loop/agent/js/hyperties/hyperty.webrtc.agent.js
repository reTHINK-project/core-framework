importScripts('../../../node_modules/socket.io-client/socket.io.js');
importScripts('./../utils.js');
importScripts('../config.js');

// Connect to the signaling server
var socket = io(config.rethink.server);

// Listen for Web Worker Messages and hanle with it;
onmessage = function(event) {

  var message = event.data;

  console.log('Message HYPERTY: ', message);

  switch (message.type) {

    case 'offer':
    case 'answer':
    case 'candidate':
    case 'message':
      socket.emit('message', message, message.room);
      break;

    case 'call':
      break;
  }
};

// Listen form Signaling Server Messages
socket.on('message', function(message) {
  postMessage(message);
});

importScripts('../../../node_modules/socket.io-client/socket.io.js');
importScripts('../utils/utils.js');
importScripts('../../configs/config.js');

// Connect to the signaling server
var socket = io(config.rethink.server);

self.onmessage = function(event) {

  var message = event.data;

  switch (message.type) {

    case 'offer':
      break;

    case 'answer':
      break;

    case 'candidate':
      break;

    case 'message':
      socket.emit(message.type, message.message, message.room);
      break;

    case 'call':
      break;
  }

};

self.handleWithMessage = function(data) {
  console.log('handle: ', data);
};

importScripts('../bower/lodash/lodash.js', '../bower/riveter/lib/riveter.js', '../bower/postal.js/lib/postal.js', '../bower/postal.federation/lib/postal.federation.js', '../bower/postal.xframe/lib/postal.xframe.js');
importScripts('http://localhost:4730/files/bot.js');
// importScripts('../external/bot.js');

var xhr;
if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();

xhr.onprogress = function(e) {
  console.log("progress:", e.loaded, e.total);
};

xhr.onloadend = function(e) {
  var request = e.currentTarget;
  if (request.readyState === 4 && request.status === 200) {
    var json = JSON.parse(request.response);
    console.log(json);
  }
};

xhr.onerror = function(e){
  var request = e.currentTarget;
  console.log("error:", request);
};

xhr.open('GET', 'http://localhost:4730', true);
xhr.send('');

// Instance Postal and indentify them
postal.instanceId("rethink");
postal.fedx.transports.xframe.configure({
    allowedOrigins : [ "http://localhost:8080", "http://localhost:3001" ],
    defaultOriginUrl : "http://localhost:3001"
});

postal.fedx.addFilter( [
	{ channel: 'worker1', topic: '#', direction: 'in' },
	{ channel: 'worker2', topic: '#', direction: 'in' },
	{ channel: 'worker', topic: '#', direction: 'out' },
  { channel: 'all', topic: '#', direction: 'both' },
]);

postal.fedx.configure({
  filterMode: "blacklist"
});

postal.subscribe({

  channel: "all",
  topic: "#",
  callback: function( d, e ) {
    self.postMessage(e);
	}

});

postal.subscribe({
    channel: "worker1",
    topic: "#",
    callback: function(d, e) {
      self.postMessage(e);
    }
});

postal.fedx.transports.xframe.listenToWorker(self);

self.addEventListener('message', function(envelope){

  console.log(envelope);

  postal.publish({
      channel: "worker1",
      topic: "teste",
      data: envelope.data,
      direction: 'out'
  });

}, false);

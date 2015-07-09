importScripts('../bower/lodash/lodash.js', '../bower/riveter/lib/riveter.js', '../bower/postal.js/lib/postal.js', '../bower/postal.federation/lib/postal.federation.js', '../bower/postal.xframe/lib/postal.xframe.js');

postal.instanceId("rethink");
postal.fedx.transports.xframe.configure({
    allowedOrigins : [ "http://localhost:8080", "http://localhost:3001" ],
    defaultOriginUrl : "http://localhost:3001"
});

postal.fedx.addFilter( [
	{ channel: 'worker1', topic: '#', direction: 'both' },
	{ channel: 'worker2', topic: '#', direction: 'both' },
	{ channel: 'worker', topic: '#', direction: 'both' }
]);

postal.addWireTap( function( d, e ) {
	console.log( "ID: " + postal.instanceId() + " " + JSON.stringify( e, null, 4 ) );
} );

postal.subscribe({
    channel: "worker1",
    topic: "#",
    callback: function(d, e) {
      self.postMessage(e);
    }
});

// you have two options, call signalReady and pass the worker
/* postal.fedx.signalReady({ xframe: { target: self }, function(e){
  console.log("Signal Ready:", e);
}});*/

self.addEventListener('message', function(e){

  console.log('worker get message: ', e.data);

  postal.publish({
      channel: "worker1",
      topic: "teste",
      data: e.data
  });


}, false);

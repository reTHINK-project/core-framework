importScripts('../bower/lodash/lodash.js', '../bower/riveter/lib/riveter.js', '../bower/postal.js/lib/postal.js', '../bower/postal.federation/lib/postal.federation.js', '../bower/postal.xframe/lib/postal.xframe.js');

postal.instanceId("rethink-bot");
/*postal.fedx.transports.xframe.configure({
    allowedOrigins : [ "http://localhost:8080", "http://localhost:3001" ],
    defaultOriginUrl : "http://localhost:3001"
});
*/
postal.fedx.addFilter(
  [{
    channel: "worker1",
    topic: "#",
    direction: "in"},
  {
    channel: "worker2",
    topic: "#",
    direction: "in"
}]);

/* 
postal.addWireTap( function( d, e ) {
	console.log( "ID: " + postal.instanceId() + " " + JSON.stringify( e, null, 4 ) );
} ); */

postal.subscribe({
    channel: "worker2",
    topic: "#",
    callback: function(d, e) {
      self.postMessage(e);
    }
});

var randomMessages = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Curabitur dignissim felis ut enim tempor placerat.',
    'Proin ut elit finibus, auctor eros sed, placerat leo.',
    'Aenean molestie erat mollis enim tempus cursus et quis quam.',
    'Suspendisse malesuada est placerat tortor hendrerit, vitae consectetur sem consequat.',
    'Nulla auctor nibh sed pellentesque aliquam.',
    'Etiam sagittis lectus eu semper ornare.',
    'Proin a risus eget diam eleifend varius.',
    'Nunc id lectus interdum, ultricies nunc a, mattis quam.',
    'Cras faucibus risus et mattis porta.',
    'Donec et neque facilisis, luctus nunc non, feugiat dolor.',
    'Sed at velit in libero semper volutpat vel ut metus.',
    'Quisque a elit convallis, laoreet dui vitae, molestie nisi.',
    'Morbi eu urna laoreet, sodales lacus quis, sagittis velit.',
    'Proin efficitur nisl non magna cursus rutrum.',
    'Vestibulum et neque ut dolor dictum commodo at vel arcu.',
    'Morbi posuere ipsum et nulla convallis, a ornare diam maximus.',
    'Cras ac purus id ante efficitur ullamcorper sit amet eu felis.',
    'Morbi vel metus euismod erat ultricies volutpat.',
    'Vestibulum iaculis purus id nulla mollis mollis.',
    'Nam cursus massa in quam varius iaculis.',
];

self.addEventListener('message', function(e){

  var indexMessage = Math.floor((Math.random() * randomMessages.length));
  var result = {
      name: 'ReThinK Bot',
      message: randomMessages[indexMessage]
  };

  setTimeout(function(){

    postal.publish({
        channel: "worker2",
        topic: "bot auto messages",
        data: result,
        direction: 'out'
    });

  }, 200);

});

self.addEventListener('error', function(e){
  console.log("error:", e);
});

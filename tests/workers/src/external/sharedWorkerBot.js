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

var indexMessage = Math.floor((Math.random() * randomMessages.length));

function reciveMessage(connections, e) {

  // NOTE: after read this message, do sometinhg
  console.warn("read the user message, bot proccess the response");

  var result = {
      name: 'ReThinK Bot',
      timeStamp: new Date(),
      message: randomMessages[indexMessage]
  };

  setTimeout(function(){

    connections.forEach(function(conn) {
      conn.postMessage(result);
    });

  }, 200);

}

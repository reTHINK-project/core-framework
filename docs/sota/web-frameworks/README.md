## State of the Art

*Objective of the Service Framework is to develop a JavaScript Framework of libraries that can be used to facilitate the development 
of Hyperties. The Framework should be modular in nature to support different Hyperty types* 

*The objective of the SOTA for Service Framework is to identify currrently used JavaScript frameworks which can be reused or extending*

## JavaScript Frameworks

### AngularJS (Google) - FOKUS

### BackboneJS  - DTAG

### EmberJS - APIZEE

### [MeteorJS](https://www.meteor.com/)- PTIN

MeteorJS is an open-source, [production-ready](http://www.wired.com/2014/10/meteor/), real-time JavaScript web application framework written on top of Node.JS. It allows rapid prototyping and produces cross-platform code (Web, Android, iOS). Meteor use as front-end library Blaze which fulfills the same purpose as Angular, Backbone or Ember but is much simpler to use [(read more!)](https://www.meteor.com/blaze) and can be used with any of these libraries. (1) Blaze is also faster than Angular in high-throughput rendering tests. Meteor works well REST APIs using [DDP](https://en.wikipedia.org/wiki/Distributed_Data_Protocol), a simple and powerful publish/subscribe protocol. The underlying database is MongoDB which Meteor works in real-time. While Angular is a front-end library and Sails a backend one, Meteor is a full-stack framework, comparable with Derby. (2) Since it is all JavaScript it can be supported in all devices and OSs featuring Hyperty Runtime (e.g. V8 JavaScript Engine). (3) The MVC model is replaced by MVM (Model-View-Mapper) which replace controller by ORM code that supports what views need to display data. Meteor controllers are on the client side. Meteor is package oriented, one of the package is [Vert.x Event Bus](https://github.com/jmusacchio/vertxbus/) that allow any meteor app to be able to connect to Vert.x components.

### StapesJS - QUOBIS 

### CanJS

### SocketPeer

https://github.com/cvan/socketpeer

https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/

### [DerbyJS](http://derbyjs.com/)

realtime synchronization of the client and server. It enables one to write an application in which two users edit the same text field–live–without writing too much code yourself. Derby handles all of the synchronization of the models and views. It uses http://sharejs.org/

### [runtime.js](https://github.com/runtimejs/runtime)

Runtime.js is a kernel built on V8 JavaScript engine. It uses event-driven and non-blocking I/O model inspired by Node.js.

The goal of this project is to design and implement a kernel that is optimized to run JavaScript applications. By providing environment for JavaScript code only, it is possible to rethink and improve overall kernel design.

It's currently under development and does not include many essential features.

### [TogetherJS](https://togetherjs.com/)

Nodejs based collaboration framework ready to be integrated with Web Apps using WebRTC for Audio chat


### Others

https://github.com/primus/primus (abstracts RTC frameworks for nodejs)
 
http://browserify.org/

https://github.com/mojo-js/mesh.js


### References

[AngularJS vs. Backbone.js vs. Ember.js](https://www.airpair.com/js/javascript-framework-comparison)

[JavaScript Frameworks: AngularJS, Meteor, Backbone, Express or plain NodeJs? When to use each one?](http://www.quora.com/JavaScript-Frameworks/AngularJS-Meteor-Backbone-Express-or-plain-NodeJs-When-to-use-each-one)

[Why Meteor](http://www.meteorpedia.com/read/Why_Meteor)

[Most Popular JavaScript Frameworks 2015](http://www.improgrammer.net/most-popular-javascript-frameworks-2015/)

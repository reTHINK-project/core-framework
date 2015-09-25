### ApiRTC

#### What is ApiRTC?

ApiRTC is the communication platform developed by Apizee. This includes a communication platform and a client JavaScript library that can be used by developers to developed their own applications without having to consider the technical aspects of communication. Complete version of ApiRTC with tutorials is described on www.apirtc.com

#### Features Overview

ApiRTC Entreprise edition includes following features :

**Session :**

Connexion : long polling , webSocket; HTTP, HTTPS; Presence : group connection and subscription; Custom User Data sharing ; Browsers type and version detection<br/>

**IMClient :**

Instant Messaging : 1 to 1, Group

**WebRTC Client :**

-	Voice Calls, Voice and Video Calls
-	Audio, video mute
-	ScreenSharing
-	TakeSnapshot
-	Support of IE and Safari for audio and video calls through a plugin
-	Network disconnection detection
-	Network traversal management for media flows
-	DataChannel
-	Calls recording
-	Connection to IMS, RCS, SIP Architecture
-	Conference calls<br/>

**Data Client :**

Custom data sending and reception

**Compatibility :**

Window, linux, OSx, Android devices through WebRTC compatible browsers<br/> Plugin for Android and iOS application development

#### Architecture Overview

ApiRTC solution use different components on server and client side.

**Messaging Node :**

On server side, main used components are Node.js and Redis :

Node.js : https://Node.js.org/ - Description is available : http://en.wikipedia.org/wiki/Node.js

Node.js is a JavaScript engine that can be enhanced through diffrent existing modules for connections, log, ...

Redis : http://redis.io/ - Description is available : http://en.wikipedia.org/wiki/Redis

Redis is a NoSQL database that is really interesting for real time data and that provide a publish/subscribe that can be used to establish communication between several Node.js process.

**Runtime / Framework :**

ApiRTC use a JavaScript library on client side to provide teh developers APIs that enables teh developpesr to use platform feature.

#### Architecture

ApiRTC actual architecture is presented on following diagram :<img src="ApiRTC-ReTHINK.png" width="450">

Components such as Node.js, Redis or socket.io are used. ApiRTC uses JSON over WebSocket to manage signalling between clients and server.

#### APIs

ApiRTC provides API for developers : complete set of APIs is describe on http://apirtc.com/api-docs/

APIS are decomposed with main following classes :<br/>* ApiRTCSession : manage user connection to the platform (presence)<br/>* ApiRTCWebRTCClient : manage WebRTC feature : call, dataChannel ...<br/>* ApiRTCIMClient : manage Instant messaging feature<br/>* ApiRTCDataClient: : manage data sending feature<br/>* ApiRTCWhiteBoardClient : manage Whiteboard feature<br/>

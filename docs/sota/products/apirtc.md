### ApiRTC
#### What is ApiRTC?

ApiRTC is the communication platform developped by Apizee. This includes a communication platform and a client JavaScript library that can be used by developpers to developped their own applications without having to consider the technical aspects of communication. Complete version of ApiRTC with tutorials is described on www.apirtc.com

#### Features Overview

ApiRTC Entreprise edition includes following features :

**Session :**

  Connexion : long polling , webSocket; HTTP, HTTPS; Presence : group connection and subscription; Custom User Data sharing ; Browsers type and version detection<br/>

**IMClient :**

Instant Messaging : 1 to 1, Group

**WebRTC Client :**

* Voice Calls, Voice and Video Calls
* Audio, video mute
* ScreenSharing
* TakeSnapshot
* Support of IE and Safari for audio and video calls through a plugin
* Network disconnection detection
* Network traversal management for media flows
* DataChannel
* Calls recording
* Connection to IMS, RCS, SIP Architecture
* Conference calls<br/>

**Data Client :**

Custom data sending and reception

**Compatibility :**

Window, linux, OSx, Android devices through WebRTC compatible browsers<br/>
Plugin for Android and iOS application development


#### Architecture Overview

ApiRTC solution use different components on server and client side.

**Messaging Node :**

On server side, main used components are NodeJs and Redis :

  NodeJs : https://nodejs.org/ - Description is available : http://en.wikipedia.org/wiki/Node.js

NodeJs is a Javascript engine that can be enhanced through diffrent existing modules for connections, log, ... 

  Redis : http://redis.io/ - Description is available : http://en.wikipedia.org/wiki/Redis

Redis is a NoSQL database that is really interesting for real time data and that provide a publish/subscribe that can be used to establish communication between several nodeJs process.

**Runtime / Framework :** 

ApiRTC use a javascript library on client side to provide teh developers APIs that enables teh developpesr to use platform feature.

#### Architecture

ApiRTC actual architecture is presented on following diagram :
<img src="ApiRTC-ReTHINK.png" width="450">

Components such as NodeJs, Redis or socket.io are used.
ApiRTC uses JSON over WebSocket to manage signalling between clients and server.

#### APIs

ApiRTC provides API for developers : complete set of APIs is describe on http://apirtc.com/api-docs/

APIS are decomposed with main following classes :<br/>
* ApiRTCSession : manage user connection to the platform (presence)<br/>
* ApiRTCWebRTCClient : manage WebRTC feature : call, dataChannel ...<br/>
* ApiRTCIMClient : manage Instant messaging feature<br/>
* ApiRTCDataClient: : manage data sending feature<br/>
* ApiRTCWhiteBoardClient : manage Whiteboard feature<br/>

#### Requirements Analysis

Analysis regarding WP3 Messaging node requirements :

**Messaging Node with carrier grade deployment features :**</br>
NodeJs and Redis enables to buld a resiliante and scalable architecture

**The Messaging Node MUST offer DoS and DDoS Protection :**</br>
User authentication, message rate limitation are example of feature taht may be implemented to fulfill this requirement
		
**It should be possible to support Protocol on-the-fly :**</br>
		
ProtOFly connector can be developped. JS connector can be develop on top of NodeJs to enable protofly on server side. This connector will be for example reusable to connect an external CSP, Kurento Media Server, or the Identity manager

**Messaging Transport Protocols:**</br>
		
Socket.io enables the usage of different transport protocol to establish connection between user and server. (Long polling, WebSocket ...)
		
**Messaging Node logging :**</br>

Several logging modules are available : log4js, winston, bunyan ... Logs can be dispalyed in console, store in file with log rotate, send to a network entity ...

**Message delivery reliability :**</br>
Socket.io enables message acknowledgement
		
**Messaging Node deployments with carrier grade scalability :**</br>

Using Redis cluster mode : it is possible to use Redis Cluster with PUB/SUB mechanism : several NodeJs entities can be connected through the redis cluster : this can enable load balancing, redundancy</br>

**Messaging Node should be tolerant to unstable connections :**</br>

Socket.io can manage reconnection with different configurable parameters (timeout, retries ...)
reconnection whether to reconnect automatically (true)

reconnectionDelay how long to wait before attempting a new reconnection (1000)
reconnectionDelayMax maximum amount of time to wait between reconnections (5000). Each attempt increases the reconnection by the amount specified by reconnectionDelay.
timeout connection timeout before a connect_error and connect_timeout events are emitted (20000)

**Events about clients connection / disconnection from Messaging Node :**</br>

Using socket.io different events are fired on connection status :
connect. Fired upon connecting.
error. Fired upon a connection error
disconnect. Fired upon a disconnection.
reconnect. Fired upon a successful reconnection.
reconnect_attempt. Fired upon an attempt to reconnect.
reconnecting. Fired upon an attempt to reconnect.
reconnect_error. Fired upon a reconnection attempt error.
reconnect_failed. Fired when couldn’t reconnect within reconnectionAttempts

**Messaging Node must support very low message delivery latency :**</br>

**Messaging Node must be deployable in the most used Virtual Machines :**</br>
NodeJs is available on Linux, windows, mac and can be deployed on small virtual machine or devices

**Messaging Node should require minimal computing resources :**</br>
Messaging nodes components can be isntalled in only one VM

**Messaging Node must support external authentication and Authorisation :**</br>
Module like Passport : http://passportjs.org/ enables to use external authentication like facebook, twitter, google .. (We will have to check if passport can be used as it seems to require Express which may not be relevant in rethink case)

**Messaging Node must support multiple messaging functionalities :**</br>
Several routing can be performed with socket.io. Send message to only one dest, broadcast message to several users


#### Integration in Rethink

ApiRTC can be used in a nodejs based Messaging Node. 

Integration of ApiRTC in Rethink can be done by adding differents connectors depending of needs :
- Identity Management : connector to Identity server
- QoS Management : connector to QoS server
- Other Web communication platform : connector to communication platform using ProtOFly
- VoIP Platform : Connector to WebRTC GW 
- Connector to Media Servers

A Redis Cluster with Pub/Sub mechanism can be used to manage communications between connectors

<img src="ApiRTC-IntegrationInReTHINK.png" width="450">    

For Rethink, Apizee propose the usage of apiRTC, for instance to simulate an external CSP connection.




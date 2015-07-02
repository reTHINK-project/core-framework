## Node.js

## Asset Evaluation

### Overview

In the scope of the reTHINK project NodeJs is a candidate technology for the Messaging Node.

From https://nodejs.org/ :

Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Several additional packages are available to be used with nodeJs : https://www.npmjs.com/

It can be used with component like Redis, socket.io to enhance connectivity and redundancy


A fork of nodejs exist : iojs but a merge seems to be ongoing.

NodeJs is already used in several WebRTC platform or product. (NodeJs can be used in front of Kurento) 


### Architecture

*Main functional modules and interfaces. Should be based on a picture*

### APIs

*Available APIs for developers*

API are described on nodejs website : https://nodejs.org/api/

But this can be completed thanks to the different packages available on https://www.npmjs.com/

### Requirements Analysis

*Analyse how the solution fullfills [WP3 requirements](selection-criteria.md) according to Component Type addressed by the solution ie Messaging Node, Runtime, Network QoS or Framework*
*The fullfillment of each requirement should be analysed and if needed validated with some tests. Code snippets or other means like configuration data should be provided to clearly demonstrate the requirement fullfilment.
In case the Requirement is not fulfilled, possible solutions should be proposed including effort estimation.*


#### [Messaging Node Requirements](https://github.com/reTHINK-project/core-framework/labels/Messaging%20Node%20Requirement)**


* [It should be possible to support Protocol on-the-fly](https://github.com/reTHINK-project/core-framework/issues/21)
  * Yes
  * ProtOFly connector can be developped. JS connector can be develop on top of NodeJs to enble protofly on server side. This connector will be for example reusable to connect Kurento Media Server

* [Messaging Transport Protocols](https://github.com/reTHINK-project/core-framework/issues/20)
  * Yes (socket.io). Socket.io enables the usage of different transport protocol to establish connection betwwen user and server. (Long polling, WebSocket ...)
   
* [Message Node logging](https://github.com/reTHINK-project/core-framework/issues/18)
  * Yes - Several logging modules available : log4js, winston, bunyan ... Logs can be dispalyed in console, store in file with log rotate, send to a network entity ... 

* [Message delivery reliability](https://github.com/reTHINK-project/core-framework/issues/17)
  * Yes - Socket.io enables message acknowledgement

* [Messaging Node deployments with carrier grade scalability](https://github.com/reTHINK-project/core-framework/issues/16)
  * 
  * Using:
    * Cluster Mode
    * Redis cluster : it is possible to use Redis Cluster with PUB/SUB mechanism : several NodeJs entities can be connected through the redis cluster : this can enable load balancing, redundancy
    
* [Messaging Node should be tolerant to unstable connections](https://github.com/reTHINK-project/core-framework/issues/15)
  * Yes - socket.io can manage reconnection with different configurable parameters (timeout, retries ...)
 
– reconnection whether to reconnect automatically (true)
– reconnectionDelay how long to wait before attempting a new
reconnection (1000)
– reconnectionDelayMax maximum amount of time to wait between
reconnections (5000). Each attempt increases the reconnection by
the amount specified by reconnectionDelay.
– timeout connection timeout before a connect_error
and connect_timeout events are emitted (20000)

* [Events about clients connection / disconnection from Messaging Node](https://github.com/reTHINK-project/core-framework/issues/14)
  * Yes - using socket.io different event are fired on connection status :
  * 
    connect. Fired upon connecting.

    error. Fired upon a connection error
    
    disconnect. Fired upon a disconnection.
    
    reconnect. Fired upon a successful reconnection.
    
    reconnect_attempt. Fired upon an attempt to reconnect.
    
    reconnecting. Fired upon an attempt to reconnect.
    
    reconnect_error. Fired upon a reconnection attempt error.
    
    reconnect_failed. Fired when couldn’t reconnect within reconnectionAttempts

* [Messaging Node must support very low message delivery latency](https://github.com/reTHINK-project/core-framework/issues/13)
  * Yes 

* [Messaging Node must be deployable in the most used Virtual Machines](https://github.com/reTHINK-project/core-framework/issues/12)
  * Yes

* [Messaging Node should require minimal computing resources](https://github.com/reTHINK-project/core-framework/issues/11)
  * Yes

* [Messaging Node must support external authentication and Authorisation](https://github.com/reTHINK-project/core-framework/issues/10)
  * Yes

* [Messaging Node must support pub/sub](https://github.com/reTHINK-project/core-framework/issues/9)
  * No - Yes with Redis

#### [Runtime Requirements](https://github.com/reTHINK-project/core-framework/labels/Runtime%20Requirement)

**Web Sockets on node.js**

This suplemments the lack of implementation of Web Sockets inside v8.

npm install ws

IT is easy to use, fast and up-to-date against current HyBi protocol drafts.
IT can send and receive typed arrays (ArrayBuffer, Float32Array) as binary data.
IT passes the extensible Autobahn test suite: client report ( Autobahn WebSockets v0.4.5.), server report  ( Autobahn WebSockets v0.4.5.).

It has extensive benchmarks relative to its overhall performance in node.js.


In fact there are extensive implementations of Web Sockets over node.js:
websocket-node 
faye-websocket-node 
engine.io
socket.io 
sockjs

The most performante is claimded to be ws.


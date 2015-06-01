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


**[Messaging Node Requirements](https://github.com/reTHINK-project/core-framework/labels/Messaging%20Node%20Requirement)**


* [It should be possible to support Protocol on-the-fly](https://github.com/reTHINK-project/core-framework/issues/21)
  * Yes
  * ProtOFly connector can be developped

* [Messaging Transport Protocols](https://github.com/reTHINK-project/core-framework/issues/20)
  * Yes (socket.io)
   
* [Message Node logging](https://github.com/reTHINK-project/core-framework/issues/18)
  * Yes (several logging modules available : log4js, winston, bunyan ...)

* [Message delivery reliability](https://github.com/reTHINK-project/core-framework/issues/17)
  * Yes

* [Messaging Node deployments with carrier grade scalability](https://github.com/reTHINK-project/core-framework/issues/16)
  * 
  * Using:
    * Cluster Mode
    * Redis cluster
    
* [Messaging Node should be tolerant to unstable connections](https://github.com/reTHINK-project/core-framework/issues/15)
  * Yes (socket.io)

* [Events about clients connection / disconnection from Messaging Node](https://github.com/reTHINK-project/core-framework/issues/14)
  * Yes (socket.io)

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


## Asset Evaluation

### Overview

Kurento is an Open Source Software WebRTC media server

http://www.kurento.org/


### Overview

Kurento can be used to manage media flows :
- Send / Receive
- Recording
- Transcoding
- Augmented reality
- Mixing
- broadcasting

It can be used to handle different type of communications applications : 1 to 1, N to N, 1 to N
(Real time exchanges or streaming)


### Architecture

Complete description of Kurento architecture is available on their webSite :

http://www.kurento.org/docs/current/mastering/kurento_architecture.html


Kurento is mainly composed of the two elements :
- Kurento media server
- Kurento Application

<img src="Architecture-Kurento.png" width="450">

Application developers can use Kurento Clients or Kurento API directly for creating their multimedia enabled applications.
Developpers can use Javascript clients, Java Client or Kurento Protocol. This is interesting as it can easily be integrated with NodeJs

Several tutorials are available on the webSite : http://www.kurento.org/docs/current/tutorials.html


### APIs

*Available APIs for developers*

Media server API is describe here :
http://www.kurento.org/docs/current/mastering/kurento_API.html

Kurento Clients are also available for application developers :

JAVA :
http://www.kurento.org/docs/current/langdoc/javadoc/index.html

JavaScript :
http://www.kurento.org/docs/current/langdoc/jsdoc/kurento-client-js/index.html
http://www.kurento.org/docs/current/langdoc/jsdoc/kurento-utils-js/index.html

### Integration in Rethink

As described in WP2 : https://github.com/reTHINK-project/architecture/issues/15

Multiparty conversations supported with MCU/SFU for Star topologies can be supported with server side Hyperties running in the MCU/SFU ie there would be protofly in the MCU/SFU.

Kurento Media Server can be connected through a NodeJs Client : it will be possible to add protOfly interface on nodeJs to then connect to the MCU.

Kurento can be use for the multiparty use case (https://github.com/reTHINK-project/use-cases/issues/86)

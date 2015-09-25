Products
--------

### ApiRTC

ApiRTC [103] is the communication platform developed by Apizee. This includes a communication platform and a client JavaScript library that can be used by developers to develop their own applications without having to consider the technical aspects of communication. Complete version of ApiRTC with tutorials is described on www.apirtc.com. ApiRTC architecture and functionalities are detailed and explained in Annex A.

#### Requirements Analysis

Analysis regarding Messaging Node requirements:

**Messaging Node with carrier grade deployment features:**</br> Node.js and Redis enables to buld a resilient and scalable architecture

**The Messaging Node MUST offer DoS and DDoS Protection:**</br> User authentication, message rate limitation are examples of feature that may be implemented to fulfil this requirement

**It should be possible to support Protocol on-the-fly:**</br>

ProtOFly connector can be developed. JS connector can be develop on top of Node.js to enable protofly on server side. This connector will be for example reusable to connect an external CSP, Kurento Media Server, or the Identity manager

**Messaging Transport Protocols:**</br>

Socket.io enables the usage of different transport protocol to establish connection between user and server. (Long polling, WebSocket ...)

**Messaging Node logging:**</br>

Several logging modules are available : log4js, Winston, Bunyan ... Logs can be displayed in console, store in file with log rotate and send to a network entity.

**Message delivery reliability:**</br> Socket.io enables message acknowledgement

**Messaging Node deployments with carrier grade scalability:**</br>

Using Redis cluster mode: it is possible to use Redis Cluster with PUB/SUB mechanism: several Node.js entities can be connected through the redis cluster: this can enable load balancing, redundancy</br>

**Messaging Node should be tolerant to unstable connections :**</br>

Socket.io can manage reconnection with different configurable parameters (timeout, retries ...) reconnection whether to reconnect automatically (true)

reconnectionDelay how long to wait before attempting a new reconnection (1000) reconnectionDelayMax maximum amount of time to wait between reconnections (5000). Each attempt increases the reconnection by the amount specified by reconnectionDelay. Timeout connection timeout before a connect_error and connect_timeout events are emitted (20000)

**Events about clients connection / disconnection from Messaging Node:**</br>

Using socket.io different events are fired on connection status:

-	connect: Fired upon connecting.
-	error: Fired upon a connection error
-	disconnect: Fired upon a disconnection:
-	reconnect: Fired upon a successful reconnection.
-	reconnect_attempt: Fired upon an attempt to reconnect.
-	reconnecting: Fired upon an attempt to reconnect.
-	reconnect_error: Fired upon a reconnection attempt error.
-	reconnect_failed: Fired when couldn’t reconnect within reconnectionAttempts

**Messaging Node must be deployable in the most used Virtual Machines:**</br> Node.js is available on Linux, Windows, Mac and can be deployed on small virtual machine or devices (Raspberry PI, beaglebone black …).

**Messaging Node should require minimal computing resources:**</br> Messaging nodes components can be isntalled in only one VM.

**Messaging Node must support external authentication and Authorisation:**</br> Module like [Passport](http://passportjs.org/)[105] which enables to use external authentication like Facebook, Twitter, Google, etc (We will have to check if passport can be used as it seems to require Express which may not be relevant in rethink case)

**Messaging Node must support multiple messaging functionalities:**</br> Several routing can be performed with socket.io. Send message to only one destination, broadcast message to several users.

#### Integration in Rethink

ApiRTC can be used in a Node.js based Messaging Node.

Integration of ApiRTC in reTHINK can be done by adding different connectors depending of needs:

-	Identity Management: connector to Identity Servers
-	QoS Management: connector to QoS server
-	Other Web communication platform: connector to communication platform using ProtOFly
-	VoIP Platform: Connector to WebRTC GW
-	Connector to Media Servers

A Redis Cluster with Pub/Sub mechanism can be used to manage communications between connectors

![Figure @sota-products-apirtc-rethink: Possible integration of ApiRTC in reTHINK](ApiRTC-IntegrationInReTHINK.png)

For reTHINK, Apizee propose the usage of apiRTC, for instance to simulate an external CSP connection.

### Sippo

Sippo is the name of a WebRTC product family authored by Quobis which includes the following products:

-	Sippo WebRTC Application Controller (WAC): the server which provides the services.
-	Sippo WebRTC Apps: reference web applications which leverage the main features provided with the WAC. Three examples:
	-	Sippo WebCollaborator: Enterprise WebRTC softphone
	-	Sippo Click To Call: Customer contact WebRTC softphone.
	-	Sippo GMail Toolbar: User WebRTC toolbar

#### What is a “WebRTC Application Controller”?

Sippo WebRTC Application Controller is a solution that allows deploying WebRTC applications fully-interconnected with existing services (AAA, OSS, BSS, etc.) and legacy VoIP or UC systems. Sippo WAC supports a number of business cases, through its APIs, ranging from a simple click-to-dial button to advanced scenarios like RCS-based services, integration with existing Web Portals (including Facebook, Twitter or GMail), Banking, Health, Logistics, call centers/CRMs, UC, etc. Sippo is standards compliant and has been designed and developed by engineers who participate in WebRTC standardization forums like W3C, IETF, 3GPP, SIPForum and GSMA. Thanks to its abstraction layer, Sippo can include new signaling modules or even use different signaling protocols within the same application (e.g. one signaling protocol for audio/video, another for IM/presence, etc.). Sippo WAC is a tool to develop, adapt or deploy any WebRTC tool in a SDN, in the case of telcos, or corporate architecture, with the security that it is going to be inter-operable with the existing services and WebRTC gateways. In addition it provides features to manage user provisioning, store call detail records and provides contextual information. Sippo WAC architecture and functionalities are detailed and explained in Annex A

#### Potential integration with reTHINK

##### About signaling-on-the-fly

The WONDER project introduced the novel Signalling On-the-Fly concept, enabling seamless interoperability between different WebRTC Service Provider domains.According to Signalling On-the-Fly concept, the message server and associated protocol stack can be selected, loaded and instantiated during runtime. Such characteristic enables signaling protocols selected per WebRTC Conversation to ensure full Signaling interoperability among peers using Triangle based Network topologies. Signaling-on-the-fly is described in detail in Annex A WONDER Project.

##### Signaling-on-the-fly versus multi-signaling support

The Sippo WebRTC Application Controller tries to hide the complexity on vendors thanks to the support of different signaling stacks. This means that while a web client is making a request to the WAC to have access to a WebRTC application, the WAC adapts the JS code of the application to the type of gateway to use the signaling protocol that the gateway is supporting. The Sippo WAC has a mechanism to deal with different gateways (including those from different vendors) in an active way, so high availability and scalability can be achieved with no need to use a load balancer for the gateways. It’s important to mention that the Sippo WAC does not manage real time traffic as this goes from the browser to the other browser (or to the gateway in case of interconnection with legacy networks). In order to leverage the signaling on the fly and protocol-on-the-fly concepts, we can explore the possibility to move to the application (and browser) the complexity of selecting the signalling for the call (now the abstraction layer is part of the WAC, as described in section 1.5) or try to adapt the Sippo WAC to manage the rehydration of signalling of the clients during a call or session. The WAPI, as the API that interchanges messages between the application and the WAC using WebSockets (JSONoWS) or HTTP, can play an active role in both options to manage this approach.

#### Requirements Analysis

Sippo.js provides a high level abstraction layer which allows to build WebRTC applications in an easy and quick way. Sippo.js supports many signalling protocols for WebRTC and can be used with WebRTC gateways from many vendors. This is possible thanks to how it implements a static-flavour of the protocol-on-the-fly approach used in reTHINK project. This was identified in the early stages of WebRTC as a need to deal with the signalling diversity in the WebRTC arena. Sippo.js can be adapted to be an intermediate layer between the hyperty and the web application hiding all the unnecessary complexity to the developer. This will also allow that all the applications already build over Sippo.js can be used in reTHINK reducing considerably the integration costs.

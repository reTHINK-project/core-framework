## Vertx Specification

*For each [functional block](msg-node-architecture.md) identify existing vertx components that can be reused and extended If extensions are neede they should be specificied by designing apis to be implemented*

### Core Functionalities
* Main objective of core func. is to authorize, filter and process messages. Messages are JSON objects that should have 2 blocks, HEADER and BODY, and are processed from different components of core.
Inbound messages should be processed in a Pipeline. The sequence is "Session Management" -> "Access Control" -> "Message BUS"
* Pipeline components will implement a simple interface that we can reuse from io.vertx.core.Handler\<E> replacing E with a PipelineContext object. Using the vertx Handler<E> has the advantage to be compatible with io.vertx.ext.web.Router, that can be a replacement for the Pipeline.
* Outbound messages should be processed in a Pub/Sub system. If message BODY block are for CRUD operations, there should be a Pub/Sub protocol for object/model subscriptions, where should this be processed? The address scheme of the vertx EventBus is not enough for this functionality. We need to control the Pub/Sub functionality better than what vertx give to us with the address scheme! Hyperties need to subscribe to objects/collections not just addresses.

#### Pipeline
By now, additional components are identified (Pipeline, PipelineContext). This is similar to vertx Router but without the URL addressing scheme. The io.vertx.ext.web.Router class could be a possible candidate for Pipeline functionalities, however the Router is hard coded to work with HTTP protocols, and there is no need for static configurations of routing schemes. I would advise to implement a simple Pipeline system instead of using the Router, less dependencies and better decoupled from the protocol.

#### Session Management
Connection (WebSocket, SockJS) events/messages for OPEN and CLOSE should be intercepted by this component. A session instance is linked to a connection resource (WebSocket, SockJS) if authorized. Every message header is intercepted, session token is verified and if exist, a "user" or other identification URL is replaced in HEADER. The JSON object is forwarded to "Access Control" component.

#### Address Allocation Management
This is not a Pipeline component (it doesn't process messages), but it's used by the "Session Management" to allocate Hyperty identification URL's that will be linked to a Session when the Hyperty is connected. This will be used to translate Hyperty an URL address into the correspondent Connector Resource.

#### Access Control
This component is able to analyze HEADER (identification URL from "Session Management") and BODY blocks and decide if the message should be forwarded to the "Message Bus" or denied. There is a possibility to add a rule engine in this step, but it's not specified for now, what kind of rule engine.

#### Message BUS
Main objective of the MB is to process the BODY block, that contains information of the protocol, CRUD operation or other defined information. Vertx EventBus can be used directly for the Message Bus component. Important headers of the original JSON (like the identification URL) must be forwarded to io.vertx.core.eventbus.Message.headers() map.

### Protocol Stub Sandbox

### Connectors

#### End User Device Connector
The aim of this Connector is to enable interaction with Hyperty instances running in the end-user device. This component will need to interact somehow with the Protocol Stub sandbox to achieve this, since the communication protocol will not be standardized. It will need to implement a simple protocol for sending and receiving requests. In itself it is not responsible for processing communication requests, that is left to the protocol stack. It merely forwards messages to and from the Hyperty instance. 

#### Network Server Connector
The aim of this Connector is to enable interaction with Hyperty instances running in a network server. This component will need to interact somehow with the Protocol Stub sandbox to achieve this, since the communication protocol will not be standardized. It will need to implement a simple protocol for sending and receiving requests. In itself it is not responsible for processing communication requests, that is left to the protocol stack. It merely forwards messages to and from the Network server.

#### Registry Connector
The Registry provides an interface for registration and deregistration of Hyperty instances, as well as for keeping the published information up to date. For each Hyperty instance, the Registry stores data (hyperty location, type, description, start-time, presence information of user) that enables other applications to contact it. 
The implementation of the Registry service is thought to be basically a distributed database. It will provide service interfaces for CRUD operations to allow users to retrieve data for a given GraphID, publish (i.e. create, update, and delete) their own information on the ring. To verify authenticity and integrity of the published data, digital signatures will be applied. The Connector will exposed the available interfaces of the Registry Services to users of managing Hyperty instances. This will have to be implemented as a standalone application with an adapter interface to the Event Bus for encoding and decoding messages and deployed as a fat executable jar which contain all the dependencies it needs to run on vertx.   

#### IdM Connector
This Connector is to provide functionalities for interacting with the remote Identity Management Functionailities. It is unclear if this should be for authentication purpose, or simply for CRUD operations. In WP4 there is also discussion on an Identity Module.

*As hyperties need to be linked to an end-user identity when downloaded and instantiated on a device, an Identity Module should be present on the device. This module at minimum should act as an identity selector for the user and as a secure local repository for identity tokens provided by IdPs*

If this is the case, then it is unclear to me what the connector on the Messaging Node should do. However, if the connector is thought to provide authentication and authorisation, Vert.x offers Auth APIs (Common, JDBC, JWT and Shiro) JWT auth sounds interesting as it uses JSON web tokens.

Another interesting library is the authentication and discorvery is [vertx-pac4j] (https://github.com/pac4j/vertx-pac4j). This vertx module provides multiple authenication mechanisms (OAuh, CAS, HTTP, OpenID, SAML2.0 and OpenIDConnect) for different IdPs. However, it is based on vertx.2. So if it suits the requirements, we will need to adapt to vertx.3.  

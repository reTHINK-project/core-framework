# Matrix.org based Messaging Node Specification

*For each [functional block](msg-node-architecture.md) identify existing matrix.org modules that can be either reused or extended. If extensions are needed they should be specificied by designing apis to be implemented*



### Core Functionalities

This section attempts to match the functional blocks of the Message Node architecture to features and functional blocks of the matrix.org architecture.

#### Message BUS

The requirements towards the Message Bus are defined as:
* to route messages to internal Messaging Node components and external elements by using Connectors or Protocol Stubs.
* to support different communication patterns including publish/subscribe communication.

The pure routing requirements are fulfilled out-of-the-box by standard matrix features. In order to route messages to internal Messaging Node components it might be required to treat such components as "users" that can be addressed and perform the same communication tasks as normal users.

Connectors are comparable to protocol stubs, except that they are not downloaded to the Messaging Node clients and instead are executed in the scope of the Messaging Node. Such Connectors can provide support for different "legacy" clients that don't support Protocol-on-the-fly.
Matrix does not provide this out-of-the-box. Additional components have to be implemented that should be plugged into the first step of the message flow and perform the required protocol translations. The Matrix concept of "Application Services" could eventually applied here (see later section "Stub and Connector Management").


#### Access Control

>>
Message Routing including pub/sub Subscriptions are subject to Access Control in cooperation with authentication and authorisation provided by Identity Management functionalities.


As described in the following section matrix.org requires registration/subscription and login in order to exchange any messages with other users. These authentication and authorisation methods however always apply to a complete user- and communication session, i.e. ALL messages that are exchanged in this scope.

In case it is required to perform an access control "per message" based on variable policies, some more effort needs to be done.
This feature would require an integration of a "policy service", which is discussed in the matrix developer community already but not specified yet.

The concept of "passive" Application Services that matrix.org provides seems not suitable, because it does not allow to block traffic.

In order to achieve this without deeper changes in the matrix core, a kind of Message proxy could be integrated as first step into the message flow. This proxy would then check the messages and apply the policies. It would forward matching messages and should reject the rest.

The design of such a component should be closely coordinated with the MessagingStub that is used to connect to this Matrix based Messaging Node, because it should be the first contact point for the stub.


#### Session Management

The requirements regarding session management as described in [functional block](msg-node-architecture.md) can be separated in 3 different aspects which are handled in the following sub-chapters.
* User session control
* Communication session control
* Stub and connector management


##### User session control
In order to use matrix.org users have to be registered/subscribed with a HomeServer.

In order to connect to matrix HomeServers (e.g. after switching on their devide), users have to pass a login sequence. During this sequence an access token is generated which is valid for this login session. This access token must be present in all sub-sequent requests during this user session.
The supported authentication methods are not specified and left implementation specific for the particular HomeServers.
The specification lists following standard methods:
* m.login.password
* m.login.recaptcha
* m.login.oauth2
* m.login.email.identity
* m.login.dummy
The HomeServer Client API provides means to request the supported methods before login.

##### Communication session control
Communication sessions between two or more users require a valid user session. Communication session are always based on "rooms". Messages are sent to room-ids and not to individual users. Users must explicitely create or join rooms in order to send and receive messages. Some rooms might be open - others may require an invitation to become a room member.
Rooms are persistent, i.e. they exist also if not all room members are currently logged in. The message history is maintained by the Matrix HomeServers and can be requested by clients.

##### Stub and connector management
Matrix.org provides powerful means to connect, federate and synchronize Matrix HomeServers from different domains. The resolution of the peer HomeServers connectivity is done via DNS. The message exchange between them is secured by encryption mechanisms.

However - for the communication with non-Matrix infrastructures there is no common way. The most appropriate approach is to use Application Functions, which are application specific services that can be attached to HomeServers and listen for filtered messages in order to perform special tasks with them.

This mechanism seems well suited for the implementation of "breakout" communication to other types of signalling infrastructures. The matrix.org community has implemented a proof of this concept that connects the Matrix ecosystem with the IRC (reference?) world. Messages that contain a specially prefixed address are filtered out, converted to IRC messages, forwarded to the corresponding IRC client and vice versa.

In the scope of the reTHINK project this concept can be leveraged by a specialized Application Function that filters out messages for non-matrix targets and uses the Protocol-on-the-fly concept to connect and exchange messages with the appropriate domain.

The "Stub and connector management" function  is responsible for the management of these Stubs. This can potentially be part of this new special Application Function.


#### Address Allocation Management

>>
Manages allocation of messaging addresses to Hyperty Instances in cooperation with Session Management when users connect to the domain.
It also manages the allocation of messaging addresses to foreign Hyperty Instances i.e. Hyperty Instances that are provided from external domains but that use the protofly concept to interact with Hyperty Instances served by this Messaging Node.


Each hyperty instance should be treated as an individual client of the Messaging Node that registers with an own identity and needs a login before it can exchange messages. The Messaging Node allocates the identity of a hyperty during the registration/subscription process. The allocated identity of is sufficient to serve as a messaging address for domain internal communication.

External Hyperties from foreign domains (that might use different communication protocols and identifiers) might need an address representation in the own domain that is compatible with the local addressing scheme. A SIP based domain, for instance, will require a representation of an external entitiy as a SIP URI in order to route messages correctly. The Messaging Node is responsible for the creation and assignment of such transient addresses.

In Matrix.org this can be achieved with Application Services, which maintain an own namespace of virtual users and are able to operate (send/receive) "on behalf" of an certain virtual user.


### Protocol Stub

An approach to achieve this was described above in section "Stub and connector management" before.

### Connectors

>>
* IdM Connector to interact with remote Identity Management functionalities
* Registry Connector to interact with remote Registry functionalities
* End-User Device Connector to interact with Hyperty Instances running in the end-user device
* Network Server Connector to interact with Hyperty Instances running in a Network Server

The concept of connectors can be supported by the implementation of appropriate Application Services, as mentioned above already. These connectors would be executed in the scope of the Messaging Node and perform the required protocol translations.

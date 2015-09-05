## Runtime Architecture

According to [ongoing discussions](https://github.com/reTHINK-project/core-framework/issues/41):
* one sandbox for the ASP providing the Application
* one sandbox per Hyperty Service Provider Domain that includes the Router/Policy Engine and associated protoStub
* the ProtoStub is used to communicate with Service Provider backend services.
* Hyperty instances communicates with Msg bus through Router/Policy Engine which may also act as a kind of firewall
* according to recommendations provided in the [runtime security analysis](securityanalysis.md), protoStubs and Router/Policy Engines execute isolated in independent sandboxes.
* to prevent cross origin attacks / spy, access to Message BUS may be subject to authorisation
* Different Points of Policy Enforcement:
 * Policies enforced at Hyperty Sender Domain Router for outgoing messages
 * Policies enforced to control the access to message Bus
 * Policies enforced at Hyperty Receiver Domain Router for incoming messages

 The different types of policies to be applied on these different points, namely in the Message BUS, requires further research to avoid performance overhead and potential conflicts. Initial thoughts:
 Message BUS PEP would enforce general access control policies that are agnostic of sender and target domains, or specific to the domain managing the device runtime (Core Runtime Provider). The access control to CRUD operations on standardised data objects like the Communication Data Object (eg only the owner of an active communication may apply delete or update operations on it) is a good candidate.

Below, it is depicted a functional architecture of the Runtime:

*Provide first a higher level architecture without showing detailed components. Distinguish internal APIs from external Interfaces which should be identified according to names defined in D2.2.*

<!--
@startuml "Runtime_Architecture_new.png"


node "Service Provider 1" as SP1 {
	node Repository as Repo1
	node "Backend\nServer" as Msg1

	Repo1 -[hidden]left- Msg1
}


node "Service Provider 2" as SP2 {
	node Repository as Repo2
	node "Backend\nServer" as Msg2

	Repo2 -[hidden]right- Msg2
}

node "Runtime Device" as rt {

 node "ASP Sandbox" as ASPSand {
	 node "Application" as App 
	}

 SP1 -[hidden]down- App
 SP2 -[hidden]right- App

 node "Service Provider 1 Sandboxes" as SP1Sand {

 node "Hyperties\nSandbox" as H1Sand {


	 node "Hyperty1\nInstance" as H1
	 node "Syncer" as Sync1
	 H1 -down-> Sync1
	 }

 node "ProtoStub1\nSandbox" as Proto1Sand {

	 node "ProtoStub" as Proto1
 }

 node "PEP1\nSandbox" as PEP1Sand {
	 node "Service Provider1\nPolicy Enforcer" as PEP1
 }


  Sync1 -> PEP1 : message


 }

node "Service Provider 2 Sandboxes" as SP2Sand {

 node "Hyperties\nSandbox" as H2Sand {
	 node "Hyperty2\nInstance" as H2
	 node "Syncer" as Sync2
	 H2 -down-> Sync2
	 }

 node "PEP2\nSandbox" as PEP2Sand {
	 node "Service Provider2\nPolicy Enforcer" as PEP2
	 }

 node "ProtoStub2\nSandbox" as Proto2Sand {

  node "ProtoStub" as Proto2
  }


  Sync2 -> PEP2 : message

 }

 App -down-> H1

 App -down-> H2


Repo1 ..down-> H1: provide

Repo2 ..down-> H2: provide

Msg1 <-down-> Proto1 : protocol\nmessage

Msg2 <-down-> Proto2 : protocol\nmessage

node "Core Sandbox" as core {

 node "*            Message      BUS                *" as Bus 

 node "Msg BUS\nPEP" as BusPEP

 node "Registry" as Reg

 node "Identities\nContainer" as ID

 node "Policy Decision (PDP)\n(incl Authorisation)\n+Policies Repository )" as PDP

 node "Runtime\nUser Agent" as RunUA {
	node "CatalogueProtoStub" as RepUA
 }

 RunUA -[hidden]up- Reg
 }


node "Native\nRuntime" as native {
node "WebRTC Engine" as WRTC
	
}

 Bus <-up-> Proto1 : message

 Bus <-up-> Proto2 : message

 BusPEP ..right-> Bus : enforce

 PDP ..right-> BusPEP : authorise

 PDP .down-> Reg

 PEP1 <-down-> Bus : message

 PEP2 <-down-> Bus : message

 Reg .left. ID

 Reg <-up. Bus: register or discover\nHyperties and\n protoStubs

 WRTC <-up- SP1Sand

 WRTC <-up- SP2Sand
 	}

RepUA -> Repo1 : query and\n download \nCatalogue\n Objects
RepUA -> Repo2 : query and\n download \nCatalogue\n Objects

@enduml
-->


![Runtime Architecture](Runtime_Architecture_new.png)

### Service Provider Sandboxes

According to Browser Sandbox model, each Service Provider Sandboxes executes components downloaded from the same Service Povider domain including Hyperties, protocol stubs used to connect and communicate with Service Provider Domain and PEP enabled Connector. 

Functionalities to support Hyperty Communication through data object synchronisation are provided by the Syncer component based on Object.observer API. Details are discussed [here](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/data-synch/readme.md).

#### Application



#### Hyperty



#### Policy Enforcer

Handles communication between Hyperties and the local Message Bus, enforcing when needed valid Policies on this communicayion (e.g. authorisation policies) according to Service Provider domain policies. It also enforces access control policies to synchronised object (Object Monitor functionalities as proposed [here](https://github.com/reTHINK-project/architecture/issues/52)).

#### Protocol Stub

Protocol Stack to be used to communicate with Service Provider Backend Servers (including Messaging Server or other functionalities like IdM) according to Protocol on the Fly and codec on the fly concept.

Protocol stubs are reachable through the Message BUS. In this way it is ensured that all messages received and sent goes through the message bus where policies can be enforced and additional data can be added or changed including message addresses and identity tokens.


### Core Runtime

#### Policy Decision Point and Message BUS authorisation

It provides Policy decision functionalities for the Service Provider Router sandbox according to Policies downloaded and stored locally when associated Hyperties are deployed. The possibility to consult Policies stored remotely should also be investigated. It also provides authorisation / access control to the Message BUS.

#### Message BUS

Supports local message communication between Hyperty Instances in a loosely coupled manner. Access to message BUS is subject to authorisation to prevent cross origin attacks / spy from malicious Hyperties.

See [postaljs](https://github.com/postaljs/postal.js)

#### Registry

Local Runtime Hyperty registry where Hyperty local addresses are registered and discoverable by other local Hyperties. The Runtime Registry should ensure synchronisation with Remote Domain Registry (to be provided by WP4)

#### Identities Containers

Contains Tokens that associates Hyperties with Users, it also provides Identity assertions. Something similar to [WebRTC IdP Proxy](http://w3c.github.io/webrtc-pc/#identity) but not limited to WebRTC.

When registered, Hyperties are associated with an Identity by the Registry / Identities container. Then all, messages sent by the Hyperty will be signed with a token according to the Identity associated to the Hyperty. 


#### Runtime User Agent

Manages Core Sandbox components including its deployment and update from Core Runtime Provider. It also handles Device bootstrap and the deployment of Hyperties and Protocol Stubs in the Runtime. It includes a Catalogue Protocol Stub to interface with any reTHINK Service Provider Catalogue service to query and download required Catalogue Data Objects, according to [Catalogue Service interface design][interface-catalogue](https://github.com/reTHINK-project/architecture/blob/master/docs/interface-design/Interface-Design.md#73-catalogue-interface).

#### QoS User Agent

Manages network QoS in the runtime. Not limited to WebRTC. Relationship with LHCB?

*to be discussed in Aveiro*

### Native Runtime

Functionalities that are natively provided by the runtime.

#### WebRTC Media Engine

Provides the support for Stream communication betweeb Hyperties according to WebRTC Standards.



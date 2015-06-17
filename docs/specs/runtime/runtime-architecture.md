## Runtime Architecture

Updated according to [ongoing discussions](https://github.com/reTHINK-project/core-framework/issues/41):
* one sandbox per Hyperty Domain that includes the Identities, Policy Engine and associated protoStub to be used for the sandbox domain
* Hyperty instances communicates with event bus through Policy Engine which may also act as a kind of firewall
* to prevent cross origin attacks / spy, access to Message BUS is subject to authorisation


<!--
@startuml "Runtime_Architecture_new.png"


node "Service Provider 1" as SP1 {
	node Repository as Repo1
	node "Messaging\nServer" as Msg1

	Repo1 -[hidden]left- Msg1
}


node "Service Provider 2" as SP2 {
	node Repository as Repo2
	node "Messaging\nServer" as Msg2

	Repo2 -[hidden]right- Msg2
}

node "Runtime" as rt {
 node "Application" as App 

 SP1 -[hidden]down- App
 SP2 -[hidden]right- App

 node "Sandbox1" as Sand1 {

 node "Hyperty1\nInstance" as H1

 node "ProtoStub" as Proto1

 node "Identities\nContainer" as ID1

 node "Policy Engine\nFirewall" as PEP1

  H1 -down-> PEP1

  PEP1 -up-> Proto1

  ID1 <-right- PEP1
 }

node "Sandbox2" as Sand2 {

 node "Hyperty2\ninstance" as H2

 node "Policy Engine\nFirewall" as PEP2

 node "Identities\nContainer" as ID2

  node "ProtoStub" as Proto2

  PEP2 -up-> Proto2

  H2 -down-> PEP2

  ID2 -right-> PEP2

 }

 App -down-> H1

 App -down-> H2


Repo1 ..down-> H1: provide

Repo2 ..down-> H2: provide

Msg1 <-down-> Proto1 : communicate

Msg2 <-down-> Proto2 : communicate

node "Core Sandbox" as core {

 node "*            Message      BUS                *" as Bus

 node "Registry" as Reg

 node "WebRTC\nEngine" as WRTC

 node "Policy Repository" as Rep

 node "Authorisation" as Authz

 Authz <-right- Bus : authorise

 PEP1 -down-> Bus

 PEP2 -down-> Bus

 Rep <-up- PEP1

 Rep <-up- PEP2

 Reg -up-> Bus

 WRTC -up-> Bus


	}

@enduml
-->

![Runtime Architecture](Runtime_Architecture_new.png)

### Service Provider Sandbox

According to Browser Sandbox model, each Service Provider Sandbox executes components downloaded from the same Service Povider domain including Hyperties, protocol stubs used to connect and communicate with Service Provider Messaging Server, Policy Engine and associated policies as well as Identities managed by this domain. 

#### Policy Engine

Intercepts Hyperty messages to be exchanged with local Message Bus or the Messaging Server via the protoStub, and applies valid Policies on it e.g. authorisation policies. Policies are downloaded and stored locally when associated Hyperties are deployed. The possibility to consult Policies stored remotely should also be investigated.

#### Identities Containers

Contains Tokens that associates Hyperties with Users, it also provides Identity assertions. Something similar to [WebRTC IdP Proxy](http://w3c.github.io/webrtc-pc/#identity) but not limited to WebRTC.

#### Protocol Stub

Protocol Stack to be used to communicate with Messaging Server (or other functionalities like IdM) according to Protocol on the Fly and codec on the fly concept.

### Message BUS

Supports local message communication between Hyperty Instances in a loosely coupled manner. Access to message BUS is subject to authorisation.

### Registry

Local Runtime Hyperty registry where Hyperty local addresses are registered and discoverable by other local Hyperties. The Runtime Registry should ensure synchronisation with Remote Domain Registry (to be provided by WP4)

### WebRTC Media Engine

Provides the support for Stream communication betweeb Hyperties according to WebRTC Standards.



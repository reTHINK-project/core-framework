## Runtime Architecture

The main Hyperty runtime architecture is presented in fig. @runtime_arch_high_level. It is comprised by different types of components that, for security reasons, are executed in isolated sandboxes. Thus, components downloaded from a specific Service Provider (e.g. Service Provider 1 from fig. @runtime_arch_high_level) are executed in sandboxes that are different from the sandboxes used to execute components downloaded from another service provider (e.g. Service Provider 2 from fig. @runtime_arch_high_level). In addition, for the same Service Provider, and also for security reasons, protocol stubs and Hyperties are isolated from each other and executed in different sandboxes. Communication between components running in different sandboxes are only possible through messages exchanged through a message bus functionality provided by the Core Sandbox. On the other hand, the protocol stub provides the bridge for the Hperty runtime to communicate with associated Service Provider. For example, in fig. @runtime_arch_high_level, protostub1 is the only way that Hyperty instances have to communicate with Service Provider 1. In general, in the Core Sandbox, all required functionalities to support the deployment, execution and maintenance of components downloaded from service providers, are executed. Core components are, ideally, natively part of the device runtime. However, to support existing platforms including Browsers and Mobile Operating Systems, to minimise the need to install new applications, the existing device native runtime functionalities (e.g. Javascript engine) are distinguished from the hyperty core runtime functionalities. In such situations, the Hyperty Core Runtime components are downloaded from the Hyperty Runtime Service Provider and are executed in an isolated core sandbox.

![Figure @runtime_arch_high_level High Level Runtime Architecture with trusted Hyperties](Runtime_Architecture_high_level.png)

In figure @runtime_arch_high_level, the Application and the Hyperty Instances it  consumes, are downloaded from the same Service Provider, and they trust each other, i.e. they are executed in the same sandbox. In figure @runtime_arch_high_level_unstrusted, it is depicted the Runtime Architecture where the Application and the Hyperty Instances it consumes, don't trust each other, for example, they are downloaded from different service providers. In such situation, Hyperties and the Application are isolated from each other and they are executed in different sandboxes.

![Figure @runtime_arch_high_level_unstrusted High Level Runtime Architecture with untrusted Hyperties](Runtime_Architecture_high_level_unstrusted.png)

As described below, to prevent cross origin attacks / spy, access to Core Runtime Message BUS is subject to authorisation, by using standardised policies downloaded from each involved Service Provider. In addition, the Hyperty Runtime Architecture also supports the enforcement of Service Provider policies,  with its own Policy Enforcer component executed in a dedicated sandbox (see fig. @runtime_arch_high_level_pep) enabling the enforcement of proprietary policies.

![Figure @runtime_arch_high_level_pep High Level Runtime Architecture with domain specific Policy Enforcer](Runtime_Architecture_high_level_pep.png)

 The different types of policies to be applied on these different points, namely in the Message BUS, requires further research to avoid performance overhead and potential conflicts. In principle, if for a specific domain there is Policy Enforcer, it will not be needed to enforce policies from that domain in the Mesg BUS PEP.

 In addition, Message BUS PEP should enforce general access control policies that are agnostic of sender and target domains, or specific to the domain managing the device runtime (Core Runtime Provider). The policies used to control the access to synchronised Data Objects used in Hyperty Communication (see below) , are a good example of such policies.


Some more details are provided in the following sections.

### Service Provider Sandboxes

#### Hyperty

As defined in [D2.2] Hyperties communicate through [data object synchronisation](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/data-synch/readme.md) where different access control policies can be used. The Reporter-Observer pattern introduced in D2.2  will be evaluated in order to simplify the management of inconsistencies in such distributed data synchronisation communication model.

The main Reporter-Observer pattern principle is to only grant writing permissions to Object owner (creator). Such policy to control the access to synchronised object has to be enforced by the Message BUS Policy Enforcer the Hyperty Core Runtime to be able to enforce .

The following Terminology is used:

Observer hyperty is not allowed to change objects

Reporter hyperty creator of the object is allowed to change the object. Only one hyperty instance reporter per Synched object instance.

Such Model is depicted in figure  @runtime_arch_data_synch. The Reporter-Observer pattern is supported by the exchange of messages between Reporter Syncher and Observer Syncher as defined in the reTHINK Message Model [D2.2].

![Figure @runtime_arch_data_synch Reporter-Observer Communication Pattern](reporter-observer-pattern.png)

Additional, and more sophisticated and proprietary data synchronisation alghorithms can be used, by deploying a Policy Enforcer in the Runtime.

Hyperty Communication through data object synchronisation are provided by the Syncer component running in the Hyperty Sandbox. Data object synchronisation should take advantage on emerging [javascript Object.observer API](http://www.html5rocks.com/en/tutorials/es7/observe/).

#### Policy Enforcer

Policy Enforcer complements the Message BUS Policy Enforcer functionality enabling the enforcement of proprietary or closed Policies in the runtime for a specific Hyperty instance including access control policies to synchronised object.

#### Protocol Stub

The protocol stub implements a Protocol Stack to be used to communicate with Service Provider Backend Servers (including Messaging Server or other functionalities like IdM) according to Protocol on the Fly and codec on the fly concept as introduced in D2.2.

Protocol stubs are only reachable through the Message BUS. In this way it is ensured that all messages received and sent goes through the message bus where policies can be enforced and additional data can be added or changed including message addresses and identity tokens.


### Core Runtime

The Core Runtime components are depicted in fig. @runtime_arch_core.

![Figure @runtime_arch_core Runtime Core Architecture](Core_Runtime.png)

#### Message BUS

Supports local message communication in a loosely coupled manner between Service Provider sandboxes including Hyperty Instances, Protocol Stubs and Policy Enforcers. Messages are routed to listeners previsouly added by the Runtime User Agent, to valid Runtime URL addresses handled by the Runtime Registry functionality.

Access to message BUS is subject to authorisation to prevent cross origin attacks / spy from malicious downloaded code including Hyperties, Protocol Stubs or Policy Enforcers.

#### Policy Decision Point and Message BUS authorisation

It provides Policy decision functionalities for incoming and outgoing messages from / to Service Provider sandboxes, according to Policies downloaded and stored locally when associated Hyperties are deployed by the Runtime User Agent. The possibility to consult Policies stored remotely should also be investigated. It also provides authorisation / access control to the Message BUS.

#### Message BUS Policy Enforcement Point

The Message BUS Policy Enforcement Point, is used by the Message BUS to enforce policy actions requested by the Message BUS Policy Decision Point e.g. to verify or generate identity assertions, to get valid Access tokens.

#### Runtime Registry

The Runtime Registry handles the registration of all available runtime components including Core components, Service Provider Sandboxes and each component executing in each sandbox like Hyperty Instances, Protocol Stubs, Policy Enforcers and Applications.

The Runtime Registry handles the allocation of Runtime URL addresses for all these components and manages its status.

In addition, the Runtime Registry should ensure synchronisation with Back-end Service Provider Registry.

#### Identity Module

The Runtime Identity Module manages ID and Access Tokens required to trustfuly manage Hyperty Instances communication including trustful association between Hyperty Instances with Users. In addition, it also supports the generation and validation of Identity assertions. Identity module is compliant with [WebRTC IdP Proxy](http://w3c.github.io/webrtc-pc/#identity) but not limited to WebRTC.

Messages routed by Message BUS should be signed with a token according to the Identity associated to it and managed by the Identity Module. 


#### Runtime User Agent

The Runtime User Agent, manages Core Sandbox components including its download, deployment and update from Core Runtime Provider. It also handles Device bootstrap and the download, deployment and update of Service Provider sandboxes including Hyperties, Protocol Stubs and Policy Enforcers. It manages the descriptors of deployed components that are downloaded from the Service Provider Catalogue via the [Catalogue Service interface](https://github.com/reTHINK-project/architecture/blob/master/docs/interface-design/Interface-Design.md#73-catalogue-interface)[D2.2].

#### QoS User Agent

The QoS User Agent Manages network QoS in the runtime. 
This component requires further investigations which will be reported in D3.3.

### Native Runtime

The Native Runtime provides Functionalities that are natively provided by the runtime, e.g. Javascript engine or WebRTC Media Engine to support for Stream communication between Hyperties according to WebRTC Standards when available.



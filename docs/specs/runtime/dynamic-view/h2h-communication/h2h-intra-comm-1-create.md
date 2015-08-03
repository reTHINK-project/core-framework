### H2H Intradomain Communication - create communication

This MSC diagrams shows the most relevant steps to support the initial invitation of Alice to Bob. It finishes when the invitation reaches Bob's device and the Communication object is created at Bob's device.

<!--
@startuml "h2h-intra-comm-create.png"

autonumber

!define SHOW_RuntimeA

!define SHOW_AppAtRuntimeA

!define SHOW_NativeAtRuntimeA
!define SHOW_WebRTCAtRuntimeA

!define SHOW_SP1SandboxAtRuntimeA
!define SHOW_Protostub1AtRuntimeA
!define SHOW_ServiceProvider1HypertyAtRuntimeA
!define SHOW_ServiceProvider1RouterAtRuntimeA
!define SHOW_CommObjectAtRuntimeA
!define SHOW_LocalObjectAtRuntimeA
!define SHOW_Syncher1AtRuntimeA



!define SHOW_CoreRuntimeA
!define SHOW_MsgBUSAtRuntimeA

!define SHOW_Runtime1B
!define SHOW_SP1SandboxAtRuntime1B
!define SHOW_Protostub1AtRuntime1B
!define SHOW_ServiceProvider1HypertyAtRuntime1B
!define SHOW_ServiceProvider1RouterAtRuntime1B
!define SHOW_CommObjectAtRuntime1B
!define SHOW_RemoteObjectAtRuntime1B
!define SHOW_Syncher1AtRuntime1B

!define SHOW_CoreRuntime1B
!define SHOW_MsgBUSAtRuntime1B

!define SHOW_SP1

!define SHOW_Bob

!include ../runtime_objects.plantuml

Alice -> App@A : invite Bob

App@A -> Router1@A : invite Bob

SP1H@A <- Router1@A : invite Bob

group discover Remote Hyperty URL

SP1H@A -> SP1H@A : discover Bob

note right
	returned address set that Bob is
	in the same domain.
end note

end group

create CommObj@A

SP1H@A ->  CommObj@A : new(HypertyOwner,Constraints)

SP1H@A -> WRTC@A : get Comm resources\n(incl SDP)

create LocObj@A

SP1H@A ->  LocObj@A : new(sessionDescription)

== Request Bob to Create and Observe Connection object ==

SP1H@A -> Sync1@A : report Connection Object to Bob

Sync1@A -> Router1@A : postMsg(Create MSG) 

Router1@A -> Router1@A : apply policies

Router1@A -> BUS@A : postMsg(Create MSG) 

Proto1@A <- BUS@A : postMsg(Create MSG) 

Proto1@A -> SP1 : postMsg(Create MSG) 

Proto1@1B <- SP1 : postMsg(Create MSG) 

BUS@1B <- Proto1@1B : postMsg(Create MSG) 

Router1@1B <- BUS@1B : postMsg(Create MSG) 

Router1@1B -> Router1@1B : Apply Local Bob policies

Sync1@1B <- Router1@1B : postMsg(Create MSG) 

create CommObj@1B

Sync1@1B ->  CommObj@1B : new(AliceConnectionObject)

create RemObj@1B

Sync1@1B ->  RemObj@1B : new(AliceRemoteObjects)

SP1H@1B <- Sync1@1B : report new objects

== Reply Object was successfuly Created by Bob ==

Sync1@1B -> Router1@1B : postMsg(OK MSG) 

Router1@1B -> BUS@1B : postMsg(OK MSG) 

BUS@1B -> Proto1@1B : postMsg(OK MSG) 

Proto1@1B -> SP1 : postMsg(OK MSG) 

Proto1@A <- SP1 : postMsg(OK MSG) 

Proto1@A -> BUS@A : postMsg(OK MSG) 

Router1@A <- BUS@A : postMsg(OK MSG) 

Sync1@A <- Router1@A : postMsg(OK MSG) 

SP1H@A <- Sync1@A : Create MSG promise executed

@enduml
-->


![H2H Intradomain Communication : create communication](h2h-intra-comm-create.png)


Steps 1 - 4 : Alice decides to invite Bob for a communication. The discovery of Bob's Hyperty Instance URL is described here(../identity-management/discovery.md).

Steps 5 - 7 : the Hyperty Instance creates the Connection, the LocalConnectionDescription and the LocalIceCandidates data objects as defined [here](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/communication/readme.md#connection). 

Steps 8 - 9 : the Hyperty Instance requests the Syncher to ask Bob to create and observe these objects. Syncher generates CREATE messages for each object and puts it in the Body in JSON format. For simplification purposes we assume the CREATE msg contains the Connection object plus local SDP and local IceCandidates:

**[Create Message](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#createmessagebody)**

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty://sp1/alicehy123",
"to" : "hyperty://sp1/bobhy123",
"contextId" : "qwertyuiopasdfghjkl",
"body" : { "resource" : "comm://sp1/alice/123456", "value" : "<json object with connection, sdp and ice candidates>"}
```

Steps 10 : Alice's PEP applies local policies if required including outgoing communication request access control

Steps 11 - 16 : the message is routed through Alice Message BUS, Service Provider Back-end Messaginge Service and Bob's Message BUS, reaching Bob's PEP component

Step 17 : Bob's PEP applies local policies if required including incoming communication request access control

Steps 18 - 21 : the message is forwarded to Bob's Syncher which creates the requested new objects and reports to Bob's Hyperty Instance the new created objects.

Steps 22 - 30 : As soon as the new Objects were created by Bob's syncher, it responds back to Alice to confirm the objects were created with a [Response Message](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#responsemessagebody):

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty://sp1/bobhy123",
"to" : "hyperty://sp1/alicehy123",
"contextId" : "qwertyuiopasdfghjkl",
"body" : { "code" : "200" , "description" : "ok"}
```

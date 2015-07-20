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
!define SHOW_ReceiverObjectAtRuntimeA

!define SHOW_CoreRuntimeA
!define SHOW_MsgBUSAtRuntimeA

!define SHOW_Runtime1B
!define SHOW_SP1SandboxAtRuntime1B
!define SHOW_Protostub1AtRuntime1B
!define SHOW_ServiceProvider1HypertyAtRuntime1B
!define SHOW_ServiceProvider1RouterAtRuntime1B
!define SHOW_CommObjectAtRuntime1B
!define SHOW_SenderObjectAtRuntime1B

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

create RecvObj@A

SP1H@A ->  RecvObj@A : new(sessionDescription)

SP1H@A -> Router1@A : report Connection Object to Bob

Router1@A -> Router1@A : create msg\n&apply policies

Router1@A -> BUS@A : send Comm Objt

Proto1@A <- BUS@A : send Comm Objt

Proto1@A -> SP1 : send Comm Objt

Proto1@1B <- SP1 : send Comm Objt

BUS@1B <- Proto1@1B : send Comm Objt

Router1@1B <- BUS@1B : send Comm Objt

Router1@1B -> Router1@1B : Apply Local Bob policies

SP1H@1B <- Router1@1B : send Comm Objt

create CommObj@1B

SP1H@1B ->  CommObj@1B : new(AliceConnectionObject)

create SendObj@1B

SP1H@1B ->  SendObj@1B : new(AliceReceiverObject)

@enduml
-->


![H2H Intradomain Communication : create communication](h2h-intra-comm-create.png)

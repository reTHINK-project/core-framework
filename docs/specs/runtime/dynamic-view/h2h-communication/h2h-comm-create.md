### H2H Intradomain Communication - create communication

*just providing the needed components*

<!--
@startuml "h2h-intra-comm-create.png"

autonumber

!define SHOW_RuntimeA

!define SHOW_AppAtRuntimeA

!define SHOW_NativeAtRuntimeA
!define SHOW_WebRTCAtRuntimeA
!define SHOW_JavascriptEngineAtRuntimeA

!define SHOW_SP1SandboxAtRuntimeA
!define SHOW_Protostub1AtRuntimeA
!define SHOW_ServiceProvider1HypertyAtRuntimeA
!define SHOW_ServiceProvider1RouterAtRuntimeA
!define SHOW_CommObjectAtRuntimeA

!define SHOW_CoreRuntimeA
!define SHOW_MsgBUSAtRuntimeA
!define SHOW_RegistryAtRuntimeA
!define SHOW_IdentitiesAtRuntimeA
!define SHOW_AuthAtRuntimeA

!define SHOW_Runtime1B
!define SHOW_SP1SandboxAtRuntime1B
!define SHOW_Protostub1AtRuntime1B
!define SHOW_ServiceProvider1HypertyAtRuntime1B
!define SHOW_ServiceProvider1RouterAtRuntime1B
!define SHOW_CommObjectAtRuntime1B

!define SHOW_CoreRuntime1B
!define SHOW_MsgBUSAtRuntime1B
!define SHOW_RegistryAtRuntime1B
!define SHOW_IdentitiesAtRuntime1B
!define SHOW_AuthAtRuntime1B


!define SHOW_SP1

!define SHOW_Bob

!include ../runtime_objects.plantuml

Alice -> App@A : invite Bob

App@A -> Router1@A : invite Bob

SP1H@A <- Router1@A : invite Bob

group discover Remote Hyperty URL

SP1H@A -> Router1@A : discover Bob

Router1@A -> Router1@A : apply Alice's\nPolicies

Router1@A -> BUS@A : discover Bob

BUS@A -> RunAuth@A : request Bob's\ndiscovery authorisation

BUS@A -> RunReg@A : discover Bob

RunReg@A -> RunID@A : resolve Bob Address

note right
	returned address set that Bob is
	in the same domain.
end note

end group

create CommObj@A

SP1H@A ->  CommObj@A : new

SP1H@A -> WRTC@A : get Comm resources\n(incl SDP)

SP1H@A ->  CommObj@A : set Comm resources

SP1H@A -> Router1@A : send Comm Object to Bob\n&subscribe

Router1@A -> Router1@A : create msg\n&apply policies

Router1@A -> BUS@A : send Comm Objt

Proto1@A <- BUS@A : send Comm Objt

BUS@A -> RunID@A : get Alice\nIdentity Assertion

note right
	Alice token should be retrieved
	by Runtime Authorisation
	and not directly by the BUS?
end note

BUS@A -> RunReg@A : resolve Bob Address

Proto1@A -> SP1 : send Comm Objt

Proto1@1B <- SP1 : send Comm Objt

BUS@1B <- Proto1@1B : send Comm Objt

Router1@1B <- BUS@1B : send Comm Objt

Router1@1B -> Router1@1B : Apply Local Bob policies

SP1H@1B <- Router1@1B : send Comm Objt

@enduml
-->


![H2H Intradomain Communication : create communication](h2h-intra-comm-create.png)


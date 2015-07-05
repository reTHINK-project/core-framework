### H2H Intradomain Communication - create communication

*just providing the needed components*

<!--
@startuml "h2h-intra-comm-create.png"

autonumber

!define SHOW_RuntimeA

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

!define SHOW_SP1

!define SHOW_Bob

!include ../runtime_objects.plantuml

group discover Remote Hyperty URL


end group


SP1H@A -> Router1@A : send msg

Router1@A -> BUS@A : send msg

RunAuth@A <- BUS@A : Authz request

Proto1@A -> SP1 : send msg

Proto1@1B <- SP1 : send msg

Router1@1B <- Proto1@1B : send msg

Router1@1B -> Router1@1B : Apply Local Bob policies

SP1H@1B <- Router1@1B : send msg

@enduml
-->


![H2H Intradomain Communication : create communication](h2h-intra-comm-create.png)


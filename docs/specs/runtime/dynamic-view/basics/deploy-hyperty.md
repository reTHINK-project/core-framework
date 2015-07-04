### Deploy Hyperty

<!--
@startuml "deploy-hyperty.png"

autonumber

!define SHOW_RuntimeA

!define SHOW_AppAtRuntimeA

!define SHOW_NativeAtRuntimeA
!define SHOW_JavascriptEngineAtRuntimeA

!define SHOW_CoreRuntimeA
!define SHOW_MsgBUSAtRuntimeA
!define SHOW_RegistryAtRuntimeA
!define SHOW_IdentitiesAtRuntimeA
!define SHOW_AuthAtRuntimeA

!define SHOW_SP1SandboxAtRuntimeA
!define SHOW_Protostub1AtRuntimeA
!define SHOW_ServiceProvider1HypertyAtRuntimeA
!define SHOW_ServiceProvider1RouterAtRuntimeA

!define SHOW_SP1

!include ../runtime_objects.plantuml

group discover Hyperty URL

	JS <- App@A : deploy Hyperty(URL)

end group

JS -> SP1 : download Hyperty(URL)

create SP1H@A
JS -> SP1H@A : new

SP1H@A -> Router1@A : register Hyperty

Router1@A -> Router1@A : Apply SP1 policies

BUS@A <- Router1@A : register Hyperty

BUS@A -> RunReg@A : register Hyperty

group associate to Identity

	RunID@A <- RunReg@A : get Identity
	RunReg@A <- RunReg@A : set Identity
	RunReg@A <- RunReg@A : collect Hyperty Context

end group

group register Hyperty at SP1 Registry
	RunReg@A <- RunReg@A : collect Hyperty runtime Context data
	RunReg@A -> BUS@A : register Hyperty
	Router1@A <- BUS@A : register Hyperty
	Router1@A -> Router1@A : Apply SP1 policies
	Router1@A -> Proto1@A : register Hyperty
	Proto1@A -> SP1 : register Hyperty

	note left
		**open issue:** protostub may noy be
		connected yet. Show such procedures here?
	end note

end group

@enduml
-->


![Deploy Hyperty](deploy-hyperty.png)


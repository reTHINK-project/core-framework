#### Communication Invitation is accepted by Bob and connection is established

This MSC diagrams shows the most relevant steps performed by Bob to accept the initial invitation from Alice, how the communication object is updated and reported back to Alice in order to synchronise both two objects. It finishes when the connection between Alice and Bob is established.

<!--
@startuml "h2h-intra-comm-accept.png"

	autonumber
!define SHOW_Runtime1B
!define SHOW_SP1SandboxAtRuntime1B
!define SHOW_Protostub1AtRuntime1B
!define SHOW_ServiceProvider1HypertyAtRuntime1B
!define SHOW_ServiceProvider1RouterAtRuntime1B
!define SHOW_CommObjectAtRuntime1B
!define SHOW_RemoteObjectAtRuntime1B
!define SHOW_LocalObjectAtRuntime1B

!define SHOW_CoreRuntime1B
!define SHOW_MsgBUSAtRuntime1B
' !define SHOW_RegistryAtRuntime1B
' !define SHOW_IdentitiesAtRuntime1B
' !define SHOW_AuthAtRuntime1B

!define SHOW_NativeAtRuntime1B
!define SHOW_WebRTCAtRuntime1B

!define SHOW_SP1
' !define SHOW_Msg1

!define SHOW_Syncher1AtRuntime1B

!include ../runtime_objects.plantuml

participant "App" as App@1B
actor "Bob" as Bob

== Previous diagram results on the Communication and Remote object creation ==

group 

	create CommObj@1B
	Sync1@1B -> CommObj@1B : new (AliceCommObj)
	
	create RemObj@1B
	Sync1@1B -> RemObj@1B : new (AliceCommObj)

end

App@1B -> CommObj@1B : setup Observer callback
note left
	Under discussion if observer is the app
	or the Hyperty (apps not standarized)
end note

' group Covered on diagram 1
'	Msg1 -> Proto1@1B : send initial Comm Objt
'	note right
'		Atomic CRUD operations
'		over Comm objects
'	end note
'
'	Proto1@1B -> BUS@1B : send initial Comm Objt
'	BUS@1B -> Router1@1B : send initial Comm Objt
'	note left
'		do we need some assertion/authorisation stuff for Alice' identity before this step?
'	end note
'
'	Router1@1B -> Router1@1B : apply local policies
'	note right
'		what type of policies? examples?
'	end note
'	Router1@1B -> SP1H@1B : send initial Comm Objt
'
'	' Hyperty forwards invitation to apply
'	SP1H@1B -> CommObj@1B : fill Comm Objt
' end

group Notify APP (and, eventually, the user)
	CommObj@1B -> App@1B : observer callback (invitation)
	note left
		App communication
		not standirized
	end note
	App@1B -> Bob : present invitation to Bob

	' Bob accepts invitation
	Bob -> App@1B : accept invitation
	App@1B -> SP1H@1B : invitation accepted
end

== Update connection on Alice about response ==

SP1H@1B -> CommObj@1B : update connection to IN PROGRESS
SP1H@1B -> Sync1@1B : update connection to IN PROGRESS
Sync1@1B -> Router1@1B : send CRUD msg. for updated Comm Objt state
Router1@1B -> Router1@1B : create msg, apply local policies

Router1@1B -> Proto1@1B : send CRUD msg. for updated Comm Objt state

Proto1@1B -> SP1 : send CRUD msg. for updated Comm Objt state

== Get WebRTC resources ==

SP1H@1B -> WRTC : get Comm resources (incl. SDP)
note left
	very simplified
end note

create LocObj@1B

SP1H@1B -> LocObj@1B : new(sessionDescription)

== Update connection on Alice about local resources ==

SP1H@1B -> Sync1@1B : notify Alice about local resources

' Update comm in Alice
Sync1@1B -> Router1@1B : send CRUD msg. for updated Comm Objt state
Router1@1B -> Router1@1B : create msg, apply local policies
note right
	should the real msg be created here or in the Hyperty?
end note

Router1@1B -> Proto1@1B : send CRUD msg. for updated Comm Objt state
note left
via already established channel
end note
Proto1@1B -> SP1 : send CRUD msg. for updated Comm Objt state

@enduml
-->


![H2H Intradomain Communication : accept communication](h2h-intra-comm-accept.png)

- Creation of communication object already covered on creation diagram (previous).
- Under discussion where the observer callback is set
- TODO: include ringing state
- Update Comm object and synchronize previous to get WebRTC media (establishing) (it could take some time)
- Update Comm object and synchronize when finally call is established

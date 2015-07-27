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

!define SHOW_CoreRuntime1B
!define SHOW_MsgBUSAtRuntime1B
!define SHOW_RegistryAtRuntime1B
!define SHOW_IdentitiesAtRuntime1B
!define SHOW_AuthAtRuntime1B

!define SHOW_NativeAtRuntime1B
!define SHOW_WebRTCAtRuntime1B

!define SHOW_SP1
!define SHOW_Msg1


!include ../runtime_objects.plantuml

participant "App" as App@1B
actor "Bob" as Bob

group Communication object Creation

	create CommObj@1B

	SP1H@1B -> CommObj@1B : new (AliceCommObj)

end

App@1B -> CommObj@1B : setup Observer callback
note left
	potential way to go:
	hyperties update the model, apps are observers
	and update the GUI accordingly
	Under discussion if observer is the app
	or the Hyperty (apps not standarized)
end note

group Covered on diagram 1
	Msg1 -> Proto1@1B : send initial Comm Objt
	note right
		Atomic CRUD operations
		over Comm objects
	end note

	Proto1@1B -> BUS@1B : send initial Comm Objt
	BUS@1B -> Router1@1B : send initial Comm Objt
	note left
		do we need some assertion/authorisation stuff for Alice' identity before this step?
	end note

	Router1@1B -> Router1@1B : apply local policies
	note right
		what type of policies? examples?
	end note
	Router1@1B -> SP1H@1B : send initial Comm Objt

	' Hyperty forwards invitation to apply
	SP1H@1B -> CommObj@1B : fill Comm Objt
end

CommObj@1B -> App@1B : observer callback (invitation)
App@1B -> Bob : present invitation to Bob

' Bob accepts invitation
Bob -> App@1B : accept invitation
App@1B -> SP1H@1B : invitation accepted

group Update comm in Alice
group Update Comm in Alice
	SP1H@1B -> Router1@1B : send CRUD msg. for updated Comm Objt state
	Router1@1B -> Router1@1B : create msg, apply local policies
	note right
		should the real msg be created here or in the Hyperty?
	end note

	Router1@1B -> Proto1@1B : send CRUD msg. for updated Comm Objt state
	note left
	via already established channel
	end note
	Proto1@1B -> Msg1 : send CRUD msg. for updated Comm Objt state
end

SP1H@1B -> WRTC : get Comm resources (incl. SDP)
note left
	very simplified
end note

SP1H@1B -> CommObj@1B : set Comm resources

' Update comm in Alice
group Update Comm in Alice
	SP1H@1B -> Router1@1B : send CRUD msg. for updated Comm Objt state
	Router1@1B -> Router1@1B : create msg, apply local policies
	note right
		should the real msg be created here or in the Hyperty?
	end note

	Router1@1B -> Proto1@1B : send CRUD msg. for updated Comm Objt state
	note left
	via already established channel
	end note
	Proto1@1B -> Msg1 : send CRUD msg. for updated Comm Objt state
end

@enduml
-->


![H2H Intradomain Communication : accept communication](h2h-intra-comm-accept.png)

- Creation of communication object already covered on creation diagram (previous).
- Under discussion where the observer callback is set
- TODO: include ringing state
- Update Comm object and synchronize previous to get WebRTC media (establishing) (it could take some time)
- Update Comm object and synchronize when finally call is established

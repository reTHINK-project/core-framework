#### Bob starts WebRTC API (TBC)


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


group TO BE REMOVED (inc at diagram 1)

	create CommObj@1B
	Sync1@1B -> CommObj@1B : new (AliceCommObj)
	SP1H@1B -> CommObj@1B : setup Observer Callback

	create RemObj@1B
	Sync1@1B -> RemObj@1B : new (AliceCommObj)
	SP1H@1B -> RemObj@1B : setup Observer Callback

end

== OPTIONAL, NON MADATORY APP NOTIFICATION ==

group Notify APP (and, eventually, the user) NOT MANDATORY
	ref over "App@1B"
		App communication
		not standirized
	end ref
	App@1B -> CommObj@1B : setup Observer callback

	CommObj@1B -> App@1B : observer callback (invitation)
	App@1B -> Bob : present invitation to Bob

	' Bob accepts invitation
	Bob -> App@1B : accept invitation
	App@1B -> SP1H@1B : invitation accepted
end

create LocObj@1B

SP1H@1B -> LocObj@1B : new(localDescription)
ref over "LocObj@1B"
	empty LocObject
	created
end ref

Sync1@1B -> LocObj@1B : setup Observer Callback

group Update connection on Alice about response NOT MANDATORY

	ref over "SP1H@1B"
		optional answering status
	end ref

	LocObj@1B -> Sync1@1B : observer reports connection IN PROGRESS
	Sync1@1B -> Router1@1B : send CRUD msg. for updated Comm Objt state
	Router1@1B -> Router1@1B : create msg, apply local policies

	Router1@1B -> Proto1@1B : send CRUD msg. for updated Comm Objt state

	Proto1@1B -> SP1 : send CRUD msg. for updated Comm Objt state
end

== Get WebRTC resources (assuming that Hyperty is observer of Remote Data Object) ==

RemObj@1B -> SP1H@1B : observer reports "remoteDescription added"
SP1H@1B -> WRTC : PC.setRemoteDescription

group forEach remote IceCandidate
	RemObj@1B -> SP1H@1B : observer reports "remote IceCandidate added"
	SP1H@1B -> WRTC : PC.addIceCandidate()
end


SP1H@1B -> WRTC : PC.createAnswer()
WRTC -> SP1H@1B : callback with localDescription (SDP)
SP1H@1B -> WRTC : PC.setLocalDescription()  - [triggers local ICE process]

SP1H@1B -> LocObj@1B : update(localDescription)

group forEach local IceCandidate
	WRTC -> SP1H@1B : IceCandidate
	SP1H@1B -> SP1H@1B : filter IceCandidate (e.g. to force relayed operation)
	SP1H@1B -> LocObj@1B : add IceCandidate
end


== For each change in Local Data Object: Update connection on Alice about local resources ==

LocObj@1B -> Sync1@1B : observer reports "localDescription resources"

' Update comm in Alice
Sync1@1B -> Router1@1B : send CRUD msg. for updated Comm Objt state
Router1@1B -> Router1@1B : create msg, apply local policies


Router1@1B -> Proto1@1B : send CRUD msg. for updated Comm Objt state
note left
via already established ProtOFly channel (assuming that it is bi-directional)
end note
Proto1@1B -> SP1 : send CRUD msg. for updated Comm Objt state

@enduml
-->

(Step 18) The Hyperty call the WebRTC API from the browser including the remote parameters from the Remote Data Object. The same happens when a new Ice Candidate is updated in the Remote Data Object (step 19 and Step 20). 

While remote Ice Candidate are added (step 19 and Step 20 may take place several times as Trickle Ice is supported) the Hyperty calls the Peer Connection method to create an SDP answer  (step 21) to be sent to it with all the parameters used to establish the media session between Alice and Bob but the Ice Candidates which will be received asynchronaly later. When the SDP with the local description is ready a callback is called and the SDP is sent to the Hyperty (step 22).

(Step 23) The Hyperty calls the Peer setLocalDesciption API method from the WebRTC API exposed by the browser so that the browser is aware of the media parameters which are going to be used to establish the media session with Alice. At this point the gathering process of local Ice Candidates starts. 



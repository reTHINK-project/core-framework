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


![H2H Intradomain Communication : accept communication](h2h-intra-comm-accept.png)

## Dynamic flow

Three mandatory stages on this part of the communication:
1. App interaction and notify to the user in order to accept the incomming communication
2. Gathering of local resource from the WebRTC device native runtime
3. Synchonization of the Local Data Object

In addition is included an optional "answering status" synchornization. That could help to solve the gap between the user response and the gather of the multiple iceCandidates.

### Section 1. App interaction

The app could be set an observer and receive the creation of the Connection object, it can use it to notify the user about the incomming call. To be remark that the *app interaction is not standarized*.

### Section 2. Gathering WebRTC

### Section 3. Synchronization Local data object

## Extra notes
* Creation of communication object already covered on creation diagram (previous). First box to be integrated on h2h-intra-comm-1-create.md
* Under discussion where the observer callback is set (Hyperty, Syncer, App)
* WebRTC media gathering could take some time, manage how to represnt it.
* Communication objects belongings:
  * Connection and Remote Data belong to Alice, so created by Sync
  * Local Data blongs to Bob, so created by Hyperty
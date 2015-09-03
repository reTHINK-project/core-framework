### Bob starts WebRTC API and updates Alice's connection (TBC)


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



(step 7) The App can  show this invitation to the human user in some way through a human interface. (step 8)In such a case the human typically will acept the communication. (step 9) The App acepts teh invitation through the API exposed by the the Service Provider Hyperty.
In orther to start the media session a Local Data Object is created (step 10) where the data related to the  local parameters of the media session is going to be established.

(step 11) The Syncher elemtn from the Hyperty setups an Observer callback in the Local Data Object which will be called when the Local Data Object changes. (step 12) The observer reports that there is a communication in progress t othe Syncher.

(step 13)The Syncher sends a CRUD message to update the Communication Data Object to the Policy Enforcer. The Policy Enforcer checks if this message is compliant with the assigned policies to the user (step 14). 
(Step 15) Once the message has been verified it is sent to the ProtoStub which in turn will sent to the Back-End Service from SP1 to update the Remote COnnection Data Object (step 16).

The Remote Data Object which contains the media session parameters which will be used by the remote Hyperty. (Step 17) When it experience any change thats reported to the Hyperty which has previusly Observed it. (Step 18) The Hyperty call the WebRTC API from the browser including the remote parameters from the Remote Data Object. The same happens when a new Ice Candidate is updated in the Remote Data Object (step 19 and Step 20). 

While remote Ice Candidate are added (step 19 and Step 20 may take place several times as Trickle Ice is supported) the Hyperty calls the Peer Connection method to create an SDP answer  (step 21) to be sent to it with all the parameters used to establish the media session between Alice and Bob but the Ice Candidates which will be received asynchronaly later. When the SDP with the local description is ready a callback is called and the SDP is sent to the Hyperty (step 22).

(Step 23) The Hyperty calls the Peer setLocalDesciption API method from the WebRTC API exposed by the browser so that the browser is aware of the media parameters which are going to be used to establish the media session with Alice. At this point the gathering process of local Ice Candidates starts. 

(Step 24) the Hyperty also update teh Local COnnection Data Object with the SDP received from the WebRTC API in step 22.

(Step 25) During IceCandiates gathering period which started just after step 23 the WebRTC API calls a callbcak to send the candidates to the Htyperty through the WebRTC API. (Step 26)The Hyperty checks if the Candidate can be sent to the remote party (some candidates may contain IPs which don't want to the sent) and then the Candidate is added to the Local Data Object.

(Step 28)The local Data object reports that there have been changes in the connection parameters and the Syncher sends a CRUD message through the Policy Enforcer to Update the Remote Data Object at Alice's Hyperty (Step 29). (Step 30) the Policy Enforcer checks if the message is compliant with the local policies and the message is sent to the ProtoStub (Step 31) to be in turn sent to the Service Provider 1  Back-End (Step 32)

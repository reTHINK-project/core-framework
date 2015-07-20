### Domain Login

<!--
@startuml "domain-login.png"

autonumber

!define SHOW_RuntimeA


!define SHOW_CoreRuntimeA
!define SHOW_MsgBUSAtRuntimeA
!define SHOW_RegistryAtRuntimeA
!define SHOW_IdentitiesAtRuntimeA
!define SHOW_AuthAtRuntimeA
!define SHOW_CoreAgentAtRuntimeA

!define SHOW_SP1SandboxAtRuntimeA
!define SHOW_Protostub1AtRuntimeA
!define SHOW_ServiceProvider1HypertyAtRuntimeA
!define SHOW_ServiceProvider1RouterAtRuntimeA
!define SHOW_IdentityObjectAtRuntimeA

!define SHOW_SP1

!include ../runtime_objects.plantuml

== Deploy protocol stub and Service Provider Hyperty ==

group Deploy Protocol Stub diagram included in the Basics 

	create Proto1@A
	RunUA@A -> Proto1@A : new
end

group Deploy Hyperty diagram included in the Basics 

	create SP1H@A
	RunUA@A -> SP1H@A : new

	create Router1@A
	RunUA@A -> Router1@A : new
end

group Associate Hyperty with Identity diagram included in the IdM 
	RunUA@A -> RunReg@A : set Identity
end

alt explicit Login

	note over RunUA@A
		A first option is to provide a function
		to explicitely connect to the domain
		to be called by the Runtime User Agent.
	end note

	RunUA@A -> Proto1@A : connect(ID Token)

	Proto1@A -> SP1 : connect(ID Token)

	SP1 -> SP1 : validate ID Token

	Proto1@A <- SP1 : Success\nSession Token Granted

	note over Proto1@A
		session token is handled by the protoStub
		or by the Registry?
	end note

else implicit Login

	note over RunUA@A
		In second option, the protostub only
		connects when requested to send a message
		eg to register a new Hyperty Instance.
		In this case the ID Token contained in the
		message is used in the connection.
	end note

	group Register Hyperty in Deploy Hyperty diagram included in the Basic
		RunUA@A -> RunReg@A : register Hyperty

		BUS@A <- RunReg@A : register Hyperty\n(+ID Token)

		Proto1@A <- BUS@A : register Hyperty\n(+ID Token)

	end


	Proto1@A -> Proto1@A : not connected yet

	Proto1@A -> SP1 : connect(ID Token)

	SP1 -> SP1 : validate ID Token)

	Proto1@A <- SP1 : Success\nSession Token Granted

	note over Proto1@A
		session token is handled by the protoStub
		or by the Registry?
	end note

end

Proto1@A -> SP1 : register Hyperty\nSession Token


@enduml
-->


![Domain Login](Domain-login.png)

In this use case, it is considered there is a single protocol stub to interact with all back-end services including Identity Management. Another option is to have different protocol stubs to interact with different back-end services including authentication, authorisation and messaging services.

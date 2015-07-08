### Deploy Protocol Stub

<!--
@startuml "deploy-protostub.png"

autonumber

!define SHOW_RuntimeA

!define SHOW_AppAtRuntimeA

!define SHOW_NativeAtRuntimeA
!define SHOW_JavascriptEngineAtRuntimeA
!define SHOW_HTTPClientAtRuntimeA

!define SHOW_CoreRuntimeA
!define SHOW_MsgBUSAtRuntimeA
!define SHOW_RegistryAtRuntimeA
!define SHOW_IdentitiesAtRuntimeA
!define SHOW_AuthAtRuntimeA

!define SHOW_SP1SandboxAtRuntimeA
!define SHOW_Protostub1AtRuntimeA
!define SHOW_ServiceProvider1RouterAtRuntimeA

!define SHOW_SP1

!include ../runtime_objects.plantuml

group discover protostub URL

	JS@A -> RunID@A : get protostub URL

	note right
		to be designed in a separated diagram
		by Identity managament group
	end note
	... ...

end group


HTTP_UAC@A -> SP1 : download protostub

create Proto1@A
JS@A -> Proto1@A : new


Proto1@A -> BUS@A : register protoStub(domainURL)

BUS@A -> RunAuth@A : ask authz

BUS@A -> RunReg@A : register protoStub(domainURL)

note right
	protostub is discoverable 
	to let other hyperties to use it
	**open issue:** the protostub only connects
	to the domain when is requested by 
	an Hyperty?
end note

group protocol stub connection to domain: to be designed by the ID Management group

end group


@enduml
-->

![Deploy Protocol Stub](deploy-protostub.png)

The protocol stub deployment may be triggered by the deployment of an Hyperty or by some attempt from a local Hyperty to communicate with a remote Hyperty running in the domain served by the protocol Stub. In this case the Runtime Registry would take the initiative to start the protocol stub deploy (FFS). Such trigger may take advantage of some existing libraries like require.js (to be validated with experimentations).

**Open Issue:** In the diagram above, the protocol stub is instantiated by the native Javascript engine as a normal javascript function/object, and in its constructor the registration process is performed. Another option, is to have in the Core Runtime, a protocol stub loader functionality (a Service/Web Worker?) that would handle the instantiation of the protocol stub and its registration in the runtime.

Protocol stubs are reachable through the Message BUS and not through domain routers (should we change the name). In this way it is ensured that all messages received and sent goes through the message bus where policies can be enforced and additional data can be added or changed including message addresses and identity tokens.

When registered, protocol stubs are associated with the domainURL they connect to.

Protocol stubs are connected by using credentials handled by the Core Runtime Identities Container. To be designed by the Identity Manager group.

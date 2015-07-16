### Deploy Hyperty

<!--
@startuml "deploy-hyperty.png"

autonumber

!define SHOW_RuntimeA

!define SHOW_AppAtRuntimeA

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

!define SHOW_SP1

!include ../runtime_objects.plantuml

group discover Hyperty URL: to be designed in a separated diagram by the Id Management Group

	... ...
	RunUA@A <- App@A : deploy Hyperty(URL)

end group

RunUA@A -> SP1 : download Hyperty(URL)

create SP1H@A
RunUA@A -> SP1H@A : new

SP1H@A -> SP1H@A : Router?

SP1H@A -> RunUA@A : get Router

RunUA@A -> SP1 : get Router

create Router1@A
RunUA@A -> Router1@A : new

SP1H@A -> Router1@A : register Hyperty

Router1@A -> Router1@A : Apply SP1 policies

BUS@A <- Router1@A : register Hyperty

BUS@A -> RunReg@A : register Hyperty

group associate to Identity : to be designed in a separate diagram by Id Management Group

	RunID@A <- RunReg@A : get Identity

	... ...

	RunReg@A <- RunReg@A : set Identity

end group

group register Hyperty at SP1 Registry
	RunReg@A <- RunReg@A : collect Hyperty runtime Context data
	RunReg@A <- RunReg@A : resolve protoStub URL
	RunReg@A -> BUS@A : register Hyperty/n(ID Token)
	BUS@A -> Proto1@A : register Hyperty/n(ID Token)
	Proto1@A -> SP1 : register Hyperty

	group option: connect protocol stub to the domain in case it is still not connected yet
	
	end group

end group

@enduml
-->


![Deploy Hyperty](deploy-hyperty.png)


The Hyperty deployment may be triggered by an App or by some attempt from a local Hyperty to communicate with a remote User. In this case the Runtime Registry would take the initiative to start the protocol stub deploy (FFS). Such trigger may take advantage of some existing libraries like require.js (to be validated with experimentations).

**Open Issue:** In the diagram above, the Hyperty is instantiated by the native Javascript engine as a normal javascript function/object, and in its constructor the registration process is performed. Another option, is to have in the Core Runtime, a Hyperty loader functionality (a Service/Web Worker?) that would handle the instantiation of the Hyperty and its registration in the runtime.


Hyperties are reachable through domain routers (should we change the name?) to:
1- enable enforcement of domain proprietary policies
2- the Hyperty (data synch) communication model would be implemented by the router (connector is a better name?) and not by the Hyperty itself

When registered, Hyperties are associated with an Identity by the Registry / Identities container. Then all, messages sent by the Hyperty will be signed with a token according to the Identity associated to the Hyperty. To be designed by the Identity Manager group.

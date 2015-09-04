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

end group

alt App and Hyperty are from the same domain

	App@A -> SP1 : get\nHypertySourceCodeURL

	create SP1H@A
	App@A -> SP1H@A : new

	note right
		 In this case, it is the App
		  that instantiates the Hyperty,
		   since the RuntimeUA is not able to do it
	end note

	RunUA@A <- App@A : registerHyperty\n(HypertyDescriptorURL\n hypertyInstance )

	RunUA@A -> RunUA@A : check Hyperty\nand App domain


else App and Hyperty are from different domains

	RunUA@A <- App@A : loadHyperty\n( HypertyDescriptorURL )

	RunUA@A -> SP1 : get\nHypertySourceCodeURL

	RunUA@A -> RunReg@A : getHypertySandbox\n(HypertyDomain)

	note right
		If there is already a sandbox for the Hyperty domain
		the Hyperty is instantiated there.
		Otherwise a new sandbox has to be created.
		Sandbox management procedures are not shown here
		since it will depend on the runtime type.
	end note

	create SP1H@A
	RunUA@A -> SP1H@A : new

end group


group register Hyperty (designed at register-hyperty.md)          

RunUA@A -> RunReg@A : registerHyperty(\npostMessage,\nHypertyDescriptor )

...

RunUA@A <- RunReg@A : hypertyURL

end group


RunUA@A -> RunUA@A : HypertyDescriptor.policies?

opt There is a Hyperty policy enforcer to be deployed

	RunUA@A -> SP1 : get\nPolicyEnforcerSourceCodeURL

	create Router1@A
	RunUA@A -> Router1@A : new

	RunUA@A -> RunReg@A : registerPEP( \npepSandbox.postMessage \n, hyperty)

	RunUA@A <- RunReg@A : pep runtime URL

	RunUA@A -> Router1@A : init( pepRuntimeURL,\n bus.postMessage\n, hypertyURL)

	BUS@A <- Router1@A : addListener(\n pepListener, \npepRuntimeURL)

end group

RunUA@A -> SP1H@A : init( hypertyURL,\n bus.postMessage\n, configuration)

BUS@A <- SP1H@A : addListener(\n hypertyListener, \nhypertyURL)

@enduml
-->



The Hyperty deployment may be triggered by an App or by some attempt from a local Hyperty to communicate with a remote User. In this case the Runtime Registry would take the initiative to start the protocol stub deploy (FFS). Such trigger may take advantage of some existing libraries like require.js (to be validated with experimentations).

**Open Issue:** In the diagram above, the Hyperty is instantiated by the native Javascript engine as a normal javascript function/object, and in its constructor the registration process is performed. Another option, is to have in the Core Runtime, a Hyperty loader functionality (a Service/Web Worker?) that would handle the instantiation of the Hyperty and its registration in the runtime.


Hyperties are reachable through domain routers (should we change the name?) to:
1- enable enforcement of domain proprietary policies
2- the Hyperty (data synch) communication model would be implemented by the router (connector is a better name?) and not by the Hyperty itself

When registered, Hyperties are associated with an Identity by the Registry / Identities container. Then all, messages sent by the Hyperty will be signed with a token according to the Identity associated to the Hyperty. To be designed by the Identity Manager group.

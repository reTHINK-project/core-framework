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

	RunUA@A <- App@A : registerHyperty( HypertyInstance )

	RunUA@A -> RunUA@A : check Hyperty and App domain

	note right
		 In this case, it is the App that instantiates the Hyperty, since the RuntimeUA is not able to do it
	end note

else App and Hyperty are from different domains

	RunUA@A <- App@A : loadHyperty( HypertyCatalogueURL)

	RunUA@A -> SP1 : get HypertyCatalogueURL

	create SP1H@A
	RunUA@A -> SP1H@A : new

end group

SP1H@A -> SP1H@A : Router?

SP1H@A -> RunUA@A : get Router

RunUA@A -> SP1 : get Router

create Router1@A
RunUA@A -> Router1@A : new

RunUA@A -> Router1@A : new

RunUA@A -> RunReg@A : registerHyperty( postMessage, HypertyURL )

group associate to Identity : to be designed in a separate diagram by Id Management Group

	RunID@A <- RunReg@A : get Identity

	... ...

	RunReg@A <- RunReg@A : set Identity

end group

group allocate address for new Hyperty Instance
	RunReg@A <- RunReg@A : resolve protoStub URL
	RunReg@A -> BUS@A : postMessage( read hyperty Address Allocation MSG)

	BUS@A -> Proto1@A : postMessage( read hyperty Address Allocation MSG)

	Proto1@A -> SP1 : read hyperty Address Allocation SP1 MSG Protocol

	group option: connect protocol stub to the domain in case it is still not connected yet

	end group

end group
	
group register Hyperty at SP1 Registry
	RunReg@A <- RunReg@A : collect Hyperty runtime Context data
	RunReg@A <- RunReg@A : resolve protoStub URL
	RunReg@A -> BUS@A : postMessage( create hypertyRegistration MSG)

	BUS@A -> Proto1@A : postMessage( create hypertyRegistration MSG)

	Proto1@A -> SP1 : create hypertyRegistration SP1 MSG Protocol

	end group


@enduml
-->


![Deploy Hyperty](deploy-hyperty.png)

Message to request address allocated for new Hyperty Instance:


```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty-runtime://sp1/runalice/registry",
"to" : "sp1/msg-node/address-allocation",
"body" : { "hypertyUrl" : "hyperty://sp1/hy123" }
```

Message to Responde to request address allocated for new Hyperty Instance:

```
"id" : "1"
"type" : "RESPONSE",
"from" : "sp1/msg-node/address-allocation",
"to" : "hyperty-runtime://sp1/runalice/registry",
"body" : { "hypertyInstanceURL" : "hyperty-instance://sp1/alice/hy123" }
```

Message to Register new Hyperty Instance:

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty-runtime://sp1/runalice",
"to" : "sp1/registry",
"body" : { "hypertyURL" : "hyperty://sp1/hy123", "hypertyInstanceURL" : "hyperty-instance://sp1/hy123,
"hypertyRuntimeURL" : "hyperty-runtime://sp1/runalice,
...}
```



The Hyperty deployment may be triggered by an App or by some attempt from a local Hyperty to communicate with a remote User. In this case the Runtime Registry would take the initiative to start the protocol stub deploy (FFS). Such trigger may take advantage of some existing libraries like require.js (to be validated with experimentations).

**Open Issue:** In the diagram above, the Hyperty is instantiated by the native Javascript engine as a normal javascript function/object, and in its constructor the registration process is performed. Another option, is to have in the Core Runtime, a Hyperty loader functionality (a Service/Web Worker?) that would handle the instantiation of the Hyperty and its registration in the runtime.


Hyperties are reachable through domain routers (should we change the name?) to:
1- enable enforcement of domain proprietary policies
2- the Hyperty (data synch) communication model would be implemented by the router (connector is a better name?) and not by the Hyperty itself

When registered, Hyperties are associated with an Identity by the Registry / Identities container. Then all, messages sent by the Hyperty will be signed with a token according to the Identity associated to the Hyperty. To be designed by the Identity Manager group.

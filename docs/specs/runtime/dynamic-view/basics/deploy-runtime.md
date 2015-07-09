### Deploy runtime

<!--
@startuml "deploy-runtime.png"

autonumber

!define SHOW_RuntimeA

!define SHOW_NativeAtRuntimeA
!define SHOW_JavascriptEngineAtRuntimeA
!define SHOW_HTTPClientAtRuntimeA

!define SHOW_CoreRuntimeA
!define SHOW_MsgBUSAtRuntimeA
!define SHOW_RegistryAtRuntimeA
!define SHOW_IdentitiesAtRuntimeA
!define SHOW_AuthAtRuntimeA
!define SHOW_CoreAgentAtRuntimeA

!define SHOW_CoreRuntimeProvider

!include ../runtime_objects.plantuml

== Deploy Core Runtime ==

group option : these steps won't be needed in case the Run User Agent is already running in the device

Alice -> HTTP_UAC@A : download App with Core Runtime

HTTP_UAC@A -> CoreRunProvider : download App with Core Runtime

create RunUA@A
JS@A -> RunUA@A : new
end group 

RunUA@A -> HTTP_UAC@A : download Core Runtime\n(runtime profile)

HTTP_UAC@A -> CoreRunProvider : download Core Runtime\n(runtime profile)

create BUS@A
JS@A -> BUS@A : new

create RunReg@A
JS@A -> RunReg@A : new

create RunID@A
JS@A -> RunID@A : new

create RunAuth@A
JS@A -> RunAuth@A : new

@enduml
-->


![Deploy Core Runtime Components in the Native Runtime](deploy-runtime.png)

In case the device does not support the Hyperty Core Runtime components eg an existing browser like Chrome or a Network Node.js Server, they have to be deployed in the Device.

**Notes from 6th July H2H Comm Work Session:**

Runtime Core components should be as much as possible independent on the Runtime type. 
They should be deployed once and executed at the background. The next time the runtime is started there should be no need to download the core runtime again unless there is a new version. Runtime core components should be singletons (?) shared by different Apps and Hyperty instances. In order to support these characteristics for the Browser, Runtime Core components should be implemented with Web/Service Workers (FFS).

The Core Runtime is provided by a specific Service Provider that handles a central repository or catalog of the needed Core Runtime components.

This process may be triggered by the deployment of an Hyperty or Protocol Stub using some existing libraries like require.js. Such possibility has to be validated with experimentations.

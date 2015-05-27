## Runtime Architecture


<!--@startuml
"Runtime_Architecture.png"

 node "Application" as App 

 node "Hyperty1" as H1

 node "Hyperty2" as H2

node "Runtime" as rt {

 node "*       Event      BUS           *" as Bus

 node "Policy\nEngine" as PEP

 node "Registry" as Reg

 node "ProtOfly\nEngine" as Prot

 node "Identities\nContainer" as Id

 App -down-> H1

 App -down-> H2

 H1 -down-> Bus

 H2 -down-> Bus

 PEP -right-> Bus

 Reg -up-> Bus

 Prot -up-> Bus

 Id -[hidden]up-> Bus

 Id -right- Prot

 Id -left- Reg
	}

@enduml
-->

![Runtime Architecture](Runtime_Architecture.png)

## Runtime Types

The following runtime types according to devices types are considered:

1. Devices featuring Browsers like PCs, Smartphones and Tablets
1. Native Apps featuring some GUI deployed in End-user Devices like PCs, Smartphones and Tablets
1. IoT/M2M Gateways that aggregates sensors and atuators using different IoT/M2M networking technologies
1. Network Server Virtual Machine used eg Media Server, Media Gateway, App Server, etc
1. 

For each of these runtime types we should analyse the best strategy to support Hyperty Runtime functionalities identified above.

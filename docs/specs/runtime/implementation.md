#### Implementation Considerations according to Device Types

The following runtime types according to devices types are considered:

1. Devices featuring Browsers like PCs, Smartphones and Tablets
1. Native Apps featuring some GUI deployed in End-user Devices like PCs, Smartphones and Tablets
1. IoT/M2M Gateways that aggregates sensors and atuators using different IoT/M2M networking technologies
1. Network Server Virtual Machine used eg Media Server, Media Gateway, App Server, etc
1. 

For each of these runtime types we should analyse the best strategy to support Hyperty Runtime functionalities identified above.

Possible Strategies:
* Browser Extensions
* Docker+NodeJs
* Docker+JDK8
* NodeJs
* JDK8
* Javascript shim layer to be used in Browsers without extensions ie files implementing the Shim layer would be downloaded with the Hyperty

##### Browser Runtime

* A Service Worker is used to manage the cache of Runtime Core Components
* Hyperties and Protocol Stubs are implemented as Web Workers 
* Runtime Core components, Hyperties and Protocol Stub are executed inside an iFrame
* Web Workers are only able to interact each other with iFRame.postMessage(..) which is intercepted by the Runtime Core Components


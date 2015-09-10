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

##### [Browser Runtime](browser-runtime.md)

##### [Standalone Runtime](standalone-runtime.md)

##### [M2M/IoT Gateway Runtime](gw-runtime.md)

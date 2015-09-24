#### Deploy Protocol Stub

The main data flows to support the deployment of protocol stubs required to connect the Hyperty Runtime to a specific back-end server, is presented in the figure below and described in this section.

![Figure @runtime-deploy-protostub: Deploy Protocol Stub](deploy-protostub.png)

Steps 1-2 : The protocol stub deployment may be triggered by the deployment of an Hyperty or by some attempt from a local Hyperty to communicate with a remote Hyperty running in the domain served by the protocol Stub. In this case the Runtime Registry would take the initiative to start the protocol stub deploy (FFS). Such trigger may take advantage of some existing libraries like require.js (to be validated with experimentations). The Runtime UA only downloads and deploys requested protocol stub after checking in the Registry that there is no protocol stub available in the runtime.

Steps 3 - 5 : the Runtime UA is able to derive the URL to download the protocol stub descriptor from the domain url, since it is a well known URI defined in the reTHINK Architecture Interfaces [15]. The protocol stub descriptor contains the url that the Runtime UA uses to download and instantiate the protocol stub in the runtime. Depending on the Runtime Sandbox implementation, the download and instantiation may have to be performed inside the Sandbox.

Steps 6 - 8 : the new protocol stub is registered in the Runtime Registry, which allocates and return the runtime address (RuntimeURL) for the new runtime component. In addition, the runtime Registry requests the runtime BUS to add its listener to receive events about the protocol stub status.

Steps 9  : The Runtime UA initializes the new protocol stub with configuration data contained in its descriptor. Depending on the sandbox implementation, the initialization may have to be remotely executed by a Execution message type routed by the Message BUS.

Steps 10 : The Runtime UA adds in the runtime BUS the protostub listener to receive messages from the runtime. Protocol stubs are connected by using credentials handled by the Core Runtime Identity Module which are detailed in the [Domain Login].

Steps 11 - 12 : protocol stub publishes its status (including events about when it is connected or disconnected) in its resource status. Components registered on the protocol stub status resources, like the Registry, are notified about the new protocol status.

Message to publish Protocol Stub Status

```
"id" : "1"
"type" : "UPDATE",
"from" : "hyperty-runtime://sp1/protostub/123",
"resource" : "hyperty-runtime://sp1/protostub/123/status",

"body" : { "value" : "LIVE" }
```

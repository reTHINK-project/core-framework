#### Deploy Protocol Stub

The main data flows to support the deployment of protocol stubs required to connect the Hyperty Runtime to a specific back-end server, is presented in the figure below and described in this section.

![Figure @runtime-deploy-protostub: Deploy Protocol Stub](deploy-protostub.png)

Steps 1-2 : The Protocol Stub deployment may be triggered by the deployment of an Hyperty or by some attempt from a local Hyperty to communicate with a remote Hyperty running in the domain served by the Protocol Stub. In this case the Runtime Registry would take the initiative to start the Protocol Stub deploy. Such trigger may take advantage of some existing libraries like require.js [110]. The Runtime UA only downloads and deploys requested Protocol Stub after checking in the Registry that there is no Protocol Stub available in the Hyperty Runtime.

Steps 3 - 5 : the Runtime UA is able to derive the URL to download the Protocol Stub descriptor from the domain URL, since it is a well known URI defined in the reTHINK Architecture Interfaces [15]. The Protocol Stub descriptor contains the URL that the Runtime UA uses to download and instantiate the Protocol Stub in the runtime. Depending on the Runtime Sandbox implementation, the download and instantiation may have to be performed inside the Sandbox.

Steps 6 - 8 : the new Protocol Stub is registered in the Runtime Registry, which allocates and returns the runtime address (RuntimeURL) for the new runtime component. In addition, the runtime Registry requests the runtime BUS to add its listener to receive events about the Protocol Stub status.

Steps 9 : The Runtime UA initializes the new Protocol Stub with configuration data contained in its descriptor. Depending on the sandbox implementation, the initialization may have to be remotely executed by a Execution message type routed by the Message BUS.

Steps 10 : The Runtime UA adds in the runtime BUS the protostub listener to receive messages from the runtime. Protocol stubs are connected by using credentials handled by the Core Runtime Identity Module which are detailed in the [Domain Login].

Steps 11 - 12 : Protocol Stub publishes its status (including events about when it is connected or disconnected) in its resource status. Components registered on the Protocol Stub status resources, like the Registry, are notified about the new protocol status.

Message to publish Protocol Stub Status

```
"id" : "1"
"type" : "UPDATE",
"from" : "hyperty-runtime://sp1/protostub/123",
"resource" : "hyperty-runtime://sp1/protostub/123/status",

"body" : { "value" : "LIVE" }
```

##### Discussion items

1. Need to rename back-end service to catalogue to make relation between components clear
2. Who is initiating message 1 (loadstub)? It it coming from the same or from different sandbox? --> several components might initiate message;  can come from same or from other sandbox
3. For message 3, the "sp-domain" is coming from message 1 --> rename domain in message 1 and 2 to sp-domain
4. Message 3 incomplete.  path in url not correct.  likely need to include /default.  Align with agreed fromat per Aveiro meeting.
4. Missing message 3a (response + what is in there = the protocol stub descriptor of the default protocol stub)

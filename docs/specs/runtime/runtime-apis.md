## Runtime APIs

*Should we use Typescript interfaces to define Runtime APIs?*

### Message BUS

To send messages with optional call back

    postMessage( Message.Message message , callback)

To listen to messages published on a certain resource

    addListener( listener, URL.URL resource )
    
### Hyperty

    init( postMessage )
    report(message)

### Policy Enforcer

To set postMessage() function to be used by the Policy Enforcer to send messages usually the "MessageBUS". 

    setSender( postMessage )
    
To set postMessage() function to be used by the Policy Enforcer to receive messages usually the Hyperty or a Syncher. In case the resouce parameter is provided this postMessage() is only valid for messages containing the same resource url.

    setReceiver( postMessage, resource )

To receive messages from the message BUS

    postMessage(message)

### Syncher

*should we distinguish between Reporter and Observer syncher?*

To set postMessage() function to be used by the Syncher to send messages usually a "Policy Enforcer" but it could also be the MessageBUS. 

    setSender( postMessage )

Hyperty instance uses this function to provide the object to be changed by the (observer) syncher according to messages received. The Hyperty instance has previsouly used the *Object.observe* javascript api to set as an observer of this object

    Promise <SyncObject> createAsObserver(  receivedMessage )

To create a new object and ask another Hyperty instance to observe it. A Create Message will be generated and sent by the Syncher. Promise is used to handle Response messages to this object. 

    Promise <SyncObject> createAsReporter(  resourceURL, schemaURL, toURL, dataObject?)
    
By default the events triggered by changes performed on this object by the Resporter Hyperty will trigger the synchronisation process. Otherwise the Hyperty instance should invoke a separate function, *addAttribute()*, *updateAttribute()*, *deleteAttribute()* defined below and afterwards invoke the *synch()* function to trigger the synchronisation process.

To add an attribute to object without triggering the synchronisation process:

    addAttribute(resourceURL, attributeName, attributeValue)

To update an attribute without triggering the synchronisation process:

    updateAttribute(resourceURL, attributeName, attributeValue)

To delete an attribute without triggering the synchronisation process:

    deleteAttribute(objectId, attributeName)

To delete an Object:

    delete(objectId)
    
To trigger the synchronisation process:

    Promise synch(objectId)

To receive messages from other Hyperties that will be reported to the Hyperty:

    postMessage(message)

### protoStub

To initialise the protocol stub including as input parameters its allocated component runtime url, the runtime BUS postMessage function to be invoked on messages received by the protocol stub and required configuration retrieved from protocolStub descriptor.

    init( RuntimeURL runtimeProtoSubURL, bus.postMessage, ProtoStubDescriptor.configuration configuration )
    
    connect(  )
    
    
    disconnect(  )
    postMessage(message)
    addListener( onMessage )

### HypertySandbox

    postMessage(message)

### Runtime UA

Download Hiperty from Catalogue URL

    loadHyperty( URL )
 
Download Stub from Catalogue URL or domain url

    loadStub( URL )

Used to check for updates about components handled in the Catalogue including protocol stubs and Hyperties. *check relationship with lifecycle management provided by Service Workers*

    checkForUpdate(CatalogueURL)
    
    discoverHiperty(applId, OSname, capability_list) 
    accomodate interoperability in H2H and proto on the fly for newly discovered devices in M2M
    
     
### Registry

To register a new Hyperty in the runtime which returns the HypertyURL allocated to the new Hyperty.

    HypertyURL registerHyperty( hypertySandbox.postMessage, hypertyUrl)
    
To unregister a previously registered Hyperty

     unregisterHyperty( HypertyURL )
    
To register a new Protocol Stub in the runtime including as input parameters the function to postMessage, the DomainURL that is connected with the stub, which returns the RuntimeURL allocated to the new ProtocolStub.

    HypertyRuntimeURL registerStub( stub.postMessage, DomainURL )
    
To unregister a previously registered protocol stub

     unregisterStub( HypertyRuntimeURL )

To receive status events from components registered in the Registry

    onEvent( Message.Message event )

To discover protocol stubs available in the runtime for a certain domain. If available, it returns the runtime url for the protocol stub that connects to the requested domain. Required by the runtime BUS to route messages to remote servers or peers (*do we need something similar for Hyperties?*).

    RuntimeURL discoverProtostub( DomainURL )

### Identities Container

Functions to deal with assertions compliant with [WebRTC RTCIdentityProvider](http://w3c.github.io/webrtc-pc/#identity-provider-interaction)

    IdAssertion generateAssertion( contents, origin, usernameHint )
    validateAssertion( assertion, origin )

### LHCB

    getCurrentConnectivityStatistics()
    sendConnectivityStatisticsToBroker()
    

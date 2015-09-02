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

    disconnect(  )
    connect(  )
    postMessage(message)
    addListener( onMessage )

### HypertySandbox

    postMessage(message)

### Runtime UA

Download Hiperty from URL

    loadHyperty( URL )
 
 Download Stub from URL

    loadStub( URL )
    
    discoverHiperty(applId, OSname, capability_list) 
    accomodate interoperability in H2H and proto on the fly for newly discovered devices in M2M
    
    checkForHipertyUpdate(URL)
    used by Applications or Hiperties to check for updates
     
### Registry

To register a new Hyperty in the runtime which returns the HypertyURL allocated to the new Hyperty.

    HypertyURL registerHyperty( hypertySandbox.postMessage, hypertyUrl)
    
To register a new Protocol Stub in the runtime which returns the RuntimeURL allocated to the new ProtocolStub.

    registerStub( stub.postMessage, address )

### Identities Container

Functions to deal with assertions compliant with [WebRTC RTCIdentityProvider](http://w3c.github.io/webrtc-pc/#identity-provider-interaction)

    IdAssertion generateAssertion( contents, origin, usernameHint )
    validateAssertion( assertion, origin )

### LHCB

    getCurrentConnectivityStatistics()
    sendConnectivityStatisticsToBroker()
    

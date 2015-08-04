## Runtime APIs

### Message BUS

    postMessage( message , callback)
    
### Hyperty

    init( bus )
    report(message)

### Syncher

To create a new object and ask another Hyperty instance to observe it. A Create Message will be generated and sent by the Syncher. Promise is used to handle Response messages to this object. 

    Promise  create( object, resourceURL, to)
    
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

    loadHyperty( URL )
    download Hiperty from URL
    
    loadStub( URL )
    download Stub from URL
    
    discoverHiperty(applId, OSname, capability_list) 
    accomodate interoperability in H2H and proto on the fly for newly discovered devices in M2M
    
    checkForHipertyUpdate(URL)
    used by Applications or Hiperties to check for updates
     
### Registry

    registerHyperty( hypertySandbox, address )
    registerStub( stub.postMessage, address )

### Identities Container

Functions to deal with assertions compliant with [WebRTC RTCIdentityProvider](http://w3c.github.io/webrtc-pc/#identity-provider-interaction)

    IdAssertion generateAssertion( contents, origin, usernameHint )
    validateAssertion( assertion, origin )

### LHCB

    getCurrentConnectivityStatistics()
    sendConnectivityStatisticsToBroker()
    

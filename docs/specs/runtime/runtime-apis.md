## Runtime APIs

### Message BUS

    postMessage( message , callback)
    
### Hyperty

    init( bus )
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
    loadStub( URL )
    discoverHiperty(applId, OSname, capability_list)
    registerHipertyInstance()
    checkForHipertyUpdate()
     
### Registry

    registerHyperty( hypertySandbox, address )
    registerStub( stub.postMessage, address )

### Catalogue

    createHipertySmartObjectInstance(applId, HipertyObjectId)
    updateHipertySmartObjectInstance(HipertyURL, key-value-pair resource values)
    
### Identities Container

Functions to deal with assertions compliant with [WebRTC RTCIdentityProvider](http://w3c.github.io/webrtc-pc/#identity-provider-interaction)

    IdAssertion generateAssertion( contents, origin, usernameHint )
    validateAssertion( assertion, origin )

### LHCB

    getCurrentConnectivityStatistics()
    sendConnectivityStatisticsToBroker()
    

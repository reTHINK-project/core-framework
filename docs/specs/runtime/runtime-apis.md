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
    discoverHiperty(applId, OSname, capability_list) - used to accomodate interoperability in H2H and proto on the fly for newly discovered devices in M2M
    checkForHipertyUpdate(URL) - to be used by Applications or Hiperties to check for updates
     
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
    

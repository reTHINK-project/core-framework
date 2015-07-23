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
    
### Registry

    registerHyperty( hypertySandbox, address )
    registerStub( stub.postMessage, address )

### Catalogue

    createHipertyInstance(applId, HipertyObjectId)
    updateHipertyInstance(HipertyURL, key-value-pair resource values)
    

End-User-device components

### Bootstrap module

    discoverHiperty(applId, OSname, capability_list)
    downloadHiperty()
    registerHipertyInstance()
    checkForHipertyUpdate()
    
### LHCB

    getCurrentConnectivityStatistics()
    sendConnectivityStatisticsToBroker()
    

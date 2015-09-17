## Runtime APIs

This section describes the programmable interfaces to be implemented by each Hyperty Runtime Component. These interfaces will evolve according to input received from the implementation tasks. Data types defined in [D2.2] are used as much as possible to describe input and output parameters of interface functions.

### Runtime User Agent Interface

#### registerHyperty

Register Hyperty deployed by the App that is passed as input parameter. To be used when App and Hyperties are from the same domain otherwise the RuntimeUA will raise an exception and the App has to use the loadHyperty(..) function.

    registerHyperty( Object hypertyInstance, URL.HypertyCatalogueURL descriptor )

#### loadHyperty

Deploy Hiperty from Catalogue URL

    loadHyperty( URL.URL hyperty)

#### loadStub

Deploy Stub from Catalogue URL or domain url

    loadStub( URL.URL stub)

#### checkForUpdate

Used to check for updates about components handled in the Catalogue including protocol stubs and Hyperties. *check relationship with lifecycle management provided by Service Workers*

    checkForUpdate(CatalogueURL url)
    
#### discoverHiperty

accomodate interoperability in H2H and proto on the fly for newly discovered devices in M2M

    discoverHiperty( CatalogueDataObject.HypertyDescriptor descriptor) 



### Runtime Registry Interface

#### init

To initialise the Runtime Registry with the RuntimeURL that will be the basis to derive the internal runtime addresses when allocating addresses to internal runtime component. In addition, the Registry domain back-end to be used to remotely register Runtime components, is also passed as input parameter.

    init( HypertyRuntimeURL runtimeURL, DomainURL remoteRegistry )

#### registerHyperty

To register a new Hyperty in the runtime which returns the HypertyURL allocated to the new Hyperty.

    HypertyURL registerHyperty( postMessage, HypertyCatalogueURL descriptor)
    
#### unregisterHyperty

To unregister a previously registered Hyperty

     unregisterHyperty( HypertyURL url )

#### registerStub
    
To register a new Protocol Stub in the runtime including as input parameters the function to postMessage, the DomainURL that is connected with the stub, which returns the RuntimeURL allocated to the new ProtocolStub.

    HypertyRuntimeURL registerStub( postMessage, DomainURL )
    
#### unregisterStub

To unregister a previously registered protocol stub

     unregisterStub( HypertyRuntimeURL )

To register a new Policy Enforcer in the runtime including as input parameters the function to postMessage, the HypertyURL associated with the PEP, which returns the RuntimeURL allocated to the new Policy Enforcer component.

#### registerPEP

    HypertyRuntimeURL registerPEP( postMessage, HypertyURL hyperty )

#### unregisterPEP

To unregister a previously registered protocol stub

     unregisterPEP( HypertyRuntimeURL )


#### onEvent

To receive status events from components registered in the Registry

    onEvent( Message.Message event )

#### discoverProtostub

To discover protocol stubs available in the runtime for a certain domain. If available, it returns the runtime url for the protocol stub that connects to the requested domain. Required by the runtime BUS to route messages to remote servers or peers (*do we need something similar for Hyperties?*).

    RuntimeURL discoverProtostub( DomainURL url)

#### getSandbox

To discover sandboxes available in the runtime for a certain domain. Required by the runtime UA to avoid more than one sandbox for the same domain.

    RuntimeSandbox getSandbox( DomainURL url )

#### resolve

To verify if source is valid and to resolve target runtime url address if needed (eg protostub runtime url in case the message is to be dispatched to a remote endpoint ).

    Message.Message resolve( Message.Message message )

### Message BUS Interface

To send messages with optional call back. This function is accessible outside the Core runtime.

#### postMessage

    postMessage( Message.Message message , callback)


#### addListener

To add "listener" functions to be called when routing messages published on a certain "resource" or send to a certain url. This function is only accessible by internal Core Components.

    addListener( listener, URL.URL url )

#### removeListener

To remove previously added listeners. This function is only accessible by internal Core Components.

    removeListener( listener, URL.URL url )

#### addPEP

To add an interceptor Policy Enforcer which "listener" function is called when routing messages published on "interceptedURL" or send to the "interceptedURL". To avoid infinite cycles messages originated with from "pepURL" are not intercepted.
This function is only accessible by internal Core Components.

    addPEP( listener, URL.URL pepURL, URL.URL interceptedURL)
    
#### removePEP

To remove a previously added interceptor Policy Enforcer. This function is only accessible by internal Core Components.

    removePEP( listener, URL.URL pepURL)


### Hyperty Interface

#### init

To initialise the Hyperty instance including as input parameters its allocated Hyperty url, the runtime BUS postMessage function to be invoked to send messages and required configuration retrieved from Hyperty descriptor.

    init( HypertyURL url, postMessage, ProtoStubDescriptor.ConfigurationDataList configuration )
    
    
#### postMessage

To post messages to be received by the Hyperty instance

    postMessage(Message.Message message)
    
    

### Policy Enforcer Interface

#### init

To initialise the Policy Enforcer including as input parameters its allocated component runtime url, the runtime BUS postMessage function to be invoked to send messages and the url of the Hyperty associated to the Policy Enforcer (it will forward received and processed messages to this address).

    init( URL.RuntimeURL pepURL, bus.postMessage , HypertyURL hyperty)

#### postMessage

To receive messages from the message BUS

    postMessage(Message.Message message)


### protoStub Interface

#### init

To initialise the protocol stub including as input parameters its allocated component runtime url, the runtime BUS postMessage function to be invoked on messages received by the protocol stub and required configuration retrieved from protocolStub descriptor.

    init( URL.RuntimeURL runtimeProtoSubURL, bus.postMessage, ProtoStubDescriptor.ConfigurationDataList configuration )

#### connect

To connect the protocol stub to the back-end server    

    connect( identity )
    
#### disconnect

To disconnect the protocol stub.    
    
    disconnect(  )

#### postMessage

To post messages to be dispatched by the protocol stub to connected back-end server.

    postMessage(Message.Message message)

### Syncher

#### setSender

To set postMessage() function to be used by the Syncher to send messages, i.e. "Policy Enforcer" or  the MessageBUS. 

    setSender( postMessage )

#### createAsObserver

Hyperty instance uses this function to provide the object to be changed by the (observer) syncher according to messages received. The Hyperty instance has previsouly used the *Object.observe* javascript api to set as an observer of this object

    Promise <SyncObject> createAsObserver(  receivedMessage )

#### createAsReporter

To create a new object and ask another Hyperty instance to observe it. A Create Message will be generated and sent by the Syncher. Promise is used to handle Response messages to this object. 

    Promise <SyncObject> createAsReporter(  resourceURL, schemaURL, toURL, dataObject?)
    
#### postMessage

To receive messages from other Hyperties that will be reported to the Hyperty.

    postMessage(Message.Message message)

### Service Provider Sandbox interface

#### postMessage

To send messages to components running in the sandbox

    postMessage(Message.Message message)


### Identity Module Interface

Functions to deal with assertions compliant with [WebRTC RTCIdentityProvider](http://w3c.github.io/webrtc-pc/#identity-provider-interaction)

#### generateAssertion

Generates an Identity Assertion

    IdAssertion generateAssertion( contents, origin, usernameHint )

#### validateAssertion

Validates an Identity Assertion

    validateAssertion( assertion, origin )

### Core Policy Decision Point (PDP) Interface

#### addPolicies

To add policies to be enforced for a certain deployed Hyperty Instance.

    addPolicies( URL.HypertyURL hyperty, HypertyPolicyList policies)

#### removePolicies

To remove previously added policies for a certain deployed Hyperty Instance.

    removePolicies( URL.HypertyURL hyperty)

#### authorise

Authorisation request to send a Message. Returns PolicyAction in the AuthorisationResponse, to be performed in case authorisation is not granted.

    AuthorisationResponse authorise( Message.Message message)

### Core Policy Enforcement Point (PEP) Interface

#### enforce

Enforcement request to perform a PolicyAction in a Message. Returns the Message resulted from the action performed.

    EnforceResponse enforce( PolicyAction action, Message.Message message)



### QoS User Agent Interface

#### getCurrentConnectivityStatistics

Get Connectivity Statistics data

    getCurrentConnectivityStatistics( .. )

#### sendConnectivityStatisticsToBroker

Sends Connectivity Statistics data to QoS Broker.

    sendConnectivityStatisticsToBroker( ... )
    

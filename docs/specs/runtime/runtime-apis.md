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

To register a new Hyperty in the runtime passing as input parameters the postMessage function to be called to post a message to the hyperty and its descriptor. This function returns the HypertyURL allocated to the new Hyperty.

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

#### registerDataObject

To register a new Data Object in the runtime passing as input parameters the Hyperty instance URL owning the data object, the URL of the dataObject, other Hyperties instances that are authorised to read the data object and its schema. In addition it may be requested to allocate a new address for the data object (addressAllocationRequired) and to register it at the backend Registry (backendRegistryRequired). This function returns the URL allocated to the new Data Object in case addressAllocationRequired is true.

    URL.URL registerDataObject( URL.HypertyUrl owner, URL.URL dataObjectUrl (?), HypertyUrlList readers, HypertyCatalogueURL schema (?), boolean addressAllocationRequired (?), boolean backendRegistryRequired (?))
    
#### unregisterDataObject

To unregister a previously registered Data Object

     unregisterDataObject( URL.URL url )

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

    Promise <URL.URL> resolve( URL.URL url )

### Message BUS Interface

To send messages. This function is accessible outside the Core runtime.

#### postMessage

    postMessage( Message.Message message )


#### addListener

To add "listener" functions to be called when routing messages published on a certain "resource" or send to a certain url. Messages are routed to input parameter "redirectTo" in case listener is not in the Core Runtime. This function is only accessible by internal Core Components. To remove the listener just call remove() function from returned object.

    MsgListener addListener( URL.URL url, listener, URL.URL redirectTo )



#### addInterceptor

To add an interceptor (eg a Policy Enforcer) which "listener" function is called when routing messages published on "interceptedURL" or send to the "interceptedURL". To avoid infinite cycles messages originated with from "interceptorURL" are not intercepted. To remove the interceptor just call remove() function from returned object.
This function is only accessible by internal Core Components.

    Interceptor addInterceptor( URL.URL interceptedURL, listener, URL.URL interceptorURL, )
    

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

To set postMessage() function to be used by the Syncher to send messages, i.e. the MessageBUS postMessage() function. 

    setSender( postMessage )

#### createAsObserver

Hyperty instance uses this function to provide the object to be changed by the (observer) syncher according to messages received. The Hyperty instance has previsouly used the *Object.observe* javascript api to set as an observer of this object

    createAsObserver( Message.Message receivedMessage )

#### createAsReporter

To start the synchronisation process for the dataObject passed as input parameter. The Syncher will use the *Object.observe* javascript api to set as an observer of this object. Everytime the Hyperty instance changes this object, the syncher will send an Update Message with changed data to ResourceURL address.

    createAsReporter(  dataObject, URL.URL resourceURL, URL.HypertyCatalogueURL schemaURL )
    
#### postMessage

To receive Update messages from Reporter Hyperties that will trigger the change of the Object under observation by the Hyperty Instance.

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

### Core Policy Engine (PDP/PEP) Interface

#### addPolicies

To add policies to be enforced for a certain deployed Hyperty Instance.

    addPolicies( URL.HypertyURL hyperty, HypertyPolicyList policies)

#### removePolicies

To remove previously added policies for a certain deployed Hyperty Instance.

    removePolicies( URL.HypertyURL hyperty)

#### authorise

Authorisation request to send a Message. Returns an AuthorisationResponse containing a authorised of boolean type and the Message to be routed in case authorised = true.

    AuthorisationResponse authorise( Message.Message message)

#### authoriseSubscription

Authorisation request to accept a Subscription for a certain resource. Returns a Response Message to be returned to Subscription requester.

    Message.Message authoriseSubscription( Message.Message subscription)
    

### QoS User Agent Interface

#### getCurrentConnectivityStatistics

Get Connectivity Statistics data

    getCurrentConnectivityStatistics( .. )

#### sendConnectivityStatisticsToBroker

Sends Connectivity Statistics data to QoS Broker.

    sendConnectivityStatisticsToBroker( ... )
    

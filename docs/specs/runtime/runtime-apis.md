Runtime APIs
------------

This section describes the programmable interfaces to be implemented by each Hyperty Runtime Component. These interfaces will evolve according to input received from the implementation tasks. Data types defined in D2.2[15] are used as much as possible to describe input and output parameters of interface functions.

### Runtime User Agent Interface

#### loadHyperty

Deploy Hyperty from Catalogue URL.

```
loadHyperty( URL.URL hyperty)
```

#### loadStub

Deploy Stub from Catalogue URL or domain url

```
loadStub( URL.URL stub)
```

#### checkForUpdate

This is used to check for updates about components handled in the Catalogue including protocol stubs and Hyperties.

```
checkForUpdate(CatalogueURL url)
```

#### discoverHyperty

Accomodate interoperability in H2H and protocol on the fly for newly discovered devices in M2M

```
discoverHyperty( CatalogueDataObject.HypertyDescriptor descriptor)
```

### Runtime Registry Interface

#### Constructor

To initialise the Runtime Registry with the RuntimeURL that will be the basis to derive the internal runtime addresses when allocating addresses to internal runtime component as well as the sandbox where the App is running (it is assumed there is just one App per Runtime instance). In addition, the Registry domain back-end to be used to remotely register Runtime components, is also passed as input parameter.

```
Registry( Object msgbus, HypertyRuntimeURL runtimeURL, Sandbox app, DomainURL remoteRegistry )
```

#### registerHyperty

To register a new Hyperty in the runtime passing as input parameters the sandbox instance where the Hyperty is deployed and its descriptor URL. This function returns the HypertyURL allocated to the new Hyperty.

```
HypertyURL registerHyperty( Sandbox sandbox, HypertyCatalogueURL descriptorURL)
```

#### unregisterHyperty

To unregister a previously registered Hyperty

```
 unregisterHyperty( HypertyURL url )
```

#### registerStub

To register a new Protocol Stub in the runtime including as input parameters the sandbox where ProtocolStub is deployed, the DomainURL that is connected with the stub, which returns the RuntimeURL allocated to the new ProtocolStub.

```
HypertyRuntimeURL registerStub( sandbox, DomainURL )
```

#### unregisterStub

To unregister a previously registered Protocol Stub

```
 unregisterStub( HypertyRuntimeURL )
```

#### registerDataObject

To register a new Data Object in the runtime passing as input parameters the Hyperty instance URL owning the data object, the URL of the dataObject, other Hyperties instances that are authorised to read the data object and its schema. In addition it may be requested to allocate a new address for the data object (addressAllocationRequired) and to register it at the backend Registry (backendRegistryRequired). This function returns the URL allocated to the new Data Object in case addressAllocationRequired is true.

```
URL.URL registerDataObject( URL.HypertyUrl owner, URL.URL dataObjectUrl (?), HypertyUrlList readers, HypertyCatalogueURL schema (?), boolean addressAllocationRequired (?), boolean backendRegistryRequired (?))
```

#### unregisterDataObject

To unregister a previously registered Data Object

```
 unregisterDataObject( URL.URL url )
```

#### registerInterceptor

To register a new Interceptor in the Hyperty Runtime including as input parameters the sandbox where the Interceptor is deployed, the URL associated with the intercepted component, which returns the RuntimeURL allocated to the new Interceptor component.

```
HypertyRuntimeURL registerInterceptor( sandbox, HypertyURL hyperty )
```

#### unregisterInterceptor

To unregister a previously registered Protocol Stub

```
 unregisterInterceptor( HypertyRuntimeURL )
```

#### onEvent

To receive status events from components registered in the Runtime Registry

```
onEvent( Message.Message event )
```

#### discoverProtostub

This function is used to discover protocol stubs available in the runtime for a certain domain. If available, it returns the runtime URL for the Protocol Stub that connects to the requested domain. Required by the runtime BUS to route messages to remote servers or peers.

```
RuntimeURL discoverProtostub( DomainURL url)
```

#### getSandbox

This function is used to discover sandboxes available in the runtime for a certain HypertyCatalogueURL. It is required by the runtime UA to avoid the creation of more than one protocol stub sandbox, to discover the sandbox where an component identified by the "url" is executing or to discover the sandbox where a component described with the url descriptor should be deployed.

```
Sandbox getSandbox( URL.HypertyCatalogueURL url )
```

#### getAppSandbox

This function is used to return the sandbox instance where the Application is executing. It is assumed there is just one App per Runtime instance.

```
Sandbox getAppSandbox( )
```

#### resolve

This function is used to verify if source is valid and to resolve target runtime url address if needed (e.g. ProtoStub runtime url in case the message is to be dispatched to a remote endpoint ).

```
Promise <URL.URL> resolve( URL.URL url )
```

### Message BUS Interface

To send messages. This function is accessible outside the Core runtime.

#### postMessage

```
postMessage( Message.Message message )
```

#### addListener

To add "listener" functions to be called when routing messages published on a certain "resource" or send to a certain url. This function is only accessible by internal Core Components. To remove the listener just call remove() function from returned object. In case `url = "*"` the listener is called in case there is no other listener registered for the `Message.to`.

```
MsgListener addListener( URL.URL url, Object listenerFunction )
```

### Hyperty Interface

#### Constructor

To initialise the Hyperty instance including as input parameters its allocated Hyperty url, the runtime BUS postMessage function to be invoked to send messages and required configuration retrieved from Hyperty descriptor.

```
Hyperty( HypertyURL url, postMessage, ProtoStubDescriptor.ConfigurationDataList configuration )
```

### Interceptor Interface

*probably this interface won't be need and all the procedures will be handled by the sandbox.deployInterceptor(). to be further studied*

#### Constructor

To create an Interceptor it is required as input parameters its allocated component runtime url, the runtime BUS postMessage function to be invoked to send messages and the url of the Hyperty associated to the Policy Enforcer (it will forward received and processed messages to this address).

```
Interceptor( URL.RuntimeURL pepURL, postMessageFunction , HypertyURL hyperty)
```

### protoStub Interface

#### Construtor

To initialise the Protocol Stub including as input parameters its allocated component runtime url, the runtime BUS postMessage function to be invoked on messages received by the Protocol Stub and required configuration retrieved from protocolStub descriptor.

```
protostub( URL.RuntimeURL runtimeProtoSubURL, bus.postMessage, ProtoStubDescriptor.ConfigurationDataList configuration )
```

#### connect

To connect the Protocol Stub to the back-end server

```
connect( identity )
```

#### disconnect

To disconnect the Protocol Stub.

```
disconnect(  )
```

#### postMessage

To post messages to be dispatched by the Protocol Stub to connected back-end server.

```
postMessage(Message.Message message)
```

### Syncher

#### createAsObserver

Hyperty instance uses this function to provide the object to be changed by the (observer) syncher according to messages received. The Hyperty instance has previously used the *Object.observe* JavaScript API to set as an observer of this object

```
SyncObject createAsObserver( Message.Message receivedMessage )
```

#### createAsReporter

To start the synchronisation process for the dataObject passed as input parameter. The Syncher will use the *Object.observe* JavaScript api to set as an observer of this object. Everytime the Hyperty instance changes this object, the syncher will send an Update Message with changed data to ResourceURL address.

```
SyncObject createAsReporter( URL.URL resourceURL, URL.HypertyCatalogueURL schemaURL, JSON initialData)
```

#### postMessage

To receive Update messages from Reporter Hyperties that will trigger the change of the Object under observation by the Hyperty Instance.

```
postMessage(Message.Message message)
```

### Sandbox interface

#### constructor

Constructor to instantiate a sandbox passing as input parameter the Message Bus instance that the sandbox will use to send messages to components outside the sandbox.

```
Sandbox( MessageBUS msgbus )
```

#### deployComponent

To download and deploy a new component in the sandbox passing as input parameters the url from where the components is downloaded, the componentURL address previously allocated to the component and its configuration.

```
deployComponent( URL.URL componentDownloadURL, URL.URL componentURL, Object configuration )
```

#### removeComponent

To remove a component from the sandbox passing as input parameters its URL.

```
removeComponent( URL.URL componentURL )
```

#### deployInterceptor

To download and deploy a new interceptor in the sandbox passing as input parameters the interceptor source code, the interceptorURL address previously allocated to the interceptor, its configuration, the intercepted sandbox, the intercepted component URL (eg Hyperty URL), the listener registered in the MsgBUS for the intercepted component and the listener registered in the intercepted component sandbox for the MessageBUS.

```
deployInterceptor( Object interceptorSource, URL.URL interceptorURL, Object configuration, RuntimeSandbox interceptedSandbox, URL.URL interceptedUrl, MsgListener interceptedMsgBusListener, MsgListener interceptedSandboxListener )
```

The following steps should be performed:

Replace in the MessageBUS the intercepted sandbox listener by the interceptor sandbox listener:

```
 MessageBUS.addListener( interceptedUrl, this.postMessage )
 interceptedMsgBusListener.remove()
```

Replace in the intercepted sandbox the "\*" listener by the interceptor sandbox listener:

```
 interceptedSandbox.addListener( "\*", this.postMessage )
 interceptedSandboxListener.remove()
```

Adds the interceptor component listener (inMiniBUS listener inside the sandbox) to the Sandbox Minibus:

```
this.addListener( interceptedUrl, mini.postMessage )
```

Adds the intercepted sandbox listener to the minibus listener inside the sandbox:

```
mini.addListener( interceptedUrl, interceptedSandbox.postMessage )
```

#### removeComponent

To remove a component from the sandbox passing as input parameters its URL.

```
removeComponent( URL.URL componentURL )
```

#### postMessage

To send messages to components running in the sandbox

```
postMessage(Message.Message message)
```

### Identity Module Interface

Functions to deal with assertions compliant with [WebRTC RTCIdentityProvider](http://w3c.github.io/WebRTC-pc/#identity-provider-interaction)

#### generateAssertion

Generates an Identity Assertion

```
IdAssertion generateAssertion( contents, origin, usernameHint )
```

#### validateAssertion

Validates an Identity Assertion

```
validateAssertion( assertion, origin )
```

#### registerIdentity

Registers a previously created Identity in the Identity Module providing the IdP URL and the user identifier.

```
registerIdentity( URL.DomainURL IdP, Identity.AuthenticationData.IDToken user )
```

#### unregisterIdentity

Removes a previously registered Identity in the Identity Module providing its identifier.

```
removeIdentity( Identity.identifier user )
```

### Core Policy Engine (PDP/PEP) Interface

#### addPolicies

To add policies to be enforced for a certain deployed Hyperty Instance.

```
addPolicies( URL.HypertyURL hyperty, HypertyPolicyList policies)
```

#### removePolicies

To remove previously added policies for a certain deployed Hyperty Instance.

```
removePolicies( URL.HypertyURL hyperty)
```

#### authorise

Authorisation request to send a Message. Returns an AuthorisationResponse containing a authorised of boolean type and the Message to be routed in case authorised = true.

```
AuthorisationResponse authorise( Message.Message message)
```

#### authoriseSubscription

Authorisation request to accept a Subscription for a certain resource. Returns a Response Message to be returned to Subscription requester.

```
Message.Message authoriseSubscription( Message.Message subscription)
```

### QoS User Agent Interface

#### getCurrentConnectivityStatistics

Get Connectivity Statistics data. To be completed.

```
getCurrentConnectivityStatistics( )
```

#### sendConnectivityStatisticsToBroker

Sends Connectivity Statistics data to QoS Broker. To be completed.

```
sendConnectivityStatisticsToBroker(  )
```


### Graph Connector Interface

#### generateGUID

Returns list of words from which a public/private key pair is deterministically generated. With the public key, the GUID is generated. The implementation would be similar to how it is done in deterministic bitcoin wallets (https://github.com/spesmilo/electrum). The key files then would not have to be backed up anywhere, it suffices to note the list of words.

```
generateGUID( )
```

#### useGUID
Uses the previously generated GUID, identified by the given list of words.

```
useGUID(List<String> wordList)
```

#### addContact

Add a contact to Graph Connector.

```
addContact(GUID guid, String name)
```

#### getContact

Get the GUID from contact from the Graph Connector.

```
getContact(String name)
```

#### removeContact

Remove contact from Graph Connector.

```
removeContact(GUID guid)
```

#### addContactsBloomFilter2Hop

In order to be able to realize a trust engine, and to build an actual graph, when adding contacts, some information about the contact's contacts are added. Here, not the GUIDs of those contacts are shared directly, but a Bloom filter that contains all contacts. (See https://en.wikipedia.org/wiki/Bloom_filter for more details on Bloom filters.) This way, privacy is not compromised. The only information that the receiving user has is the Bloom filter that makes it possible to check if a unknown GUID (e.g., when receiving a call from a unknown user) is (most likely) a contact of one of your contacts. This can be done for multiple hops as well, analogous additional functions are needed.

```
addContactsBloomFilter2Hop(GUID guid, BloomFilter bloomfilter)
```

#### createBloomFilter2Hop

An internal method ORs all 2-Hop Bloom filters in order to speed up up the lookup process.

```
createBloomFilter2Hop()
```

#### getContactsBloomFilter

Returns the Bloom filter containing all direct contacts.

```
getContactsBloomFilter()
```

#### checkGUID

Checks, whether a GUID is in the Graph Connector and returns if it is a direct contact, 2-hops away, etc.

```
checkGUID(GUID guid)
```

#### setPrivate

Mark contact as private in order for it to not be used in the contacts Bloom filter.

```
setPrivate(GUID)
```

#### exportGraphData

Exports the graph data. Data format tbd.

```
exportGraphData(?)
```

#### importGraphData

Imports the graph data. Data format tbd.

```
importGraphData(?)
```

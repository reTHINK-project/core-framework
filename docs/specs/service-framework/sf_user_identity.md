### UserIdentityFactory

The UserIdentityFactory creates communication objects according the [User Identity Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/user-identity)

####Identity Object
The Identity Object has following class object attributes:
* ```guid``` - a global unique identifier
* ```identifiers``` -  identifiers of type UserURL

####Identity Type (Enumeration)
``var IdentityType = new enums.Enum("HUMAN", "ORGANISATION", "PHYSICAL SPACE","PHYSICAL OBJECT");``

####IdAssertion Object
The IdAssertion  Object has following class object attributes:
* ```assertion``` - An identity assertion. This is an opaque string that must contain all information necessary to assert identity. This value is consumed by the validating IdP. (defined in http://w3c.github.io/webrtc-pc/)
* ```idp``` -  An IdP provides these details to identify the IdP that validates the identity assertion. This struct contains the same information that is provided to setIdentityProvider. (defined in http://w3c.github.io/webrtc-pc/)
* ```scope``` -  type string

Identity may also handle Identity Assertions (IdAssertion) to validate some of its identitiers (IdValidation) in certain scopes e.g. in a communication.

IdentityAssertion should be compliant with WebRTC RTCIdentityAssertionResult


#####IdValidation Object
The IdValidation Object has following class object attributes:
* ```identity``` -  The validated identity of the peer. (defined in http://w3c.github.io/webrtc-pc/)
* ```contents``` -  The payload of the identity assertion. (defined in http://w3c.github.io/webrtc-pc/). An IdP that validates an identity assertion must return the same string that was provided to the original IdP that generated the assertion.
The user agent uses the contents string to determine if the identity assertion matches the session description.


IdValidation should be compliant with WebRTC RTCIdentityValidationResult.

####ServiceAddress Object
The ServiceAddress Object has following class object attributes:
* ```address``` - URL
* ```serviceType``` - Servise Type

#####ServiceType Object (Enumeration)
``var ServiceType = new enums.Enum("E164_TELEPHONY", "VOIP_SIP", "EMAIL SPACE","W3C_PUSH","TWITTER");``

####AuthenticationData Object
Contains one or multiple ID Token 

####AuthorisationData Object
Contains one or multiple Access Token (JSON WebToken) for access control

####UserProfile Object
The UserProfile Object has following class object attributes:
* ```username``` - 
* ```cn``` -  
* ```avatar``` -  

###Functions
-----------------------
Define and specify functionalities from the [dynamic views](https://github.com/reTHINK-project/core-framework/tree/master/docs/specs/runtime/dynamic-view) that relate in creating and managing the Data Objects.

####constructors

createUserProfileDataObject(String jsonString)

createIdentityDataObject(UserProfile, IdentityType ,IdAssertionList)

createIdAssertionDataObject(String jsonString,URL IdpUrl)


#### UserHypertyAccount
Create an UserHypertyAccount data object binding an hyperty to an identity 
``bindIdentitytoHyperty(URL hypertyURL, Identity id) ``

#### Verify Assertion
Verify an incoming identity assertion.

``Verify(IdAssertion,IdValidation)``

####RegisterIdentity (to be defined here???)
Register an new identity in the Hyperty Runtime

``RegisterIdentity(Identity, URL IdpUrl)``

####Discovery (to be defined here???)
Search an identity

``search(String jsonString)``

####login (to be defined here???)

``login()``

User Identity assertion






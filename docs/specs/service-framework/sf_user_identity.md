### UserIdentityFactory

The Identity Data Model is used to model the reTHINK User entity according to the [User Identity Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/user-identity)

####Identity Object
The Identity Object has following class object attributes:
* ```guid``` - a global unique identifier
* ```identifiers``` -  identifiers of type UserURL

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
* ```address``` -

#####ServiceType Object
The ServiceType can be : E164_TELEPHONY, VOIP_SIP, EMAIL, W3C_PUSH, TWITTER

####AuthenticationData Object

#####IDToken

#####JWT
JSON Web Token

####AuthorisationData Object

####UserProfile Object
The UserProfile Object has following class object attributes:
* ```username``` - 
* ```cn``` -  
* ```avatar``` -  

###Functions
-----------------------
Define and specify functionalities from the [dynamic views](https://github.com/reTHINK-project/core-framework/tree/master/docs/specs/runtime/dynamic-view) that relate in creating and managing the Data Objects.

Account creation ?

User registration

- RegisterIdentity(IdP URL ,IDToken)

Discovery

???

Domain login

???

User Identity assertion

- Verify(IdAssertion)

User to hyperty binding

???



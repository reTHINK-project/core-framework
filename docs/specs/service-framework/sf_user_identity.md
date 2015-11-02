### UserIdentityFactory

The Identity Data Model is used to model the reTHINK User entity according to the [User Identity Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/user-identity)

####Identity Object
The Identity Object has following class object attributes:
* ```guid``` - a global unique identifier
* ```identifiers``` -  identifiers of type UserURL

####IdAssertion Object
The IdAssertion  Object has following class object attributes:
* ```assertion``` - 
* ```idp``` -  
* ```scope``` -  

#####IdValidation Object
The IdValidation Object has following class object attributes:
* ```identity``` - 
* ```contents``` -  

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



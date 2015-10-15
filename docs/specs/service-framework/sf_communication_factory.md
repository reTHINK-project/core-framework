### CommunicationFactory

The CommunicationFactory creates communication objects according to the [Communication Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/communication/readme.md). 

####Communication Object
--------------------------------------
The Communication Object has following class object attributes:
* ```id``` - the identifier of the created comunication
* ```host``` - 
* ```owner``` - initiator of the communication (from Participant Data Object)
* ```startingTime``` - Date representation of the start time when the communication was created
* ```lastModified``` - Date representation of last modified time of the created communication
* ```duration``` - String representation of the duration of the session.
* ```status``` - representation of the status (OPEN|PENDING|CLOSED|PAUSED|FAILED)
* ```participants``` - list of participant data objects representing participants with their status and resources (ConnectionDataObject)
* ```comunicationQuality```- 


####Participant Data Object
* ```identityObject``` - Identity Data Object as defined in the [User Identity Data Model](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/user-identity/readme.md)
* ```connectionObject``` -  optional attribute (JWT) for access control purpose


#####Connection Data Object
* ```status``` - 
* ``` owner``` - Communication. participant
* ``` localIceCandidates``` - IceCandidate object 
* ``` remoteIceCandidates``` - 
* ``` localConnectionDescription``` - String representation of local SDP (offer)
* ``` remoteConnectionDescription``` - String representation of remote SDP (answer)
* ``` remoteRtpTransportParameters``` - to be used for ORTC compliant browsers 
* ``` localRtpTransportParameters``` - to be used for ORTC compliant browsers
 
###Functions
-----------------------
#### MessageReqeust
Creates an outgoing Message request taking as parameter the URLList of the recipient(s), the message type (CREATE|UPDATE|DELETE|READ|SUBSCRIBE|UNSUBSCRIBE) and body according to the message type as input. The extraHeaders object can include other  optional headers (resource, signature, contextId etc.) you wish to have included in the message.  

```
createOutgoingMessageRequest(URL.URLList to, MessageType type, Object extraHeaders, MessageBody body )
```

#### MessageResponse
Creates an outgoing Message response taking as parameter the URLList of the recipient(s), response code and value according RFC7231. Implicitly includes RESPONSE as MessageType.   

```
createOutgoingMessageResponse(URL.URLList to, ResponseCode code, String value )
```

#### Parser
Parses a given message and sets values of headers in an array (key, value) which can be retrieved through another method  getHeader(headerKey) to access different portions of the message.  It returns an instance of MessageRequest, a MessageResponse or undefined.

```
Parser.parseMessage(Message data)
```

#### getHeader
This returns the value of the given key header from the MessageRequest or Messageresponse object

```
getHeader(Message data, String key)
```

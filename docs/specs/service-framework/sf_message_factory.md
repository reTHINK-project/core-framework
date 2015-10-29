### MessageFactory

The MessageFactory creates messages according to the [Message Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message) to be send through the Runtime Message Bus. 


####Class Message
The Message Class has following class attributes:
* ```id``` - the identifier to be used to associate Response messages to the initial request message
* ```type``` - the type of message (CREATE|UPDATE|DELETE|READ|SUBSCRIBE|UNSUBSCRIBE|RESPONSE)
* ```contextID``` - GUID used to identify the context for example communication session
* ```from``` - URL of the Hyperty instance or assoiciated User
* ```to``` - one or more URLs of the recipeints
* ```resourceURL``` - the URL of the reTHINK Data Object resource associated with this message. Used for routing purposes.
* ```messageBody``` - from the MessageBody data object

####MessageType (Enumeration)
``` 
var MessageType = new enums.Enum("CREATE", "UPDATE", "DELETE", "READ", "SUBSCRIBE", "UNSUBSCRIBE", "RESPONSE");
```

####Class MessageBody
* ```idToken``` - optional attribute (JWT) for Identity assertion purpose
* ```accessToken``` -  optional attribute (JWT) for access control purpose

#####Class CreateMessageBody extends MessageBody
* ```policyURL``` - URL from where to download the access policy control
* ```value``` - JSON formatted data to create (TODO: has this been specified on any document so far?)
 
#####Class ReadMessageBody extends MessageBody
* ```attribute```- attribute in the object to be read
* ```value``` - value of the read attribute

#####Class DeleteMessageBody extends MessageBody
* ```attribute```- attribute in the object to be deleted

#####Class UpdateMessageBody extends MessageBody
* ```attribute```- attribute in the object to be modified
* ```value``` - new value of the attribute

#####Class ResponseMessageBody extends MessageBody
* ```code```- a response code complaint to HTTP response codes (RFC7231)
* ```value``` - data value in JSON format (used as value to read message requests)

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

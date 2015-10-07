Service Framework APIs
-----------------------
This section describes the programmable interfaces to be implemented by the Service Framework for Hyperty Developers. These interfaces will evolve according to input received from the implementation tasks. The main functionalities of the Service Framework provide implementation of the Data types defined in D2.2.

### MessageFactory

The MessageFactory creates messages according to the [Message Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message) to be send through the Runtime Message Bus. 

#### MessageReqeust
Creates an outgoing Message request taking as parameter the URLList of the recipient(s), the message type (CREATE|UPDAE|DELETE|READ|SUBSCRIBE|UNSUBSCRIBE) and body according to the message type as input. The extraHeaders object can include other  optional headers (resource, signature, contextId etc.) you wish to have included in the message.  

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
Parser.parseMessage(data)
```

#### getHeader
This returns the value of the given key header from the MessageRequest or Messageresponse object

```
getHeader(Message data, String key)
```

Service Framework APIs
-----------------------
This section describes the programmable interfaces to be implemented by the Service Framework for Hyperty Developers. These interfaces will evolve according to input received from the implementation tasks. The main functionalities of the Service Framework provide implementation of the Data types defined in D2.2.

### MessageFactory

The MessageFactory creates messages according to the [Message Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message) to be send through the Runtime Message Bus. 

#### createMessage
Creates a Message taking as parameter the URLList of the recipient(s), the message type (CREATE|UPDAE|DELETE|READ|SUBSCRIBE|UNSUBSCRIBE|RESPONSE) and body according to the message type as input. The extraHeaders object can include other  optional headers (resource, signature, contextId etc.) you wish to have included in the message.  

```
createMessage(URL.URLList to, MessageType type, Object extraHeaders, MessageBody body )
```

#### parseMessage
Parses the given message and extracts different parts (Headers and Values) which will be stored of different Objects for easy retrieval by other functions. This is rather an internal function to the MessageFactory and not exposed to the developer.

```
createMessage(URL.URLList to, MessageType type, Object extraHeaders, MessageBody body )
```
####

##### H2H Interdomain Communication - create communication

This MSC diagrams shows the most relevant steps to support the setup of data object synchronisation.


![Figure @runtime-basic-create-sync Create Sync Data Object](syncher-create.png)



**[Create Message sent by Observer](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#createmessagebody)**

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty-instance://sp1/alicehy123",
"to" : "hyperty-instance://sp2/bobhy123",
"contextId" : "qwertyuiopasdfghjkl",
"body" : { "resource" : "comm://sp1/alice/123456", "value" : "<json object > , "schema" : "hyperty-catalogue://sp1/dataObjectSchema/schema123" }
```

**[Response Message by Core PEP to inform Hyperty Owner about new allocated Data Object URL](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#createmessagebody)**

***note:*** usually 3XX requires to send a new request message but applies to "to" resource

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty-runtime://sp1/core/pep",
"to" : "hyperty-instance://sp1/alicehy123",
"contextId" : "qwertyuiopasdfghjkl",
"body" : { "code" : "308", "value" : "{ "resource" : "comm://sp1-msg-node/alice/123456" } }
```

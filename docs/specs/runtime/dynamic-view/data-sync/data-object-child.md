#### Synchronisation of Data Object Child

*changes: - update diagram with response msg - add response to response to subscription to avoid adding listeners in advance and catalogue interaction in the observer. No possible because not ensured the subscription response will have the most updated version of the object*

A Data Object Child belongs to a Data Object Parent resource and can be created by any Observer of the Data Object Parent as well as by its Reporter. The Reporter - Observer rules still applies to Data Object Child ie there is only one Reporter that can update the Data Object Child, which can be an Observer of the Data Object Parent, as mentioned earlier. However, the procedures to manage Data Object Child are different from the ones used to manage Data Object Parents. At this point, Data Object Child can't also be a Data Object Parent of another object. Ie Hyperty Data Object composition is limited to one level.

*A complete definition of Hyperty Data Objects, Parents and Child relationships and the Reporter - Observer pattern will be provided elsewhere to be reported in D3.2*

##### Creation of Data Object Parent

In the Data Object creation procedure, the Data Object Schema is parsed to check if there is any resource that can contain Data Object Children. If yes, for each Data Child Resource URL (<ObjectURL>/<resource>/child) the Hyperty Reporter listener is added to the Message Bus and to the Reporter Sandbox Minibus, as well as a Reporter Sync Manager listener.

![Figure @data-object-parent-create Request to create a Data Object Parent](data-object-child.png)

**[Response Message by SM to inform Hyperty Owner that object creation was authorised including in the body the new allocated Data Object and associated Children resources URL](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#createmessagebody)**

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<sp1>/<alice-device>/sm",
"to" : "hyperty://sp1/alicehy123",
"body" : { "code" : "200", "value" : "{ "resource" : "comm://sp1-msg-node/alice/123456" }, "childrenResources" : ["messages"] }
```

**[Create Message forwarded to invited Observers](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#createmessagebody)**

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty-runtime://<sp1>/<alice-device>/sm",
"to" : "hyperty://sp2/bobhy123",
"body" : { "resource" : "comm://sp1/alice/123456", "value" : "<json object > , "schema" : "hyperty-catalogue://sp1/dataObjectSchema/schema123"  }
```

##### Subscription of Data Object Parent

In the Data Object Parent subscription procedure, the Data Object Schema is parsed by the Observer Sync-Managers (at Runtime and Msg Node level), to extract resources that can contain Data Object Child. For each Data Child Resource URL (<ObjectURL>/<resource>/child) the Hyperty Observer listener is added to the Bus .

![Figure @data-object-parent-subscribe Request to subscribe a Data Object Parent](data-object-child_001.png)

**[Subscription Message sent to observer sync-manager to add listeners to observer runtime and domain ](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#subscribemessagebody)**

```
"id" : "1"
"type" : "SUBSCRIBE",
"from" : "hyperty://sp2/bobhy123",
"to" : "hyperty-runtime://<sp1>/<bob-device>/sm",
"body" : { "resource" : "comm://<sp1>/<alice>/<123456>" , "schema" : "hyperty-catalogue://<sp1>/dataObjectSchema/<schema123>" }
```

**[Provisional Response to Subscription Message sent to observer syncher with list of childrenResources ](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#responsemessagebody)**

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<sp1>/<bob-device>/sm",
"to" : "hyperty://sp2/bobhy123",
"body" : { "code" : "1XX", "childrenResources" : {["messages"]}  }
```

**[Subscription Message sent to observer domain sync-manager to add listeners to observer runtime and domain ](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#subscribemessagebody)**

```
"id" : "1"
"type" : "SUBSCRIBE",
"from" : "hyperty-runtime://<sp1>/<bob-device>/sm",
"to" : "domain://msg-node.<sp1>/sm",
"body" : { "resource" : "comm://<sp1>/<alice>/<123456>" , "schema" : "hyperty-catalogue://<sp1>/dataObjectSchema/<schema123>", "childrenResources" : {["messages"]} }
```

##### Creation of Data Object Child

The creation of a Data Object Child is simply a Create Message that is sent by an Hyperty Syncher to a valid Data Object Resource Child URL (<ObjectURL>/<Resource>/child). All the Data Object Parent Observers, the Data Object Reporter and the Reporter Syncher Manager, will receive the new created Hyperty Data Object Child since they are all listening to this Resource URL as previously described in the Data Object Parent Creation and Subscription procedures. Of course, the sender Hyperty must ignore the received Message. According to the Hyperty Data Object model, a Data Object Child is identified by a ChildId generated by its reporter Syncher in a way that is unique in the Data Object Resource Child scope. One possibility is the number of child objects created by its reporter with the prefix of the Reporter HypertyURL.

Data Object Child created by Data Object Parent Reporter:

![Figure @data-object-child-createby-reporter Data Object Child created by Data Object Parent Reporter](data-object-child_002.png)

**CREATE Child Message**

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty://sp1/alicehy123",
"to" : "comm://<sp1>/<alice>/children/<chat-messages>",
"body" : { "resource" : "<hyperty://sp1/alicehy123>#<1>", "value" : "{  "<message>" : "Hello Bob" }  }
```

**Response to CREATE Child Message**

```
"id" : "1"
"type" : "RESPONSE",
"from" : "comm://<sp1>/<alice>/children/<chat-messages>",
"to" : "hyperty://sp1/alicehy123",
"body" : { "code" : "2XX" , "source" : "hyperty://sp2/bobhy123" }  }
```

Data Object Child created by Data Object Parent Observer:

![Figure @data-object-child-createby-observer Data Object Child created by Data Object Parent Observer](data-object-child_003.png)

**CREATE Child Message**

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty://sp2/bobhy123",
"to" : "comm://<sp1>/<alice>/children/<chat-messages>",
"body" : { "resource" : "<hyperty://sp2/bobhy123>#<1>", "value" : "{  "<message>" : "Hello Alie" }  }
```

**Response to CREATE Child Message**

```
"id" : "1"
"type" : "RESPONSE",
"from" : "comm://<sp1>/<alice>/children/<chat-messages>",
"to" : "hyperty://sp2/bobhy123",
"body" : { "code" : "2XX" , "source" : "hyperty://sp1/alicehy123" }  }
```

##### Update of Data Object Child

According to Reporter-Observer rules (to be enforced by the Policy Engine), the update of a Data Object Child is only allowed by its Reporter, and it is acomplished by sending an Update Message to its associated Data Object Resource Child URL (<ObjectURL>/<Resource>/child). Similar to the creation procedure, all the Data Object Parent Observers, the Data Object Reporter and the Reporter Syncher Manager, will receive the updated Hyperty Data Object Child, and the sender Hyperty must ignore the received Message. The Update Message Body must contain in the value field the ChildId.

Update of Data Object Child created by Data Object Parent Reporter:

![Figure @data-object-child-update-createdby-reporter Data Object Child update that was created by Data Object Parent Reporter](data-object-child_004.png)

Update of Data Object Child created by Data Object Parent Observer:

![Figure @data-object-child-update-createdby-observer Data Object Child update that was created by Data Object Parent Observer](data-object-child_005.png)

```
"id" : "2"
"type" : "UPDATE",
"from" : "hyperty://sp2/bobhy123",
"to" : "comm://<sp1>/<alice>/<chat-messages>/child",
"body" : { "resource" : "<hyperty://sp2/bobhy123>#<1>", "value" : "{ "<message>" : "Hello Alice" }  }
```

##### Delete of Data Object Child created by Reporter

According to Reporter-Observer rules (to be enforced by the Policy Engine), the delete of a Data Object Child is only allowed by its Reporter, and it is acomplished by sending Delete Message to its associated Data Object Resource Child URL (<ObjectURL>/<Resource>/child). Similar to the creation procedure, all the Data Object Parent Observers, the Data Object Reporter and the Reporter Syncher Manager, will receive the Delete message, and the sender Hyperty must ignore the received Message. The delete Message Body must contain in the value field the ChildId.

Delete of Data Object Child created by Data Object Parent Reporter:

![Figure @data-object-child-delete-createdby-reporter Delete of Data Object Child that was created by Data Object Parent Reporter](data-object-child_006.png)

Delete of Data Object Child created by Data Object Parent Observer:

![Figure @data-object-child-delete-createdby-observer Delete of Data Object Child that was created by Data Object Parent Observer](data-object-child_007.png)

```
"id" : "3"
"type" : "DELETE",
"from" : "hyperty://sp2/bobhy123",
"to" : "comm://<sp1>/<alice>/<chat-messages>/children",
"body" : { "resource" : "<hyperty://sp2/bobhy123>#<1>" }
```

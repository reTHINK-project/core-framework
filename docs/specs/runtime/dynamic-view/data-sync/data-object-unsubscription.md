**This is OUTDATED!! Most updated version is [here](https://github.com/reTHINK-project/dev-service-framework/blob/d3.2-working-docs/docs/specs/dynamic-view/data-sync/data-object-unsubscription.md)**
======================================================================================================================================================================================================

#### Data Object Unsubscription by Observer

![Figure @data-sync-subscription Request to subscribe a Sync Data Object](data-object-unsubscribe.png)

To stop the observation of a Data Object, a Unsubscribe message is sent to the local Sync Manager by the Observer.

**[UnSubscribe Message sent to observer sync-manager to remove listeners from observer runtime and domain ](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#subscribemessagebody)**

```
"id" : "1"
"type" : "UNSUBSCRIBE",
"from" : "hyperty://sp2/bobhy123",
"to" : "hyperty-runtime://<sp1>/<bob-device>/sm",
"body" : { "resource" : "comm://<sp1>/<alice>/<123456>" }
```

The Unubscription request is forwarded to the data object subscription URL (DataObjectURL/subscription), which is implemented by the Synch Manager of the Reporter.

**[Unsubscribe Message sent to Reporter domain SM](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#unsubscribemessagebody)**

```
"id" : "1"
"type" : "UNSUBSCRIBE",
"from" : "hyperty-runtime://<sp1>/<bob-device>/sm",
"to" : "comm://<sp1>/<alice>/<123456>/subscription",
"body" : { "subscriber" : "hyperty://sp2/bobhy123" }
```

The Sync Manager checks if Observer is valid.

Step : in case the unsubscription request is authorised, the Observer listener is removed from the Message BUS to receive messages on the Data Object resource URL.

Step : the Observer listener is also removed from the Message BUS to be notified about new Observers in case it was added.

Steps : optionally, it is posted an UPDATE message into the DataObjectObserversURL with information about the Observer removal.

Steps : the unsubscription confirmation is sent back with a RESPONSE message.

**[Unsubscribe Response Message ](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#responsemessagebody)**

```
"id" : "1"
"type" : "RESPONSE",
"from" : "comm://<sp1>/<alice>/<123456>/subscription",
"to" : "hyperty-runtime://<sp1>/<bob-device>/sm",
"body" : { "code" : "2XX" }
```

As soon as the local Sync Manager receives the unsubscription response it removes the Observer listener from the Message Bus and sends to its Domain Sync Manager an Unsubscribe message to also remove listeners from the Message Node.

**[Unsubscribe Message sent to observer domain sync-manager to remove listeners from observer runtime and domain ](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#unsubscribemessagebody)**

```
"id" : "1"
"type" : "UNSUBSCRIBE",
"from" : "hyperty-runtime://<sp1>/<bob-device>/sm",
"to" : "domain://msg-node.<sp1>/sm",
"body" : { "resource" : "comm://<sp1>/<alice>/<123456>" }
```

As soon as the local Sync Manager receives the unsubscription confirmation from the domain, it sends back to the Observer the unsubscription response.

**[Unsubscribe Response Message ](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#responsemessagebody)**

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<sp1>/<bob-device>/sm",
"to" : "hyperty://sp2/bobhy123",
"body" : { "code" : "2XX" }
```

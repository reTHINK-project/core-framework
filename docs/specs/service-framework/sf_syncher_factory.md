### SyncherManager

The SyncherManager provides data object synchronisation for Local Data Object for reporting and Remote Data Objects for observing as described  by the [Reporter-Observer communication pattern](https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/create-sync-data-object.md). 

##### Constructor
```
SyncherManager(url, postMessage)
```
##### postMessage
```
postMessage(msg)
```

##### createReporter
Ask for a DataObjectReport creation, a creation request should be sent to the Policy Enforcer, if accepted the Promise will return the object. The same message should be forward to the observers.
```
Promise<DataObjectReport> createReporter(Object schema, URL[] observers, (?) Object initData)
```

##### onMessage
```
onMessage(String msgType, callback)
```
Registration point for some types of events, like for example a **creation** event that can be processed like:
```
onMessage('create', (evt) => {
 //decide what to do. Creation is an automatic invitation
 
 //evt.obj is of type DataObjectObservation
 evt.obj.accept() or evt.obj.reject()
});
```
It's useful to delegate some decisions to the Hyperty, User or other external system to the SyncherManager.

#### DataObjectReport (or DataObjectReporting?)
- Question: Has this been defined anywhere in the Model? 

##### Constructor
Reporter creates a data object report passing as input parameters invited observers, the data object schema and, optionaly, the handler that will process events from observers (e.g. observer added, observer removed, observation request by a non invited observer). An initialisation data object may also be passed.

```
 DataObjectReport(schema, URL[] observers, (?) handler, (?) Object initialisation)
```
Question: Do not quite understand how this ties to Promise Object

##### addObserver

Adds a new observer for the data object report passing the User URL.

```
addObserver( URL.User user )
```

Adds a new observer for the data object reporting passing the Hyperty URL.

```
addObserver( URL.Hyperty hyperty )
```

##### removeObserver

Unbinds observers from a data object reporting passing the User URL. 

```
removeObserver( URL.User user )
```

Remove observer for the data object reporting passing the Hyperty URL.

```
removeObserver( URL.Hyperty hyperty )
```

##### stop

Stops the data object reporting

```
stop()
```

#### DataObjectObservation
- Question: Has this been defined anywhere in the Model?  


##### Constructor

Create observations for Data Objects created by Reporter defining the Data Object URL and its schema and, optionaly, it passes a handler to process observation/reporting events (eg new report, report end, report error)

```
<Promise> DataObjectObservation(schema, URL.URL object, (?) Object handler)
```

Create observations for Data Objects as invited by its reporter passing a handler to process observation/reporting events (eg new report, report end, report error)

```
<Promise> DataObjectObservation(Message.CreateMessage invitation, (?) Object handler)
```

Question: Do not quite understand how this ties to Promise Object

##### stop

Stops observation.

```
stop()
```

##### accept

Accepts invitation for the observation. Only valid when observation was created with an invitation message. Otherwise an exception is raised.

```
accept()
```

##### reject

Reject invitation for the observation. Only valid when observation was created with an invitation message. Otherwise an exception is raised.

```
reject( String reason )
```

### Example

*to provide examples here showing that as soon as the promised data object is returned, the reporter can start updating the object and the syncher will update observers with data object changes. The same on the observation side*

...


### Syncher Factory (Suggestion from Paulo-PTIN)

The Syncher Factory provides data object synchronisation for Local Data Object for reporting and Remote Data Objects for observing as descriped  by the [Reporter-Observer communication pattern](https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/create-sync-data-object.md). 

####DataObjectReport
- Question: Has this been defined anywhere in the Model? 

####DataObjectObserver
- Question: Has this been defined anywhere in the Model?  

###Functions
-----------------------
#### createDataObjectReport
Reporter creates a data object passing as input parameters invited observers, the data object schema and the handler that will process events from observers (e.g. observer added, observer removed, observation request by a non invited observer)

```
DataObjectReport <Promise> createDataObjectReport(schema, Object observers, (?) handler)
```
Question: Do not quite understand how this ties to Promise Object

#### createDataObjectObserver
Creates observers with invitations received from reporters passing a handler to process observation/reporting events (eg new report, report end, report error)
```
DataObjectObserver createDataObjectObserver(Message invitation, Object handler)
```

#### removeDataObjectObserver
Unbinds observers from a data object
```
removeDataObjectObserver(Message invitation, Object handler)
```




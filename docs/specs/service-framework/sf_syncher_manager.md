## SyncherManager (Micael proposal)
![](SyncherManager.png)

Although some properties, methods and event handlers are subject to change. The most important is the structure of the framework, because structure is much harder to change than changing method, properties, etc.

MiniBus is a core component that represents a view of the MessageBus, and it's inserted as a dependency. When an object (Reporter or Observed) is created, the Syncher will add a listener in the MiniBus to receive/send Messages of that object.

[Sequence Diagram Doc](https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/create-sync-data-object.md)

### Syncher
The main class for the package. Should only be available one per Hyperty/URL. It's the owner of all kind of DataObjects.

##### Properties
* owner: HypertyURL
* observers: [DataObjectObserver]
* reporters: [DataObjectReporter]

##### Methods
* constructor(owner: HypertyURL, bus: MiniBus, config: Config)
* create(schema: SchemaURL, observers?: [HypertyURL], initialData?: JSON): Promise\<DataObjectReporter\>
* subscribe(schema: SchemaURL, url: ObjectURL): Promise\<DataObjectObserver\>

These methods are able to create Reporters or subscribe to existing ones, giving Observers.

##### Event Handlers
* onNotification(callback: (event: CreateEvent | DeleteEvent) => void): void

Receive invitations from Reporter objects. Hyperties should listen and respond accordingly, using the event methods.

### DataObject
Top implementation of Reporters and Observers.

##### Properties
* url: ObjectURL
* data: JSON
* schema: SchemaURL
* children: { \<childId\>: DataObjectChild }

##### Methods
* addChildren(resource: string, initialData: JSON): Promise\<DataObjectChild\>

##### Event Handlers
* onChange(filter: string, callback: (event: ChangeEvent) => void): void
* onAddChildren(callback: (event: CreateEvent) => void): void

Handlers to report changes in the reporters that are synchronized with the observer.

### DataObjectReporter
Read/Write reporter object. Syncronization is shared with other observers.

##### Properties
* (inherited) status: on | paused | waiting
* subscriptions: [SyncSubscription]

In addition to the inherited properties, it has a registry of all remote observers subscriptions. Since all subscriptions are instances of SyncSubscription, it's possible to read the status of the subscription and act on it (pause, resume, stop). For example, in a chat room it will be possible to kick out someone executing the stop().

##### Event Handlers
* onSubscription(callback: (event: SubscribeEvent | UnSubscribeEvent) => void)
* onResponse(callback: (event: ReponseEvent) => void): void

In addition to the inherited handlers, the reporter can listen to subscriptions/unsubscriptions and responses to creates from observers.

### DataObjectObserver
Read only observer object, giving a data view of a remote reporter object.

##### Properties
* owner: HypertyURL

### DataObjectChild
Is a result of the call to "addChildren". DataObjectChild are created in relation to a pre-existent path on the parent object schema.

##### Properties
* childId: URL
* data: JSON

##### Event Handlers
* onResponse(callback: (event: ReponseEvent) => void): void
* onChange(callback: (event: ChangeEvent) => void): void

### Events and Handlers
Methods fire actions and Handlers react to actions and respond accordingly.
All events listed on the class diagram are intercepted in an event handler. From a functional perspective, methods like (accept, reject, wait, ...) are responses to an action. Since actions are represented by events, it makes sense that responses are directly related to them. Some rules:
* All events are inherited from the Event interface
* All handlers have method signature of "on\<classifier\>(..., callback)"

### Interfaces (SyncStatus, SyncSubscription)
* **SyncStatus** is used to get and control the status of a DataObject (local, remote, reporter or observer).
* **SyncSubscription** reference to a remote observer/subscription. 

**TODO** Maybe some kind of state machine diagram is needed to define better all the status, and the actions that activate the status transitions.

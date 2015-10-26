## SyncherManager (Micael proposal)
![](SyncherManager.png)

Although some properties, methods and event handlers are subject to change. The most important is the structure of the framework, because structure is much harder to change than changing method, properties, etc.

### SyncherManager
The main class for the package. Should only be available one per Hyperty/URL. It's the owner of all kind of DataObjects.

##### Properties
* observers: [DataObjectObserver]
* reporters: [DataObjectReporter]

##### Methods
* constructor(owner: URL, postMessage: (msg: Message) => void)
* postMessage(msg: Message): void
* create(schema: Schema, invitations?: URL | [URL], initialData?: JSON): Promise<DataObjectReporter>
* subscribe(url: URL): Promise<DataObjectObserver>

With these methods it's able to create Reporters or subscribe to existing ones, giving Observers.
It has postMessage method and handler to send/receive messages.

##### Event Handlers
* onInvite(eventType: string, callback: (event: CreateEvent | DeleteEvent) => void): void

Receive invitations from Reporter objects. Hyperties should listen and respond accordingly, using the event methods.

### DataObjectReporter
Read/Write reporter object. Syncronization is shared with other observers.

##### Properties
* (inherited) url: URL
* (inherited) status: on | paused | waiting
* (inherited) schema: Schema
* (inherited) data: JSON
* subscriptions: [SyncSubscription]



##### Methods
* (inherited) pause(): void
* (inherited) resume(): void
* (inherited) stop(): void
* invite(invitations: URL | [URL]): void

##### Event Handlers
* onSubscription(callback: (event: SubscribeEvent | UnSubscribeEvent) => void)
* (inherited) onChange(filter: string, callback: (event: ChangeEvent) => void): void

### DataObjectObserver
Read only observer object, giving a data view of a remote reporter object.

##### Properties
* (inherited) url: URL
* (inherited) status: on | paused | waiting
* (inherited) schema: Schema
* (inherited) data: JSON

##### Methods
* (inherited) pause(): void
* (inherited) resume(): void
* (inherited) stop(): void

##### Event Handlers
* (inherited) onChange(filter: string, callback: (event: ChangeEvent) => void): void

### Events and Handlers
Methods fire actions and Handlers react to actions and respond accordingly.
All events listed on the class diagram are intercepted in an event handler. From a functional perspective, methods like (accept, reject, wait, ...) are responses to an action. Since actions are represented by events, it makes sense that responses are directly related to them.

## SyncherManager (Micael proposal)

### SyncherManager
The main class for the package. Should only be available one per Hyperty/URL.

##### Properties
* observers: [DataObjectObserver]
* reporters: [DataObjectReporter]

##### Methods
* constructor(owner: URL, postMessage: (msg: Message) => void)
* postMessage(msg: Message): void
* create(schema: Schema, invitations?: URL | [URL], initialData?: JSON): Promise<DataObjectReporter>
* subscribe(url: URL): Promise<DataObjectObserver>

##### Event Handlers
* onInvite(eventType: string, callback: (event: CreateEvent | DeleteEvent) => void): void

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

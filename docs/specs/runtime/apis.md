Some considerations about the API for the architecture components.
Defining some aspects of the API and simulate some use case scenarios could help to envision architecture changes in the future.

[TypeScript](http://www.typescriptlang.org/) is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.
I will use it here for API definitions, but it's not decided if it will be used in the project.  

##Router (Draft)
The main responsibility of the Router is to select the appropriate channel for communication between Hyperties.
The Hyperty will select the channel, for example with a call to 
```javascript
var channel = router.select('address', 'p2p', 'video\audio', {send: true, receive: true})
```

Definition for **select** function could be: 
```javascript
select(address: string, delivery: string, data: string, direction: {send: boolean; receive: boolean} = {send: true, receive: true}): Channel
```
* address -> signal server, hyperty end point address, multi channel name to subcribe
* delivery -> type of delivery (p2p, multi, tree-mesh, ...). p2p is a direct one to one connection between peers, and multi is a one to many.
* data -> data type to send/receive (video/audio stream, message, binary, ...)
* direction -> available direction offer send/receive

```javascript
interface Channel {
	config: Config; //read only values reflecting the channel selection
}
```

TypeScript has method overloading that depends on parameter values. This is a nice functionality and can be used here for example:
```javascript
select(address: string, delivery: string, data: "message", direction: {send: boolean; receive: boolean} = {send: true, receive: true}): MessageChannel;

select(address: string, delivery: string, data: "stream", direction: {send: boolean; receive: boolean} = {send: true, receive: true}): StreamChannel;
```

The diference here is that for **stream** data type it will return a **StreamChannel** and **message** returns **MessageChannel**. There are diferences between StreamChannel an MessageChannel interfaces:
```javascript
interface MessageChannel extends Channel {
	on(event: "message", callback: (msg: Message) => void): void;
	on(event: "error", callback: (msg: Error) => void): void;
	send(msg: Message): void;
	//TODO: other methods...
}
```

```javascript
interface StreamChannel extends Channel {
	getOutputStream(): any;
	getInputStream(): any;
	//TODO: other methods...
}
```

...TODO
If hyperty address doesn't have any reference to domain, maybe should be necessary a domain field.

###Router Extensions
Extending the Router API is possible with TypeScript, with the mechanism called [declaration merging](http://www.typescriptlang.org/Handbook#declaration-merging)
With declaration merging it's possible to extend an already available interface, ex:
```javascript
//define IRouter with a simple select method
export interface IRouter {
    select(address: string, delivery: string, data: string, direct?: Direction): IChannel;
    //TODO: other methods...
}
```

```javascript
//extend by "declaration merging", declaration from a different domain
export interface IRouter {
    select(address: string, delivery: string, data: "message", direct?: Direction): IMessageChannel;
    select(address: string, delivery: string, data: "stream", direct?: Direction): IStreamChannel;
}
```

###Final Proposal
```javascript
//core.d.ts
export declare enum DataOrigin {LOCAL, REMOTE}

export interface IData {
    origin: DataOrigin;
    from: string;
    to: string;
}

export interface Error extends IData {
    msg: string;
}
```

```javascript 
//router.d.ts
import core = require("core");

export interface Direction {
    send: boolean;
    receive: boolean;
}

export interface ChannelOptions {
    address: string;
    delivery: string;
    data: string;
    direction: Direction;
}

export interface Message extends core.IData {
    msg: string;
}

export interface Stream extends core.IData {
    stream: any; //web media stream
}


export interface IChannel {
    options: ChannelOptions;
    
    on(event: string, callback: (msg: core.IData) => void): void;
    on(event: "error", callback: (msg: core.Error) => void): void;
}

export interface IMessageChannel extends IChannel {
    on(event: string, callback: (msg: core.IData) => void): void;
    on(event: "message", callback: (msg: Message) => void): void;
    
    send(msg: Message): void;
    //TODO: other methods...
}

export interface IStreamChannel extends IChannel {
    on(event: string, callback: (msg: core.IData) => void): void;
    on(event: "add-stream", callback: (stream: Stream) => void): void;
    on(event: "remove-stream", callback: (stream: Stream) => void): void;
    
    //TODO: other methods...
}

export interface IRouter {
    select(address: string, delivery: string, data: string, direct?: Direction): IChannel;
    select(address: string, delivery: string, data: "message", direct?: Direction): IMessageChannel;
    select(address: string, delivery: string, data: "stream", direct?: Direction): IStreamChannel;
    //TODO: other methods...
}
```

###Examples
Hyperty request a channel with 
```javascript 
select("hyperty-address", "p2p", "stream");
```
This will select an internal implementation of IStreamChannel that uses WebRTC in a P2P connection. Selecting
```javascript 
select("room-address", "multi", "stream");
```
will return an implementation of the same interface but with a different implementation, WebRTC with MCU. Selecting
```javascript 
select("hyperty-address", "p2p", "message");
```
will return a IMessageChannel implemented over WebRTC, but selecting
```javascript 
select("room-address", "multi", "message");
```
the messages will be routed by the message server.
Implementations are not a concern from API clients, although selecting different channels could lead to different implementations, but API interfaces are standard and could be extended.

... TODO (tree-mesh delivery !!)
Study of [Peer5](http://www.peer5.com) communication scenario, and how can this be implemented with the actual architecture?

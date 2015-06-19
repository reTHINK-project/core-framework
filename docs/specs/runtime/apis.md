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
function select(address: string, delivery: string, data: string, direction: {send: boolean, receive: boolean} = {send: true, receive: true}): Channel
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
function select(address: string, delivery: string, data: "message", direction: {send: boolean, receive: boolean} = {send: true, receive: true}): MessageChannel

function select(address: string, delivery: string, data: "stream", direction: {send: boolean, receive: boolean} = {send: true, receive: true}): StreamChannel
```

The diference here is that for **stream** data type it will return a **StreamChannel** and **message** returns **MessageChannel**. There are diferences between StreamChannel an MessageChannel interfaces:
```javascript
interface MessageChannel extends Channel {
    void on(event: "message", (msg: Message) => void): void;
    void on(event: "error", (msg: Error) => void): void;
    void send(msg: Message): void;
    //other methods?
}
```

```javascript
interface StreamChannel extends Channel {
  get outputStream(): any;
  get inputStream(): any;
  //other methods?
}
```
...TODO
Examples:

...TODO
Study a way of extending **delivery** and **type** options ?

...TODO
If hyperty address doesn't have any reference to domain, maybe should be necessary a domain field.

... TODO (tree-mesh delivery !!)
Study of [Peer5](www.peer5.com) communication scenario, and how can this be implemented with the actual architecture?

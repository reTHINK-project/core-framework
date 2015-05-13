## Vert.x 3 Evaluation (Draft)

**Note:** to be reviewed for [v3](http://vert-x3.github.io/) by identifying differences with version 2.x

### Overview

*Overview of functionalities and type of WP3 component that the asset can be used for ie Messaging Node, Runtime, Network QoS and Framework* 

This SOTA will evidence differences between version 2 and 3 of vert.x. It will not describe all the architecture as in the version 2 evaluation.

The concept of the framework is summarized as follows:
* **Polyglot (supports several languages)**:
Vert.x framework runs on the JVM. However, Java is not required to run a Verticle.
Main languages supported in version 3 are Java, JavaScript, Groovy and Ruby.
* **Concurrency model**:
Concurrency model has not changed between versions.
* **Provides Event Bus**:
Event bus is still available and is an essential part of vert.x engine for communication between programs, even when written in different languages. The event bus even penetrates into in-browser JavaScript allowing you to create effortless so-called real-time web applications.
* **Module System & Public Module Repository**:
It seems that this feature is dropped in version 3. There is no more methods like deployModule(..) available. Now you create your verticles and package them into standard java jars. These jars can be pushed to Maven repositories just like any Maven artifact. For static module imports this is enough, however if we need dynamic module maintenance, an OSGi container could be used instead.

### Architecture
This subsection highlights the main building blocks of the Vert.x architecture. 
(diagram not supplied)

Figure 1. Vert.x Architecture

### Addressing
Messages are sent on the event bus to an address. Vert.x instances are not bound to any addressing schemes. An address is simply a string, any string is valid. Some examples of valid addresses are ```europe.news.feed1```, ```acme.games.pacman```, ```sausages```, and ```X```.
As a convention the names of the packages that implement certain functionalities should also be represented on the event bus and should be combined with a meaningful event/operation name, e.g. ```org.acme.MyPackage.MyClass.doSomething```

### Handlers
A handler is an entity that receives messages from the event bus. You register a handler at an address. Many different handlers from the same or different modules can be registered at the same address. A single handler can be registered at many different addresses at the same time.

### Messaging Schemes
The Event Bus supports the following modes of operation: 
* *Publish / subscribe messaging*: Publishing means delivering the message to all handlers that are registered at that address. This is the familiar publish/subscribe messaging pattern. 
* *Point to point and Request-Response messaging*: Messages are routed to just one of the handlers registered at an address. They can optionally be replied to. 
* *Remote Procedure Call (RPC)*: This mode of operation is implemented on top of the Request-Response model, basically by enforcing certain conventions on requests and responses

This example shows the Event Bus (in version 3) can be instantiated, how a Handler can be defined and registered on the Event Bus and how the Event Bus can subsequently publish a message for the defined Handler:

```java
final EventBus eb = vertx.eventBus();

/*Create a message consumer against the specified address.
The returned consumer is not yet registered at the address, registration will be effective when MessageConsumer.handler(..) is called.
*/
final MessageConsumer<JsonObject> msgConsumer = eb.consumer("test.address");

//register handler for the MessageConsumer
msgConsumer.handler(message -> {
	System.out.println("I just recieved a message "+ message.body());
});

...
//publishing a message. The message will be delivered to all handlers registered against the address
eb.publish("test.address", "hello world");

//point-2-point sending of message. 
//Only one handler registered at the address receiving the message. 
//The handler is chosen in a non strict round-robin fashion
eb.send("test.address", "hello world");

...
//unregister handler for the MessageConsumer
msgConsumer.unregister();
```

### Types of Messages
Messages that you send on the event bus can be as simple as a string, a number or a boolean. It is also possible to send Vert.x buffers or JSON messages. 
It's highly recommended to use JSON messages to communicate between verticles. JSON is easy to create and parse in all the languages that Vert.x supports. 
For RPC messages, JSON is enforced.

## Verticle
The unit of execution for Vert.x applications is called a Verticle. Verticles can be written in multiple languages (JavaScript, Ruby, Java, Groovy or Python). Many verticles can be executed concurrently in the same Vert.x instance. An application might be composed of multiple verticles deployed on different nodes of the network communicating by exchanging messages over the Vert.x Event Bus. For trivial applications verticles can be run directly from the command line, but more usually they are packaged up into modules.

## Module
Applications within the framework comprise of one or more modules.  The framework allows packaging of applications or other re-usable functionality into modules, which can be deployed or used by other code. Module can also by catalogue in the Vert.x module registry so others can discover and use it. The framework offers the possibility to automatically download and install modules from any repository given the module identifier.
Each module has a unique identifier. The identifier is a string that is composed of three parts:
A module can contain any number of (including zero) verticles and can depend on other modules (and their verticles) in turn. Creating a module with no verticles makes sense to provide only library support for other modules.  Modules are described by a descriptor file: mod.json. A minimal descriptor looks like this: 

```
{
  "owner": "org.acmecorp",
  "name": "myReThinkAdapterModule",
  "version": "0.1"
}
```
Additionally, three more fields are optionally recognized:
* ```worker```
indicates if this is a worker module. See below under event loop. 
* ```main```
Indicates the startup routine for this module. 
* ```includes```
Additional module dependencies as a comma-separated string.

## Event Loop
By default, all verticles run in an asynchronous event loop. When developing a verticle, it is essential not to block the event loop. Blocking here means either doing any kind of blocking I/O or even doing any kind of computational intensive work. Modules that do either of these should indicate that they are so called ```worker``` modules by setting ```"worker": true``` in their *mod.json* file. 
The advantage of an event loop is that it is enormously scalable. Instead of waiting for I/O operations to complete, the executing thread will rather do other stuff (e.g. servicing the next request) in the meantime. This is achieved by using a callback driven style of programming. Imagine the following scenario: 
*We want to read some data in an I/O intensive operation (function ```readData```) 
*We want to do something with that data (function ```doSomething```) 
*We want to do something completely different (function ```doSomethingUnrelated```) 
*In the traditional blocking world we would do something like the following: 
```
def doSomething(data):
    # do something with data
data = readData()
doSomething(data)
doSomethingUnrelated()
```
What happens here is the following: 

After the data is read, the program waits for the operation (```readData```) to complete (which is consuming the event loop thread lifetime). As soon as ```readData``` returns, we have our data and can go on to do something with it (```doSomething(data)```). Finally, when that is done, we can go on and do other stuff (```doSomethingUnrelated```).

```
In the asynchronous world, we do something like this: 
def doSomething(data):
    # do something with data
readData(callback = doSomething)
doSomethingUnrelated()
```
As can be seen, the result of ```readData``` is not received in the functions return value. Instead ```doSomething``` is passed in the handler method as a callback. The framework will take care that this handler is called asynchronously as soon as the data is available


### APIs
Vert.x provides the different APIs which are implemented in various languages:

**Core API**
* TCP client/Server API
* HTTP client/Server API
* Transport Protocol (Websocket, SockJS(provides websocket-like API through http), UDP, TCP)
* File System Access
* DNS client API
* Shared Data
* Event Bus API
* JSON API

**Container API**
* Deploy and undeploy verticles
* Deploy and undeploy modules
* Retrieve verticle configuration
* Logging

### Requirements Analysis

*According to Component Type addressed by the solution ie Messaging Node, Runtime, Network QoS and Framework*

##### [Autentication and Authorisation](https://github.com/reTHINK-project/core-framework/issues/10) (PTIN)

External Authentication and Authorisation are supported through the usage of an Authorisation module:

```java
container.deployModule("io.vertx~mod-auth-mgr~2.0.0-final");
```

The Authorisation module can be the front-end to interact with an external vertx service eg with restful APIs or could be attached to the vertx-io event bus.

**Authorisation to Send/publish a Message**

* SockJSServer, where we need a bridge configuration
 * InboudPermitted must have: vertx.basicauthmanager.login and clients handler
  ```java
JsonArray inboundPermitted = new JsonArray();

JsonObject inboundPermitted1 = new JsonObject().putString("address", "vertx.basicauthmanager.login");
inboundPermitted.add(inboundPermitted1);
JsonObject inboundPermitted2 = new JsonObject().putString("address", "aliceHandler").putBoolean("requires_auth",true);
inboundPermitted.add(inboundPermitted2);
  ```
Inboundpermitted allows the use of the "requires_auth" flag. When it is true, messages will be first forwarded to the authorization module, where decisions to send or not the messages are taken.

**receive a Message**

 * OutboundPermitted must have: clients handler.
  ```java
outboundPermitted.add(new JsonObject().putString("address", "aliceHandler"));
  ```
```java
sockJSServer.bridge(new JsonObject().putString("prefix", "/eventbus"), inboundPermitted, outboundPermitted);
```

**Example: communication between two javascript clients connected via SockJS**

Both client applications perform log-in on the EventBus.
```javascript
eb.login('alice','alice123', function(reply){console.log(reply);});
```

Then the client A(alice) wants to send messages to the client B(bob), so client B(bob) needs to register a handler. 
Before the client A(alice) can send a message to client B(bob), B must first register himself.
```javascript
eb.registerHandler('bobHandler', function(reply){console.log(reply);});
```
After that client A (alice) can publish messages on client B (bob) handler
```javascript 
eb.publish('bobHandler','Hello bob from alice');
```
When client A publishes a message to client B handler, this message will be first forwarded to the authorization module because of inbounpermitted configuration.

**subscribe / register handlers to be notified about published messages**

In the SockJSServer configuration we can set a Hook (Registers functions to be called when certain events occur on an event bus bridge).
```java
ServerHook hook = new ServerHook(logger);
sockJSServer.setHook(hook);
```

ServerHook takes some keyword arguments for example:

* pre-register: Called before a client handler registration is processed.
```java
 public boolean handlePreRegister(SockJSSocket sock, String address) {
    logger.info("handlePreRegister, sock = " + sock + ", address = " + address);
    return true;
  }
```

In this way handlers registration can be controlled.

##### [Unstable Connections](https://github.com/reTHINK-project/core-framework/issues/15)(PTIN)

Hint from Fokus: Since vertx is based on http://hazelcast.org/ we can use it to cache some info including the sessionId

##### [Carrier grade deployment features (Resilience, DoS and DDoS protection, Service Assurance)](Messaging Node with carrier grade deployment features) (FOKUS)
* Resilience: Vert.x provides resilience through the "automatic failover" and "HA group" options. When a module is run with HA, if the Vert.x instance where it is running fails, it will be re-started automatically on another node of the cluster. An HA group denotes a logical grouping of nodes in the cluster. Only nodes with the same HA group will failover onto one another. 
* DoS and DDoS Protection: Vert.x 2.x. has no support for this, BUT Vert.x 3.0 provides built-in core functiionality for this core
* Service Assurance: Modules can be deployed in clusters, and Vert.x provides an internal Load Balancer for routing messages within the cluster. Also the above mentioned "auomatic failover" and "HA group" options contribute to enforce service assurance. 

##### [Scalability] (https://github.com/reTHINK-project/core-framework/issues/16) (FOKUS)
Verticle instances, except advanced multi-threaded worker verticles are almost always single threaded. what this implies is that, a single verticle instance can at most utilise one core of the server. In order to scale across cores, several verticles which are responsible for the same task can be instantiated and the runtime will distribute the workload among them (load balancing), this way taking full advantage of all SPU cores without much effort. Verticles can also be distributed between several machines. This will be transparent to the application code. The Verticles use the same mechanisms to communicate as if they would run on the same machine. This makes it very easy to scale applications.

##### [Messaging Transport Protocols] (https://github.com/reTHINK-project/core-framework/issues/20)(FOKUS)
* Websockets - Yes  supported
* SockJS - Yes supported
* HTTP Long-Polling - Yes 
* HTTP Streaming - ? (Not sure what this means, clarification needed)

##### [Message delivery reliability] (https://github.com/reTHINK-project/core-framework/issues/17)(FOKUS)
No.
Vert.x uses the Event Bus to send messages through pub/sub mechanism or point-2-point mechanism. In both cases, there is no feedback to the sender if the message was recieved and processed or if it was not recieved at all. In the end reliability will boil down to the application logic service build on top of vert.x. 

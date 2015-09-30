Vert.x 3.0
----------

### Overview

This evaluation will evidence differences between version 2 [57] and 3 [58] of vert.x.

Since main concepts and architecture are not changed from version 2, description provided in the previous is still valid.

### Vert.x Runtime (Java 8 only)

Vert.x 3.0 is Java 8 only. This is to take advantage of new language features in Java 8, the most important of which is Lambdas which make developing against event based APIs so much nicer than in previous versions of Java. And is also chosen so that it can use Nashorn - the new high performance JavaScript engine that it contains.

### Addressing

No change from [version 2.0](vertx2.md).

### Handlers

No change from [version 2.0](vertx2.md).

### Messaging Schemes

The main modes of messaging supported by Event Bus are not changed from [version 2.0](vertx2.md).

The example below shows how, in version 3, the Event Bus can be instantiated, how a Handler can be defined and registered on the Event Bus and how the Event Bus can subsequently publish a message for the defined Handler:

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

No change from [version 2.0](vertx2.md).

### Verticle

The unit of execution for Vert.x applications is called a Verticle. Verticles can be written in multiple languages (Java, JavaScript, Groovy and Ruby). Many verticles can be executed concurrently in the same Vert.x instance. An application might be composed of multiple verticles deployed on different nodes of the network communicating by exchanging messages over the Vert.x Event Bus. You can now (version 3) instantiate verticles and deploy verticle instances programmatically. The platform manager API has been removed, and methods for deploying verticles have moved to the Vertx interface. The API for deploying verticles is much simpler, so this should simplify things when embedding.

### Module

The Vert.x 3 module system has gone. It's advisable to use already available options like Maven or Gradle. Non Java verticles (e.g. JavaScript) can also be packaged in jars and pushed as Maven artifacts. It will also support resolving in other ways and from other places (e.g. at run-time and from npm modules) before 3.0.final.

### Event Loop

No change from [version 2.0](vertx2.md).

### APIs

Vert.x provides the different APIs which are implemented in various languages. The two main modules are "Core API" and "Apex API":

**Core API**

-	Deploy and undeploy verticles
-	Logging
-	TCP client/Server API
-	HTTP client/Server API
-	File System Access
-	DNS client API
-	Shared Data
-	Event Bus API
-	JSON API

**Apex API**

-	Routing (based on method, path, etc)
-	Event-bus bridge
-	SockJS support
-	Session support - both local (for sticky sessions) and clustered (for non sticky)
-	Basic Authentication and Redirect based authentication
-	User/role/permission authorisation

### Requirements Analysis

#### Messaging Node Requirements Analysis

##### [Autentication and Authorisation](https://github.com/reTHINK-project/core-framework/issues/10)

**Yes** External Authentication and Authorisation are supported through Maven artifacts: vertx-apex and vertx-auth-service

The Authorisation module can be the front-end to interact with an external vertx service eg with restful APIs or could be attached to the vertx-io event bus.

**Authorisation to Send/publish a Message**

SockJSHandler is used, where we need a bridge configuration. Inbound and outbound options have specific bridge configuration classes.

```java
 final BridgeOptions options = new BridgeOptions();
 options.addInboundPermitted(new PermittedOptions().setAddress("chat.to.server").setRequiredPermission("tim"));
 options.addOutboundPermitted(new PermittedOptions().setAddress("chat.to.client"));
```

Inboundpermitted with "setRequiredPermission" or "setRequiredRole" will force an authenticated session to send into that address.

-	Configure authentication handler and provider

```java
	final AuthProvider authProvider = //implement this interface for authentication and authorization control
	final AuthHandler basicAuthHandler = BasicAuthHandler.create(authProvider);
	```

	AuthProvider is similar to a SPI (Service Provider Interface) with 3 basic methods: login(..), hasRole(..), hasPermission(..). It's available for custom implementations, so that it's possible to interop with other parts of the system (like a database). AuthHandler can also be rewritten, but in this case we use simple browser authentication.

**Receive a Message**

 * SockJS handler is needed with bridge options.

```java
 final SockJSHandler sockJSHandler = SockJSHandler.create(vertx);
 sockJSHandler.bridge(options);
```

-	Configure Apex Router with SockJS handler for "/eventbus/" uri

```java
 //required  Cookie and Session handlers for every address
 final Router router = Router.router(vertx);
 router.route().handler(CookieHandler.create());
 router.route().handler(SessionHandler.create(LocalSessionStore.create(vertx)));

 //apply AuthHandler handler to an address (order of this handler is important)
 router.route("/eventbus/*").handler(basicAuthHandler);

 //apply SockJS handler to an address
 router.route("/eventbus/*").handler(sockJSHandler);
```

-	EventBus handler for "chat.to.server" address, every message sent to this address will be processed in this handler

```java
 final EventBus eb = vertx.eventBus();
 eb.consumer("chat.to.server").handler(message -> {
    //user code...
 });
```

**Example: simple communication send/receive in the same client connected via SockJS**

-	Register handler to receive messages in "chat.to.client" address

```JavaScript
 eb.registerHandler('chat.to.client', function(msg) {
    console.log('Message Received: ' + msg);
 });
```

-	Send message to "chat.to.server" address

```JavaScript
	eb.send('chat.to.server', {name: 'tim', age: 35});
```

**Subscribe / register handlers to be notified about published messages**

EventBusBridgeHook is not yet available in version 3, however it's possible to override the SockJSHandlerImpl class and bypass this limitation.

ServerHook takes some keyword arguments for example:

-	pre-register: Called before a client handler registration is processed.

```java
 public boolean handlePreRegister(SockJSSocket sock, String address) {
    out.println("handlePreRegister, sock = " + sock + ", address = " + address);
    return true;
 }
```

-	message-handler: it's possible in this version to discovery the user that has sent the message (available in apex Session)

```java
 public boolean handleSendOrPub(SockJSSocket sock, boolean send, JsonObject msg, String address) {
    msg.put("principal", sock.apexSession().getPrincipal());
    return true;
 }
```

In this way handlers registration can be controlled, and the user information can be sent to the EventBus.

##### [Unstable Connections](https://github.com/reTHINK-project/core-framework/issues/15)

**Yes**

Since vertx is based on http://hazelcast.org/ we can use it to cache some info including the sessionId

##### [Carrier grade deployment features (Resilience, DoS and DDoS protection, Service Assurance)](Messaging Node with carrier grade deployment features)

**Yes**

-	Resilience: Vert.x provides resilience through the "automatic failover" and "HA group" options. When a module is run with HA, if the Vert.x instance where it is running fails, it will be re-started automatically on another node of the cluster. An HA group denotes a logical grouping of nodes in the cluster. Only nodes with the same HA group will fail over onto one another.
-	DoS and DDoS Protection: Vert.x 2.x. has no support for this, BUT Vert.x 3.0 provides built-in core functionality for this core
-	Service Assurance: Modules can be deployed in clusters, and Vert.x provides an internal Load Balancer for routing messages within the cluster. Also the above mentioned "automatic fail over" and "HA group" options contribute to enforce service assurance.

##### [Scalability](https://github.com/reTHINK-project/core-framework/issues/16)

**Yes**

Verticle instances, except advanced multi-threaded worker verticles are almost always single threaded. what this implies is that, a single verticle instance can at most utilise one core of the server. In order to scale across cores, several verticles which are responsible for the same task can be instantiated and the runtime will distribute the workload among them (load balancing), this way taking full advantage of all SPU cores without much effort. Verticles can also be distributed between several machines. This will be transparent to the application code. The Verticles use the same mechanisms to communicate as if they would run on the same machine. This makes it very easy to scale applications.

##### [Messaging Transport Protocols](https://github.com/reTHINK-project/core-framework/issues/20)

**Yes**

-	Websockets - Yes
-	SockJS - Yes
-	HTTP Long-Polling - Yes

##### [Message delivery reliability](https://github.com/reTHINK-project/core-framework/issues/17)

**No**

Vert.x uses the Event Bus to send messages through pub/sub mechanism or point-2-point mechanism. In both cases, there is no feedback to the sender if the message was received and processed or if it was not received at all. In the end reliability will boil down to the application logic service build on top of vert.x.

#### Runtime Requirements Analysis

From a runtime perspective the Vert.x is transparent to JVM8 (nashorn). Nashorn supports the full ECMAScript 5.1 specification. In that regard there are no browser API's such as: HTML5 canvas, HTML5 audio, WebWorkers, WebSockets, WebGL...

Initialization of the runtime engine:

```java
final ClassLoader classLoader = TestClass.class.getClassLoader();
final NashornScriptEngineFactory factory = new NashornScriptEngineFactory();
```

Nashorn is built on top of Java and takes advantage of standard Java security measures. Fine-grained security is enabled within applications. We can control the class load mechanism, effectively building a sandbox:

```java
 final ScriptEngine engine = factory.getScriptEngine(name -> { if(name.equals(TestClass.class.getName())) { return true; //OK, Java TestClass available from JavaScript }
return false; //everything else fails...
});
```

Binding variables to the JavaScript scope is just one line of code. We can expose the Vert.x EventBus and use it like if we were in the JVM:

```
engine.getBindings(ScriptContext.ENGINE_SCOPE).put("eb", vertx.eventBus());
```

Running a JavaScript file is also just a line of code:

`java
engine.eval(new FileReader(classLoader.getResource("myjs.js").getFile()));
`

Although there are no WebSockets in the Nashorn runtime, it's possible to simulate a WS interface connecting directly through the EventBus, delegating the actual connection with the Vert.x.

Found some performance measures on: http://ariya.ofilabs.com/2014/03/nashorn-the-new-rhino-on-the-block.html

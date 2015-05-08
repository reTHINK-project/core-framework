## Vert.x Evaluation

### Overview

*Overview of functionalities and type of WP3 component that the asset can be used for ie Messaging Node, Runtime, Network QoS and Framework* 


Vert.x is an application framework developed by VMWare in 2011. The application framework provides possibilities to develope loosely coupled network service applications.  

The concept of the framework is summarized as follows:
* **Polyglot (supports several languages)**:
Vert.x framework runs on the Java Virtual Machine. However, Java is not required to use Vert.x. 
As well as languages based on JVM operation, such as Java or Groovy, Vert.x can be used with Ruby, Python, and even JavaScript. In addition, Scala and Closure are planned to be supported.
* **Super Simple Concurrency model**:
When building an application by using Vert.x, users can write code as a single thread application. That means that the multi-thread programming effect can be achieved without synchronization, lock, or volatility.
However, Vert.x allows to create multiple threads based on the number of CPU cores whlie only one process is executed. It handle the multi-threading so users can focus on implementing business logic.
* **Provides Event Bus**:
The main concept of Vert.x is not only to produce a ‘one server process DAEMON'. Vert.x aims to make a variety of Vert.x-built server programs communicate well with each other. For this, Vert.x provides Event Bus. Therefore, functions such as Point to Point or Pub/Sub can be used (to provide Event Bus function, Vert.x uses Hazelcast, an In-Memory Data Grid).
With this Event Bus, a server application built with different languages can easily communicate with each other.
* **Module System & Public Module Repository**:
Vert.x has a module system. This module system can be understood as a type of component. That means the Vert.x-built server application project itself is modularized. It aims at reusability. Modules can be registered to Public Module Repository. Through the Public Module Repository, the module can be shared

### Architecture
This subsection highlights the main building blocks of the Vert.x architecture. 
![image](https://cloud.githubusercontent.com/assets/3206539/7366117/3e517a0e-ed96-11e4-8ba8-be1fc0f5e9ac.png)

Figure 1. Distributed Event Bus

### Addressing
Messages are sent on the event bus to an address. Vert.x instances are not bound to any addressing schemes. An address is simply a string, any string is valid. Some examples of valid addresses are europe.news.feed1, acme.games.pacman, sausages, and X.
As a convention the names of the packages that implement certain functionalities should also be represented on the event bus and should be combined with a meaningful event/operation name, e.g. org.acme.MyPackage.MyClass.doSomething

### Handlers
A handler is an entity that receives messages from the bus. You register a handler at an address. Many different handlers from the same or different modules can be registered at the same address. A single handler can be registered at many different addresses at the same time.

### Messaging Schemes
The Event Bus supports the following modes of operation: 
* *Publish / subscribe messaging*: Publishing means delivering the message to all handlers that are registered at that address. This is the familiar publish/subscribe messaging pattern. 
* *Point to point and Request-Response messaging*: Messages are routed to just one of the handlers registered at an address. They can optionally be replied to. 
* *Remote Procedure Call (RPC)*: This mode of operation is implemented on top of the Request-Response model, basically by enforcing certain conventions on requests and responses

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
* worker
indicates if this is a worker module. See below under event loop. 
* main
Indicates the startup routine for this module. 
* includes
Additional module dependencies as a comma-separated string.

## Event Loop
By default, all verticles run in an asynchronous event loop. When developing a verticle, it is essential not to block the event loop. Blocking here means either doing any kind of blocking I/O or even doing any kind of computational intensive work. Modules that do either of these should indicate that they are so called "worker" modules by setting "worker": true in their mod.json file. 
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

Available APIs for developers

### Requirements Analysis

*According to Component Type addressed by the solution ie Messaging Node, Runtime, Network QoS and Framework*

#### [Autentication and Authorisation](https://github.com/reTHINK-project/core-framework/issues/10) (PTIN)

#### [Unstable Connections](https://github.com/reTHINK-project/core-framework/issues/15)(PTIN)

Hint from Fokus: Since vertx is based on http://hazelcast.org/ we can use it to cache some info including the sessionId



# Vert.x
Vert.x is a middleware framework for developing loosely coupled network service applications. The framework is a polyglot, meaning that applications can be written in a number of languages such as Java, JavaScript, CoffeeScript, Ruby, Python or Groovy. Applications developed within the framework act as single threads, which is an advantage to the difficulties and pitfalls involved in writing multi-threaded programs. The middleware runs on the Java Virtual Machine which offers the additional edge of seamless scalability over and inter-process communication between various instances.  
The sections below describe the main concepts of the framework.

## Distributed Event Bus
The Event Bus is the nervous system of the framework. It allows modules of the framework to communicate with each other irrespective of what language they are written in, and whether they are in the same framework instance, or in a different instance running on the network. It even allows client side JavaScript running in a browser to communicate on the same Event Bus. 
The Event Bus forms a distributed peer-to-peer messaging system spanning multiple server nodes and multiple browsers. It can be extended dynamically through several virtual and physical machines.

![image](https://cloud.githubusercontent.com/assets/3206539/7366117/3e517a0e-ed96-11e4-8ba8-be1fc0f5e9ac.png)
Figure 1. Distributed Event Bus

The section below highlights the building blocks and concepts of the Event Bus:
### Addressing
Messages are sent on the event bus to an address. Vert.x instances are not bound to any addressing schemes. An address is simply a string, any string is valid. Some examples of valid addresses are europe.news.feed1, acme.games.pacman, sausages, and X.
As a convention the names of the packages that implement certain functionalities should also be represented on the event bus and should be combined with a meaningful event/operation name, e.g. org.acme.MyPackage.MyClass.doSomething

### Handlers
A handler is an entity that receives messages from the bus. You register a handler at an address. Many different handlers from the same or different modules can be registered at the same address. A single handler can be registered at many different addresses at the same time.

### Messaging Schemes
The Event Bus supports the following modes of operation: 
* Publish / subscribe messaging 
Publishing means delivering the message to all handlers that are registered at that address. This is the familiar publish/subscribe messaging pattern. 
* Point to point and Request-Response messaging
Messages are routed to just one of the handlers registered at an address. They can optionally be replied to. 
* Remote Procedure Call (RPC)
This mode of operation is implemented on top of the Request-Response model, basically by enforcing certain conventions on requests and responses

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

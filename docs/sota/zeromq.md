## ZeroMQ Evaluation

### Overview

In the scope of the reTHINK project)ZeroMQ is a candidate technology for the Messaging Node

It is a low level messaging library written in C++ used as a thin layer between the application and transport layers.

##### Highlights:

* Multicore Optimized
* Automatic TCP (re)connect
* Fast 8M msg/sec, 30usec latency
* Small (20k lines of C++)
* Message-passing using in-memory queues
* Uses the [ZMTP](http://rfc.zeromq.org/spec:37) protocol for exchanging messages between two peers.
* Works on top of TCP, IPC, in-memory and PGM/EPGM (multicast) communication protocols.
* A few communication patters are use to communicate, that can be combined together.
* Asynchronous messaging.
* 40+ Language Bindings
* Fast for development thanks to many useful abstraction layers and native languages.

### Architecture


![image](zeromq_basic_patterns.png)

### APIs

#### Native Implementations

* [C/C++](https://github.com/zeromq/libzmq) represent the State of the Art.
* [Java](https://github.com/zeromq/jeromq) fully compatible at both API and protocol level)sans encryption or PGM.
* [.NET](https://github.com/zeromq/netmq) same constraints as JeroMQ
* [Erlang](https://github.com/zeromq/ezmq)
* [Python](https://github.com/caedesvvv/zmqproto)
* [C](https://github.com/zeromq/libzmtp) designed for small places you would not normally expect messaging technology to fit
* [Netty](https://github.com/spotify/netty-zmtp)

#### Language Bindings
 * [Ada, C, Chicken Scheme, Common Lisp, C#(.NET & Mono), C++, D, delphi binding, Eiffel, Erlang, F#, Felix, Flex (ActionScript), Fortran77, Go, Guile, Haskell, Haxe, Java binding, JavaScript (Flash), Julia, LabVIEW, Lua bindings, Nimrod, Node.js, Objective-C, Objective Caml binding, ooc, Perl s, PHP binding, Python binding, Q, Racket, R, RE, RE, Red, Ruby, Ruby(FFI), Scala, Smalltalk, Tcl, Twisted (Python), XPCOM](http://zeromq.org/bindings:_start), and more [on github.com](https://github.com/search?utf8=%E2%9C%93&q=zmq&type=Repositories&ref=searchresults)

#### Clients
* [JSMQ](https://github.com/zeromq/JSMQ) Javascript client for ZeroMQ/NetMQ over WebSockets



[ZeroMQ API Reference](http://api.zeromq.org/)

### Requirements Analysis

Analysis against **Messaging Node** Requirements

* [It should be possible to support Protocol on-the-fly](https://github.com/reTHINK-project/core-framework/issues/21)
  * Yes
  * the Client Server API could be wrapped in a protocol stub, that can be downloaded at runtime

* [Messaging Transport Protocols](https://github.com/reTHINK-project/core-framework/issues/20)
  * Partially
  * Has support for :
    * Javascript and WebSockets using [JSMQ](https://github.com/zeromq/JSMQ)

* [Message Caching](https://github.com/reTHINK-project/core-framework/issues/19)
  * Yes
  * Using the [Titanic Service Protocol](http://rfc.zeromq.org/spec:9)

* [Message Node logging](https://github.com/reTHINK-project/core-framework/issues/18)

* [Message delivery reliability](https://github.com/reTHINK-project/core-framework/issues/17)

* [Messaging Node deployments with carrier grade scalability](https://github.com/reTHINK-project/core-framework/issues/16)
  * [9,5 Million Messages / second were benchmarked on a 16 core machine](http://zeromq.org/results:0mq-tests-v03)

* [Messaging Node should be tolerant to unstable connections](https://github.com/reTHINK-project/core-framework/issues/15)

* [Events about clients connection / disconnection from Messaging Node](https://github.com/reTHINK-project/core-framework/issues/14)

* [Messaging Node must support very low message delivery latency](https://github.com/reTHINK-project/core-framework/issues/13)

* [Messaging Node must be deployable in the most used Virtual Machines](https://github.com/reTHINK-project/core-framework/issues/12)

* [Messaging Node should require minimal computing resources](https://github.com/reTHINK-project/core-framework/issues/11)

* [Messaging Node must support external authentication and Authorisation](https://github.com/reTHINK-project/core-framework/issues/10)
  * Yes
  * Implemented:
    * [ZAP - ZeroMQ Authentication Protocol (PAM, LDAP, Kerberos, passwd, etc)](http://rfc.zeromq.org/spec:27)
    * CurveZMQ Authentication and Encryption Protocol [Link1](http://curvezmq.org/) [Link2](http://rfc.zeromq.org/spec:26)
    * [GSSAPI (Kerberos)](http://rfc.zeromq.org/spec:38) or [CURVE](http://curvezmq.org/)
    * [SRP](http://rfc.zeromq.org/spec:34)
  * Supports the ability to be extended

* [Messaging Node must support pub/sub](https://github.com/reTHINK-project/core-framework/issues/9)
  * Yes
  * Using the [ZeroMQ Publish-Subscribe Pattern](http://rfc.zeromq.org/spec:29)

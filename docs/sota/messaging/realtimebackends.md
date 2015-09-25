## Realtime backends 

Realtime backends (aka noBackend or BackendAsAService(BaaS)) is a concept related to real time databases. It is a way to build web architectures without necessarily defining and standardizing data structures or interworking protocols if they are really needed. The backend and its remote framework is taking into account all low level mechanism of client-server dialogue, allowing developer to concentrate in service logic, in its local runtime [54].
The realtime backend concept would allow to define and manage interworking with other services, in a way that entirely belongs to each application. It can also be a solution to manage and maintain user preferences, endpoints registration status … and also to manage discovery.

For instance, in IoT domain, nobody is able now to identify every kind of objects that will be available in a close future, the way they will communicate, their need of security, level of authentication … It’s the reason why a solution that still allows in the future to define or modify data structures is the best way to have an evolving solution, well understood and adopted by a large number of developers.

[“Real-Time Web Technologies Guide”](http://www.leggetter.co.uk/real-time-web-technologies-guide/), from Phil Leggetter gives an overview of the different tools that are currently offered [55]. Among them we can site PubNub, Firebase, recently acquired by Google, and many others.

The main difference with other Messaging Nodes is the fact that all the synchronisation layer is managed by the service, so the developper only manages local objects that are immediatly syncrhonized by the library.

* Here is an example of code given by the firebase site:

>// Use YOUR Firebase URL (not the one below)

>var fb = new Firebase("https://<your-firebase>.firebaseio.com");

>/* Remember to include firebase JS Library

><script src="https://cdn.firebase.com/js/client/2.2.4/firebase.js"></script>

>*/

* Save data:

>fb.set({ name: "Alex Wolfe" });

* Update in real time

>fb.on("value", function(data) {

>  var name = data.val() ? data.val().name : "";

>  alert("My name is " + name);

>});


Ref:
http://en.wikipedia.org/wiki/Real-time_database

http://www.leggetter.co.uk/real-time-web-technologies-guide/

http://www.leggetter.co.uk/2013/12/09/choosing-realtime-web-app-tech-stack.html

### Requirements Analysis

#### [Messaging Node Requirements](https://github.com/reTHINK-project/core-framework/labels/Messaging%20Node%20Requirement)**


* [It should be possible to support Protocol on-the-fly](https://github.com/reTHINK-project/core-framework/issues/21)
  * Yes
  * As protocol on the fly is based on data representation, it is very convient as the realtime back ends are data oriented.

* [Messaging Transport Protocols](https://github.com/reTHINK-project/core-framework/issues/20)
  * No, as the transport protocol is hidden from the remote machine.
   
* [Messaging Node logging](https://github.com/reTHINK-project/core-framework/issues/18)
  * Yes - Several logging modules available... 

* [Message delivery reliability](https://github.com/reTHINK-project/core-framework/issues/17)
  * Depending of the product.

* [Messaging Node deployments with carrier grade scalability](https://github.com/reTHINK-project/core-framework/issues/16)
  * Depending of the product.
    
* [Messaging Node should be tolerant to unstable connections](https://github.com/reTHINK-project/core-framework/issues/15)
  * Yes - Depending of the product.

* [Events about clients connection / disconnection from Messaging Node](https://github.com/reTHINK-project/core-framework/issues/14)
  * Yes - Low level feature taken into account regarding the product

* [Messaging Node must support very low message delivery latency](https://github.com/reTHINK-project/core-framework/issues/13)
  * Yes 

* [Messaging Node must be deployable in the most used Virtual Machines](https://github.com/reTHINK-project/core-framework/issues/12)
  * Yes - Depending of the product, some are available in SaaS mode.

* [Messaging Node should require minimal computing resources](https://github.com/reTHINK-project/core-framework/issues/11)
  * Yes - Depending of the product

* [Messaging Node must support external authentication and Authorisation](https://github.com/reTHINK-project/core-framework/issues/10)
  * Yes. 

* [Messaging Node must support pub/sub](https://github.com/reTHINK-project/core-framework/issues/9)
  * Yes


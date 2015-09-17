Realtime backends (aka noBackend or BackendAsAService(BaaS)) is a concept related to real time databases. It is a way to build web architectures without necessarily defining and standardizing data structures or interworking protocols if they are really needed. The backend and its remote framework is taking into account all low level mechanism of client-server dialogue, allowing developer to concentrate in service logic, in its local runtime.
The realtime backend concept would allow to define and manage interworking with other services, in a way that entirely belongs to each application. It can also be a solution to manage and maintain user preferences, endpoints registration status … and also to manage discovery.

For instance, in IoT domain, nobody is able now to identify every kind of objects that will be available in a close future, the way they will communicate, their need of security, level of authentication … It’s the reason why a solution that still allows in the future to define or modify data structures is the best way to have an evolving solution, well understood and adopted by a large number of developers.

“Real-Time Web Technologies Guide”, from Phil Leggetter gives an overview of the different tools that are currently offered [http://www.leggetter.co.uk/real-time-web-technologies-guide/]. Among them we can site PubNub, Firebase, recently acquired by Google, and many others.

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

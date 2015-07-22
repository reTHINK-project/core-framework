#### Browser Runtime Implementation

* A Service Worker is used to manage the cache of Runtime Core Components
* Hyperties and Protocol Stubs are implemented inside Web Workers 
* Runtime Core components, Hyperties and Protocol Stub are executed inside an iFrame loaded from reTHINK runtime provider domain
* Web Workers are only able to interact each other with self.postMessage(..) which is caught by
    window.addEventListener('message', handleSizingResponse, false); 
implemented by the Runtime MsgBUS Core Component
* The same Service Worker may also be used to manage the cache of Hyperties and protostubs


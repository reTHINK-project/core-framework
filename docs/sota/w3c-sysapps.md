## W3C System Applications Working Group

The mission of W3C System Applications Working Group is to define a runtime environment, security model, and associated APIs for building Web applications with comparable capabilities to native applications.

### Service Workers

Service workers essentially act as proxy servers that sit between web applications, and the browser and network (when available.) They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. 

A service worker is an event-driven worker registered against an origin and a path. It takes the form of a JavaScript file that can control the web page/site it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available.)

A service worker is run in a worker context: it therefore has no DOM access, and runs on a different thread to the main JavaScript that powers your app, so it is not blocking. It is designed to be fully async;

A service worker is first registered and, if successful, it will be downloaded to the client and attempt installation/activation for URLs accessed by the user inside the whole origin, or inside a subset specified by you.

Service Worker registration Example:

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/my-app/sw.js', {
    scope: '/my-app/'
  }).then(function(reg) {
    console.log('Yey!', reg);
  }).catch(function(err) {
    console.log('Boo!', err);
  });
}
```

Where `/my-app/sw.js` is the location of the ServiceWorker script, and it controls pages whose URL begins `/my-app/`.

At this point, your service worker will observe the following lifecycle:
* Download
* Install
* Activate

The service worker is immediately downloaded when a user first accesses a server worker–controlled site/page. Installation is attempted when the downloaded file is found to be new — either different to an existing service worker (byte-wise compared), or the first service worker encountered for this page/site.

The user agent may terminate service workers at any time it has no event to handle or detects abnormal operation such as infinite loops and tasks exceeding imposed time limits, if any, while handling the events.

Service Workers can be used to intercept network messages. Example:

```js
self.addEventListener('fetch', function(event) {
  console.log(event.request);
});
```

Service Workers provides the basis for other features including:
* [Push](http://w3c.github.io/push-api/)
* [Background sync](https://github.com/slightlyoff/BackgroundSync)
* [Geofencing](https://github.com/slightlyoff/Geofencing)

Service Workers are still an experimental technology only supported in Desktop Chrome and Firefox.

#### Applicability in reTHINK 

Service Workers provides features that can facilitate the development of some Runtime features including Event BUS, ProtOfly engine, Policy Engine. Its usage to support the Hyperty instance itself should also be evaluated. However it seems this technology is only available in Browsers and not in server side javascript runtime like node.js.

### Application Lifecycle and Events


### References

http://www.w3.org/2012/sysapps/

https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md
http://www.w3.org/TR/service-workers/
https://jakearchibald.github.io/isserviceworkerready/

http://www.w3.org/2012/sysapps/app-lifecycle/

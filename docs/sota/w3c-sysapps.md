## W3C System Applications Working Group

The mission of W3C System Applications Working Group is to define a runtime environment, security model, and associated APIs for building Web applications with comparable capabilities to native applications.

### Service Workers

Service workers essentially act as proxy servers that sit between web applications, and the browser and network (when available.) They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. Service workers are generic, event-driven, time-limited script contexts that run at an origin.

A few characteristics:
* A service worker has an associated state, which is one of parsed, installing, installed, activating, activated, and redundant.
* A service worker has an associated script url (a URL).
* A service worker has an associated containing service worker registration (a service worker registration), which contains itself.
* A service worker is dispatched a set of lifecycle events, install and activate, and functional events including fetch.
* A service worker has an associated skip waiting flag. Unless stated otherwise it is unset.

The lifetime of a service worker is tied to the execution lifetime of events, not references held by service worker clients to the ServiceWorker object. A service worker client is an environment settings object that specifies various settings for its JavaScript global environment.
The user agent may terminate service workers at any time it has no event to handle or detects abnormal operation such as infinite loops and tasks exceeding imposed time limits, if any, while handling the events.

First a ServiceWorker has to register. Example:

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

In this example, `/my-app/sw.js` is the location of the ServiceWorker script, and it controls pages whose URL begins `/my-app/`.

Then you can intercept the network:

```js
self.addEventListener('fetch', function(event) {
  console.log(event.request);
});
```

The lifecycle of a ServiceWorker is based on Chrome's update model. Whenever you navigate to page within scope of your ServiceWorker, the browser checks for updates in the background. If the script is byte-different, it's considered to be a new version, and installed.

Service Workers provides the basis for other features including:
* [Push](http://w3c.github.io/push-api/)
* [Background sync](https://github.com/slightlyoff/BackgroundSync)
* [Geofencing](https://github.com/slightlyoff/Geofencing)

Service Workers are still an experimental technology only supported in Desktop Chrome and Firefox.

### Application Lifecycle and Events


### References

http://www.w3.org/2012/sysapps/

https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md
http://www.w3.org/TR/service-workers/
https://jakearchibald.github.io/isserviceworkerready/

http://www.w3.org/2012/sysapps/app-lifecycle/

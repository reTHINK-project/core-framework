## W3C System Applications Working Group

The mission of W3C System Applications Working Group is to define a runtime environment, security model, and associated APIs for building Web applications with comparable capabilities to native applications.

### Service Workers

Service workers essentially act as proxy servers that sit between web applications, and the browser and network (when available.) They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. Service Workers provides the basis for other features including push notifications and background sync APIs.

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


### Application Lifecycle and Events


### References

http://www.w3.org/2012/sysapps/

https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md
http://www.w3.org/TR/service-workers/

http://www.w3.org/2012/sysapps/app-lifecycle/

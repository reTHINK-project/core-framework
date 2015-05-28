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

### Content Security Policy Level 2

Defines a policy language used to declare a set of content restrictions for a web resource, and a mechanism for transmitting the policy from a server to a client where the policy is enforced.

Content Security Policy is a declarative policy that lets the authors (or server administrators) of a web application inform the client about the sources from which the application expects to load resources.

To take advantage of CSP, a web application opts into using CSP by supplying a Content-Security-Policy HTTP header. Such policies apply to the current resource representation only. To supply a policy for an entire site, the server needs to supply a policy with each resource representation.

A security policy is applied by a user agent to a specific resource representation, known as the protected resource. 

Example:
```script-src 'self'; object-src 'none'```

Security policies contain a set of security policy directives (script-src and object-src in the example above), each responsible for declaring the restrictions for a particular resource type, or manipulating a specific aspect of the policy’s restrictions. 

The server delivers a policy to the user agent via an HTTP response header or an HTML meta element.
The Content-Security-Policy header field is the preferred mechanism for delivering a policy. The grammar is as follows:

```"Content-Security-Policy:" 1#policy-token```

For example, a response might include the following header field:
```Content-Security-Policy: script-src 'self'```

A Content Security Policy consists of a U+003B SEMICOLON (;) delimited list of directives. Each directive consists of a directive name and (optionally) a directive value, defined by the following ABNF:

policy-token    = [ directive-token *( ";" [ directive-token ] ) ]
directive-token = *WSP [ directive-name [ WSP directive-value ] ]
directive-name  = 1*( ALPHA / DIGIT / "-" )
directive-value = *( WSP / <VCHAR except ";" and ","> )


### References

* http://www.w3.org/2012/sysapps/
* https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
* https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md
* http://www.w3.org/TR/service-workers/
* https://jakearchibald.github.io/isserviceworkerready/
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/2012/sysapps/app-lifecycle/

## W3C System Applications Working Group

The mission of W3C System Applications Working Group is to define a runtime environment, security model, and associated APIs for building Web applications with comparable capabilities to native applications.

### Service Workers

Service workers are based on previous [Web Worker](http://www.w3.org/TR/workers/) W3C work and they essentially act as proxy servers that sit between web applications, and the browser and network (when available.) They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. 

A service worker is an event-driven worker registered against an origin and a path. It takes the form of a JavaScript file that can control the web page/site it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available.)

A service worker is run in its context: it therefore has no DOM access, and runs on a different thread to the main JavaScript that supports the web app, so it is not blocking. It is designed to be fully async;

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

#### References

* http://www.w3.org/TR/workers/
* https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
* https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md
* http://www.w3.org/TR/service-workers/
* https://jakearchibald.github.io/isserviceworkerready/

### Application Lifecycle and Events

The W3C Application Lifecycle and Events draft (last version from 16 May 2014) extends the Service Worker global execution context introduced above, to allow web developers to author applications that manage the application lifecycle and react to system events e.g. email or voip application. These capabilities allow application developers to create applications that integrate closely with the underlying system.

The following functionalities are provided:
* A background App or Service can run without a visible user interfaces
* An application is able to decide when to show the user interface
* The Application can be terminated without user’s consent, and that is able to restore to its previous state.
* The application is able to show a different user interface given how the app was launched. For example, if launched as a photo picker, the application will not show the default application window, but instead creates a special purpose user interface.
* The Application is only launched for  a specific set of events eg the runtime uses somekind of events pre-filtering mechanism. For example, if an application listens to a "USB plugged" event, it can additionally ask to only listen to a specific device connected or a specific port.
* The application is able to enumerate windows associated with it, and create new windows.

This API extends the ServiceWorkerGlobalScope interfaces in the following way:

```
partial interface ServiceWorkerGlobalScope {
                attribute EventHandler  onlaunch;
                attribute EventHandler  onterminate;
                attribute EventHandler  onterminatecanceled;
    readonly    attribute TaskScheduler taskScheduler;
};
```

#### Applicability in reTHINK 

Similar to Service Workers, this extension can facilitate the development of some Runtime features notably to govern the  runtime life-cycle of Hyperty instances. However, it seems this draft has not much support by the industry. However, [Chrome Packaged App lifecycle](https://developer.chrome.com/apps/app_lifecycle) looks similar. [Firefox Add-ons](https://developer.mozilla.org/en-US/Add-ons) should also support some kind of App life-cycle.

#### References

* http://www.w3.org/2012/sysapps/app-lifecycle/

### Content Security Policy Level 2

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware.

Defines a policy language used to declare a set of content restrictions for a web resource, and a mechanism for transmitting the policy from a server to a client where the policy is enforced. 

CSP provides a standard HTTP header that allows website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

The following header names are in use as part of an experimental CSP implementations:

Content-Security-Policy — standard header name proposed by the W3C document. Google Chrome supports this as of version 25. Firefox supports this as of version 23, released on 6 August 2013.
X-WebKit-CSP — experimental header introduced into Google Chrome and other WebKit-based browsers (Safari) in 2011.
X-Content-Security-Policy — experimental header introduced in Gecko 2 based browsers (Firefox 4 to Firefox 22, Thunderbird 3.3, SeaMonkey 2.1).
Support for the sandbox directive is also available in Internet Explorer 10 and Internet Explorer 11 using the experimental X-Content-Security-Policy header.

There's initial support for CSP in some web frameworks such as AngularJS and Django.

Example:
```script-src 'self'; object-src 'none'```

Security policies contain a set of security policy directives (script-src and object-src in the example above), each responsible for declaring the restrictions for a particular resource type, or manipulating a specific aspect of the policy’s restrictions. 

The server delivers a policy to the user agent via an HTTP response header or an HTML meta element.
The Content-Security-Policy header field is the preferred mechanism for delivering a policy. The grammar is as follows:

```"Content-Security-Policy:" 1#policy-token```

For example, a response might include the following header field:
```Content-Security-Policy: script-src 'self'```

A Content Security Policy consists of a U+003B SEMICOLON (;) delimited list of directives. 


#### Applicability in reTHINK 

In a preliminary analysis CSP seems too limited to be applied for the runtime policy engine but it may be useful to improve security in the protOfly engine.

#### References

* http://www.w3.org/TR/CSP2/
* https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
* http://en.wikipedia.org/wiki/Content_Security_Policy
* 

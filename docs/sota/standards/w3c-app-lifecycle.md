W3C SysApps
-----------

The [W3C SysApps working group](http://www.w3.org/2012/sysapps/app-lifecycle/)[85] was originally chartered to provide a runtime and security model however, it has not been possible to reach such objective. In the meanwhile we may find proprietary Web Runtimes, FFOS and Chrome, which provide a security model for installed packaged web Runtimes.

The [WHATWG](https://whatwg.org/)[86] was formed by individuals of Apple, the Mozilla Foundation, and Opera Software in 2004, in response to the slow development of World Wide Web Consortium (W3C) Web standards and W3C's decision to abandon HTML in favor of XML-based technologies.

On 10 April 2007, the Mozilla Foundation, Apple, and Opera Software proposed that the new HTML working group of the W3C adopt the WHATWG’s HTML5 as the starting point of its work and name its future deliverable as "HTML5". On 9 May 2007, the new HTML working group resolved to do that.

### W3C Application Lifecycle and Events

The W3C Application Life-cycle and Events draft (last version from 16 May 2014) extends the [Service Worker](w3c-service-workers.md) global execution context, to allow web developers to author applications that manage the application lifecycle and react to system events e.g. email or voip application. These capabilities allow application developers to create applications that integrate closely with the underlying system.

The following functionalities are provided:

-	A background App or Service can run without a visible user interfaces* An application is able to decide when to show the user interface
-	The Application can be terminated without user’s consent, and that is able to restore to its previous state.
-	The application is able to show a different user interface given how the app was launched. For example, if launched as a photo picker, the application will not show the default application window, but instead creates a special purpose user interface.
-	The Application is only launched for a specific set of events eg the runtime uses some kind of events pre-filtering mechanism. For example, if an application listens to a "USB plugged" event, it can additionally ask to only listen to a specific device connected or a specific port.
-	The application is able to enumerate windows associated with it, and create new windows.

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

Similar to Service Workers, this extension can facilitate the development of some Runtime features notably to govern the runtime life-cycle of Hyperty instances. However, [it seems this draft has not much support by the industry](https://lists.w3.org/Archives/Public/public-sysapps/2015Apr/0001.html)[87]. However, [Chrome Packaged App lifecycle](https://developer.chrome.com/apps/app_lifecycle) looks similar. [Firefox Add-ons](https://developer.mozilla.org/en-US/Add-ons) should also support some kind of App life-cycle.

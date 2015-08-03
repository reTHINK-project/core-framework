# Considerations about the implementation of Runtime for standalone applications

A couple of tools have emerged to build native apps using standard web technologies. Among them:
- crosswalk
- cordova / phonegap / ionic

## Crosswalk
Crosswalk is a runtime for  mobile and desktop web applications. It enables to deploy standard web application for various devices (Android/IOS/Linux). It is based on Chrome and Blink for rendering.

By using the Crosswalk Project, an application developer can:

- Use all the features available in modern web browsers: HTML5, CSS3, JavaScript.
- Access the latest recommended and emerging web standards.
- Use experimental APIs not available in mainstream web browsers.
- Control the upgrade cycle of an application by distributing it with its own runtime.
- Add custom extensions to an application, to leverage platform features not exposed by Crosswalk or the standardized web platform.

##Crosswalk Architecture
![crosswalk](./crosswalk.png)

Crosswalk supports an efficient way of creating your own Web APIs as extensions by writing native Java code. This way the user can expose new platform and device APIs as they need them.
New Api could be available in crosswalk before they get standardized at the W3C level.


##cordova /Ionic / phonegap
Apache Cordova is a library used to create native mobile applications using Web technologies. The application is created using HTML, CSS and JavaScript and compiled for each specific platform using the platform native tools. Cordova provides a standard set of JavaScript APIs to access device features on all supported platforms. Additional features can be provided through the development of plugins

##Cordova fonctionnal schema
![cordova](./cordova_archi.jpg)


The application itself is implemented as a web page, by default a local file named index.html, that references whatever CSS, JavaScript, images, media files, or other resources are necessary for it to run. The app executes as a WebView within the native application wrapper, which you distribute to app stores.

At its core, Cordova offers a simple but powerful API to call Javascript functions that map to native code or plugins. This means you can transfer any kind of data from native land into web land.
Cordova can do almost a native app can do, it just needs the right plugins that send the right data to your web code


##Cordova plugins
A Cordova plugin bridges a bit of functionality between the WebView powering a Cordova application and the native platform the Cordova application is running on. Plugins are composed of a single JavaScript interface used across all platforms, and native implementations following platform-specific Plugin interfaces that the JavaScript will call into. It should be noted that all of the core Cordova APIs are implemented using this exact architecture.
Cordova has a high quality plugin API, we just need more great plugins that expose data from the native layer, not just hard coded features or UIs. While the default plugins are very simple and easy to use, they don’t scale well when you want to build something really custom


##Some plugin examples

- iosrtc
iosrtc is a wrapper around Google’s WebRTC library and simply provides  PeerConnection, getMediaDevices and getUserMedia APIs , without any limitations or artificial constraints.

- crosswalk
The crosswalk plugin aimed at replacing default Android Webview with Crosswalk Webview, bringing all new functionalities of Chrome. 

##Cordova vs PhoneGap
Cordova is the community powered version of PhoneGap, which is Adobe’s productized version and ecosystem on top of Cordova. 

##Cordova vs Ionic
Ionic uses and extends Cordova  

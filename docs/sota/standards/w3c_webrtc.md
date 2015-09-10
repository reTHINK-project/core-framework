### W3C WebRTC API

The Web Real-Time Communications Working Group was created in May 2011 within the W3C to define client-side APIs to enable Real-Time Communications in Web browsers. 

It has defined a functional WebRTC 1.0 API which is implemented by major browser vendors to build real-time media applications in the browser without the need of installing any additional plugin. Additionaly to real-time media, WebRTC also supports the exchange of generic peer-to-peer data thanks to the Datachannel feature. This API is currently supported and production-ready in Firefox, Chrome and Opera.  

Together with WebRTC 1.0 API the W3C is working in a series of drafts for which can be used toghether with the WebRTC API to create real-time media Web applications:

* Media Capture and Streams (getUserMedia): set of JavaScript APIs that allow local media, including audio and video, to be requested from a platform. This API allows to capture real time audio and video from the device which is running the web browsers. It is used by all the WebRTC applications which require capturing audio or video.
* MediaStream Recording: a recording API for use with MediaStreams as defined in [GETUSERMEDIA]
* MediaStream Image Capture: specific the takePhoto() and grabFrame() methods, and corresponding camera settings for use with MediaStreams as defined in Media Capture and Streams [GETUSERMEDIA]
* Media Capture Depth Stream Extensions: extends the Media Capture and Streams specification [GETUSERMEDIA] to allow a depth stream to be requested from the web platform using APIs familiar to web authors.
* Media Capture from DOM Elements: defines how a stream of media can be captured from a DOM element, such as a <video>, <audio>, or <canvas> element, in the form of a MediaStream [GETUSERMEDIA].
* Audio output devices API: defines a set of JavaScript APIs that let a Web application manage how audio is rendered on the user audio output devices.
* Identifiers for WebRTC's Statistics API: defines a set of Javascript APIs that allow access to the statistical information about a PeerConnection
* Screen Capture:  defines how a user's display, or parts thereof, can be used as the source of a media stream using getOutputMedia, an extension to the Media Capture API [GETUSERMEDIA].


#### Applicability in reTHINK
The WebRTC is going to be intensively used in reTHINK to implement hyperties for Human-to-Human scenarios and also M2M scenarios where WebRTC Datachannel is used.  


## WebRTC.org

[WebRTC.org](http://www.webrtc.org/)[18] is an open-source project aiming at allowing developers to write applications bringing real-time communication capabilities to browsers, mobile platforms and Internet of Things (IoT) devices, without installing proprietary plugins or extensions. These challenge of integrating these different systems is leveraged by the definition of simple cross-platform APIs.

WebRTC comes with a native code package for developers to work over. This package features audio, video and network transport components. The audio component comes with a complete software stack for voice communications that includes not only codecs, but also software to help in communications' noise reduction, echo cancellation, automatic gain control, between others. The video component is built over the VP8 codec and comes with software for cleaning up noisy images, leveraging packet loss in transmissions and also record/playback functionality. Finally, the network package features components to establish P2P connections using ICE/Turn/STUN/RTP-over-TCP, and also software for error stashing on audio and video communications. Also, WebRTC provides browser developers the ability to choose their own audio, video and network protocols, to work with the packaged software.

### Architecture

WebRTC architecture offers two different layers, one for browser developers and other for third-party application developers. The first one is a C++ API intended to enable the proposed Web API for video/audio capture and render, making it possible for application developers to make use of it. The second one is the Web API for developers to produce applications to interact with WebRTC-powered browsers. Currently, several JavaScript APIs are in process of standardization, like [WebRTC 1.0](http://w3c.github.io/webrtc-pc/)[16] and [Media Capture and Streams](http://w3c.github.io/mediacapture-main/)[17].
In fact, there is another abstract layer responsible for session management and signalling, leaving the signalling protocol implementation up to the application developer, who has to choose between currently existing alternatives.

![Figure @sota-webrtc-org-arch: WebRTC.org architecture scheme](webrtc-org-arch.png)



### Software stack organization

As explained before, WebRTC.org comes with a software stack that splits itself into a network package, an audio package and a video package.

#### Packages identification

The different packages can be easily identifiable on the WebRTC source code tree. The network package is under src/net and both the audio and video packages are under src/webrtc/, with some mixed up classes. Also, there is not a class diagram which helps developers to get the big picture on this code's organization.

### Code documentation

In the audio/video package almost every file is well-documented. However, the network package doesn't, and it even comes with a README file whose content just states that code documentation is a TODO task on the network package.

### Requirements Analysis
Analysis against **Runtime** requirements

* [The Runtime should be deployable in the most used Devices and Operating Systems](https://github.com/reTHINK-project/core-framework/issues/1)
  * WebRTC is intended to be used on latest browser like Google Chrome, Mozilla Firefox, mobile platforms like Android and iOS and also IoT devices like Raspberry Pi.

* [The Runtime should support W3C WebRTC APIs](https://github.com/reTHINK-project/core-framework/issues/2)
  * WebRTC.org implements the W3C WebRTC APIs.

* [The runtime must support standard Javascript (ECMAScript)](https://github.com/reTHINK-project/core-framework/issues/3)
  * Yes, both the WebRTC 1.0 and Media Capture and Streams APIs use ECMAScript.
  * WebRTC.org is meant to be used within a runtime, providing the WebRTC functionality. The runtime will provide Javascript functionality.

* [The Runtime should support Web Socket](https://github.com/reTHINK-project/core-framework/issues/4)
  * The WebRTC 1.0 API, and concretely its Peer-to-peer Data API for sending and receiving data models the behaviour of WebSockets
  * WebRTC.org is meant to be used within a runtime, providing the WebRTC functionality. The runtime will provide WebSockets functionality.

* [The Runtime should support Standardised Messaging Notifications](https://github.com/reTHINK-project/core-framework/issues/5)
  * Yes, WebRTC 1.0 supports Web Messaging Notifications.

* [The Runtime must have a good performance](https://github.com/reTHINK-project/core-framework/issues/6)
  * The WebRTC runtime provided as open-source is used in chromium and google chrome. It's performance is state of the art.

* [The Runtime must be secured](https://github.com/reTHINK-project/core-framework/issues/7)
  * WebRTC provides encrypted communications betweens peers.

* [The effort to introduce new capabilities in the runtime should be reasonable](https://github.com/reTHINK-project/core-framework/issues/8)
  * The effort to perform changes in the runtime like protocols for network I/O, signalling, session management, video capture and audio capture/render depends on the package these changes are meant to be inserted. The audio and video package is well-documented, despite not having a class diagram. The network package, by its turn, is not documented, increasing the effort to understand the functionality and to perform changes in the runtime.



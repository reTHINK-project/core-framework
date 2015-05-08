
# Janus Gateway

Janus Gateway is a WebRTC gateway implemented in C, which means it doesn't provide any functionality for itself, apart from establishing a WebRTC media connection between browsers and server-side applications they might be using (e.g. echo tests, conference bridges, media recorders). This communication consists in exchanging JSON messages and relaying RTP/RTCP packets between a browser and the application logic. Janus is intended to be a light component to cover a big range of use-cases. It can be used to deploy a full-fledged WebRTC gateway on a cloud provider or just a small nettop/box to handle a specific use case, looking at applications as pluggable modules that a client can connect to through this gateway.

## Architecture and APIs

Janus Gateway splits itself into three software modules. The Core module implements the WebRTC protocols (SDP, ICE, DTLS-SRTP, RTP/RTCP), which are themselves listed in the Protocols module, in a web server that interacts with browsers. This Core module takes care of aspects like session handling, media signalling, negotiation and plugins availability. The Plugins module provides some out-of-the-box plugins to be integrated or extended into new applications developed on top of Janus core. The already available plugins perform media record and play and establish streaming, voice mail or SIP connections, just to mention some useful examples. There is also a Plugin API which offers potential plugin developers an overview of how these plugins are implemented and also instructions of how to develop a new one.


## Janus Gateway and runtime requirements

1. Janus Gateway web servers can currently be deployed on Linux systems only, and a cross-platform version is not going to be developed for now. For client-side, Google Chrome and Mozilla Firefox are the supported browsers. 




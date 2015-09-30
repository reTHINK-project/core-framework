coturn
------

### Overview

The TURN [47] protocol is defined as an extension of the STUN [48] protocol.

TURN servers act as media relays and are directly placed in the media path. TURN server gets all the media packets from one endpoint and sends them towards the remote peer (remote endpoint) or to another TURN server, if it is used by the remote endpoint.

TURN server acts as a relay for the packets. In the most common case, a TURN server is in the public Internet and the hosts are behind NATs or restrictive firewalls.

The study about TURN servers is very up-to-date since there is an ongoing work on this subject in IETF. The recently formed IETF group – TRAM (TURN Revised and Modernized) focuses on improving TURN implementations and features in order to make STUN and TURN more suitable for WebRTC [49].

Coturn is an open source TURN server implementation [50]. It is a separate branch of the previous implementation rfc5766-turn-server-project, and is dedicated for testing new protocols. As a result, it supports more specifications than the previous version.

The asset can be used for network QoS.

### Requirements Analysis

To use coturn, download the latest official version, at least 4.4.

TURN-based solution would allow a collaborative approach as it can be placed in a media path and be used for flow steering. It can impact different network types and segments and thanks to its compatibility with existing solutions, it can be introduces incrementally.

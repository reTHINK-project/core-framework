## coturn

### Overview

The TURN [4] protocol is defined as an extension of the STUN [5] protocol. 

TURN servers act as media relays and are directly placed in the media path. TURN server gets all the media packets from one endpoint and sends them towards the remote peer (remote endpoint) or to another TURN server, if it is used by the remote endpoint.

TURN server acts as a relay for the packets. In the most common case, a TURN server is in the public Internet and the hosts are behind NATs or restrictive firewalls. 

The study about TURN servers is very up-to-date since there is an ongoing work on this subject in IETF. The recently formed IETF group – TRAM (TURN Revised and Modernized) focuses on improving TURN implementations and features in order to make STUN and TURN more suitable for WebRTC [6].

Coturn is an open source TURN server implementation [1]. It is a separate branch of the previous implementation rfc5766-turn-server-project, and is dedicated for testing new protocols. As a result, it supports more specifications than the previous version. 

The asset can be used for network QoS.

### Architecture

Below, the list of supported specs is given, based on coturn codelab [2]. Based on discussion in discuss-webrtc google forum, information about support in Google Chrome is indicated [3].

TURN specs:
-	RFC 5766 - base TURN specs – supported in Chrome
-	RFC 6062 - TCP relaying TURN extension – not supported, but unnecessary
-	RFC 6156 - IPv6 extension for TURN – not supported, waiting on SSODA
-	DTLS support (http://tools.ietf.org/html/draft-petithuguenin-tram-turn-dtls-00) – not supported, but patch in flight
-	Mobile ICE (MICE) support (http://tools.ietf.org/html/draft-wing-tram-turn-mobility-01) – not a WG doc
-	TURN REST API (http://tools.ietf.org/html/draft-uberti-behave-turn-rest-00) – can be performed by an application
-	Origin field in TURN (Multi-tenant TURN Server) (http://tools.ietf.org/html/draft-johnston-tram-stun-origin-02) – not yet supported by Chrome, but there is a patch possible soon
-	TURN Bandwidth draft specs (http://tools.ietf.org/html/draft-thomson-tram-turn-bandwidth-00) - not a WG doc 
-	SSODA (dual allocation) draft specs (http://tools.ietf.org/html/draft-martinsen-tram-ssoda-00) - supported, but not yet stable 
-	Third-party authorization support (http://tools.ietf.org/html/draft-ietf-tram-turn-third-party-authz-05) – not supported yet, there is a need to add support to the W3C specs to pass in the access token first; it is on their list to get done soon though, not yet https://groups.google.com/forum/#!msg/discuss-webrtc/iLmbX8L5h4Q/IgoaYCIbTLUJ 
-	ALPN support (http://tools.ietf.org/html/draft-ietf-tram-alpn-08)
STUN specs:
-	RFC 3489 - "classic" STUN
-	RFC 5389 - base "new" STUN specs
-	RFC 5769 - test vectors for STUN protocol testing
-	RFC 5780 - NAT behavior discovery support

### APIs

Should be implemented and launched on a server. 

### Requirements Analysis

Download the latest official version, at least 4.4.
TURN-based solution would allow a collaborative approach as it can be placed in a media path and be used for flow steering. It can impact different network types and segments and thanks to its compatibility with existing solutions, it can be introduces incrementally. 

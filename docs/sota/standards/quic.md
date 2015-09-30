QUIC (Quick UDP Internet Connection)
------------------------------------

### Introduction

Internet has evolved a lot since the first version of TCP was designed 40 years ago. Many RFCs have added functionality to TCP since then and it played a vital role being the transport of the WWW for decades. UDP was designed to be used in real-time scenarios where the reliability is not so important as getting a very low delay and being tolerant to packet losses.

More flexible protocols which combine feature from TCP and UDP were also designed. The most remarkable effort was SCTP which was first designed to transport by the Signaling Transport Working Group to transport Signaling System 7 (SS7) and ISDN communications protocols over IP networks. Amongst other features, SCTP creates a tunnel over UDP and to multiplex a connection into multiple streams. It also provides notification of duplicated or missing data chunks, creating a reliable transport over UDP.  
The fact of allowing multiple streams over a single connections prevents Head-of-Line blocking from hapenning. It means that a packet loss which affect to a stream will not imply a delay in the rest of streams as it would happen if several streams are multiplexed over a TCP connection.

### Transport layer replacement

Google started the definition, implementation and real filed testing of a new transport protocol called QUIC in 2013. QUIC stands for "Quick UDP Internet Connection" and it was designed as a replacement for TCP as response of the new needs and the evolutions of Internet: streaming-based services are more and more demanded, many connections are established over wireless connections and they are established from mobile devices.

The features the new protocol must support to meet the today's Internet requirements:

-	it is necessary to make the web faster and the low layer protocols must adapt to the evolution of the web applications.
-	connection establishment latency must be reduced to improve the user experience and to make the web and Internet more usable.
-	the web must be secyre by default, TCP does not secure the traffic and an optional upper layer must be added to provide this security.

QUIC introduces improvement in many aspects of the TCP protocol:

-	TCP needs a three-handshake to create a connection. If the connection is established over TLS more RTT are necessary.
-	TCP provides reliable, ordered and error-checked delivery based re-tx, acknowledgments and checksum. The cost of having this features is that any packet loss will trigger retransmissions which will usually delay the delivery of the rest of packets.* TCP allows to establish a single full duplex byte stream and all the data over that stream will be treated processed indistinctly.
-	TCP requires an extra protocol on top of it (TLS) to provide encryptin and authentication. It adds an overhead and delays in the connection setup.

#### Why not to use SCTP for this?

SCTP can be considered as an alternative for TCP. It has two main features which could make it an attractive choice:

-	SCTP also provides stream multiplexing over a single connection.
-	DTLS provides SSL quality encryption and authentication over UDP in the same way as TLS over TCP.

These features made that SCTP had been chosen to be used internally by WebRTC Datachannels however it presents some problems which forced the QUIC developer to design a new alternative:

-	SCTP requires 4 roundtrips are necessary to establish a SCTP over DTLS connection. This means an unacceptable delay in many applications and degrades the user experience.
-	It was not designed to reduce latency, SCTP connections were designed to be persistent between two peers.

In contrast the goal of QUIC is to have to perform a connection establishment with zero RTT overhead.

### QUIC current use

QUIC is currently being used by Chrome to interact with Google Apps and it is going to be used by more services in short-term. HTTP/2 is going to become a definitive RFC in a few months and it is being used in production by many relevant Internet companies such as Twitter and Facebook. HTTP/2 performs much better over QUIC since it allows to leverage it stream-based designed so QUIC isvery likely to be adopted by the IETF in short-term.

### QUIC main features

QUIC can be deployed in today's Internet, actually it is been used in many real deployments without having to apply any modification in any intermediate node. This is a key point which makes its adoption much easier than IPv6.

It provides a very low latency in connections and responses. That is a critical point as many services are cloud -based and must be accessed from mobile and transoceanic connections which high RTTs.

It has a reliable-stream support and the packet losses which affect one strem does not affect the rest of streams. This reduces the Head Of Line (HOL) blocking due to packet loss.

It provides a better congestion avoidance than TCP which implicitly considered that any packet loss was due to a network congestion which is not normally true for wireless connections.

The privacy and Security it provides is comparable to TLS but with a much lower delay in the connection setup which can vary from 0, in the most optimistic case, to 2 RTTs, in the worst case. This is a key feature of QUIC as it allows to improve the user experience.

Connection are identified by a Connection Identifier not by layer 3 and layer 4 elements (IPs and ports). This fits very well in mobile scenarios where the IP of the clients may change due to handover mechanism.

#### Is it a good choice to use UDP for QUIC?

QUIC can be considered as an intelligent layer over UDP which provides enhanced features. UDP is intensively used by VoIP and gamers for years in very latency-sensitive applications. On the other side, 91-94% of the users which had TCP connectivity with Google can make outbound UDP connections so it is possible to build a transport in today's Internet over UDP. It is also necessary to consider NAT unbinding which does not happen to TCP. This problem has been addressed internally by QUIC designers through the use of keep alives packets.

### Applicability to reThink project

Including the use of QUIC as a requirement or a recommendation could help to support more reliably mobility scenarios where the End-User IP may be changed during a connection with the Signaling service. Additionally thee transport layer connectivity provided by QUIC is more suitable for wireless connections (longer RTTs, packet lost and changes at IP level) than TCP. QUIC has been designed bearing HTTP/2 in mind as it improves its performance a lot, however the use of QUIC by other protocols can also be very advantageous.

During a media session, the change of an IP requires an SDP re-negotiation when a media sessions is ongoing, so we can't leverage QUIC features for media. However QUIC would be helpful in all the scenarios at signaling level.

#### Existing QUIC implementations

The QUIC reference library is libquic (https://github.com/devsisters/libquic). It has been mainly developed by Google. This repository and its sources and dependencies were extracted from Chromium's QUIC Implementation with a few modifications and patches to minimize dependencies needed to build QUIC library. This code can be used to be integrated with HTTP Server like Apache and nginx but this has not been done so far.

In the Chromium repository it is available a standalone client and server which can be used as a reference for ReThink project implementations. http://src.chromium.org/viewvc/chrome/trunk/src/net/tools/quic/

In all the implementations QUIC is used with SPDY and HTTP/2 so its use separated from those protocols has to be investigated.

### Drawbacks of using QUIC as transport protocol

[QUIC is a very new protocol](http://tools.ietf.org/html/draft-tsvwg-quic-protocol-01) [84] so it is still not widely used. It means that many existing systems and projects does still not support it so testing and implementation which requires an additional effort compared to TCP.

This is the official definition document maintained by Google: https://docs.google.com/document/d/1RNHkx_VvKWyWg6Lr8SZ-saqsQx7rFV-ev2jRFUoVD34/edit

Any implementation made today may not be completely compliant with the final protocol.

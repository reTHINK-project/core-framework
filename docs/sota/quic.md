#QUIC (Quick UDP Internet Connection)

## Introduction
Internet has evolved a lot since the first version of TCP was designed 40 years ago. Many RFCs have added functionality to TCP since then and it played a vital role being the transport of the WWW for decades. UDP was designed to be used in real-time scenarios where the realiability is not so important as getting a very low delay and being tolerant to packet losses. 

More flexible protocols which combine feature from TCP and UDP were also designed. The most remarkable effort was SCTP which was first designed to transport by the Signaling Transport Working Group to transport Signaling System 7 (SS7) and ISDN communications protocols over IP networks. Amongst other features, SCTP creates a tunnel over UDP and to multiplex a connection into multiple streams. It also provides notification of duplicated or missing data chunks, creating a reliable transport over UDP.  
The fact of allowing multiple streams over a single connections prevents Head-of-Line blocking from hapenning. It means that a packet loss which affect to a stream will not imply a delay in the rest of streams as it would happen if several streams are multiplexed over a TCP connection.


##Transport layer replacement
Google started the definition, implementation and real filed testing of a new transport protocol called QUIC in 2013. QUIC stands for "Quick UDP Internet Connection" and it was designed as a replacement for TCP as response of the new needs and the evolutions of Internet: streaming-based services are more and more demanded, many connections are established over wireless connections and they are established from mobile devices.

The features the new protocol must support to meet the today's Internet requirements:
*it is necessary to make the web faster and the low layer protocols must adapt to the evolution of the web applications. 
*establishment latency must be reduced to improve the user experience and to make the web and Internet more usable.
*the web must be secyre by default, TCP does not secure the traffic and an optional upper layer must be added to provide this security.

QUIC introduces improvement in many aspects of the TCP protocol: 
*TCP needs a three-handshake to create a connection. If the connection is established over TLS more RTT are necessary.
*TCP provides reliable, ordered and error-checked delivery based re-tx, acknowledgments and checksum. The cost of having this features is that any packet loss will trigger retransmissions which will normaly delay the delivery of the rest of packets.
*TCP allows to stablish a single full duplex byte stream and all the data over that stream will be treated processed indistinctly. 
*TCP requires an extra protocol on top of it (TLS) to provide encryptin and authentication. It adds an overhead and delays in the connection setup.  

###Why not to use SCTP for this?
SCTP can be considered as an alternative for TCP. It has two main features which could make it an atarctive choice:  
*SCTP also provides stream multiplexing over a single connection.
*DTLS provides SSL quality encryption and authentication over UDP in the same way as TLS over TCP. 

These features made that SCTP had been chosen to be used internally by WebRTC Datachannels however it presents some problems which forced the QUIC developer to design a new alternative:

*SCTP requires 4 roundtrips are necessary to establish a SCTP over DTLS connection. This means an unacceptable delay in many applications and degrades the user experience.
*It was not designed to reduce latency, SCTP connections were designed to be persistent between two peers.

In contrast the goal of QUIC is to have to perform a connection establishment with zero RTT overhead. 


##QUIC current use

QUIC is currently being used by Chrome to interact with Google Apps and it is going to be used by more services in short-term. HTTP/2 is going to become a definitive RFC in a few months and it is being used in production by many relevant Internet companies such as Twitter and Facebook. HTTP/2 performs much better over QUIC since it allows to leverage it stream-based designed so QUIC isvery likely to be adopted by the IETF in short-term.

##QUIC main features 

QUIC can be deployed in today's internet, actually it is been used in many real deployments without having to apply any modification in any intermediate node. This is a key point which makes its adoption much easier than IPv6. 

It provides a very low latency in connections and responses. That is a critical point as many services are cloud -based and must be accessed from mobile and transoceanic connections which high RTTs.  

It has a reliable-stream support and the packet losses which affect one strem does not affect the rest of streams. This reduces the Head Of Line (HOL) blocking due to packet loss.

It provides a better congestion avoidance than TCP which implcitly considered that any packet loss was due to a network congestion which is not normally true for wireless connections. 

The privacy and Security it provides is comparable to TLS but with a much lower delay in the connection setup which can from 0 in the most optmistic cas to 2 RTTs in the worst case. This is a key feature of QUIC as it allows to improve the user experience. 

Connection are identified by a Connection Identifier not by layer 3 and layer 4 elements (IPs and ports). This fits very well in mobile scenarios where the IP of the clients may change due to handover mechanism. 


### Is it a good choice to use UDP for QUIC?

QUIC can be considered as an intelligent layer over UDP which provides enhanced features. UDP is intensively used by VoIP and gamers for years in very latency-sensitive applications. 
On the other side, 91-94% of the users which had TCP connectivity with Google can make outbound UDP connections so it is possible to build a transport in today's internet over UDP. 
It is also necesary to consider NAT unbinding which does not happen to TCP. This problem has been addressed internally by QUIC designers through the use of keepalives packets. 



##Why QUIC can be a good option for ReThink project?


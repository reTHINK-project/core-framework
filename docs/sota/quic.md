#QUIC (Quick UDP Internet Connection)

##>Rationale behind QUIC.
Internet has evolved a lot since the first version of TCP was designed 40 years ago. Many RFCs have added functionality to TCP since then and it played a vital role being the transport of the WWW for decades. UDP was designed to be used in real-time scenarios where the realiability is not so important as getting a very low delay and being tolerant to packet losses. 

More flexible protocols which combine feature from TCP and UDP were also designed. The most remarkable effort was SCTP which was first designed to transport by the Signaling Transport Working Group to transport Signaling System 7 (SS7) and ISDN communications protocols over IP networks. Amongst other features, SCTP creates a tunnel over UDP and to multiplex a connection into multiple streams. It also provides notification of duplicated or missing data chunks, creating a reliable transport over UDP.  
The fact of allowing multiple streams over a single connections prevents Head-of-Line blocking from hapenning. It means that a packet loss which affect to a stream will not imply a delay in the rest of streams as it would happen if several streams are multiplexed over a TCP connection.


##Transport layer replacement
A new protocol called QUIC, which stands for Quick UDP Internet Connection, was designed as a replacement for TCP as response of the new needs and the evolutions of Internet: streaming-based services are more and more demanded, many connections are established over wireless connections and they are established from mobile devices.

The features the new protocol must support to meet the today's Internet requirements:
it is necessary to make the web faster and the low layer protocols must adapt to the evolution of the web applications. 



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



##QUIC main features
We could Main target of QUIC: , reduce establishment latency and to be secure by default.

*It can be deployed in today's internet, actually it is been used in many real deployments without having to apply any modification in any intermediate node. 
*It provides a very low latency in connections and responses. That is a critical point as many services are cloud -based and must be accessed from mobile and transoceanic connections which high RTTs.  
*Reliable-stream support (like SPDY): Reduce Head Of Line (HOL) blocking due to packet loss.
*Better congestion avoidance than TCP: Iterate and experiment
*Privacy and Security comparable to TLS
*Mobile interface migratio

In contrast the goal of QUIC is to have to perform a connection establishment with zero RTT overhead. 


### Is it a good choice to use UDP for QUIC?

UDP works for gamers and VOIP.
Very latency-sensitive.

91-94% of users can make outbound UDP connections to Google
Tested for users that had TCP connectivity to Google

UDP is plausible to build a transport in today's internet;
NAT unbinding has to be considered.
For example, WebRTC is based on UDP.
Issues with Web Proxies?



##Why QUIC can be a good option for ReThink project?


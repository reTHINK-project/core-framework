
# PSYC

PSYC is a mostly text-based protocol, aiming at providing a decentralized global messaging infrastructure for unicast/multicast chatting and social media exchanging. Its goal is to replace the popular IRC protocol, which is currently suffering from inscalability, lack of security and requiring complex bureaucracy. This is because in IRC each server node may take responsibility over control aspects of a given network channel he participates in, adding this way unneccessary complexity and also raising security issues, like when an evil server takes the authority of the channel for malicious purposes. PSYC solves this by implementing a context master node (or well-known distributed set of nodes), which the protocol recognizes as the authority node(s). All other server nodes distributing this context to its members may perform jobs on behalf of the context master, but authority questions like allowing/banning users to/from entering the channel is always up to the master. Also, unlike current protocols like talk or msend, PSYC intends to be more people-oriented, identifying them through Uniform Network Identifications (UNI) (e.g. psyc://psyc.kanzlerant.de/~gerhard) or Uniform Network Locations (UNL) in case of a shared messaging room or conference.

## Architecture and main functions

On a top-level view, PSYC combines an IRC-like topology with the concepts of context, logical targets and packet IDs. Multiple PSYC nodes can be deployed in a tree to help in routing messages from the source to the destination, as it happens in IRC. Context slaves allow better routing options to be automatically discovered while multiple recipients ask to receive data from a given source (UNI/UNL), lowering the amount of traffic verified. Logical targets are the end-users to whom a given message is targeted. Finally, packet IDs allow PSYC to use redundant multicast strategies, when more than one may fit our needs. This way, duplicate packets due to multiple strategies can be caught and ignored. On a conference server, the minimalistic control module can be also used to deliver group messages in a peer to peer manner, by maintaining on each member a list of other members and how to reach them.

## Evolution to PSYC2

Due to the "deprecateness" state in some key-concepts PSYC relies on, such as its uniform-based routing layer and federation architecture, PSYC project is moving onto its second version PSYC2. This new version combines the PSYC old message syntax with a pseudonymous routing technology which defines that an entity's address is its public key itself instead of a string in a uniform, and these public keys should be looked up in a Distributed Hash Table (DHT), avoiding this way the misunderstanding and spoofing problems that the uniform-based solution presented. Apart from that, the federation concept stated that each entity should run its own server and applications had the responsibility of connecting the appropriate servers. This brings privacy and trust issues, since two entities exchanging messages on a server would need to trust the server owner, which generally is one of the reasons why users continued using the centralized messaging services offers instead of these free solutions. Also, there is a scalability problem due to the lack of resources on entity-owned servers. For example, an average linux-server could not efficiently distribute a multicast message to millions of recipients, in contrary to the powerful servers supporting big companies' services. To overcome these problems, PSYC developers are working on a fully-distributed end-to-end privacy-enabled solution, [secushare](http://secushare.org), a distributed social network operating on top of the public-key routing method explained above combined with PSYC messaging logic.

![image](psyc_message.png)

Figure 1. PSYC message example

## PSYC and messaging node requirements

1. PSYC server nodes can be deployed using psyced daemon. This can be done on Linux and Windows machines, here through a Cygwin environment. There are several implementations of PSYC clients written in Java (jaPSYC), C (psycd), C++ (Dyskinesia), Python (pypsyc) and Perl (perlpsyc). Given that, PSYC clients are eligible to be deployed in Linux/Windows VMs and Raspberry Pi. For mobile environments, PSYCobile was a project started to bring PSYC to mobile phones. However, it was not concluded by now. Also, there is PsycZilla, a Firefox 3.5 (the latest version) extension which features a webchat and social network browser.
2. There is no guarantee on the documentation that PSYC supports the W3C WebRTC APIs.
3. The following PSYC applications use ECMAScript: Dyskinesia, PsycZilla, jsPSYC and symlyn X webchat.
4. PsycZilla is an extension to Firefox 3.5, which doesn’t support WebSocket.
5. Web Messaging was introduced in HTML5 draft specification, and there is no PSYC implementation supporting it.
6. As the documentation refers, libpsyc (PSYC library written in C back in 2011) has been benchamrked for speed with good results for its period. Although, the results page and which benchmarks were applied are not available.
7. TODO
8. The effort should high if not prohibitive, due to the fact that PSYC does not support the WebRTC APIs.



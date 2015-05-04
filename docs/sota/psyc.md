
# PSYC

PSYC is a mostly text-based protocol, aiming at providing a decentralized global messaging infrastructure for unicast/multicast chatting and social media exchanging.
Its goal is to replace the popular IRC protocol, which is currently suffering from inscalability and requiring complex bureaucracy. Also, unlike current protocols like talk or msend, PSYC intends to be more people-oriented, identifying them through Uniform Network Identifications (UNI) (e.g. psyc://psyc.kanzlerant.de/~gerhard) or Uniform Network Locations (UNL) in case of a shared messaging room or conference.

## Architecture and main functions

PSYC combines an IRC-like topology, where servers take a part in coordination and control, with the concepts of context, logical targets and packet IDs to enhance messages’ routing. Context slaves allow better routing options to be automatically discovered while multiple recipients ask to receive data from a given source (UNI/UNL), lowering the amount of traffic verified. Logical targets are the end-users to whom a given message is targeted. Finally, packet IDs allow PSYC to use redundant multicast strategies, when more than one may fit our needs. This way, duplicate packets due to multiple strategies can be caught and ignored. On a conference server, the minimalistic control module can be also used to deliver group messages in a peer to peer manner, by maintaining on each member a list of other members and how to reach them.

![image](psyc_message.png)
Figure 1. PSYC message example



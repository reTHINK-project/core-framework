### Main Runtime Procedures for H2H Communication

This section, describes in detail the Runtime procedures that are required to support Human to Human communication in the runtime. The descriptions are focused on the validation of the Reporter-Observer communication pattern with WebRTC communications. Two main use cases are considered:

1.	Intra-domain communication where both parties are logged in the same domain
2.	Inter-domain communication where involved parties are logged in different domains and interoperability is achieved thanks to the protocol-on-the-fly concept.

For each Use Case, six procedures are performed:

1.	Alice invites Bob
2.	Bob receives Invitation from Alice
3.	Alice is acknowledged Bob received Invitation
4.	Bob's App interaction and Alice's connection update
5.	Bob gathers WebRTC resources
6.	Synchronization of Alice's Data Object

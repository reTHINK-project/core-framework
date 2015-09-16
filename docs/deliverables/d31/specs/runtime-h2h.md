### Main Runtime Procedures for H2H Communication

This section, describes in detail the Runtime procedures that are required to support Human to Human communication in the runtime. The description are focused on the validation of the Reporter-Observer communication pattern with WebRTC communications. Two main use cases are considered:

1. Intra-domain communication where both parties are logged in the same domain
1. Inter-domain communication where involved parties are logged in different domains and interoperability is achieved thanks to the protocol-on-the-fly concept.

For each these Use Cases, six procedures are performed:

1. Alice invites Bob
1. Bob receives Invitation from Alice
1. Alice is aknowledged Bob received Invitation
1. Bob's App interaction and Alice's connection update
1. Bob gathers WebRTC resources
1. Synchronization of Alice's Data Object




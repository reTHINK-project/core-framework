Introduction
============

Objectives and Overview
-----------------------

Project reTHINK aims to demonstrate a radical new way to develop and deliver real time communication services. reTHINK concepts and architecture follows edge computing principles pushing as much as possible the Business logic to end-user devices and network edge servers. reTHINK Business Capabilities are provided by new cooperative Microservices executing on behalf of users called Hyperlinked Entities - Hyperties. Hyperties are independently deployable components each one providing a small set of business capabilities, using the smart endpoints and dumb pipes philosophy. Billions of devices are already Hyperty enabled and ready to make part of reTHINK ecosystem, since Hyperties are programmed in Javascript ECMA5/6. The User Identity associated to an Hyperty is decoupled from the Hyperty Service Provider through WebRTC Identity Management mechanisms.

Previous Deliverables D2.1, D2.2, D3.1, D4.1, D5.1 have provided the main design foundations for a new edge computing based service architecture.

This report accompanies the initial release of the Core Framework components published in reTHINK Github repositories namely Hyperty Runtime (Core Runtime Components that were reused in Hyperty Browser Runtime and Hyperty NodeJS Runtime) and three Message Node implementations: Vertx Message Node, Matrix Message Node and NodeJS Message Node. Finally, the Hyperty Service Framework is also released featuring a comprehensive set of application program interfaces (APIs) and JavaScript libraries to facilitate the development of Hyperties. A full deck of documentation specially written to facilitate reTHINK embracing by web developers, which is also published in GitHub pages, is included in this report, as well as the update of the main specification of reTHINK Core Framework components provided in D3.1, according to feedback taken from the implementation activity.

This report complements deliverable D4.2 (Management and Security features specifications), which accompanies the release of reTHINK Support Services (Identity Management, Graph Connector, and Hyperty Directory services Catalogue and Registry).

The final specification for Messaging Node and Hyperty Runtime will be reported in D3.3 (Hyperty Runtime and Hyperty Messaging Node Phase 2 – Dec 2016).

Structure
---------

This report starts with an introduction and, in Chapter 2, requirements that are more specific to the reTHINK Core Framework are clearly identified. In chapter 3 a summary of the State of the Art and Procurement work is given. The full State of the Art and Procurement report can be found in Annex A. The core part of this report is located in Chapter 4, which details the specification of the Hyperty Runtime, and in Chapter 5, the specification of the Messaging Node. This reports concludes with a short description of functionalities to be provided by the Hyperty Service Framework to be used by Hyperty Developers.

## W3C Community Group: Decentralized Communications

The mission of this group is to specify and build a reference implementation of Decentralized Communications. Decentralized Communications enables natively inter-operable communication services that are able to trustfully use peer to peer connections without having to use central authorities or services. Decentralized Comms are inherently inter-operable without standard protocols by using the Protocol on-the-fly concept, where the most appropriate protocol stack to be used, is selected and instantiated at run-time.


*text below should be adapted and go for the charter*

The impressive fast innovation track of the Web is fostered by Global Web Players. The Web benefits to consumers are countless and should be protected but consumers should also be protected from the [abuse of dominant market position](http://ec.europa.eu/competition/consumers/abuse_en.html).

Decentralized Communications enables a good balance between Innovation and freedom of choice and protection to consumers. A Decentralized Communications will enable a Web of natively inter-operable services running in Browsers that are able to securely communicate in a peer to peer mode without having to use central web servers.

 [Web Monopolies are natural ](http://www.economist.com/news/briefing/21635077-online-businesses-can-grow-very-large-very-fastit-what-makes-them-exciting-does-it-also-make) (more references [here](http://www.theatlantic.com/magazine/archive/2013/01/the-webs-new-monopolists/309197/), and [here](http://thenextweb.com/insider/2011/10/02/facebook-twitter-itunes-and-google-the-rise-of-digital-monopolies/)) but it means web communication services only work when users use the same service. The positive network effects, i.e. [*the value of a product to one user depends on how many other users there are*](https://openlibrary.org/books/OL364633M/Information_rules), requires a [critical mass of hundreds of millions of peers](https://books.google.pt/books?id=NOMh7eVHQ4MC&pg=PA41&lpg=PA41&dq=network+effects+web+2.0&source=bl&ots=Y2R1ivmNFN&sig=dC52gngDLs_nsAx3K-APVoEIZcQ&hl=pt-PT&sa=X&ved=0ahUKEwj66vWVq6vRAhVH0RQKHcxOC2kQ6AEIWjAL#v=onepage&q=network%20effects%20web%202.0&f=false). The more peers are available to communicate with, the more valuable the service becomes.

With Web Monopolies, the Fundamental users' freedom to select who to trust data and services to be consumed are disabled. Users are forced to consume services from the same organization in order to communicate or share any kind of resource to each other. If users want to be in contact and reachable from different services, they have to manage different Accounts and Applications. Before a communication is accomplished, the user has to discover which service is used by the recipient. The data that is generated from the service consumption as well as user's own identity, is managed by the very same service provider giving no choice to users who to trust.

The same problem pattern applies to communication between humans and things (Internet of Things). However, the scale and the complexity of the problem for IoT communications is much higher.

Usually this kind of problems are addressed with strongly regulated and standardized services as the ones delivered by Telecommunication operators including GSMA mobile telephony and SMS services. Services are standardized to ensure they inter-operate each other regardless of the Telecom Operator they are subscribed to. Currently, Service interoperability requires common usage of network protocols and service semantics. But reaching agreements on protocols and semantics is hard. Lots of effort and time is required from many different parties. Long discussions are taken and many times big corporate policies are big obstacles to have the best technologies and processes adopted as standards. New Telecommunication services take a long time before they are launched in the Market and the standardisation cost is reflected in higher cost to the user, when compared with non-standard web communication services. **Standards are expensive**.  Examples:
- basic IP based telephony services requires many thousands of standard pages that took more than 10 years to be agreed on several standardisation bodies.
- emerging IoT/M2M services are being agreeing in many different organisations (OneM2M, IEEE P2413, AllJoyn IoTivity, AllSeen, Thread, Industrial Internet Consortium, Open Interconnect Consortium, ...) and at this point it is difficult to understand how they fit together

[Standards and rules in general (including regulating policies) in a fast moving area as the Web, constraints stakeholders freedom to innovate with alternative technologies or processes](http://www.rand.org/pubs/monograph_reports/MR1215.html). How can you try new things if you have to break some standard? Standards make change hard. Standards give no much autonomy to continuous improvement. **Standardisation kills innovation**.


**Is lack of Privacy and freedom to select who to trust, the price we have to pay to get the remarkable benefits of the Web? Are Innovation and, Users' Privacy and Freedom, two conflicting benefits that can't live together?**

The answer is, **No, There are alternatives! We can protect Users' privacy and freedom to select who to trust without slowing down Web innovation pace!**

The two main principles to solve Innovation vs Users' Power conflict are:

1. achieve universal inter-operability between web communication services without standard protocols. By using the Protocol on-the-fly concept, the most appropriate protocol stack to be used, is selected and instantiated at run-time. Thus, it is ensured two peers are always using the same network protocol, without having to agree on it in advance e.g. at design time. One example is the signaling protocol used to setup WebRTC communications. The Web RTC Standardisation team wisely decided not to standardise the signalling protocol in order not to constraint the emergence of innovative use cases and applications. By using the protocol on-the-fly concept it is possible not to prevent WebRTC use cases innovation, by having to agree in advance about the signalling protocol to be used, but still enable interoperability between different WebRTC Applications. Having universal WebRTC interoperability means all WebRTC Apps, independently of the use case or the size of the target market can speak each other and belong to the same and single global network of WebRTC peers. In other words, any WebRTC Application, even the ones only used by a few users, can be economically sustainable by taking advantage of the positive network effects of a network composed by billions of WebRTC peers.

1. decouple service delivery from identity management. Independently of who is delivering the service, the user has the power to decide which identity will be associated with it and which stakeholder is managing it.

On top of these two core principles it is envisioned to build **a Global Decentralized network of Hyper-linked Entities (Hyperties) that are inherently inter-operable and are trustfuly executed at the edge**.

Decentralized network topologies were introduced in the [*On Distributed Communications* Paul Baran's 1962 seminal Work*](http://www.rand.org/pubs/research_memoranda/RM3420.html) providing the foundations to design the Internet and the Web with no single point of control and failure. However, these basics foundations are at odds with centralized powers controlling the Web. A back to roots is required and a [few initiatives are ongoing](https://www.decentralizedweb.net/) to **give power back to people**.

**Hyperties** are cooperative Javascript [Microservices](http://martinfowler.com/articles/microservices.html) that are executed on behalf of users. Hyperties are independently deployable components each one providing a small set of business capabilities, using the *smart endpoints and dumb pipes* philosophy.

Hyperties are inherently inter-operable by using the Protocol On-the-fly concept that is used to select and instantiate the most appropriate protocol stack to be used. A data synchronsisation stream is established and only the semantics of the data objects used in the communcation are required to be standardised through JSON-SChema.
 takes advantage of [Javascript Code-on-demand characteristic](http://dl.acm.org/citation.cfm?id=1248922) to select and instantiate the most appropriate protocol stack to ensure inter-operability with a remote peer.

Hyperties follow emerging [Edge](https://en.wikipedia.org/wiki/Edge_computing) and [Fog](https://en.wikipedia.org/wiki/Fog_computing) computing paradigms as opposed to more popular Cloud Computing. Hyperties can also be executed in Network Servers for specific Business Capabilities (e.g. Media Servers) or when End-user devices don't have enough capabilities in terms of computing resources and/or power.


In addition, a few emerging technologies are used in order acomplish such compelling vision:

* Peer-to-peer technology and computing edge principles are used to get services running closer to users,
* micro-services architectural patterns
* code on-demand

*todo: summary of what is the standardisation target*

*to be completed*

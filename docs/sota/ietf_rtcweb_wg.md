<h1>IETF Rtcweb Working Group</h1>

<h2>Why this was created in the IETF?</h2>
    There are a number of proprietary implementations that provide direct interactive rich communication using audio, video, collaboration,
    games, etc. between two peers' web-browsers. These are not interoperable, as they require non-standard extensions or plugins to
    work.  There is a desire to standardize the basis for such communication so that interoperable communication can be established
    between any compatible browsers. The goal is to enable innovation on top of a set of basic components.  One core component is to enable
    real-time media like audio and video, a second is to enable data transfer directly between clients.
    
    This work will be done in collaboration with the W3C.  The IETF WG will produce architecture and requirements for selection and profiling of the on the wire protocols. The architecture needs to be coordinated with W3C.  The IETF WG work will identify state information and events that need to be exposed in the APIs as input to W3C. The W3C will be responsible for defining APIs to ensure that application developers can control the components. We will reach out to the developer community for consultation and early feedback on implementation.

    The security and privacy goals and requirements will be developed by the WG. The security model needs to be coordinated with the W3C. The work will also consider where support for extensibility is needed. RTP functionalities, media formats, security algorithms are example of things that commonly need extensions, additions or replacement, and thus some support for negotiation between clients is required.

<h2>Task of the Rtcweb Working Group</h2>
    The WG will perform the following work:
<ol>
<li> Define the communication model in detail, including how session management is to occur within the model.</li>
<li> Define a security model that describes the security and privacy goals and specifies the security protocol mechanisms necessary to achieve those goals.</li>
<li> Define the solution - protocols and API requirements - for firewall and NAT traversal. </li>
<li> Define which media functions and extensions shall be supported in the client and their usage for real-time media, including media adaptation to ensure congestion safe usage. </li>
<li> Define what functionalities in the solution, such as media codecs, security algorithms, etc., can be extended and how the       extensibility mechanisms works.</li>
<li>Define a set of media formats that must or should be supported by a client to improve interoperability.</li>
<li>Define how non media data is transported between clients in a secure and congestion safe way.</li>
<li>Provide W3C input for the APIs that comes from the communication model and the selected components and protocols that are part of the solution.
<li>The group will consider options for interworking with legacy VoIP equipment.</li>
</ol>
    This work will be done primarily by using already defined protocols or functionalities. If there is identification of missing protocols or
    functionalities, such work can be requested to be done in another working group with a suitable charter or by requests for chartering it
    in this WG or another WG. The following topics will be out of scope for the initial phase of the WG: RTSP, RSVP, NSIS, Location services,    Resource Priority, and IM & Presence specific features.

    The products of the working group will support security and keying as required by BCP 61 and be defined for IPv4, IPv6, and dual stack deployments. The Working Group will consider the possibility of defining a browser component that implements an existing session negotiation and management protocol. The working group cannot explicitly rule out the possibility of adopting encumbered technologies; however, the working group will try to avoid encumbered technologies that require royalties or other encumbrances that would prevent such technologies from being easy to use in web browsers.

<h2>Goals and Milestones</h2>

  Feb 2014 - Complete Overview (and hold for dependency resolution) (draft-ietf-rtcweb-overview)
  Done     - Send Use Cases document (draft-ietf-rtcweb-use-cases-and- requirements) to IESG for publication as Informational
  Mar 2014 - Send Security and Privacy Problem Statement (draft-ietf- rtcweb-security) to IESG for publication as Informational
  Apr 2014 - Send Media Transport (draft-ietf-rtcweb-rtp-usage) to IESG for publication as Proposed Standard
  Apr 2014 - Audio Processing and Audio Codecs (draft-ietf-rtcweb-audio) to IESG for publication as Proposed Standard
  May 2014 - Send Data Stream Transport for non-media data (draft-ietf- rtcweb-data-channel) to IESG for publication as Proposed Standard
  Jun 2014 - Send Security Solution (draft-ietf-rtcweb-security-arch) to IESG for publication as Proposed Standard
  Jun 2014 - Send Specification of Transport Protocols and their NAT Traversal to IESG for publication as Proposed Standard
  Sep 2014 - Send Signalling Negotiation and NAT Traversal (draft-ietf- rtcweb-jsep) to IESG for publication as Proposed Standard
  Sep 2014 - Send STUN Usage for Consent Freshness to IESG for publication as proposed standard
  Dec 2014 - Video Processing and Video Codecs (draft-ietf-rtcweb-video) to IESG for publication as Proposed StandardVideo Processing and Video Codecs (draft-ietf-rtcweb-video) to IESG for publication as Proposed Standard
  Dec 2014 - Send Overview (after dependencies are ready) to IESG for publication as Applicability Statement

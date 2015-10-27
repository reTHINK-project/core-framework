Web Communication Service Providers (CSP) do not have any coupling with the networks. They manage everything at the application level. As a result their actions are limited at some point since they cannot interact with the network and do not receive any information about network’s state. 

However Network Service Providers (NSP) can offer new functionalities that would allow interaction of CSPs and networks. Those new functionalities should be offered by using APIs (Application Programming Interfaces). These APIs should be “developer friendly” so that the provided solutions would adapt to technologies used by web companies instead of trying to force them to use dedicated solutions.

The collaborative solution that was chosen to be tested consists of providing TURN servers by network operators with focus on API and interconnection issues. It is a pertinent solution that would allow coupling of application layer and network later, since it is based on cooperation between CSPs and NSPs. This solution would also allow steering media flow through specialized network paths even without the whole information about the signalling, since thanks to TURN a NSP can distinguish the flows. 

The simplified architecture is presented below:
- put picture TURN/broker architecture

Several aspects stay important:
- To prove the relevance of specialized network paths and QoS treatment:
    * Comparison of communication when using TURN servers versus simple communication peer-to-peer.
    * Assessment of QoS impact. Comparison of routing with QoS and without in the presence of different network conditions. 
- Brokering and universal API issues. 
- Usage of TURN servers 

That is why a Proof of Concept was created. Its principal objectives are:
- Assessment of feasibility and relevance of using TURN-based value added network services offered by network service providers. 
- Possibility of analysing business models and relations between different actors.

The Proofof Concept focuses on access, fix networks. 
The implementation consists of CSP: 
- Web Server providing WebRTC application. 
- Two users participating in a WebRTC call. 
- TURN server used for flow identification and authorisation.
- HomeGateway differantiating the flows.
- PC sending the concurrent traffic.
- 



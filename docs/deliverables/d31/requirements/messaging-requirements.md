## Messaging Node Requirements
<p>**Messaging Node should be resilient**</p> Messaging node should be Resilient when operating under overload situations or failures, in general.


<p>**The Messaging Node MUST offer DoS and DDoS Protection**</p> The MN MUST provide protection against Denial of Service (DoS) and Distributed Denial of Service Attacks (DDoS)


<p>**Messaging Node  should support Protocol on-the-fly**</p> Messaging Node should support Protocol on-the-fly, to inter-operate with other Messaging Nodes or Back-end servers without having the need to standardize the protocol to be used.


<p>**Messaging Node should support different Encrypted Messaging Transport Protocols**</p> Messaging Node should support different Encrypted Messaging Transport Protocols including:

* Encrypted WebSockets
* HTTPS Streaming
* HTTPS Long-Polling
* HTTPS REST


<p>**Messaging Node should support logging of routed messages**</p> Messaging Node should support logging of routed messages and any other event (e.g. connection events) in remote log servers


<p>**Message must support delivery reliability**</p> Message must support message delivery reliability. Delivery errors must be returned to clients


<p>**Messaging Node must support worldwide scale deployments**</p> If required, by Messaging Node must support worldwide scale deployments


<p>**Messaging Node should be tolerant to unstable connections **</p> When connections to Messaging Node are resumed from a short disconnected period of time or when client IP address changes eg due to access network handover (eg wifi to LTE), should have no impact on the client side service.




<p>**Events must be fired when clients connect and disconnect from the Messaging Node**</p> It should be possible to get events with information about Messaging Node clients connection and disconnection. Such feature is useful for connection status purposes.


<p>**Messaging Node must support very low message delivery latency**</p> Messaging Node must support very low message delivery latency


<p>**Messaging Node should require minimal computing resources**</p> Messaging Node should require minimal computing resources in order to be deployable in constrained computing environments eg residential /enterprise gateways.



<p>**Messaging Node must support external authentication and Authorisation**</p> Messaging Node must be able to use an external Authentication Service

Messaging Node must be able to use an external Authorisation Service for the following features:
* send/publish a Message
* receive a Message
* subscribe / register handlers to be notified about published messages 



<p>**Messaging Node must support multiple message oriented communication patterns**</p> Messaging Node must support multiple message oriented communication patterns including:

* pub/sub
* broadcast
* one to one



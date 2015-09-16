##Messaging Node Requirements##<p></p>**Messaging Node should be resilient** :</br> Messaging node should be Resilient when operating under overload situations or failures, in general.<br/><br/>**The Messaging Node MUST offer DoS and DDoS Protection** :</br> The MN MUST provide protection against Denial of Service (DoS) and Distributed Denial of Service Attacks (DDoS)<br/><br/>**Messaging Node  should support Protocol on-the-fly** :</br> Messaging Node should support Protocol on-the-fly, to inter-operate with other Messaging Nodes or Back-end servers without having the need to standardize the protocol to be used.

<br/><br/>**Messaging Node should support different Encrypted Messaging Transport Protocols** :</br> Messaging Node should support different Encrypted Messaging Transport Protocols including:

* Encrypted WebSockets
* HTTPS Streaming
* HTTPS Long-Polling
* HTTPS REST

<br/><br/>**Messaging Node should support logging of routed messages** :</br> Messaging Node should support logging of routed messages and any other event (e.g. connection events) in remote log servers<br/><br/>**Message must support delivery reliability** :</br> Message must support message delivery reliability. Delivery errors must be returned to clients<br/><br/>**Messaging Node must support worldwide scale deployments** :</br> If required, by Messaging Node must support worldwide scale deployments<br/><br/>**Messaging Node should be tolerant to unstable connections ** :</br> When connections to Messaging Node are resumed from a short disconnected period of time or when client IP address changes eg due to access network handover (eg wifi to LTE), should have no impact on the client side service.

<br/><br/>**Events must be fired when clients connect and disconnect from the Messaging Node** :</br> It should be possible to get events with information about Messaging Node clients connection and disconnection. Such feature is useful for connection status purposes.<br/><br/>**Messaging Node must support very low message delivery latency** :</br> Messaging Node must support very low message delivery latency<br/><br/>**Messaging Node should require minimal computing resources** :</br> Messaging Node should require minimal computing resources in order to be deployable in constrained computing environments eg residential /enterprise gateways.<br/><br/>**Messaging Node must support external authentication and Authorisation** :</br> Messaging Node must be able to use an external Authentication Service

Messaging Node must be able to use an external Authorisation Service for the following features:
* send/publish a Message
* receive a Message
* subscribe / register handlers to be notified about published messages 

<br/><br/>**Messaging Node must support multiple message oriented communication patterns** :</br> Messaging Node must support multiple message oriented communication patterns including:

* pub/sub
* broadcast
* one to one
<br/><br/></p>
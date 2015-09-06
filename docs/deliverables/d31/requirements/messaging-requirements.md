##Messaging Node Requirements##<p></p>**Messaging Node with carrier grade deployment features** :</br> * Resilience (operate under load, failures, and attacks)
* Security (DoS and DDoS protection)
* Service assurance management<br/><br/>**The Messaging Node MUST offer DoS and DDoS Protection** :</br> The MN MUST provide protection against Denial of Service (DoS) and Distributed Denial of Service Attacks (DDoS)<br/><br/>**It should be possible to support Protocol on-the-fly** :</br> In order to support Node to Node between different implementations and protocols without having the need to standardise Node-2-node protocol.

This should imply the support of Javascript <br/><br/>**Messaging Transport Protocols** :</br> It should be possible to support several protocols including:

* WebSockets
* HTTP Streaming
* HTTP Long-Polling
* REST<br/><br/>**Message Caching ** :</br> It must be possible to cache submitted messages
Store and forward ??(FFS)<br/><br/>**Messaging Node logging** :</br> It should be possible to remotely log message routing events.<br/><br/>**Message delivery reliability** :</br> Delivery errors must be returned to clients<br/><br/>**Messaging Node deployments with carrier grade scalability** :</br> million of messages / sec ??

volume of traffic: to be elaborated<br/><br/>**Messaging Node should be tolerant to unstable connections ** :</br> Used Messaging addresses and Messaging Sessions should not change when connections are lost for a short period of time or when client IP address changes eg due to access network handover (eg wifi to LTE). Sessions should be resumed with minimal impact on the client.

Example: https://github.com/primus/primus 

To be improved according to comments<br/><br/>**Events about clients connection / disconnection from Messaging Node** :</br> It should be possible to get events with information about Messaging Node clients connection and disconnection.

Such feature is useful for connection status purposes.<br/><br/>**Messaging Node must support very low message delivery latency** :</br> <br/><br/>**Messaging Node must be deployable in the most used Virtual Machines** :</br> <br/><br/>**Messaging Node should require minimal computing resources** :</br> In order to be deployable in constrained computing environments eg residential /enterprise gateways.<br/><br/>**Messaging Node must support external authentication and Authorisation** :</br> Messaging Node must be able to use an external Authentication Service

Messaging Node must be able to use an external Authorisation Service for the following features:
* send/publish a Message
* receive a Message
* subscribe / register handlers to be notified about published messages 

<br/><br/>**Messaging Node must support multiple messaging functionalities** :</br> <br/><br/></p>
## Messaging Node Requirements
- **Messaging Node should be resilient:** when operating under overload situations or failures, in general.


- **The Messaging Node MUST offer DoS and DDoS Protection:** The MN MUST provide protection against Denial of Service (DoS) and Distributed Denial of Service Attacks (DDoS)


- **Messaging Node  should support Protocol on-the-fly:**  to inter-operate with other Messaging Nodes or Back-end servers without having the need to standardize the protocol to be used.


- **Messaging Node should support different Encrypted Messaging Transport Protocols:** including:

  * Encrypted WebSockets
  * HTTPS Streaming
  * HTTPS Long-Polling
  * HTTPS REST


- **Messaging Node should support logging of routed messages:**  and any other event (e.g. connection events) in remote log servers


- **Message must support delivery reliability:** Delivery errors must be returned to clients


- **Messaging Node must support worldwide scale deployments:** 


- **Messaging Node should be tolerant to unstable connections :** When connections to Messaging Node are resumed from a short disconnected period of time or when client IP address changes eg due to access network handover (eg wifi to LTE), should have no impact on the client side service.




- **Events must be fired when clients connect and disconnect from the Messaging Node:** It should be possible to get events with information about Messaging Node clients connection and disconnection. Such feature is useful for connection status purposes.


- **Messaging Node must support very low message delivery latency:** 


- **Messaging Node should require minimal computing resources:**  in order to be deployable in constrained computing environments eg residential /enterprise gateways.



- **Messaging Node must support external authentication and Authorisation:** including:
 * send/publish a Message
 * receive a Message
 * subscribe / register handlers to be notified about published messages 



- **Messaging Node must support multiple message oriented communication patterns:**  including:

 * pub/sub
 * broadcast
 * one to one



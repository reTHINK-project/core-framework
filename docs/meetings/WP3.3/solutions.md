### Discussion from the last meeting
####Global architecture
* Global architecture taking into account different actors inputs was proposed. It was discussed and different elements were
modified/added.
*   Orange proposed using TURN server to identify the flows at the PDN gateway level (by using TFT). This would allow associating this flow with a bearer.
*   DT proposed keeping AF element.
*   Fokus advised how to connect LHCB element.
* The draft of the architecture: bscw ->wp3 -> wp3.3.
 
####Interface selection discussion
* Not sure if we can get information about which interface is used by using getStats.
* It would be interesting to combine application and network information for the interface selection.
 

## Suggested solutions
### Offering dedicated bearer
Images are very simplified and will be subject to our discussion next week.
#### Solution 1
Using AF to provide information to PCRF. Based on this information, appropriate QoS (dedicated bearer) can be assured.

![alt tag](https://github.com/reTHINK-project/core-framework/blob/master/docs/meetings/WP3.3/arch1.png)

#####Main elements and their functions:
* UE - User equipment with a WebRTC application
* PDN Gateway
* AF (Application Function) - provides session information to PCRF. If it is integrated with a web server it can get information from SDP. If it is a server apart, it can get information from the client app, e.g. by using getStats browser API.
* PCRF - based on the information provided by the AF, it can provide QoS rules.

#####Issues:
* If there is a NAT behind the PDN gateway, AF will not provide PCRF the right address,  since PCRF needs a local host address.
* Security and privacy issues.

#### Solution 2 
Using TDF with the rules detecting WebRTC flows.

![alt tag](https://github.com/reTHINK-project/core-framework/blob/master/docs/meetings/WP3.3/arch2.png)

#####Main elements and their functions:
* UE - User equipment with a WebRTc application
* PDN Gateway
* TDF (Traffic Detection Function) - must have detection rules that would allow it to recognize flows supposed to be prioritized. For example if there are known TURN servers their addresses can be used as a filter, i.e. if there is a flow with TURN server address as a destination address, it can be eligible for prioritization.
* PCRF - based on the information provided by the TDF, it can provide QoS rules
* Web Server

#####Issues:
* Define appropriate TDF rules
* TURN servers management

### Last Hop Connectivity Broker
* The Last Hop Connectivity Broker (LHCB) provides information about access technologies available at the end device to establish an Internet connection. 
* The provided information encompasses in addition to the 'kind of link technology available' per link information about the current or expected QoS, e.g. expected error rates, delays, throughput on the last hop. 
* Information about available link technologies is provided without interacting with any network service provider; hence providing an unbiased view of alternative links from alternative service providers which is required for an operator-agnostic choice of the best last hop link used within an end-to-end communication between Hyperties. 
* The LHCB does also provide an interface to trigger a request to the end device to switch from one last hop link technology to another. This allows to dynamically adapt QoS of the end-to-end link from an operator-agnostic QoS manager (e.g. TURN server) to the requirements of Hyperties instantiated at communicating end devices. 
* Besides, the latter ability of the LHCB allows at a web application level to probe end-to-end QoS over different (wireless) link technologies.


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
* It would be iteresting to combine application and network information for the interface selection.
 

## Suggested solutions
### Offering dedicated bearer
#### Solution 1
Using AF to provide information to PCRF. Based on this information, appropriate QoS (dedicated bearer) can be assured.


![alt tag](https://github.com/reTHINK-project/core-framework/blob/master/docs/meetings/WP3.3/arch1.png)

#### Solution 2 

![alt tag](https://github.com/reTHINK-project/core-framework/blob/master/docs/meetings/WP3.3/arch2.png)


### Last Hop Connectivity Broker
* The Last Hop Connectivity Broker (LHCB) provides information about access technologies available at the end device to establish an Internet connection. 
* The provided information encompasses in addition to the 'kind of link technology available' per link information about the current or expected QoS, e.g. expected error rates, delays, throughput on the last hop. 
* Information about available link technologies is provided without interacting with any network service provider; hence providing an unbiased view of alternative links from alternative service providers which is required for an operator-agnostic choice of the best last hop link used within an end-to-end communication between Hyperties. 
* The LHCB does also provide an interface to trigger a request to the end device to switch from one last hop link technology to another. This allows to dynamically adapt QoS of the end-to-end link from an operator-agnostic QoS manager (e.g. TURN server) to the requirements of Hyperties instantiated at communicating end devices. 
* Besides, the latter ability of the LHCB allows at a web application level to probe end-to-end QoS over different (wireless) link technologies.


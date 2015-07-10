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
 
### Offering dedicated bearer
#### Solution 1
Using AF to provide information to PCRF. Based on this information, appropriate QoS (dedicated bearer) can be assured.


![alt tag](https://github.com/reTHINK-project/core-framework/blob/master/docs/meetings/WP3.3/arch1.png)

#### Solution 2 

![alt tag](https://github.com/reTHINK-project/core-framework/blob/master/docs/meetings/WP3.3/arch2.png)




###Global architecture
* Global architecture taking into account different actors inputs was proposed. It was discussed and different elements were
modified/added.
*   Orange proposed using TURN server to identify the flows at the PDN gateway level (by using TFT). This would allow associating this flow with a bearer.
*   DT proposed keeping AF element.
*   Fokus advised how to connect LHCB element.
* The draft of the architecture: bscw ->wp3 -> wp3.3.
 
###Interface selection discussion
* Not sure if we can get information about which interface is used by using getStats.
* It would be iteresting to combine application and network information for the interface selection.



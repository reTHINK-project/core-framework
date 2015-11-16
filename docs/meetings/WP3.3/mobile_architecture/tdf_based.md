The global architecture for mobile and fixed networks is as follows.

![Global architecture - fix + mobile](././images/global_arch.png)

For mobile networks there are two possibilities for providing specialized network services.

1.	TURN-based solutions with TDF

The behavior is similar as for fixed networks. The WebRTC traffic is identified thanks to the fact that the address of the intermediary TURN server is known. However the architecture is more complicated. It consists of the following elements:
- UE – User Equipment, using WebRTC service
- PDN Gateway – manages bearers depending on the defined rules
- TDF (Traffic Detection Function) – it needs detection rules that would allow it to recognize flows that are eligible to use specialized network services. For example if there are known TURN servers their addresses can be used as a filter, i.e. if there is a flow with TURN server address as a destination address, it can be eligible for prioritization.
- PCRF - based on the information provided by the TDF, it can provide QoS rules
- EPS Application function (?)

TDF needs to be provisioned before the beginning of communications, as it is done for fix network solutions, i.e. the right detection rules need to be defined based on known TURN server addresses. TDF analyses all flows and reacts whenever it identifies a flow eligible to use specialized network services. PCRF based on information provided by the TDF can provide QoS rules. So a WebRTC communication can be sent through a dedicated bearer and steered in an appropriate way.

The advantage of this solution is that the configuration can be done before any communication, so there is no additional information necessary from the application (e.g. from getStats function). The solution is compatible with evolution of standards and with the web technology. 
The disadvantage of this solution is that the TURN servers need to be known in advance and in case of several network providers, the interoperability needs to be assured. 


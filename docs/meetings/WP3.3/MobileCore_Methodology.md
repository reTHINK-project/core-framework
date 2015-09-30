# Mobile Core Methodology #
In reThink, the methodology for mobile communication is aligned to a Mobile Core and Access Network, based on the 3GPP Rel. 8 (and higher) framework. Commonly known as the LTE-based network which includes an Evolved Packet Core (EPC) and its evolved UMTS Terrestrial Radio Access (E-UTRAN) which build together the so called Evolved Packet System (EPS).

## Use of (EPS) Bearer inside a mobile core network ##
![Basic Example of IP flows which are traversing a Mobile Core](./images/BearerExample.png)

For enabling QoS inside the EPS a so called EPS Bearer - or short Bearer - is used to fulfil all requirements of the media delivery. The Bearer is a logical transport channel between the UE and the PDN GW. It is only transporting IP data packets but within the required specification given by a service class. In order to fulfil rich media requirements, it is mostly necessary to establish multiple Bearers - one for each purpose with distinguishable specification sets. Connectivity between a UE and a PDN GW is initially established inside the so called Default Bearer which remains established until the PDN connection is closed due to any reason. If there is no specific service quality treatment necessary for the IP data traffic the Default Bearer can be used with the default QoS parameter set given by the network operator.

Additional Bearers can be established by applications which require special treatment (guaranteed bit rate, delay etc.) of their IP traffic. These so called Dedicated Bearers are set up on demand to enable service consumption regarding the QoS parameters with reference to the Default Bearer. Since these Dedicated Bearers  are only for a single purpose (dedicated transmission of service data), they can be
deactivated after the consumption of a service is over. However, the Default Bearer remains untouched and still established.

In order to identify the IP traffic according to the specified QoS requirements, the UE and the PDN GW have to use packet filters to push IP packets to the appropriate Bearer. So called Traffic Flow Templates (TFT) map the IP traffic for each Bearer. They are established upon creation of an EPS Bearer. The contents for the filter criteria are sent from the PCRF or the UE itself. Like a typical description of a packet filter based firewall, the TFT also contains mostly a 5-tuple
criterion to match a specific rule:
* remote IPv4/v6 address,
* remote port (or port range),
* local IP v4/v6 address,
* local port (or port range), and
* used protocol.

Illustrated in the Figure above is the handling of application flows from the UE via the EPC components towards the end points in the external network. The Default Bearer serves the IP traffic of application 1 and 2. However application 3 has its own Dedicated Bearer to handle the traffic from the UE to the external endpoint according to the specified QoS parameters. The Bearer concept is only operating from the TFT of the UE until the exit port of the PDN. QoS flow management with similar Bearer properties in external networks has to be performed by the respective domain operators. Therefore E2E QoS can only be performed if the external domains are enforcing the QoS requirements in every network node.

## Quality of Service Class Identifier for EPS Bearer ##
To indicate which service or traffic class the Bearer should refer to, the EPS is aware of 9 QCI values, see the Table. Which QCI each Bearer has is depending on the used application and the requested parameter set. If the Default Bearer is set up, low-prioritised or no QoS treatment should be assigned to the user data path which can be indicated by setting up such Bearers with a high valued QCI (such as 5 to 9). In this range no Guaranteed Bit Rate (GBR) is enforced inside the network.

| QCI | Resource Type | Priority | Packet Delay Budget | Packet Error Loss Rate | Example Service                           |
|-----|---------------|----------|---------------------|------------------------|-------------------------------------------|
| 1   |      GBR      | 2        | 100 ms              | 10^-2                  | Conversational Voice                      |
| 2   |      GBR      | 4        | 150 ms              | 10^-3                  | Conversational Video (Live Steam)         |
| 3   |      GBR      | 3        | 50 ms               | 10^-3                  | Real Time Gaming                          |
| 4   |      GBR      | 5        | 300 ms              | 10^-6                  | Non-Conversational Video (Buffered Video) |
| 5   |    Non-GBR    | 1        | 100 ms              | 10^-6                  | IMS Signalling                            |
| 6   |    Non-GBR    | 6        | 300 ms              | 10^-6                  | Video (Buffered Streaming), TCP           |
| 7   |    Non-GBR    | 7        | 100 ms              | 10^-3                  | Voice, Video (Live Streaming)             |
| 8   |    Non-GBR    | 8        | 300 ms              | 10^-6                  | Video (Buffered Streaming)                |
| 9   |    Non-GBR    | 9        | 300 ms              | 10^-6                  | Video (Buffered Streaming)                |
(Source: 3GPP TS 23.203, Rel. 13)

Since 3GPP Rel. 13 further QCI characteristics have been added and address the mission critical user data.

| QCI | Resource Type | Priority | Packet Delay Budget | Packet Error Loss Rate | Example Service                           |
|-----|---------------|----------|---------------------|------------------------|-------------------------------------------|
| 65  |      GBR      | 0.7      | 75 ms               | 10^-2                  | Mission Critical user plane Push To Talk voice (e.g., MCPTT)|
| 66  |      GBR      | 2        | 100 ms              | 10^-2                  | Non-Mission-Critical user plane Push To Talk voice         |
| 69  |     Non-GBR   | 0.5      | 60 ms               | 10^-6                  | Mission Critical delay sensitive signalling (e.g., MC-PTT signalling)|
| 70  |     Non-GBR   | 5.5      | 200 ms              | 10^-6                  | Mission Critical Data (e.g. example services are the same as QCI 6/8/9) |
(Source: 3GPP TS 23.203, Rel. 13)



## Triggering QoS Treatment of IP Flows ##

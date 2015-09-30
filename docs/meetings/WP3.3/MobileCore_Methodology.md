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

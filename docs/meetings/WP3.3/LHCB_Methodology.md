# LHCB Methodology #

In reThink, the methodolgoy for last hop connectivity brokerage is based on dynamicaly registering end-devices at a LHCB within the reThink network architecture in order to hold at the LHCB information about currently avialable, alternative connection mechanisms to connect the client with the network.  The methodology is based on reusing concepts from LWM2M device management which provides a standardized way for the LHCB registration and update functionality independent of network service providers' core components.


## Architectural components of the LHCB ##

## LHCB Use Cases ##

The following figure provides on overview of the LHCB Use Cases considered in reThink.

[LHCH UseCases](LHCB_UseCases)

## Client registration at the LHCB ##

The client registers at the LHCB if it chooses to provide information about avialable, alternative connectivity means to connect to the network.
Credentials and access information about an existing LHCB may be obtained by contating the reThink Catalogue Service, searching for a Hyperty providing LHCB connectivity.  Once obtained, the Hyperty returns to the client information about the deployed service, e.g. the host name of the LHCB.

As a result, the client may register itself at the LHCB, placing within the client's description information about available access technologies to choose from.  Those read-only attributes at the LHCB are complemented by read-and-writable atrributes which indicate suggestions of external components which access technology the client should consider for connecting to the network.  Once the information is stored at the LHCB, the client adds to the reThink Registry information about beeing accessible via the LHCB service as previously downloaded from the Catalogue.  This allows any other reThink component to reach the LHCB based on the client's unique identity in the Registry.

The client continiously updates its information, i.e. its attribute's context, at the LHCB.  Additional information, such as current QoS indicators for the currently used connectivy, may be added.

## Obtaining Information about a Client ##

In order to obtain connectivity information, independent from the underlying network core technology, from a client, any reThink compnent may contact the reThink Registry Service querying the latter based on the client's identity for the Hyperty ID of the LHCB that the cient choose to provide its connectivity information.  Using this Hyperty ID, the reThink components obtains from a Catalogue the corresponding Hyperty which in turn privides the same access information of the LHCB that the client obtained previsously.

As a result, the reThink component may contact the LHCB and read the information about the client; it may even subscribe to the information to avoid contineously pulling the LCHB to detect any changes in the client's connectivity related attributes.  

## Triggering Connection Suggestions ##

Once the component whishes to suggest using an alternative connection means for the client, it may update a corresponding attribute in the LHCB, which is propagated to the client who may evantually choose to follow the suggested connection change.

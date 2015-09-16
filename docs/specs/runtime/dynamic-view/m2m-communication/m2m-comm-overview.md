### Runtime Main Procedures for M2M Communication

An overview of the M2M End-User runtime components and their interaction with the Management Services and Network Services 
is presented in the diagram below. There are two devices depicted: an existing one and a new one that is entering the reThink environment. The existing one acts as an information producer and the new one acts as an information consumer. The Context Producer App holds reference to multiple hiperties. The first operation is to register the producer hiperties to the Global Registry. The new device will first perform a discovery procedure in order to retrieve the producing hiperties location, pointing to a: 
* remote Network Service, named here Messaging Service, dedicated for M2M services like storing resources for sensing and actuating (Global M2M Resource Directory)
* located on the existing device (Local M2M Resource Directory), with the same purpose for sensing and actuating

The flexibility of supporting these two scenarios allows the architecture to support at the same time a:
* publish-subscribe communication in which a Network Service is used to convey information between two endpoints that need to communicate 
* and a peer-to-peer communication in which a locally stored resource on the existing device is used to exchange data

After the discovery procedure the new device Runtime User Agent can perform a bootstrap procedure involving one or more hiperty and protostub download and instantion operations associated to the producing hiperties. The Identity Management (IdM) hiperty residing on the existing device will apply policies to enforce access control of the consumer hiperty. The QoS User Agent will assist the Runtime User Agent with information on the connectivity so that the download can be performed efficiently, e.g. requests will be sent only when connectivity on the new device is available. A mechanism for access control will be also enforced on the remote M2M resource directory by contacting the Identity Management management service.

The Context Producer ProtoStub will be used by the existing device to communicate with the local or remote M2M resource directory and the Context Consumer Protostub will be used by the new device to subscribe and receive notifications on data exchanged by the existing device. 




![Figure @runtime-m2m-comm-runtime-archit-violet: Runtime Main Procedures for M2M Communication](M2M_runtime_Archit_violet.png)


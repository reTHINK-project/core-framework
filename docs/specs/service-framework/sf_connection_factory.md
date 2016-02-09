**This is OUTDATED!! Most updated version is [here](https://github.com/reTHINK-project/dev-service-framework/tree/d3.2-working-docs/docs/specs/service-framework)**
===================================================================================================================================================================

### Connection Factory

The Connection Factory creates [Connection Data Objects](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/Connection-Data-Object-Model.png) used in the [Communication Data Factory](https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/service-framework/sf_communication_factory.md).

#####Connection Data Object* `status` -* `owner` - Communication. participant* `localIceCandidates` - status of the local IceCandidates (NEW|CHECKING|CONNECTED|COMPLETED|FAILED|DISCONNECTED|CLOSED)* `remoteIceCandidates` - status of the remote IceCandidates (NEW|CHECKING|CONNECTED|COMPLETED|FAILED|DISCONNECTED|CLOSED)* `localConnectionDescription` - String representation of local SDP (offer) - Reporter DataObject (Reports changes made locally)* `remoteConnectionDescription` - String representation of remote SDP (answer) - Observation DataObject (Observes changes made remotely)* `remoteRtpTransportParameters` - to be used for ORTC compliant browsers - Observation DataObject (Observes changes made remotely)* `localRtpTransportParameters` - to be used for ORTC compliant browsers - Reporter DataObject (Reports changes made locally)

###Functions
------------

Define and specify functionalities from the [dynamic views](https://github.com/reTHINK-project/core-framework/tree/master/docs/specs/runtime/dynamic-view) that relate in creating and managing Connection Data Objects.

### CommunicationFactory

The CommunicationFactory creates communication objects according to the [Communication Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/communication/readme.md). 

####Communication Data Object
--------------------------------------
The Communication Object has following class object attributes:
* ```id``` - the identifier of the created comunication
* ```host``` - 
* ```owner``` - initiator of the communication (from Participant Data Object)
* ```startingTime``` - Date representation of the start time when the communication was created
* ```lastModified``` - Date representation of last modified time of the created communication
* ```duration``` - String representation of the duration of the session.
* ```status``` - representation of the status (OPEN|PENDING|CLOSED|PAUSED|FAILED)
* ```participants``` - list of participant data objects representing participants with their status and resources (ConnectionDataObject)
* ```comunicationQuality```- 


#####Participant Data Object
* ```identityObject``` - Identity Data Object as defined in the [User Identity Data Model](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/user-identity/readme.md)
* ```connectionObject``` -  optional attribute (JWT) for access control purpose


#####Connection Data Object
* ```status``` - 
* ``` owner``` - Communication. participant
* ``` localIceCandidates``` - status of the local IceCandidates (NEW|CHECKING|CONNECTED|COMPLETED|FAILED|DISCONNECTED|CLOSED) 
* ``` remoteIceCandidates``` - status of the remote IceCandidates (NEW|CHECKING|CONNECTED|COMPLETED|FAILED|DISCONNECTED|CLOSED)
* ``` localConnectionDescription``` - String representation of local SDP (offer) - Reporter DataObject (Reports changes made locally)
* ``` remoteConnectionDescription``` - String representation of remote SDP (answer) - Observation DataObject (Observes changes made remotely)
* ``` remoteRtpTransportParameters``` - to be used for ORTC compliant browsers - Observation DataObject (Observes changes made remotely)
* ``` localRtpTransportParameters``` - to be used for ORTC compliant browsers - Reporter DataObject (Reports changes made locally)
 
###Functions
-----------------------
#### createCommunicationDataObject
Generates a class object of the communication data object
```
createCommunicationDataObject(Paricipant owner, Participantlist participants)
```

#### createConversationResource
Creates a new Hyperty Resource of type Connection
```
createConversationResource(Participant owner )
```

#### addConversationParticipant
Adds a new participant to the list of participants. Note that each participant has a connectionDataObject which should be created as well (thinking: use the createConversationResource) 
```
addConversationParticipant(Identity participant, HypertyResource.Connection connection, String participantStatus )
```


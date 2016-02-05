**This is OUTDATED!! Most updated version is [here](https://github.com/reTHINK-project/dev-service-framework/tree/d3.2-working-docs/docs/specs/service-framework)**
===================================================================================================================================================================

### CommunicationFactory

The CommunicationFactory creates communication objects according to the [Communication Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/communication/readme.md).

####Communication Data Object
-----------------------------

The Communication Object has following class object attributes:* `id` - the identifier of the created comunication* `host` -* `owner` - initiator of the communication (from Participant Data Object)* `startingTime` - Date representation of the start time when the communication was created* `lastModified` - Date representation of last modified time of the created communication* `duration` - String representation of the duration of the session.* `status` - representation of the status (OPEN|PENDING|CLOSED|PAUSED|FAILED)* `participants` - list of participant data objects representing participants with their status and resources (ConnectionDataObject)* `comunicationQuality`\-

#####Participant Data Object* `identityObject` - Identity Data Object as defined in the [User Identity Data Model](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/user-identity/readme.md)* `resourceObject` - Hyperty Resource Data Object

#####[Connection Data Object](https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/service-framework/sf_connection_factory.md)

#####[Hyperty Resource Data Model](https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/service-framework/sf_hyperty_resource_factory.md)

###Functions
------------

Define and specify functionalities from the [dynamic views](https://github.com/reTHINK-project/core-framework/tree/master/docs/specs/runtime/dynamic-view) that relate in creating and managing Hyperty Resource Data Objects.

####createCommunicationDataObject Generates a class object of the communication data object`
createCommunicationDataObject(Paricipant owner, Participantlist participants)
`

####createConversationResource Creates a new Hyperty Resource of type ConnectionDataObject`
createConversationResource(Participant owner)
`

#### addParticipant

Adds a new participant to the list of participants. Note that each participant has a connectionDataObject which should be created as well (thinking: use the createConversationResource)`
addConversationParticipant(Identity participant, HypertyResource.Connection connection)
`

#### removeParticipant

Removes the given participant from the list of participants.  
`
removeParticipant(Identity participant, HypertyResource.Connection connection)
`

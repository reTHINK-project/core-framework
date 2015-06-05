## WONDER Messages Format

The WONDER Message class provides good input for the design of Hyperty Messages. Wonder Message is a JSON structure and it is comprised by a Header and a Body. The following Message Header attributes are defined:

```
type            Type of the Message 
from            Sender of the message
to              Recipients of the message
context         identifies a certain context for the message eg the Id of the conversation
```
The following Message Types are defined:

* INVITATION - Message to invite a peer to a conversation.
* ACCEPTED - Answer for conversation accepted or Context subscription accepted
* CONNECTIVITY_CANDIDATE - Message contains ICE connectivity candidate
* NOT_ACCEPTED - Answer for conversation not accepted or Context subscription not accepted
* BYE - Message to finish the communication with a peer
* UPDATE - Message to Update conversation by adding or removing a Resource
* UPDATED - Answer to Message UPDATE
* CONTEXT - Message used to publish the context and status of an Identity.
* SUBSCRIBE - Message to request to receive CONTEXT notifications from a certain Identity
* MESSAGE - Mainly used to support Pager Mode Chat. But it can be used for other use cases instead of Data Channel eg small files.
* CRUD_OPERATION - Messages to handle data persistence in a resource tree

The Message body will depend on the Message Type. Some of these messages and associated bodies are more detailed below.

##### Invitation Message Type

Invitation for a new conversation to be hosted by the inviting identity ie to use Messaging Server of the inviting identity which is provided in the message body as well as the connection description of the inviting identity.

**Invitation Message Body**

```
    conversationURL;
    connectionDescription; // SDP
    subject;
    hosting; // Identity of who is hosting the conversation
    agenda;
    peers;
    constraints; // To describe media and data constraints for each resource including Audio, Video constraints and direction (in,out,inout) 
```
##### Accepted Message Type

To accept eg Invitations, Conversation updates or Context Subscription.
Similar to SIP 200 OK

**Accepted Message Body**

```
    connectionDescription; // SDP
    hosting; // Identity of who is hosting the conversation
    constraints; // To describe media and data constraints for each resource including Audio, Video constraints and direction (in,out,inout) 
```

##### Not Accepted

Eg Busy, Reject, No_answer to:
 - Invitation requests
 - Update requests
 - Subscription requests

This information will go in the message body as a String

##### CONNECTIVITY_CANDIDATE Message Type

Messages used to exchange ICE connectivity candidates between peers

**Message Body**

```
label - The label of the candidate.
id - The id of the candidate.
candidate - The ICE candidate string.
lastCandidate - Boolean indicating if the candidate is the last one. If true, include the full SDP in the candidate parameter for compatibility with domains that don't support trickling.
```


##### CRUD_OPERATION

These Messages are used to handle data persistence in a resource tree by using the four basic functions create, read, update and delete.

**Message Body**

```
operation	//  create, read, update or delete.
syntax 		// syntax used for CRUD operation field "criteria" examples: mongoDB, SQL
criteria 	// some filtering expression used in read and update operations
doc		// Contains data for CREATE and UPDATE operations
resource; 	// Resource URI where the operation is applied
```

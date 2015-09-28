## Service Framework 

The Service Framework is a Software Development Toolkit (SDK) that will feature a comprehensive set of application program interfaces (APIs) and JavaScript libraries to facilitate the development of Hyperties within the reTHINK architecture. The functionalities provided by the Service Framework will complement the functionalities of the Hyperty Runtime and functionalities provided for the Network QoS component. The main objective is to provide JavaScript libraries in speeding up the implementation of conversational services (audio, video, chat, screen sharing) and context enabled services (IoT, context delivery, location). These services will be fully implemented in WP5 and demonstrated in WP6.
The requirements from a software perspective have been defined in section 2.4. In this chapter, a preliminary set of requirements from the reTHINK concept will be discussed and a high level capability set for the Framework will be presented. For this input from three different areas of the reTHINK project will be examined namely:
* Uses Cases as specified in WP1 Task1.1
* Data Models as specified in WP2 Task 2.3
* Interface Design  as specified in WP2 Task 2.4

### Use Cases
D1.1 – “Use Cases and Sustainable Business Models” specified 15 user scenarios from which 5 have been selected as the main scenarios for the development of Hyperties in WP5. Details of these user scenarios can be found in D1.1 [ref]. 
* Daily life in a Smart City – Human-To-Human Communication
* Daily Life In A Smart City – Individual Contextual Services
* Hotel Guest Web Application
* Apartment Rental Monitoring And Control Application
* Smart Enterprise –Contextual Enriched Communication in Smart Enterprises 

From the above user scenarios specific actors/roles, requirments and use cases where identified and specified. These information acts as information pool upon which the functionalities or APIs the Service Framework could provide for developers. These functionalities include:
* Communication Service: the Hyperty Runtime already provides an API for H2H and M2M communication. Developers will be able to use this service directly from the Hyperty Runtime API 
* Identity Service: a provider mechanism to access internal reTHNK IdP services or external IdPs (Google, Facebook, etc.)  
* Data Storage functions: for stroing persistent data 
* Location functions: to access device specific context (e.g. GPS) to be used as context for different services
* User Entity Management: to manage one or multiple user profiles
* Notification service: for notifying triggerd events


### Data Models
In D2.2 Data models were specified from 3 different points of view - the service provider view, developer view and consumer view. For the Service Framework, focus will be laid only the developer view. The identified data models for the developer's perspective include the following:

**Hyperty Descriptor Model**: 
As described in D2.2, the Hyperty data model is used to model different types of Hyperty provided by the Service Provider. The Hyperty descriptor contains sets of data objects with information to the HypertyCatalogueURL, the type of Hyperty (communicator, identity or context), policies, contrainst and configuration parameters. The Service Framework will provide JavaScript object templates specifying the Hyperty Descriptor Data Objects and extending them to create new Hyperty Types.

**User Identity Model**: 
This data model models a user entity within the reTHINK infrastructure. It has a unique identifier (UserUUIDURL) and multiple identifierTypes (UserURL). The user entity is characterised by its profile (UserProfile) which may include informations associated to the user : profile page URL, username, birthdate, picture, etc. 
To provide management functionalities to the developers to the reTHINK Identity managment, the Hyperty Framework will need to
interface with the protocol stub for Identity managment.


**Context Model**:
The context model is used to model different media types for representing simple sensors and device meta data which can be transmited in a protocol such as CoAP or HTTP. The data model contains context information such as id, ContextType, time, tag and a list of context values which can be used in the M2M reTHINK uses cases. The Service Framework will provide factory functionalities for creating and managing these data objects.


**Communication Model**: 
The communication data model will be to model communications within the retHINK architecture for messaging and communicator Hyperties. The data model includes information for identifying a communication (id, owner, duration, etc.), the status of the communication (pending, open, closed, failed, paused), a list of participants (identity), the quality, the connection data object (webRTC connection) and message. The Service Framework should provide a set of functionalities for creation and management of the sessions. Some of these functionalities will be provided by the Hyperty Runtime. It is still to be determined to what abstraction level this should be made available to developers.  

**Message Model** :
This model specifies messages exchanged between Hyperties. It uses the Reporter-Observer communication pattern to create and synchronize object state changes amongst each other. The Hyperty Runtime includes this functionality which will be exposes to the developers through factory creation interfaces. 

**Address Model** :
Different address URL have been proposed for the reTHNK platform with respect to the different componnents. For example  user://<idpdomain>/<user-identifier> for Idp, hyperty-runtime://<runtime-provider-domain>/<runtime-identifier> for the Hyperty Runtime and hyperty://<registry-domain>/<hyperty-instance-identifier> for the Hyperty Instance. The Service Framework will provide factory classes for creation of different address URL types 

### Interfaces 
D2.2 specified network interfaces (Registry, Catalogue, Identity Management, Messaging service) for performing CRUD operations over various Data Objects. The Proto-on-the-fly and the protocol stubs from the different components could directly be used here without implementing extra functionalities to the Service Framework.   




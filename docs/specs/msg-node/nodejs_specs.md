Node.js based Messaging Node Specification
------------------------------------------

For each [functional block](msg-node-architecture.md) existing Node.js modules were identified, which can be either reused or extended.

### Core Functionalities

This section attempts to match the functional blocks of the Messaging Node architecture to features and functional blocks of the Node.js and Redis architecture.

#### Message BUS

The message bus can be implemented with [Redis](http://redis.io) [63]. Redis is an open source (BSD licensed), in-memory data structure store, used as database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.

##### Usage of Redis with Node.js

[Redis integrate a PUB/SUB mechanism](http://redis.io/topics/pubsub) [126]:

SUBSCRIBE, UNSUBSCRIBE and PUBLISH implement the Publish/Subscribe messaging paradigm where (citing Wikipedia) senders (publishers) are not programmed to send their messages to specific receivers (subscribers). Rather, published messages are characterized into channels, without knowledge of what (if any) subscribers there may be. Subscribers express interest in one or more channels, and only receive messages that are of interest, without knowledge of what (if any) publishers there are. This decoupling of publishers and subscribers can allow for greater scalability and a more dynamic network topology.

Redis can be used to add scalability/redundancy to the Messaging Node as the different components of the architecture can easily be splited on different servers. This Pub/Sub mechanism is simple to use and It can also facilitate the development and the integration of new connectors</br>

Communication between Node.js and Redis can be managed by a Nodes.Js Redis [client module](https://github.com/NodeRedis/node_redis) [127]. Redis instance can be a single instance or a Redis cluster.

#### Access Control

User connection to Node.js connectors can be authenticated on the Node.js module. Socket.io integrate a way to authenticate incoming request, authenication component will have to be develop on Node.js connectors.

This component is able to analyse HEADER (identification URL from "Session Management") and DATA blocks and decide if the message should be forwarded to the "Message Bus" or denied.

[PassportJs](http://passportjs.org/) [105], which is an interesting middleware that could enable us to add third party authentication should be used. An authentication can also be done between Node.js and Redis.

#### Session Management

For a complete session management on Node.js, it will be interesting to use [ExpressJS](http://expressjs.com/) [128] which is a Web framework for Node.js.

#### Address Allocation Management

This component will have to be developed on a Node.js server

#### Protocol Stub & Connectors

Connectors will be Node.js processes to be developed. The protoStub/protoFly mechanism Goal can be used to facilitate the integration with other servers.

##### IdM Connector

This Connector is to provide functionalities for interacting with the remote Identity Management Functionalities. Node.js can easily interact with OAuth servers in order to authenticate and authorize users.

The authentication against the Identity Provider has to be done at the beginning.

##### Registry Connector

The implementation of this Connector requires further study.

##### End-User Device Connector

Communication between Users and Node.js can be managed by socket.io Socket.io is a popular Node.js library to handle connections at application level. It can use Websocket and it falls back to HTTP automatically if WS connectivity is not possible.

##### Network Server Connector

The implementation of this Connector requires further study.

##### Node Sandbox framework

[Node-sandbox](https://www.npmjs.com/package/node-sandbox) module [129] allows to run untrusted code outside of the main node process. The code can be interfaced with code running in the sandbox via RPC (or any library that works over the node Stream API).

### Node.js implementation architecture

**Architecture : Node.js and Redis :**

Here is the description of the architecture with Redis :

![Figure @msg-node-nodejs-redis-implementation: Messaging Node implementation with Node.Js and Redis](MessagingNode-NodeJs.png)

**Architecture : Integration in ReThink :**

Following architecture shows the target integration with the different components of the ReTHINK projet:

![Figure @msg-node-nodejs-rethink: Integration of Node.Js based Messaging Node implementation with reTHINK](MessagingNode-NodeJs-Integration_In_Rethink.png)

**Architecture : Integration in ReThink with Actors:**

Following architecture shows the actors in the architecture to understand the decomposition of work to be done and the interaction with other partners :

![Figure @msg-node-nodejs-rethink-partners: Integration of Node.Js based Messaging Node implementation with reTHINK partners](MessagingNode-NodeJs-Integration_In_Rethink_With_Actors.png)

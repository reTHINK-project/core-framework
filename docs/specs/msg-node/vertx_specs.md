# Vertx Specification

*For each [functional block](msg-node-architecture.md) identify existing vertx components that can be reused and extended If extensions are neede they should be specificied by designing apis to be implemented*

## Core Functionalities
* Main objective of core func. is to authorize, filter and process messages. Messages are JSON objects that should have 2 blocks, HEADER and DATA, and are processed from different components of core.
Messages should be processed in a Pipeline. The sequence is "Session Management" -> "Access Control" -> "Message BUS"
* Pipeline components will implement a simple interface that we can reuse from io.vertx.core.Handler\<E> replacing E with a PipelineContext object. Using the vertx Handler<E> has the advantage to be compatible with io.vertx.ext.web.Router, that can be a replacement for the Pipeline.
* By now, additional components are identified (Pipeline, PipelineContext). This is similar to vertx Router, without the addressing scheme.
* If message DATA blocks are for CRUD operations, there should be a Pub/Sub protocol for object/model subscriptions, where should this be processed? The address scheme of the vertx EventBus is not enough for this functionality.

### Session Management
Connection (WebSocket, SockJS) events/messages for OPEN and CLOSE should be intercepted by this component. A session instance is linked to a connection resource (WebSocket, SockJS) if authorized. Every message header is intercepted, session token is verified and if exist, a "user" or other identification URL is replaced in HEADER. The JSON object is forwarded to "Access Control" component.

### Address Allocation Management
This is not a Pipeline component (it doesn't process messages), but it's used by the "Session Management" to allocate Hyperty identification URL's that will be linked to a Session when the Hyperty is connected.

### Access Control
This component is able to analyze HEADER (identification URL from "Session Management") and DATA blocks and decide if the message should be forwarded to the "Message Bus" or denied. There is a possibility to add a rule engine in this step, but it's not specified for now, what kind of rule engine.

### Message BUS
Main objective of the MB is to process the DATA block, that contains information of the protocol, CRUD operation or other defined information. Vertx EventBus can be used directly for the Message Bus component. Important headers of the original JSON (like the identification URL) must be forwarded to io.vertx.core.eventbus.Message.headers() map.

## Protocol Stub Sandbox

## Connectors

### End User Device Connector

### Network Server Connector

### Registry Connector

### IdM Connector

## Messaging

An exhaustive research and experimentations of Real Time Web Messaging solution was conducted to evaluate them according to Message Node requirements previously definec in section. A short summary is provided below but a detailed description is provided in Annex A.

### Matrix

The end goal of Matrix is to be a ubiquitous messaging layer for synchronising arbitrary data between sets of people, devices and services. Matrix doesn’t support external authentication and authorisation. It also needs to adapt support of messaging transport protocols by wrapping Event/messages in REST messages. 

### MQ Telemetry Transport (MQTT)

MQ Telemetry Transport (MQTT) is a lightweight broker-based publish/subscribe messaging protocol designed to be open, simple, lightweight and easy to implement. As it fulfils all the criteria defined above MQTT is a potential candidate for messaging node.

### Node.js®

Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Nodejs doesn’t support pub/sub by itself, but it can if it is associated with another Pub/Sub mechanism (e.g. Redis). 

### PSYC

PSYC is a mostly text-based protocol, aiming at providing a decentralized global messaging infrastructure for unicast/multicast chatting and social media exchanging. Its goal is to replace the popular IRC protocol. There is no evidence in the documentation that PSYC is able to accept external authentication/authorisation methods other than its own one. Moreover, a certain degree of latency is inevitable, due to the use of TLS and DoS techniques.

### RabbitMQ

RabbitMQ is defined as a robust and easy to use messaging platform that can work synchronously an asynchronously. It partially supports Messaging transport protocols but should not be tolerant to unstable connections.

### Realtime backends

Realtime backends (aka noBackend or BackendAsAService(BaaS)) is a concept related to real time databases. The backend and its remote framework is taking into account all low level mechanism of client-server dialogue, allowing developer to concentrate in service logic, in its local runtime. The realtime backend concept would allow defining and managing interworking with other services, in a way that entirely belongs to each application.

### Redis

Redis is an open source advanced key-value cache and store. Its weaknesses are that Redis has no logging features; they need to be implemented externally. Moreover, there is no indication that Redis is tolerant to unstable connections.

### Vert.x

Vert.x is an application framework providing possibilities to develop loosely coupled network service applications.

### XMPP

The Extensible Messaging and Presence Protocol (XMPP) is an open technology for real-time communication, which powers a wide range of applications including instant messaging, presence, multi-party chat, voice and video calls, collaboration, lightweight middleware, content syndication, and generalized routing of XML data.

### ZeroMQ

ZeroMQ is a high-performance, low level, asynchronous messaging library originally written in C++, that now has multiple native Implementations. It is used as a thin layer between the application and transport layers.

### Selected Real time Messaging Solutions

In the scope of reThink framework, Matrix, Nodejs and vert.X have been selected to implement the messaging node.

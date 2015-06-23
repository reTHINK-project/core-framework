# Security Analysis of the Hyperty Runtime

##Introduction

The security analysis contained in this document refers to the runtime architecture described in [1].

In reTHINK, the trusted computing base of the Hyperty Runtime (HR) encompasses the following components: the Native Runtime, the Core Sandbox components, and the underlying JavaScript engine, Operating System, and hardware platform. If the native runtime is compromised, so it will be the support for WebRTC stream communication between hyperties. Subverting the core sandbox components can compromise: the correct decision and enforcement of policies by the PDP, the proper routing of messages through the Message Bus, the flawless registration and discovery of Hyperty and protoStubs by the Registry, and the correct maintenance of identities by the Identities Container. Compromising the JavaScript Engine can interfere with the correctness and security of JavaScript code, whose execution necessarily requires a JavaScript engine such as V8. The code that depends on the JavaScript engine includes the runtime components specific to the reTHINK architecture (Router PEP, PDP, Message Bus, Registry, Identities Container, and WebRTC engine), and all the user or developer code hosted by the Hyperty runtime, namely Hyperty Instances, ProtoStubs, and Applications. Given that the JavaScript Engine depends on both the Operating System and the hardware platform, compromising the latter can also affect the JavaScript engine and all the other components sitting on top of it.

Next, we analyze the security properties of our system when all the components of the trusted computing base are intact. Then, we assess the security of the Hyperty Runtime when deployed on target platforms that exhibit different characteristics with respect to the platforms’ software and hardware configuration. For each different platform, we analyze their resilience under various threat models.

## Mitigated Threats Assuming an Intact TCB


## Vulnerability Assessment of the Browser Deployment


## Vulnerability Assessment of the Secure Element Deployment


## Vulnerability Assessment of the Server Deployment


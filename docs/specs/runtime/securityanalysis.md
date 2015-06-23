# Security analysis of the Hiperty Runtime

## Introduction

The security analysis contained in this document refers to the runtime architecture described in [[1]](https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/runtime-architecture.md).

In reTHINK, the trusted computing base of the Hyperty Runtime (HR) encompasses the following components: the Native Runtime, the Core Sandbox components, and the underlying JavaScript engine, Operating System, and hardware platform. If the native runtime is compromised, so it will be the support for WebRTC stream communication between hyperties. Subverting the core sandbox components can compromise: the correct decision and enforcement of policies by the PDP, the proper routing of messages through the Message Bus, the flawless registration and discovery of Hyperty and protoStubs by the Registry, and the correct maintenance of identities by the Identities Container. Subverting the JavaScript Engine can interfere with the correctness and security of JavaScript code, whose execution necessarily requires a JavaScript engine such as V8. The code that depends on the JavaScript engine includes the runtime components specific to the reTHINK architecture (Router PEP, PDP, Message Bus, Registry, Identities Container, and WebRTC engine), and all the user or developer code hosted by the Hyperty runtime, namely Hyperty Instances, ProtoStubs, and Applications. Given that the JavaScript Engine depends on both the Operating System and the hardware platform, compromising the latter can also affect the JavaScript engine and all the other components sitting on top of it.

Next, we analyze the security properties of our system when all the components of the trusted computing base are intact. Then, we assess the security of the Hyperty Runtime when deployed on target platforms that exhibit different characteristics with respect to the platforms’ software and hardware configuration. In particular, we explore three configurations: browser, secure element, and server deployments. For each different platform, we analyze their resilience under various threat models.


## Mitigated threats assuming intact TCB

When the TCB is intact, our architecture ensures the correct isolation of client JavaScript code (i.e., Hyperties, ProtoStubs, and Applications). Isolation is enforced between different client code instances and between client code instances and the environment (e.g., external applications, or OS resources). Our architecture also provides for the correct enforcement of policy code attached to hyperties. Such policies can regulate different aspects of a hyperty’s behavior: access control policies (e.g., cookies, files, network, etc), routing policies, charging policies, and privacy policies. Finally, our architecture validates the authenticity of client code and the identity of the involved entities / principals.

In the basic threat model, we assume that an attacker can server arbitrary client code to our system. The attacker can impersonate a legitimate service provider and serve malicious ProtoStub or Hyperty code. When instantiated on the Hyperty Runtime, this code can attempt to execute JavaScript instructions in order to access private data held by other pieces of client code (including applications’), by the Hyperty Runtime TCB, or by external components of the hosting environment (e.g., the JavaScript Engine, or the Operating System). Similarly, malicious ProtoStub or Hyperty code can also attempt to tamper with any other component in the system. In particular, malicious code may try to tamper with Hyperty policies or with the respective policy decision and enforcement engine in order to escalate privileges. Finally, malicious code may attempt to launch denial of service attacks (e.g., by executing CPU intensive code). In the sections below, we expand on this threat model to consider potential vulnerabilities of our system when deployed on different environments.

Next, we describe how our system defends against several classes of potential attacks. We add to this list some attacks that can be currently launched. We provide some recommendations for fixing such attacks.

### Unauthorized access by client code

### Policy subversion vulnerabilities

*include policy analysis according to different type of runtime*

### Cross-origin vulnerabilities

### Client code identity or authenticity vulnerabilities

### Denial of service vulnerabilities

### Possible attacks

Given that ProtoStub, Hyperty instances, and the Router PEP share the same sandboxes, some attacks are possible: (i) a malicious Hyperty instance or ProtoStub can compromise the Router PEP, (ii) a malicious Hyperty can subvert a ProtoStub, or (iii) a malicious ProtoStub can compromise a Hyperty instance.

The first attack causes no particular damage outside the enclosing sandbox. Because the Router PEPs holds no secrets, there’s no risks of confidentiality breaches. On the other hand, the Router PEP provides services to the sandbox’s client code. As a result, compromising the integrity of the Router PEP could result at most in integrity and availability violations to the JavaScript client instances enclosed in the sandbox.

The second attack -- a malicious Hyperty subverts a ProtoStub -- could be problematic if the ProtoStub contains secrets bundled into the ProtoStub code itself. Secrets can refer not necessarily to sensitive data (which is unlikely given that ProtoStubs implement communication protocols), but proprietary  IT-protected code owned by the developer or by the service provider. The current architecture provides no protection against this attack.

Lastly, the third attack -- a malicious ProtoStub -- can be the most severe one. If a buggy ProtoStub is exploited, an attacker can gain access to execution state of the Hyperty instances sharing the same sandbox. If a Hyperty instance processes sensitive user data or handles key material, such an exploit can result in a data breach. The current version of the Hyperty Runtime architecture offers no protection against this attack.

In order to mitigate attacks 2 and 3, we recommend that Hyperty instances and ProtoSubs execute isolated in independent sandboxes.


## Vulnerability assessment on browser deployment


## Vulnerability assessment on SE deployment


## Vulnerability assessment on server deployment


| **Requirement Name** | **Description** | <br/> | --- | --- |<br/>The effort to introduce new capabilities in the runtime should be reasonable | Estimate effort needed to introduce the following features:
- missing WebRTC features eg Identity
- Protocol on the fly mechanism
- Policy engine
- Hyperty Registry
- others?<br/>The Runtime must be secured | *to be done: Identity attacks to be secured against*

It should be possible to deploy in secured elements like SIM cards or embedded SIM (Nuno: not yet entirely sure that this can be done.)

**Security goals:**

G1 - to protect the confidentiality and integrity of the state of hyperty instances.
G2 - to protect the integrity of the code of hyperty instances.
G3 - to enforce the security policies attached to hyperty code.

**Possible attack vectors:**

*Malicious hyperty code:* E.g., by exploiting a bug in the hyperty runtime (HR), a malicious hyperty manages to escape from its sandboxed environment and escalates its privileges to gain access to a victim hyperty instance. The attacker can then read or modify sensitive data (break G1), modify the code (break G2), or modify the security policy (break G3) of the victim.

*Compromised browser:* E.g., the local user logs in to the computer, and attaches a debugger to the browser’s process. This gives the user full access to the browser’s state, including the HR’s. Therefore all G1, G2, and G3 can be violated. A similar attack can be performed by malware that subverts the browser’s security mechanisms and allows for an attacker to control the HR. 

*Compromised operating system:* E.g., a kernel rootkit subverts the kernel, and gains access to the entire memory state of the browser process in which the victim hyperty instance is running. Just like in the previous cases, all G1, G2, G3 can be violated. Jail-breaking the kernel can bring similar consequences.

*Compromised hardware:* E.g., an attacker manages to gain physical access to the host computer and has the capability to extract secrets directly from the RAM memory or by probing the system bus. This attack can violate the security goals G1, G2, and G3.




<br/>The Runtime must have a good performance | <br/>The Runtime should support Web Messaging Notifications | http://dev.w3.org/html5/postmsg/<br/>The Runtime should support Web Socket | http://www.w3.org/TR/websockets/ <br/>The runtime must support standard Javascript (ECMAScript) | http://www.ecma-international.org/ecma-262/5.1/ <br/>The Runtime should support W3C WebRTC APIs | http://www.w3.org/TR/mediacapture-streams/

http://www.w3.org/TR/webrtc/ <br/>The Runtime should be deployable in the most used Devices and Operating Systems | Including:
* Android (Smartphone and Tablet) 
* iOS (Smartphone and Tablet)
* Raspberry PI
* Linux VM
* Windows VM<br/>
#### Deploy Hyperty

The Runtime procedures to deploy a new Hyperty are described in this section.

![Figure @runtime-deploy-hyperty: Deploy Hyperty](deploy-hyperty.png)

Steps 1 - 5: the Runtime UA is invoked by the App to load a new Hyperty from a specific URL. The Runtime UA downloads the protostub source code, extracting the HypertyDownloadURL from the Hyperty descriptor.

Steps 6 - 7: the new Hyperty is [registered in the Runtime Registry](register-hyperty.md), which returns the Hyperty Instance address (HypertyURL).

Steps 8: policies contained in the Hyperty Descriptor, are deployed in the Core Policy Engine.

Steps 9: the runtime UA checks in the Hyperty Descriptor if a Policy Enforcer is required. If Yes a Policy Enforcer is deployed.

Steps 10: the runtime UA adds Hyperty listener to the runtime BUS to receive messages targeting the Hyperty URL. It should be noted in case there is an intercepting PEP, the Hyperty listener will only be called for Messages forwarded by PEP.

Steps 11-12: the Runtime UA asks the Policy Engine about Hyperty sandboxing policy. As discussed in the Runtime Architecture, and according to security policies, Hyperties and the Application can be deployed in the same sandbox or in separated domains.

---

**Hyperty and App deployed in the same sandbox**

Steps 13 - 14: In this situation, the App and the Hyperty are running in the same isolated sandbox which is different from the Hyperty Core Runtime Sandbox. This means the Runtime UA returns to the App the Hyperty Source Code and the App instantiates the Hyperty..

**Hyperty and App deployed in different sandboxes**

Steps 15: In this situation, the App and the Hyperty must run in different isolated sandboxes. In this case the Hyperty sandbox is managed by the runtime UA which means the runtime UA can download and instantiated the Hyperty. The runtime UA should avoid the creation of new sandboxes in case there is already a sandbox for the same domain

**Sandbox does not exist**

Steps 16-19: In case no sandbox exists, the Runtime UA instantiates a new sandbox through the Sandbox interface which is registered in the Registry

---

Steps 20-23: The Runtime UA requests the new sandbox to instantiate the Hyperty source code, extracting the configuration data from the Hyperty descriptor, and it returns the Hyperty instance API stub to the App.

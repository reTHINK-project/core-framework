#### M2M Device Bootstrap, Registration, Authorization

For M2M communication the human presence is limited but still present when it comes to accepting that software is installed on his/her pertaining device. Thus the bootstrap operation is slightly different than the one from the H2H usecase where the human presence is included. We consider that the device to be bootstraped is configured to communicate with the Catalogue for this operation. The Catalogue will perform similar to a Device Management Server exposing the LWM2M protocol to the device and applications to which humans have access. 

In the following diagram we consider that Alice has just bought a device and wants to install a set of hiperties that put the device in use. For this, she will press the boot button trigerring as first operation the Runtime User Agent instantiation (step 1) and then the Runtime User Agent registration to the Catalogue with an unique endpoint (step 2). The registration wil permit Alice to visualize the new attached device on an application interfacing with the Catalogue (step 3,4). Alice will be able to then ask the Catalogue to perform a device bootstrap by selecting an application and set of hiperties to install on the device (step 5). Steps 6-9 illustrate the operations of creating a software component management information on the device. Steps 10,11 creates the associated Access Control Rule to govern the access to modify or update the software components information. In step 12 Alice will be notified of the result of the bootstrap, along with any possible error indication (hard disk full, hardware problem, incompatible versions of Runtime User Agent and Catalogue). If the software component information transfer is successful, Alice can reconsider and not install the software or proceed with the installation. This step 13 is essential as it allows a last minute option for the user to interrupt installation of a malware. The Catalogue can then send a command to the Runtime User Agent to instantiate/execute the transmitted artifacts (steps 14, 15). Uninstalling software on demand is also envisioned, but not present in the diagram. 
The user will be notified when the artifacts are loaded (step 16). Registration of the hiperties is performed automatically by the Runtime User Agent.

Other Runtime APIs that the Runtime User Agent exposes, like loadHiperty() and loadProtoStub() are to be used by the applications that are already running on the Runtime. Loading of Hiperties or ProtoStubs will trigger the steps 8-18.

It might be the situation that the human intervention is not requested when a new Hiperty is to be downloaded by an application that was already authorized by the human, in order to improve the Quality of Experience.

![Figure @runtime-m2m-comm-bootstrap-auth-registration: M2M Device Bootstrap](M2M_bootstrap_authentication.png)




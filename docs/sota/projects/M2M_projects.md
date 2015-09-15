## M2M Projects

Several (open source) projects implement key functionality that may be potentially essential to realize the Catalogue Service as well as the Registry Service simultaneously in the machine-to-machine and human-to-human domain.  The following sections provide an overview of implementations for

1. CoAP/Well-known CoRE,
2. ETSI and oneM2M, and
3. OMA Device Management

### CoAP/ Well-known CoRE Projects

If Hyperties, Codecs, Protostub and other artifacts to be provisioned on the end devices are to be regarded as resources with attributes describing: capabilities (audio, video, text), running platform (OS), configuration (DNS name of the messaging node, DNS server), implementation (code/script, codecs), these artifacts can be organized as resources in the Repository/Catalogue component.

#### LibCoap Project

##### Overview

The implementation includes features for receiving and sending CoAP requests. It also supports the [CoRE-link format RFC 6690] (https://tools.ietf.org/html/rfc6690) to organize the CoAP resources as a well-known CORE. It has support for Linux but also Contiki Operating Systems.

The implementation is using C as programming language.

Link: https://gitlab.informatik.uni-bremen.de/bergmann/libcoap/tree/master

The library is published as open-source software without any warranty of any kind. Use is permitted under the terms of the GNU General Public License (GPL), Version 2 or higher, OR the revised BSD license. 

##### How to use

For starting a CoAP server based on a configuration file, a main program has to be written. Handlers for CRUD operations triggered by CoAP requests: Post, Get, Put and Delete can be registered to the main information named coap_context. Callbacks will be generated to the registered handlers when the requests or replies are received. When creating resources, attributes can be associated. The attributes are then XML encoded when Get messages are received. A command line application, example of code and ETSI tests are included.

#### Copper (Cu) CoAP user-agent Project

##### Overview
The CoAP User Agent is a JavaScript implemention of [Constrained Application Protocol (CoAP) RFC 7252] (http://tools.ietf.org/html/rfc7252) with support for DTLS, Observe and blockwise transfers. A plugin for Mozilla is also included. 
The project is available on github at: https://github.com/mkovatsc/Copper 

The license is 3-Clause BSD with the text available at: http://opensource.org/licenses/BSD-3-Clause, and permits redistribution.

##### How to use

The JavaScript code can be used directly in other JavaScript components.

#### Californium Project

##### Overview
The project implements CoAP RFC 7152 with DTLS, a CoAP-HTTP translator.
The implementation is using Java as programming language and is designed for IoT Cloud services with the focus on scalability and usability instead of resource-efficiency like for embedded devices.

The project is available on github at: https://github.com/eclipse/californium
The license is business-friendly and of type Eclipse Distribution License, available at http://www.eclipse.org/org/documents/edl-v10.html.

#### How to use

It can be used as a CoAP server that supports all CRUD operations and Observe/Notification mechanism. For example for the Catalogue it would make sense to use it.






### ETSI and oneM2M Projects

#### OM2M Project
##### Overview

The project is developed under the Eclipse umbrella and is described at: http://www.eclipse.org/proposals/technology.om2m/ and available at: http://www.eclipse.org/om2m/

The project is a Java implementation of the ETSI M2M standard in version 0.8.x, available at the moment. It aims to implement also oneM2M in version 1.x.x, the compatibility with ETSI M2M will not be included.

The current version has support for both CoAP and HTTP. For the OMA-DM support it uses SyncML files and can interoperate with [Funambol](http://sourceforge.net/projects/funambol/files/) as server and [Koneki](http://www.eclipse.org/koneki/omadm-simulator/), the OMA-DM simulator for firmware update operation.

The code is licensed using [Eclipse Public License](https://www.eclipse.org/legal/epl-v10.html)

##### How to use
The project could be used to store data coming from sensors or smart devices and expose it to applications.




### OMA Device Management Projects
For exchanging information on the device properties and also monitor/manage connectivity of the device, [OMA LWM2M standard] (http://member.openmobilealliance.org/ftp/Public_documents/DM/LightweightM2M/) can be used, as an energy efficient and scalable evolution from OMA DM standard.

Several projects have been analyzed in terms of features, flexibility and license in order to be able to choose the most suitable for the Rethink project.

#### Leshan Project

The project is supported by Sierra Wireless and hosted by the Eclipse foundation.

##### Overview

The implementation supports all the interfaces: Bootstrap, Registration, Device Management and Service Enablement, Information Reporting.

The project uses Java as programming language.

The project is hosted on github at: https://github.com/eclipse/leshan

This program and the accompanying materials are made available under the terms of the [Eclipse Public License v1.0] (http://www.eclipse.org/legal/epl-v10.html) and [Eclipse Distribution License v1.0](http://www.eclipse.org/org/documents/edl-v10.html) which accompany the distribution. The license is business-friendly. "Neither the name of the Eclipse Foundation, Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission."

##### How to use

The project can be further extended with some new Management Objects, if necessary. The server is to be compiled and run according to a configuration file.

#### OMA LWM2M Dev Kit Project

The project can act as multiple virtual OMA LWM2M clients by connecting to a remote OMA LWM2M server.

##### Overview

The supported features include interfaces:  Registration, Device Management and Service Enablement Interface, Information Reporting Interface.

The programming language is Javascript.

The homepage can be found on: https://github.com/OpenMobileAlliance/OMA-LWM2M-DevKit

The license is [BSD-like](https://github.com/OpenMobileAlliance/OMA-LWM2M-DevKit/blob/master/LICENSE), the name of the project has to be mentioned in the redistribution.

##### How to use

The project provides a Web GUI as an addon for Firefox to get the user/developer familiarize. The core functionality can be included in any software package like a Javascript library and also, the Core Framework of the client side for the Rethink project.



## CoAP/ Well-known CoRE Projects

If Hyperties, Codecs, Protostub and other artifacts to be provisioned on the end devices are to be regarded as resources with attributes describing: capabilities (audio, video, text), running platform (OS), configuration (DNS name of the messaging node, DNS server), implementation (code/script, codecs), these artifacts can be organized as resources in the Repository/Catalogue component.

### LibCoap Project

#### Overview

The implementation includes features for receiving and sending CoAP requests. It also supports the [CoRE-link format RFC 6690] (https://tools.ietf.org/html/rfc6690) to organize the CoAP resources as a well-known CORE. It has support for Linux but also Contiki Operating Systems.

The implementation is using C as programming language.

Link: https://gitlab.informatik.uni-bremen.de/bergmann/libcoap/tree/master

The library is published as open-source software without any warranty of any kind. Use is permitted under the terms of the GNU General Public License (GPL), Version 2 or higher, OR the revised BSD license. 

#### How to use

For starting a CoAP server based on a configuration file, a main program has to be written. Handlers for CRUD operations triggered by CoAP requests: Post, Get, Put and Delete can be registered to the main information named coap_context. Callbacks will be generated to the registered handlers when the requests or replies are received. When creating resources, attributes can be associated. The attributes are then XML encoded when Get messages are received. A command line application, example of code and ETSI tests are included.

### Copper (Cu) CoAP user-agent Project

#### Overview
The CoAP User Agent is a JavaScript implemention of [Constrained Application Protocol (CoAP) RFC 7252] (http://tools.ietf.org/html/rfc7252) with support for DTLS, Observe and blockwise transfers. A plugin for Mozilla is also included. 
The project is available on github at: https://github.com/mkovatsc/Copper 

The license is 3-Clause BSD with the text available at: http://opensource.org/licenses/BSD-3-Clause, and permits redistribution.

#### How to use

The JavaScript code can be used directly in other JavaScript components.

### Californium Project

#### Overview
The project implements CoAP RFC 7152 with DTLS, a CoAP-HTTP translator.
The implementation is using Java as programming language and is designed for IoT Cloud services with the focus on scalability and usability instead of resource-efficiency like for embedded devices.

The project is available on github at: https://github.com/eclipse/californium
The license is business-friendly and of type Eclipse Distribution License, available at http://www.eclipse.org/org/documents/edl-v10.html.

#### How to use

It can be used as a CoAP server that supports all CRUD operations and Observe/Notification mechanism. For example for the Catalogue it would make sense to use it.

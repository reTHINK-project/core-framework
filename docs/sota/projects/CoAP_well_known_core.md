## CoAP/ Well-known CoRE Projects

If Hyperties, Codecs, Protostub and other artifacts to be provisioned on the end devices are to be regarded as resources with attributes describing: capabilities (audio, video, text), running platform (OS), configuration (DNS name of the messaging node, DNS server), implementation (code/script, codecs)

### LibCoap Project

#### Overview

The implementation includes features for receiving and sending CoAP requests. It also supports the [CoRE-link format RFC 6690] (https://tools.ietf.org/html/rfc6690) to organize the CoAP resources as a well-known CORE. It has support for Linux but also Contiki Operating Systems.

The implementation is using C as programming language.

Link: https://gitlab.informatik.uni-bremen.de/bergmann/libcoap/tree/master

The library is published as open-source software without any warranty of any kind. Use is permitted under the terms of the GNU General Public License (GPL), Version 2 or higher, OR the revised BSD license. 

#### How to use

For starting a CoAP server based on a configuration file, a main program has to be written. Handlers for CRUD operations triggered by CoAP requests: Post, Get, Put and Delete can be registered to the main information named coap_context. Callbacks will be generated to the registered handlers when the requests or replies are received. When creating resources, attributes can be associated. The attributes are then XML encoded when Get messages are received. A command line application, example of code and ETSI tests are included.

### Copper Project

#### Overview
Features
Programming Language
Link
License

#### How to use

### Californium Project

#### Overview
Features
Programming Language
Link
License

#### How to use



# Introduction

## Objectives and Overview

This report provides a detailed specification of reTHINK Core Framework components comprised by the runtime environment where Hyperties are executed and the messaging nodes used to support messages exchange between Hyperties.
Thus, and according to reTHINK Architecture [38], the scope of this report includes the specification of the Messaging Node providing reTHINK Messaging Services and the specification of the Hyperty Runtime that will be included in User Devices and Application Servers to deliver User Hyperties and Network Side Hyperties. 

![Figure @introduction-wp3-scope - WP3 Scope](WP3-scope.png)

It should be noted that the Network Platform specification supporting Specialised Network Services will be reported later in D3.4, as originaly planned.

These specifications are compliant with reTHINK Data Model, Hyperty Management interfaces, Stream Interface and Messaging Interface designed in [37]. It should be noted that, according to Protocol On-the-fly concept, the Messaging Interface is defined by the Message Model defined in [37].

Besides the Architecture requirements reported in D2.1 [38] additional specific requirements to Core Framework functionalities were analysed.

The specification of the Hyperty Runtime and the Messaging Node is sustained by a very compreensive work in terms of state of the art research and procurement of existing open source that will be used to demonstrate the feasibility of the radical reTHINK concepts and of all its benefits. Such aproach, will position reTHINK prototypes at the forefront, in terms of technologies and functionalities, optimising the usage of resources and complying with reTHINK ambitious calendar.


An exhastive study of relevant IETF, W3C standards and others that facilitate the fulfilment of previously analysed requirements, was conducted. Special attention was given to the research on Security in Web Runtime. In parallel, existing Open Source solutions to be used to develop Hyperty Runtime and Messaging Nodes was researched, experimented and selected. 

Three solutions to implement the Messaging Node were selected in order to evaluate interoperability between different Hyperties domains that use different Message Nodes in WP6, namely Vertx, Nodejs and Matrix.

The experimentations performed on javascript engines and webrtc implementations have shown to be very difficult to extend existing runtime like V8 or Chromium to natively support Hyperties runtime. On the other hand, such approach would also not promote the adoption of Hyperty runtime by the end-users since it would demand the installation of new platforms to replace popular browsers like Chrome or Firefox. Instead, it was decided to make Hyperty runtime compliant with existing runtimes notably with existing Web Browsers like Chrome and Javascript platforms like nodejs.

The Runtime design enables the reusage of most of the core runtime components through different platforms including Browsers, Standalone Mobile Application, Network Side Application Servers and more constrained M2M/IoT standalone devices.

The specification reported in this deliverable, provides the basis for the implementation tasks but it is expected to be adjusted and to be completed along the implementation phase. In addition, during the implementation phase, an Hyperty Framework  to be used by Hyperty Developers will be developed and reported in D3.2. 

 The final specification for messaging node and Hyperty runtime will be reported in D3.3.

## Structure

This report starts by introducing, in Chapter 2, requirements that are more specific to the domains addressed in WP3 namely Runtime Requirements, Message Node Requirements, Hyperty Framework Requirements and Quality of Service Requirements.
In chapter 3 a summary of the State of the Art and Procurement work is given. The full outcome of the State of the Art work done in WP3 can be found in Annex A. The main part of this report is located in Chapter 4 - detailed specification of the Hyperty Runtime and in Chapter 5 - specification of the Message Node.


### Runtime implementation in Constrained Devices

NodeJs is considered one of the options for implementing the Runtime API for platforms like Raspberry PI and [Beagle Board](http://beagleboard.org/bone):

http://elinux.org/Node.js_on_RPi

http://beagleboard.org/Support/BoneScript

### Design

The goal of the design is to use stable NodeJs open-source modules that provide functionality for the components that are part of the architecture of the Runtime.

The message component of the Runtime implementation constitues one of the main components. There are many message buses implemented as NodeJs modules. The one selected for evaluation is Capriza, https://github.com/capriza/node-busmq, having as key functionality: scalability and guaranteed order of messages.

Another important feature to be considered is security of the Runtime. Thus multiple sandboxes to separate code is present in the Runtime architecture as a security by design feature. To implement 
https://www.npmjs.com/package/node-sandbox

A package for LWM2M is already available for NodeJs (https://github.com/telefonicaid/lwm2m-node-lib).

#### Also potentially relevant:

http://samsung.github.io/iotjs/

also see:  https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/implementation/standalone-runtime.md

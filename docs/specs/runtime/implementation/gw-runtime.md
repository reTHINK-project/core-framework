### Runtime implementation M2M standalone application

NodeJs is considered one of the options for implementing the Runtime API for platforms like Raspberry PI and [Beagle Board](http://beagleboard.org/bone):

### NodeJs Installation

For installing NodeJs on Raspberry Pi, 2 steps are required: download the debian package and then install it (http://weworkweplay.com/play/raspberry-pi-nodejs/)

    wget http://node-arm.herokuapp.com/node_latest_armhf.deb 
    sudo dpkg -i node_latest_armhf.deb

For installing NodeJs on BeagleBoard (http://beagleboard.org/Support/BoneScript) one can compile it from scratch (http://www.armhf.com/node-js-for-the-beaglebone-black/) or install it in a similar way as for Raspberry using one of the versions from the download page: http://www.armhf.com/download/

An important package based on NodeJs is Cylon (http://cylonjs.com/) supporting 36 hardware platforms and providing APIs to interact with sensors or actuators of the platforms. 

### Design

The goal of the design is to use stable NodeJs open-source or business friendly modules that provide functionality for the components that are part of the architecture of the Runtime.

One of the key functional requirements is security of the Runtime. Thus multiple sandboxes to separate code is present in the Runtime architecture as a security by design feature. There are 3 types of sandboxes to be used: Core Sandbox, Service Provider Sandbox and Hyperty Sandbox (http://gf3.github.io/sandbox/).

For the Runtime UA a module implementing the protocol LWM2M is already available for NodeJs (https://github.com/telefonicaid/lwm2m-node-lib). Special care has to be taken into consideration for having one implementation of the Runtime UA that can also run on the other platforms: browser and H-2-E (Human to Everything) standalone.

### Code Snippets 

For creating several sandboxes the following code can be used:
```
var s = new Sandbox()
s.run( '1 + 1 + " apples"', function( output ) {
  // output.result == "2 apples"
})
```
with the basic syntax: sandbox_instance.run( code, hollaback ), where

code is the string of Javascript to be executed.

hollaback is a function, and it's called with a single argument, output.

output is an object with two properties: result and console. The result property is an inspected string of the return value of the code. The console property is an array of all console output. 

#### Other evaluated runtimes

Another platform that was evaluated was IotJs (http://samsung.github.io/iotjs/). It currently supports Raspberry Pie2 and STM32F4-Discovery + BB as hardware platforms and Linux and Nuttx(http://nuttx.org/) Real-Time Operating System using C++ to build the runtime Javascript Environment. Although supported by an important device manufacturer, it is still in its infancy and cannot be used in the development of reThink in which fast-prototyping of new paradigms is intended. During the development allignment with the iotJs is considered and tests of the components to validate the support of ioJs is envisioned.



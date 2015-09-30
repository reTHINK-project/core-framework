### Runtime implementation M2M standalone application

Node.js is considered one of the options for implementing the Runtime API for platforms like Raspberry PI and [Beagle Board](http://beagleboard.org/bone) [115]:

#### Node.js Installation

For [installing Node.js on Raspberry Pi](http://weworkweplay.com/play/raspberry-pi-Node.js/) [116], 2 steps are required:

download the debian package and then install it:

```
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
```

The [installation of Node.js on BeagleBoard](http://beagleboard.org/Support/BoneScript)[117] requires to compile it from scratch [118] or install it in a similar way as for Raspberry using one of the versions from the download page [119].

An important package based on Node.js is [Cylon](http://cylonjs.com/) [120] supporting 36 hardware platforms and providing APIs to interact with sensors or actuators of the platforms.

#### Design

The goal of the design is to use stable Node.js open-source or business friendly modules that provide functionality for the components that are part of the architecture of the Runtime.

One of the key functional requirements is security of the Runtime. Thus multiple sandboxes to separate code is present in the Runtime architecture as a security by design feature. There are 3 types of sandboxes to be used: Core Sandbox, Service Provider Sandbox and Hyperty Sandbox. One possible Node,js solution is provided in [gf3](http://gf3.github.io/sandbox/) [121].

For the Runtime UA a module implementing the protocol LWM2M [is already available for Node.js](https://github.com/telefonicaid/lwm2m-node-lib) [122].

#### Code Snippets

For creating several sandboxes using gf3 the following code can be used:`
var s = new Sandbox()
s.run( '1 + 1 + " apples"', function( output ) {
  // output.result == "2 apples"
})
` with the basic syntax: sandbox_instance.run( code, hollaback ), where

code is the string of JavaScript to be executed.

hollaback is a function, and it's called with a single argument, output.

output is an object with two properties: result and console. The result property is an inspected string of the return value of the code. The console property is an array of all console output.

#### Other evaluated runtimes

Another platform that was evaluated was [IotJs](http://samsung.github.io/iotjs/) [123]. It currently supports Raspberry Pi2 and STM32F4-Discovery + BB as hardware platforms and Linux and [Nuttx](http://nuttx.org/) [124] Real-Time Operating System using C++ to build the runtime JavaScript Environment. Although supported by an important device manufacturer, it is still in its infancy and probably it won't be used in reTHINK prototype. Nevertheless, during the development phase, the iotJs will be considered and tests will be performed to validate the support of ioJs are envisioned.

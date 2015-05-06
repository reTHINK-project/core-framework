## V8 Javascript Engine Evaluation

### Overview

*Overview of functionalities and type of WP3 component that the asset can be used for ie Messaging Node, Runtime, Network QoS and Framework* 

V8 Javascript Engine is ... bla bla
V8 can be used to provide reTHINK Runtime features

### Architecture

Main functional modules and interfaces. SHould be based on a picture


### APIs

Available APIs for developers

### Requirements Analysis

*According to Component Type addressed by the solution ie Messaging Node, Runtime, Network QoS and Framework*

#### [Runtime Performance](https://github.com/reTHINK-project/core-framework/issues/6)

Its aparently clear that V8 provides a significant improvement over previously adopted JavaScript interpretation engines like:
 JScript from IExplorer;
 SpiderMonkey (in Firefox);
 JavaScriptCore (in Safari).
The amount of the improvements will depend on the multiplicity of the calls made to implemented methods. If the methods are made to be run only once the gains would be minimal, otherwise the gains will improve exponentially.

The reasons these obtained improvements are:
- Fast Property Access - unlike strong type languages like C# and Java, Javascript like Python is a dynamic programing language. This means that properties can be added to and deleted from objects on the fly, so likelly to change over time. Most Javascript engines use a dictionary-like data structure as storage for the object properties.
The fetching of each property, on access case, involves a dynamic lookup of the property memory location. This approach turns these accesses much slower than accesses in strong type languages. In these languages, the instance variables are located at fixed offsets determined at compile time due to the fixed layout of objects defined by the object's class. In fact, objects are obtained and stored frequently with only a single instruction.
V8 does not use dynamic lookup of properties. It creates hidden classes behind the scenes. Each time a change of property occurs in an object a new hidden class is created and the object changes its representative class for the new hidden class.
The hierarchy of hidden classes is mantained and shared each time a new object of the refered type is used again.This type of behaviour promotes reuse by sharing off the hierarchy of hidden classes therefore avoiding dictionary lookups and eficiency by the inline caching of the classes in use.

- Dynamic Machine Code Generation - V8 generates machine code directly from source code the first time the script is executed. A current Javascript engine usually creates intermediate byte code and interpreter. The consequence thus is an object property access is handled with inline cache code in execution that may be patched with further instructions on execution.
It may be explained by the execution of an access to an object property, V8 retrieves its associated hidden class and optimizes all future property accesses using this template, providing they share the same scope. This information is used in code patching of the inline cach code. If the V8 has gessed right, the property value is fetched in one operation, otherwise V8 patches the code to remove the optimization.
This kind of optimization mirrors the beneficts of static languages and achieves most benefits the more accesses to properties from an object in an wider scope.

- Efficient Garbage Collection - V8, like most garbage collecting languages, reclaims memory used by objects that are no longer used in a process. Obviously garbage collection has known problems like memory fragmentation, pauses for garbage collection and fast object allocation. To avoid those problems as much as possible:
- stops the program execution when in a cycle of garbage collection;
- slices the object heap and only operates on part of it during a collecting cycle - lesses the time the application is stopped;
- correct identification of objects and pointers in memory, avoiding memory leaks by wromg identification.

The V8 separates the heap in two distinct parts. The new space is where new objects are created and the old space where objects surviving a garbage collection cycle are promoted. V8 actualizes references when each cycle finishes.

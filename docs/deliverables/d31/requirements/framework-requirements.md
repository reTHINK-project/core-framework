## Service Framework  Requirements</br></br>
<p>**Service Framework MUST be Message Node agnostic.**</p> Within the reTHINK project, different implementations of the Message Node will be provided. The Service Framework must be compliant across various types of Message Node used.


<p>**The Service Framework MUST avoid any JavaScript conflicts**</p> The Service Framework must not pose any sort of conflict with other JavaScript Frameworks frequently used by developers. In order words, the Service Framework must be able to co-exist with other JavaScript Frameworks.


<p>**Service Framework MUST be Modular in nature**</p> Development of modules on the Framework should be loosely coupled, self contained and re-usable by other libraries/modules   


<p>**The Service Framework MUST be open source**</p> No proprietary solution as the project itself demands all components be open source.


<p>**Service Framework should be device agnostic**</p> The Service Framework should be supported on all devices and operating systems featuring the Hyperty Runtime. The Runtime is envisioned to be deployed on the most used Devices and Operating Systems, including:
* Android (Smartphone and Tablet)
* iOS (Smartphone and Tablet)
* Raspberry PI
* Linux
* Windows


<p>**Service Framework MUST be light weight and fast**</p> The service framework size is important as latency plays an important role and downloading heavy weight files would add overhead thus diminishing the performance and user experience.


<p>**Service Framework SHOULD support Model-View-Controller design pattern**</p> Model-View-Controller approach: enables easier maintainability and clarity. The view presents data to users through format & layout. The view is rendered by the model. The model handles data & business logic. It also allows for clear separation between the presentation (View) and application logic. Meanwhile the Controller receives user requests and calls back to the model to select a proper view via HTTP GET or POST request to manage the data. Within the Service Framework, more focus will be laid on the Model. The View and Controller will remain flexible for the developers to determine according to their requirements and preferences. 



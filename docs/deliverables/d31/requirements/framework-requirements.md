Service Framework Requirements</br></br>
----------------------------------------

-	**Service Framework MUST be Message Node agnostic.:** Within the reTHINK project, different implementations of the Message Node will be provided. The Service Framework must be compliant across various types of Message Node used.

-	**The Service Framework MUST avoid any JavaScript conflicts:** The Hyperty Developer can use any JavaScript framework of choice in the implementation of application. Frameworks such a AngularJS [51] have complex directives which are potential sources of conflicts which an application. The Service Framework should be to co-exist with other JavaScript Frameworks.

-	**Service Framework MUST be Modular in nature:** Development of modules on the Framework should be loosely coupled, self contained and re-usable by other libraries/modules.

-	**The Service Framework MUST be open source:** No proprietary solution for the reTHINK prototype, as the project itself demands all components be open source.

-	**Service Framework should be device agnostic:** The Service Framework should be supported on all devices and operating systems featuring the Hyperty Runtime. The Runtime is envisioned to be deployed on the most used Devices and Operating Systems, including:

	-	Android (Smartphone and Tablet)
	-	iOS (Smartphone and Tablet)
	-	Raspberry PI
	-	Linux
	-	Windows

-	**Service Framework MUST be light weight and fast:** The service framework size is important as latency plays an important role and downloading heavy weight files would add overhead thus diminishing the performance and user experience.

-	**Service Framework SHOULD support Model-View-Controller design pattern:** Model-View-Controller approach: enables easier maintainability and clarity. The view presents data to users through format & layout. The view is rendered by the model. The model handles data & business logic. It also allows for clear separation between the presentation (View) and application logic. Meanwhile the Controller receives user requests and calls back to the model to select a proper view via HTTP GET or POST request to manage the data. Within the Service Framework, more focus will be laid on the Model. The View and Controller will remain flexible for the developers to determine according to their requirements and preferences.

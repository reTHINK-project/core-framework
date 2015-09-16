# Overview of MeteorJS Framework

## Knowing MeteorJS

Meteor is a Javascript plataform, offering a complete full-stack framework for delivering web and mobile apps;

***"Meteor is a complete open source platform for building web and mobile apps in pure JavaScript."***

![Meteor Plataform Overview](meteor-platform.png "image from https://www.meteor.com/features")

#### Special directories

With this directories we can split the server code from the client code, for a better code organization, and also, what we want to share from what we want to make private;

- **/client**
Any files here are only served to the client. This is a good place to keep your HTML, CSS, and UI-related JavaScript code.

- **/server**
Any files in this directory are only used on the server, and are never sent to the client. Use /server to store source files with sensitive logic or data that should not be visible to the client.

- **/public**
Files in /public are served to the client as-is. Use this to store assets such as images. For example, if you have an image located at /public/background.png, you can include it in your HTML with or in your CSS with background-image:
url(/background.png). Note that /public is not part of the image URL.

- **/private**
These files can only be accessed by server code through Assets API and are not accessible to the client.

**or** we can, in same javascript file, wrapping our code in


```javascript
app.js

if (Meteor.isClient) {
	// code will run only on client	side
}

if (Meteor.isServer) {
	// code will run only on server side
}

```

## Main Concepts

- It allows rapid prototyping and produces cross-platform code (Web, Android, iOS). 
- Meteor use as front-end library Blaze which fulfills the same purpose as Angular, Backbone or Ember but is much simpler to use and can be used with any of these libraries.
- Blaze is also faster than Angular in high-throughput rendering tests.
- Meteor works well REST APIs using DDP, a simple protocol for fetching structured data from a server, and receiving live updates when that data changes.
- The underlying database is MongoDB which Meteor works in real-time.
- While Angular is a front-end library and Sails a backend one, Meteor is a full-stack framework, comparable with Derby.
- The MVC model is replaced by MVM (Model-View-Mapper) which replace controller by ORM code that supports what views need to display data. Meteor controllers are on the client side.

## Code convention

Client connection:

```javascript
Tasks = new Mongo.Collection("tasks");
```

Insert:

```javascript
Template.body.events({
  "submit .new-task": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    Tasks.insert({
      text: text,
    });
  }
```

Query:

```javascript
Template.body.helpers({
    tasks: function () {
      // Show newest tasks first
    return Tasks.find({}, {sort: {createdAt: -1}});
    }
)};
```

Delete:

```javascript
Template.task.events({
  "click .delete": function () {
    Tasks.remove(this._id);
  }
)};  
```

## Pros and Cons

#### Pros
- Full Stack package system
- Mobile version with Cordova/Phonegap
- Multiplataform Distribution
- Sofisticaded UI
- [Atmosphere Tool](https://atmospherejs.com/) list all available packages to MeteorJS

#### Cons
- Meteor Development Group has built specifically for a reactive front-end experience
- For applications with very large numbers of concurrent connections (like facebook), Meteor might require larger amounts of RAM than other solutions, but can be optimized
 

## Requirement Analysis

 - [Service Framework **MUST** be Message Node agnostic](https://github.com/reTHINK-project/core-framework/issues/44): **No**

It have its own "message node", who is called [DDP (distributed Data Protocol)](https://www.meteor.com/ddp).

 - [The Service Framework **MUST** avoid any JavaScript conflicts](https://github.com/reTHINK-project/core-framework/issues/43): **Yes**

The platform is constructed in pure javascript, don't have any other frameworks dependencies;

 - [Service Framework **MUST** be Modular in nature](https://github.com/reTHINK-project/core-framework/issues/42): **Yes**

The platform is complete modular, we can write our own modules or import third party modules.

 - [The Service Framework **MUST** be open source](https://github.com/reTHINK-project/core-framework/issues/39): **Yes**

*“Meteor is a complete open source platform for building web and mobile apps in pure JavaScript.”*

 - [Service Framework **SHOULD** be device agnostic](https://github.com/reTHINK-project/core-framework/issues/38): **Yes**
 - [Service Framework **MUST** be light weight and fast](https://github.com/reTHINK-project/core-framework/issues/37): **yes**

Meteor is build on top of NodeJs and MongoDB, and both are fast;

 - [Service Framework **SHOULD** support Model-View-Controller design pattern](https://github.com/reTHINK-project/core-framework/issues/36): **Yes/No**

**No**, it isn't MVC pattern is more a MVM(Model-View-Mapper), but **Yes** we can have MVC, in other way:

*"The MVC pattern in Meteor is dead simple. The Model is coded up in HTML, the Controller is coded in Javascript, and the View is coded up in CSS. It's that simple."*

```
Model          HTML         What Is Displayed       
View           CSS          How It Is Displayed        
Controller     Javascript   When It Is Displayed  
```

## References

All information contained in this file came from these references:

- [Meteor](http://docs.meteor.com/#/full/quickstart)
- [Cookbook MVC](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/model-view-controller.md)
- [Meteorpedia](http://www.meteorpedia.com/read/Why_Meteor)

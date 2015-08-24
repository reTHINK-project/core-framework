Verifing and testing [browser runtime](https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/implementation/browser-runtime.md)

This testings are made with Javascript ES6 by the way, we need installing some extra packages;
We are using [materializecss](http://materializecss.com/) probably have some issues;

This code is made for testing and can be more optimized, at this moment can be a bit confused;

### Agent Folder
The agent folder contains:

* [rethinkAgent.js](agent/js/rethinkAgent.js) - Rethink Agent WebRTC
* [rethink.js](agent/js/rethink.js) - create an iframe and get Rehtink Agent to final user instantiate and use - installer;
* [main.js](agent/js/main.js) - have all logic and how to use for [Demo](agent/demo.html) (without streaming throught iframe);

#### requirements:
* nodejs
* npm
* gulp - npm install gulp-cli -g
* bower - npm install bower -g

#### preparing to run

Server side
```
npm install

npm start (runing the server to serve the demo and de runtime)
```

Client side
```
bower install (install all front end dependencies)

gulp (gulp to compile the ES6 files to ES5)
```
http://127.0.0.1:8080/demo.html - to see how it works, duplicate window and make a call form an id toke to another  (without iframe - testing rethink agent);


### Runtime Folder

The runtime only have a index.html to show how to work the webRTC through an iframe.

You need to have a nodejs installed and live-server to run this demo;

```
live-server --no-browser --port=4000
```
http://127.0.0.1:4000/ to see how it works, duplicate the window and make a call from an id token to another - this works through an iframe;

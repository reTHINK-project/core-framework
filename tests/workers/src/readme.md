## how to install and run

the following tools have to be installed:

 - [`nodejs`](https://nodejs.org/download/)
 - [`npm`](https://docs.npmjs.com/getting-started/installing-node)
 - [`compass`](http://compass-style.org/install/) have [`gem`](https://rubygems.org/pages/download) [`ruby`](https://rvm.io/rvm/install) dependency;

### Install dependencies
Because we are using the ES6 we need jspm to compile to ES5
On command line execute these commands:

```
npm install grunt-cli -g
npm install bower -g
npm install jspm -g
npm install live-server -g

jspm init;
```
after ```jspm init``` some questions are made, and you need to pay attention to compiler options, "traucer ou babel", choose babel;

##### Prepare JSPM to search on bower;
```
npm install -g jspm-bower-endpoint

```
##### add registry endpoint

```
jspm registry create bower jspm-bower-endpoint
```

### After all installed
```
// this will install all dependencies from project
jspm install
bower install
npm start
```

after start server open the browser with http://localhost:8080

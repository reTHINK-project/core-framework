Why Docker?

Docker containers are lightweight and fast. Containers have sub-second launch times, reducing the cycle time of development, testing, and deployment.

Docker containers run almost everywhere. We can deploy containers on desktops, physical servers, virtual machines, into data centers, and up to public and private clouds. Since Docker runs on so many platforms, it's easy to move our applications around. We can easily move an application from a testing environment into the cloud and back.

Dockerizing a Node.js Web App

The goal of this example is to show how to build your Docker images from a parent image using a Dockerfile.  We will do that by making a simple Node.js hello world web application running on CentOS.

Create Node.js app

First, create a directory src where all the files would live. Then create a package.json file that describes your app and its dependencies:

{
  "name": "docker-centos-hello",
  "private": true,
  "version": "0.0.1",
  "description": "Node.js Hello world app on CentOS using docker",
  "author": "Miguel Mesquita <mesquita@av.it.pt>",
  "dependencies": {
    "express": "3.2.4"
  }
}

Then we need to create an index.js file that defines a web app using the Express.js framework:

var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

We'll look at how to run an application inside a CentOS container using Docker. First we need to build a Docker image of our app.

Creating a Dockerfile

Create an empty file called Dockerfile:

$ touch Dockerfile

Open the Dockerfile in your favorite text editor (I'm an old fashioned guy, I use vi)

Define the parent image we want to use to build your own image on top of. Here, we'll use CentOS (tag: centos6) available on the Docker Hub:

FROM    centos:centos6 

Since we're building a Node.js app, we have to install Node.js as well as npm on your CentOS image. Node.js is required to run our app and npm to install our app's dependencies defined in package.json. To install the right package for CentOS, we'll use the instructions from the Node.js wiki:

// Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
## Install Node.js and npm
RUN     yum install -y npm

To bundle our app's source code inside the Docker image, we use the COPY command:

## Bundle app source
COPY . /src

Install our app dependencies using the npm command:

## Install app dependencies
RUN cd /src; npm install

Our app binds to port 8080 so we use the EXPOSE command to have it mapped by the docker daemon:

EXPOSE  8080

Define the command to run our app using CMD which defines our runtime, i.e. node, and the path to our app src/index.js (see the step where we added the source to the container):

CMD ["node", "/src/index.js"]

Our Dockerfile should now look like this:


FROM    centos:centos6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
RUN     yum install -y npm

# Bundle app source
COPY . /src
# Install app dependencies
RUN cd /src; npm install

EXPOSE  8080
CMD ["node", "/src/index.js"]

Building our image

Go to the directory that has our Dockerfile and run the following command to build a Docker image. The -t flag adds a tag to our image so it's easier to find later using the docker images command:

$ sudo docker build -t <your username>/centos-node-hello .

Our image will now be listed by Docker:

$ sudo docker images

# Example
REPOSITORY                          TAG        ID              CREATED
centos                              centos6    539c0211cd76    8 weeks ago
<your username>/centos-node-hello   latest     d64d3505b0d2    2 hours ago

Run the image

Running our image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port in the container. Run the image we previously built:

$ sudo docker run -p 49160:8080 -d <your username>/centos-node-hello

To print the output of our app:

# Get container ID
$ sudo docker ps

# Print app output
$ sudo docker logs <container id>

# Output
Running on http://localhost:8080

Test

To test our app, get the port of our app that Docker mapped:

$ sudo docker ps

# Example
ID            IMAGE                                     COMMAND              ...   PORTS
ecce33b30ebf  <your username>/centos-node-hello:latest  node /src/index.js         49160->8080

In the example above, Docker mapped the 8080 port of the container to 49160.

Is our application working? Lets test it with curl (ok install it with sudo apt-get install curl)

$ curl -i localhost:49160

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
Date: Sun, 02 Jun 2013 03:53:22 GMT
Connection: keep-alive

Hello world

Yes!!! It's working.

Every application must connect through the port. The code is absolutely isolated from misuse. We implicitly have created an internal virtual net using docker from a internal pool of IPs docker has assumed on instalation. Every new application has a brand new on initiation which is relented on finishing the app. For the external user, well it is invisible.


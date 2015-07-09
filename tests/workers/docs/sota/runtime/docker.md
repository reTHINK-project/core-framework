## Docker

Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications. Consisting of Docker Engine, a portable, lightweight runtime and packaging tool, and Docker Hub, a cloud service for sharing applications and automating workflows, Docker enables apps to be quickly assembled from components.

Docker is a platform for developers and sysadmins to develop, ship, and run applications. Docker lets you quickly assemble applications from components and eliminates the friction that can come when shipping code. Docker lets you get your code tested and deployed into production as fast as possible.

Docker containers are lightweight and fast. Containers have sub-second launch times, reducing the cycle time of development, testing, and deployment.

Docker containers run almost everywhere. We can deploy containers on desktops, physical servers, virtual machines, into data centers, and up to public and private clouds. Since Docker runs on so many platforms, it's easy to move our applications around. We can easily move an application from a testing environment into the cloud and back.

Docker consists of:

* The Docker Engine -  lightweight and powerful open source container virtualization technology combined with a work flow for building and containerizing your applications.
* Docker Hub - SaaS service for sharing and managing your application stacks.

### Faster delivery of your applications

We want your environment to work better. Docker containers, and the work flow that comes with them, help your developers, sysadmins, QA folks, and release engineers work together to get your code into production and make it useful. It was created a standard container format that lets developers care about their applications inside containers while sysadmins and operators can work on running the container in your deployment. This separation of duties streamlines and simplifies the management and deployment of code.
It makes it easy to build new containers, enable rapid iteration of your applications, and increase the visibility of changes. This helps everyone in your organization understand how an application works and how it is built.
Docker containers are lightweight and fast! Containers have sub-second launch times, reducing the cycle time of development, testing, and deployment.

### Deploy and scale more easily

Docker containers run (almost) everywhere. You can deploy containers on desktops, physical servers, virtual machines, into data centers, and up to public and private clouds.
Since Docker runs on so many platforms, it's easy to move your applications around. You can easily move an application from a testing environment into the cloud and back whenever you need.
Docker's lightweight containers also make scaling up and down fast and easy. You can quickly launch more containers when needed and then shut them down easily when they're no longer needed.
Get higher density and run more workloads

Docker containers don't need a hypervisor, so you can pack more of them onto your hosts. This means you get more value out of every server and can potentially reduce what you spend on equipment and licenses.

### Faster deployment makes for easier management

As Docker speeds up your work flow, it gets easier to make lots of small changes instead of huge, big updates. Smaller changes mean reduced risk and more uptime.

### Architecture

![image](https://github.com/reTHINK-project/core-framework/blob/master/docs/sota/runtime/docker-arch.png "Docker Architecture")

Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. Both the Docker client and the daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate via sockets or through a RESTful API.

How to obtain security on standalone components using Docker.

To understand how to obtain security using Docker we have to look at its architecture: 


The Docker daemon - the Docker daemon runs on a host machine. The user does not directly interact with the daemon, but instead through the Docker client.

The Docker client - The Docker client, in the form of the docker binary, is the primary user interface to Docker. It accepts commands from the user and communicates back and forth with a Docker daemon.

To understand Docker , we need to understand its three components:

Docker images - A Docker image is a read-only template. For example, an image could contain an Android minimal operating system with a minimal HTTP demon and a web application installed. Images are used to create Docker containers.  Docker provides a simple way to build new images or update existing images, or we can download Docker images that other people have created

Docker registries - Docker registries hold images. These are public or private stores from which we upload or download images. These can be images we create ourselves or we can use images that others have previously created.

Docker containers - Docker containers are similar to a directory. A Docker container holds everything that is needed for an application to run. Each container is created from a Docker image. Docker containers can be run, started, stopped, moved, and deleted. Each container is an isolated and secure application platform.

Obviously the containers are the base for our security architecture. Each container is absolutely independent and each interface for comunication must be stricly observed. There is no other way to access the container and its content in operation.

#### How does a Docker image works

We've already seen that Docker images are read-only templates from which Docker containers are launched. Each image consists of a series of layers. Docker makes use of union file systems to combine these layers into a single image. Union file systems allow files and directories of separate file systems, known as branches, to be transparently overlaid, forming a single coherent file system.

One of the reasons Docker is so lightweight is because of these layers. When we change a Docker image—for example, update an application to a new version— a new layer gets built. Thus, rather than replacing the whole image or entirely rebuilding, as we may do with a virtual machine, only that layer is added or updated. Now we don't need to distribute a whole new image, just the update, making distributing Docker images faster and simpler.

Every image starts from a base image, for example an Android base image. Or we can also use images of our own as the basis for a new image, for example if we have a base HTTPD image we could use this as the base of all our web application images.

#### How to build a Docker image

Docker images are then built from base images using a set of steps we call instructions. Each instruction creates a new layer in our image. Instructions include actions like:

* Run a command.
* Add a file or directory.
* Create an environment variable.
* What process to run when launching a container from this image.

These instructions are stored in a file called a Dockerfile. Docker reads this Dockerfile when we request a build of an image, executes the instructions, and returns a final image.

#### How does a Docker registry work

The Docker registry is the store for our Docker images. Once we build a Docker image we can push it to a public registry Docker Hub or to our own registry running behind our firewall.

Using the Docker client, we can search for already published images and then pull them down to our Docker host to build containers from them.

Docker Hub provides both public and private storage for images. Public storage is searchable and can be downloaded by anyone. Private storage is excluded from search results and only we and our users can pull images down and use them to build containers. 

#### How does a container work

A container consists of an operating system, user-added files, and meta-data. As we've seen, each container is built from an image. That image tells Docker what the container holds, what process to run when the container is launched, and a variety of other configuration data. The Docker image is read-only. When Docker runs a container from an image, it adds a read-write layer on top of the image in which our application can then run.

Either by using the docker binary or via the API, the Docker client tells the Docker daemon to run a container.

$ sudo docker run -i -t ubuntu /bin/bash

Let's break down this command. The Docker client is launched using the docker binary with the run option telling it to launch a new container. The bare minimum the Docker client needs to tell the Docker daemon to run the container is:

What Docker image to build the container from, here ubuntu, a base Ubuntu image;
The command we want to run inside the container when it is launched, here /bin/bash, to start the Bash shell inside the new container.

when we run this command:


In order, Docker does the following:

1 - Pulls the ubuntu image. Docker checks for the presence of the ubuntu image and, if it doesn't exist locally on the host, then Docker downloads it from Docker Hub. If the image already exists, then Docker uses it for the new container.

2 - Creates a new container. Once Docker has the image, it uses it to create a container.

3 - Allocates a filesystem and mounts a read-write layer. The container is created in the file system and a read-write layer is added to the image.

4 - Allocates a network / bridge interface. Creates a network interface that allows the Docker container to talk to the local host.

5 - Sets up an IP address. Finds and attaches an available IP address from a pool.

6 - Executes a process that we specify. Runs our application.

7 - Captures and provides application output. Connects and logs standard input, outputs and errors for we to see how our application is running.

### Dockerizing a Node.js Web App

The goal of this example is to show how to build your Docker images from a parent image using a Dockerfile.  We will do that by making a simple Node.js hello world web application running on CentOS.

    Create Node.js app

First, create a directory src where all the files would live. Then create a package.json file that describes your app and its dependencies:

```
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
```
Then we need to create an index.js file that defines a web app using the Express.js framework:

```
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
```

We'll look at how to run an application inside a CentOS container using Docker. First we need to build a Docker image of our app.

**Creating a Dockerfile**

Create an empty file called Dockerfile:

    $ touch Dockerfile

Open the Dockerfile in your favorite text editor (I'm an old fashioned guy, I use vi)

Define the parent image we want to use to build your own image on top of. Here, we'll use CentOS (tag: centos6) available on the Docker Hub:

    FROM    centos:centos6 

Since we're building a Node.js app, we have to install Node.js as well as npm on your CentOS image. Node.js is required to run our app and npm to install our app's dependencies defined in package.json. To install the right package for CentOS, we'll use the instructions from the Node.js wiki:

```
# Enable EPEL for Node.js

RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# Install Node.js and npm

RUN     yum install -y npm
```
To bundle our app's source code inside the Docker image, we use the COPY command:
```
# Bundle app source

COPY . /src
```
Install our app dependencies using the npm command:
```
# Install app dependencies

RUN cd /src; npm install
```
Our app binds to port 8080 so we use the EXPOSE command to have it mapped by the docker daemon:

    EXPOSE  8080

Define the command to run our app using CMD which defines our runtime, i.e. node, and the path to our app src/index.js (see the step where we added the source to the container):
```
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
```
**Building our image**

Go to the directory that has our Dockerfile and run the following command to build a Docker image. The -t flag adds a tag to our image so it's easier to find later using the docker images command:

    $ sudo docker build -t <your username>/centos-node-hello .

Our image will now be listed by Docker:
```
$ sudo docker images

# Example

REPOSITORY                          TAG        ID              CREATED
centos                              centos6    539c0211cd76    8 weeks ago
<your username>/centos-node-hello   latest     d64d3505b0d2    2 hours ago
```
**Run the image**

Running our image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port in the container. Run the image we previously built:

    $ sudo docker run -p 49160:8080 -d <your username>/centos-node-hello

To print the output of our app:

```
# Get container ID

$ sudo docker ps

# Print app output

$ sudo docker logs <container id>

# Output
```
Running on http://localhost:8080

**Test**

To test our app, get the port of our app that Docker mapped:
```
$ sudo docker ps

# Example

ID            IMAGE                                     COMMAND              ...   PORTS
ecce33b30ebf  <your username>/centos-node-hello:latest  node /src/index.js         49160->8080
```
In the example above, Docker mapped the 8080 port of the container to 49160.

Is our application working? Lets test it with curl (ok install it with sudo apt-get install curl)
```
$ curl -i localhost:49160

HTTP/1.1 200 OK

X-Powered-By: Express

Content-Type: text/html; charset=utf-8

Content-Length: 12

Date: Sun, 02 Jun 2013 03:53:22 GMT

Connection: keep-alive 

Hello world
```
Yes!!! It's working.

Every application must connect through the port. The code is absolutely isolated from misuse. We implicitly have created an internal virtual net using docker from a internal pool of IPs docker has assumed on instalation. Every new application has a brand new on initiation which is relented on finishing the app. For the external user, well, it is invisible.


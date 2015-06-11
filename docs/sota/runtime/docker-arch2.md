How to obtain security on standalone components using Docker.

To understand how to obtain security using Docker we have to look at its architecture: 


The Docker daemon - the Docker daemon runs on a host machine. The user does not directly interact with the daemon, but instead through the Docker client.

The Docker client - The Docker client, in the form of the docker binary, is the primary user interface to Docker. It accepts commands from the user and communicates back and forth with a Docker daemon.

Inside Docker

To understand Docker , we need to understand its three components:

Docker images - A Docker image is a read-only template. For example, an image could contain an Android minimal operating system with a minimal HTTP demon and a web application installed. Images are used to create Docker containers.  Docker provides a simple way to build new images or update existing images, or we can download Docker images that other people have created

Docker registries - Docker registries hold images. These are public or private stores from which we upload or download images. These can be images we create ourselves or we can use images that others have previously created.

Docker containers - Docker containers are similar to a directory. A Docker container holds everything that is needed for an application to run. Each container is created from a Docker image. Docker containers can be run, started, stopped, moved, and deleted. Each container is an isolated and secure application platform.

Obviously the containers are the base for our security architecture. Each container is absolutely independent and each interface for comunication must be stricly observed. There is no other way to access the container and its content in operation.

How does a Docker image works

We've already seen that Docker images are read-only templates from which Docker containers are launched. Each image consists of a series of layers. Docker makes use of union file systems to combine these layers into a single image. Union file systems allow files and directories of separate file systems, known as branches, to be transparently overlaid, forming a single coherent file system.

One of the reasons Docker is so lightweight is because of these layers. When we change a Docker image—for example, update an application to a new version— a new layer gets built. Thus, rather than replacing the whole image or entirely rebuilding, as we may do with a virtual machine, only that layer is added or updated. Now we don't need to distribute a whole new image, just the update, making distributing Docker images faster and simpler.

Every image starts from a base image, for example an Android base image. Or we can also use images of our own as the basis for a new image, for example if we have a base HTTPD image we could use this as the base of all our web application images.

How to build a Docker image

Docker images are then built from base images using a set of steps we call instructions. Each instruction creates a new layer in our image. Instructions include actions like:

Run a command.
Add a file or directory.
Create an environment variable.
What process to run when launching a container from this image.

These instructions are stored in a file called a Dockerfile. Docker reads this Dockerfile when we request a build of an image, executes the instructions, and returns a final image.

How does a Docker registry work

The Docker registry is the store for our Docker images. Once we build a Docker image we can push it to a public registry Docker Hub or to our own registry running behind our firewall.

Using the Docker client, we can search for already published images and then pull them down to our Docker host to build containers from them.

Docker Hub provides both public and private storage for images. Public storage is searchable and can be downloaded by anyone. Private storage is excluded from search results and only we and our users can pull images down and use them to build containers. 

How does a container work

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

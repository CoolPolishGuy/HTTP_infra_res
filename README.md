# HTTP_infra_res
A repository for httpInfra lab


## First assignement

In this first assignement, the goal is take get familiar with a apache server.
We use images from docker to display web pages.

First of all we need to get some information about our environnement
`ifconfig` we search for our ip4 address. In my case it is the 192.168.0.104

After this we can download 2 things:
  1. is an php image
  2. is bootstrap template that we will display

`docker inspect -it nameImage /bin/bash` this allow us to get inside the image
and see what kind of files it contains. We can find some configurations files in
/etc/apache2/ for example

`docker build -t res/apache_php` this command allows us to build an image that
will use our content which contains files to display the template web site.

`docker run -p 9090:80 res/apache_php` this command runs the images and allows us
to connect on our web brower to the address : 192.168.0.104:9090 and we can see the
display of the web template that we have downloaded.

## Second assignement

`npm init` this is for preparing the json package with informations about our image
`npm install --save chance` this is for saving the dependencies for the chance library

after we can build our image and the run it and it will displays some names inside
the terminal.If we execute the bin/bash command and inspect the /opt/app files it will
contain everything that we had inside our file named src , it has made a copy of everything
from this location to /opt/app.

In a second time we are supposed to create an app that sends information and we must go and
listen from a port and retrieve that information
`npm install --save express`

we can launch the application by using the command node and then the command telnet localhost to connect to
the application and interact with it.

`npm install random-js` we have used this library to generate random information as asked.

`docker build -t res/express_partie2 .`

`docker run -p 9090:3000 res/express_partie2`

et ca run bande de pd

## Thrid assignement

## Fourth assignement

## Fifth assignement

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

`docker inspect -it nameImage /bin/bahs` this allow us to get inside the image
and see what kind of files it contains.

`docker build -t res/apache_php` this command allows us to build an image that
will use our content which contains files to display the template web site.

`docker run -p 9090:80 res/apache_php` this command runs the images and allows us
to connect on our web brower to the address : 192.168.0.104:9090 and we can see the
display of the web template that we have downloaded.

## Second assignement

## Thrid assignement

## Fourth assignement

## Fifth assignement

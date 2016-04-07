# erikaburdon.ca

I've decided to build a bona-fide website! This will be a single-page web app in Angular, hosted on its own domain that uses AWS services such as: S3, Route53, IAM, Elastic Beanstalk. I hope to use it as part of my portfolio - it will link to another things I've done, as well as being my live experiment grounds for... well anything, really.

## How is this different from that other site you've got?

[web.uvic.ca/~eburdon/](http://web.uvic.ca/~eburdon/)  is a purely static webpage, hosted by the University of Victoria within the space they give all students. That page is managed via FTP, and uses only HTML, CSS, and Javascript.

With [erikaburdon.ca](http://erikaburdon.ca), I have a front and back end components, each eventually complete with numerous pages, endpoints, and test suites. In time I hope to also incorporate little pieces of Haskell, Amazon Lambda, and other neat-o things.



## Technology stack

* Yeoman (Yo + Grunt + Bower)

* AngularJS, Javascript

* Foundation for Apps, Boostrap... I'm trying them all, really.


## Contributing Code

This is a personal portfolio space, so contributions won't be merged in. Sorry about that.


## Run local development

> grunt serve


## Deploying

I've just written a how-to here because I keep forgetting.

> grunt build

* This will run all neccessary grunt tasks to prepare the application for deployment.

* Copy files in dest to S3


Cheers!

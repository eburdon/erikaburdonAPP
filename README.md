# erikaburdon.ca

I've decided to build a bona-fide website! This will be a single-page web app in Angular, hosted on its own domain that uses AWS services such as: S3, Route53, IAM, Elastic Beanstalk. I hope to use it as part of my portfolio - it will link to another things I've done, as well as being my live experiment grounds for... well anything, really.

## How is this different from that other site you've got?

[web.uvic.ca/~eburdon/](http://web.uvic.ca/~eburdon/)  is a purely static webpage, hosted by the University of Victoria within the space they give all students. That page is managed via FTP, and uses only HTML, CSS, and Javascript.

With [erikaburdon.ca](http://erikaburdon.ca), I have a front and back end components, each eventually complete with numerous pages, endpoints, and test suites. In time I hope to also incorporate little pieces of Haskell, Amazon Lambda, and other neat-o things.



## Technology stack

* Yeoman (Yo + Grunt + Bower)

* AngularJS, JavaScript

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

## Feature notes

### Facebook Analysis:

Critical note: We understand the importance of privacy. Your messenger data is NOT SAVED to our system - it is used in-memory for processing, then discarded. Similarly, your final image is not saved unless you give us explicit permission to do so.

How does this work?

Your files are uploaded to AWS S3 using a restricted public access key. The Lambda processing should automatically delete any files you upload and create in the analysis process, but as a backup, a 24-hour expiry limit on the bucket has also been implemented.

# erikaburdon.ca

I've decided to build a bona-fide website! This will be a single-page Angular web app, hosted on its own domain that uses AWS services such as: S3, Route53, IAM, Elastic Beanstalk. I hope to use it as part of my portfolio - it will link to another things I've done, as well as being my live experiment grounds for... well anything, really.

## How is this different from that other site you've got?

[web.uvic.ca/~eburdon/](http://web.uvic.ca/~eburdon/)  is a purely static webpage, hosted by the University of Victoria within the space they give all students. That page is managed via FTP, and uses only HTML, CSS, and Javascript.

With [erikaburdon.ca](http://erikaburdon.ca) , I hope to build a backend API as well to have my own server code, as well as expand on the front end by using, for example, Foundation for Apps. Eventually, I hope to incorporate little pieces of Haskell, Amazon Lambda, and other neat-o things.



## Technology stack

* Yeoman (Yo + Grunt + Bower)

* AngularJS, Javascript


## Contributing Code

This is a personal portfolio space, but if you're wanting to contribute or try something new, here are the steps:

* Contributions are made by forking the development branch and making pull requests

* Branch names should start with your last name, and two/three word summary of the feature

> git checkout -b LASTNAME_ONE_TWO_THREE

* Commits should include your last name, as well as a description of the change

> git commit -m "LASTNAME I added a puppy gif to the contact form"

* Branch scope should be limited to one feature

* Code reviews will be done within the week


## Run local development

> grunt serve


## Deploying

> grunt build

* This will run all neccessary grunt tasks to prepare the application for deployment.

* Copy files in dest to S3


Cheers!

# erikaburdon.ca
Personal page/portfolio hosted on my own domain. Built as a single page angular web app that uses AWS services.

This won't strictly be a professional site, it'll also be my experimental grounds on a live website. I hope to move forward with learning Amazon Lambda and other technologies, as well as try to include other languages and tools such as Haskell.


## Technology stack
* Yeoman (Yo + Grunt + Bower)
* AngularJS, Javascript

## Contributing Code

This is a both a personal project and page, but if you're wanting to contribute, here's the steps:
* Contributions are made by forking the development branch and making pull requests
* Branch names should start with your last name, and two/three word summary of the feature
* > git checkout -b LASTNAME_ONE_TWO_THREE
* Commits should include your last name, as well as a description of the change
* > git commit -m "LASTNAME I added a puppy gif to the contact form"
* Branche scope should be limited to one feature
* Code reviews will be done within the week
* 
## Run local development
> grunt serve
* There is no backend at the moment, but that may change. When that happens, front end functionality will be limited unless the API is also running.
* 
## Deploying
> grunt
* This will run all neccessary grunt tasks to prepare the application for deployment.
* Copy files in dest to S3


Cheers!

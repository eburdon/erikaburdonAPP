# erikaburdon.ca

This is my personal website, built mostly to develop my professional brand and just to have a live, general, public-facing playground. I mostly use it to explore to technologies, ideas, or AWS services.

I also maintain a free blog on GitHub pages at [eburdon.github.io](http://eburdon.github.io).

## Technology stack

* Yeoman (Yo + Grunt + Bower)

* AngularJS, JavaScript

* Foundation for Apps

## Other tech

* Haskell

* AWS Lambda, CloudFront, S3, ...


## Contributing Code

This is a personal portfolio space, so contributions won't be merged in. Sorry about that.


## Personal Notes

_... for a profoundly forgetful person (unless written down!)_

### Run local development

> grunt serve


### Deploying

> grunt build

* This will run all neccessary grunt tasks to prepare the application for deployment.

* Copy files in dest to S3

## Feature notes

### Facebook Analysis:

Critical note: We understand the importance of privacy. Your messenger data is NOT SAVED to our system - it is used in-memory for processing, then discarded. Similarly, your final image is not saved unless you give us explicit permission to do so.

How does this work?

Your files are uploaded to AWS S3 using a restricted public access key. The Lambda processing should automatically delete any files you upload and create in the analysis process, but as a backup, a 24-hour expiry limit on the bucket has also been implemented.

(function() {

    'use strict';

    angular
        .module('facebook')
        .controller('EbFacebookController', EbFacebookController);

        EbFacebookController.$inject = ['settings'];

        function EbFacebookController(settings) {

            var vm = this;

            vm.uploadFiles = uploadFiles;

            activate();

            ////////

            function activate() {
                // scroll to top of page on load
                $(document).ready(function(){
                    $(this).scrollTop(0);
                });
            }

            // TODO: Break out into mult functions
            // for multiple files:
            function uploadFiles (files) {

                if (files && files.length) {
                
                    for (var i = 0; i < files.length; i++) {
                        console.log("Starting upload...");

                        var filename = files[i].name;
                        var filesize = files[i].size;

                        if (Math.round(filesize) > 500585760) {
                            // TODO: Expose error to user
                            console.log("File must be less than 500MB. Sorry about that.");
                            return;
                        }

                        if (filename !== 'messages.htm' ) {
                             // TODO: Expose error to user
                            console.log("Only processing of messages.htm is supported right now.");
                            return;
                        }

                        // random number between 0 and 10000
                        var rand = Math.floor((Math.random() * 1000) + 0);

                        // randomize the filename
                        filename = rand.toString() + "_" + filename;

                        // log AWS in browser
                        AWS.config.logger = console.log

                        AWS.config.region = settings.PUBLIC_FACEBOOK_REGION;

                        AWS.config.update({ accessKeyId: settings.PUBLIC_FACEBOOK_ANALYSIS_ACCESS_KEY, secretAccessKey: settings.PUBLIC_FACEBOOK_ANALYSIS_SECRET_KEY });
                        
                        var bucket = new AWS.S3({ params: { Bucket:  settings.PUBLIC_FACEBOOK_BUCKET, maxRetries: 3}, httpOptions: { timeout: 360000 } });

      
                        var params = {
                            Bucket :  settings.PUBLIC_FACEBOOK_BUCKET,
                            Key: filename,
                            ContentType: files[i].type,
                            Body: files[i],
                            ServerSideEncryption: "AES256"
                        }

                        var options = {
                            // owner of the bucket (e.g., erikaburdon) has full control
                            ACL: "bucket-owner-full-control"
                        }

                        bucket.upload(params, options, function(err, data) {
                            if (err) {
                                // TODO: expose to user
                                console.log(err);
                                return;
                            } else {
                                // successful upload
                                // TODO: expose to user
                                console.log("Upload success!");
                            }
                        });
                    }
              }
            }
        }
})();

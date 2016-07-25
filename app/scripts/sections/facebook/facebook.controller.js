(function() {

    'use strict';

    angular
        .module('facebook')
        .controller('EbFacebookController', EbFacebookController);

        EbFacebookController.$inject = ['settings'];

        function EbFacebookController(settings) {

            var vm = this;

            vm.uploadFiles = uploadFiles;

            vm.dropboxMessage = "Loading..."
            vm.outboxMessage = "Process not started."

            vm.exposeError = exposeError;

            activate();

            ////////

            function activate() {
                // scroll to top of page on load
                $(document).ready(function(){
                    $(this).scrollTop(0);
                });

                vm.dropboxMessage = "Drop messages.htm here to start."
            }

            function exposeError() {
                console.log("EXPOSED!");
                vm.dropboxMessage = "ERROR!"
            }

            function uploadFiles (files) {

                if (files && files.length) {
                
                    for (var i = 0; i < files.length; i++) {
                        vm.dropboxMessage = "Uploading..."

                        var filename = files[i].name;
                        var filesize = files[i].size;

                        if (Math.round(filesize) > 500585760) {
                            vm.dropboxMessage = "File must be less than 500MB. Sorry about that. Try again, or contact erikaeburdon@gmail.com"
                            return;
                        }

                        if (filename !== 'messages.htm' ) {
                            vm.dropboxMessage = "This feature can only process a `messages.htm' file. Try again, or contact erikaeburdon@gmail.com"
                            return;
                        }

                        vm.outboxMessage = "Loading..."

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
                                console.log(err);
                                console.log("Try again, or contact erikaeburdon@gmail.com");
                                return;
                            } else {
                                console.log("File upload success!");
                            }
                        });
                    }
              }
            }
        }
})();

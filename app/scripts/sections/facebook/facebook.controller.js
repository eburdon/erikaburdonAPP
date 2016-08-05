(function() {

    'use strict';

    angular
        .module('facebook')
        .controller('EbFacebookController', EbFacebookController);

        EbFacebookController.$inject = ['settings', '$http', '$scope'];

        function EbFacebookController(settings, $http, $scope) {

            var vm = this;

            vm.uploadFiles = uploadFiles;
            vm.tryImage = tryImage;

            $scope.dropboxMessage = "Drop messages.htm here to start."
            $scope.outboxMessage = "Ready when you are, Captain.";

            activate();

            ////////

            function activate() {
                // scroll to top of page on load
                $(document).ready(function(){
                    $(this).scrollTop(0);
                });
            }

            // remove '.htm' suffix; add random number prefix
            function formatFileName(filename) {
                var rand = Math.floor((Math.random() * 1000) + 0);
                filename = rand.toString() + "_" + filename;

                var splitName = filename.split(".htm")
                filename = splitName[0]

                return filename
            }

            function uploadFiles (files) {

                if (files && files.length) {
                
                    for (var i = 0; i < files.length; i++) {
                        $scope.dropboxMessage = "Uploading file to S3..."
                        console.log($scope.dropboxMessage);

                        var filesize = files[i].size;
                        var filename = files[i].name;

                        if (Math.round(filesize) > 10485760) {
                            $scope.dropboxMessage = "File must be less than 10MB. Sorry about that. Try again, or contact erikaeburdon@gmail.com";
                            console.log($scope.dropboxMessage);
                            return;
                        }

                        if (filename !== 'messages.htm' ) {
                            $scope.dropboxMessage = "This feature can only process a 'messages.htm' file. Rename and try again, or contact erikaeburdon@gmail.com";
                            console.log($scope.dropboxMessage);
                            return;
                        }

                        filename = formatFileName(files[i].name);

                        vm.outboxMessage = "Waiting for file data."

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
                                $scope.dropboxMessage = err + " Try again, or contact erikaeburdon@gmail.com";
                                return;
                            } else {
                                $scope.dropboxMessage = "File Uploaded! Processing data...";
                                triggerPreProcessing(params.Key);
                            }
                        });
                    }
                }
            }

            function triggerPreProcessing(filename) {
                var request = {
                    method: 'GET',
                    url: settings.BOTTLE_URL + "/start_job/" + filename,
                    headers: {
                        'Content-Type' : undefined
                    }, 
                    data: {}
                }

                console.log("Firing on...: " + settings.BOTTLE_URL + "/start_job/" + filename);

                $scope.filename = filename;

                // trigger async call for file processing
                $http(request)
                    .then(function(response) {
                        $scope.dropboxMessage = "Finished processing! Generating image (see below)."
                        $scope.outboxMessage = "Generating Image..."
                        getImage($scope.filename)
                    }, function(err) {
                        $scope.dropboxMessage = err + " Try again, or contact erikaeburdon@gmail.com";
                        $scope.outboxMessage = "Error processing data."
                    })
            }


            function getImage(filename) {

                console.log(filename);

                $scope.imageURL = settings.BOTTLE_URL + "/get_job/" + filename;

                var request = {
                    method: 'GET',
                    url: $scope.imageURL,
                    headers: {
                    }, 
                    data: {}
                }

                console.log('Sending image request...')

                $http(request)
                    .then(function(response) {
                        console.log(response)
                        if (response.statusText == "OK") {
                            $scope.outboxMessage = "";
                            $scope.outboxImage = $scope.imageURL;
                            $scope.showTryAgainButton = false;
                        }
                    }, function(err) {
                        $scope.outboxMessage = "Looks like the image isn't ready yet! Press the button in a minute or two to try loading again."
                        $scope.showTryAgainButton = true;
                    })
            }

            function tryImage() {
                console.log('Trying image again with: ', $scope.filename);
                getImage($scope.filename);
            }
        }
})();

/**
 * Created by coolc on 2016-05-07.
 */
(function(annyang) {
    'use strict';

    function CameraService($http) {

        var service = {};
        service.show = null;
        var src = "test";

        function userMedia(){
            return navigator.getUserMedia = navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia || null;

        }

        service.generateCamera = function() {
            console.log("aa");

            if( userMedia() ) {
                var videoPlaying = false;
                var constraints = {
                    video: true,
                    audio: false
                };
               var video = document.getElementById('v');

                var media = navigator.getUserMedia(constraints, function (stream) {

                    // URL Object is different in WebKit
                    var url = window.URL || window.webkitURL;

                    // create the url and set the source of the video element
                    video.src = url ? url.createObjectURL(stream) : stream;

                    // Start the video
                    video.play();
                    videoPlaying = true;
                }, function (error) {
                    console.log("ERROR");
                    console.log(error);
                });
            }
            return media;
        };

        return service;
    }

    angular.module('SmartMirror')
        .factory('CameraService', CameraService);

}(window.annyang));

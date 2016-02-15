(function(annyang) {
    'use strict';

    function YoutubeService($http) {
        var service = {};
        service.youtube = null;

        service.getYoutube = function(search_term){

          return $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+search_term+"&key="+YOUTUBE_API_KEY).
              then(function(response) {
                  service.youtube = response.data;
                  console.log(service.youtube);
                  return service.youtube;
              });
        };

        service.getVideoId = function(){
          var videoId;
          if(service.youtube.items.length > 0 ){
            videoId = service.youtube.items[0].id.videoId;
            return videoId;
          }
          return "M7lc1UVf-VE";
        };
        return service;
    }

    angular.module('SmartMirror')
        .factory('YoutubeService', YoutubeService);

}(window.annyang));

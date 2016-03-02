(function(annyang) {
    'use strict';

    function YoutubeService($http) {
        var service = {};
        service.youtube = null;

        service.getYoutube = function(search_term){
          return $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+search_term+"&key="+YOUTUBE_API_KEY + "&maxResults=30&&type=playlist").
              then(function(response) {
                  service.youtube = response.data;
                  console.log(service.youtube);
                  return service.youtube;
              });
        };

        service.getVideoId = function(){
          var videoId;
          if(service.youtube.items.length > 0 ){
            var r = Math.floor((Math.random() * service.youtube.items.length) + 1);
            videoId = service.youtube.items[r].id.videoId;
            return videoId;
          }
          //return default youtube
          return "M7lc1UVf-VE";
        };

        service.getPlaylistId = function(){
          var playlitId;
          if(service.youtube.items.length > 0 ){
            var r = Math.floor((Math.random() * service.youtube.items.length) + 1);
            playlitId = service.youtube.items[r].id.playlistId;
            return playlitId;
          }
          //return default youtube
          return "M7lc1UVf-VE";
        };
        
        return service;
    }

    angular.module('SmartMirror')
        .factory('YoutubeService', YoutubeService);

}(window.annyang));

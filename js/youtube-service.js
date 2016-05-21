(function(annyang) {
    'use strict';

    function YoutubeService($http) {
        var service = {};
        service.youtube = null;
        var YOUTUBE_API_KEY = 'AIzaSyDs2WRLjm3Cn1V91AYPXYfguwqOyLVovxo';

        service.getYoutube = function(search_term,type){
          return $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+search_term+"&key="+YOUTUBE_API_KEY + "&maxResults=30&type="+type).
              then(function(response) {
                  service.youtube = response.data;
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
          return null;
        };

        service.getPlaylistId = function(){
          var playlistId;
          if(service.youtube.items.length > 0 ){
            playlistId = service.youtube.items[0].id.playlistId;
            return playlistId;
          }
          //return default youtube
          return null;
        }

        return service;
    }

    angular.module('SmartMirror')
        .factory('YoutubeService', YoutubeService);

}(window.annyang));

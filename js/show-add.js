/**
 * Created by coolc on 2016-05-03.
 */
(function(annyang) {
    'use strict';

    function ShowAddService($http) {
        var service = {};
        service.youtube = null;
        var YOUTUBE_API_KEY = 'AIzaSyDs2WRLjm3Cn1V91AYPXYfguwqOyLVovxo';

        service.getYoutube = function(){
            //return $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&videoseries?list=UUFQMG01CZHj5-XrcpKuLarg&key="+YOUTUBE_API_KEY + "&maxResults=30&type="+type).
            return $http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=UUFQMG01CZHj5-XrcpKuLarg&key="+YOUTUBE_API_KEY+"&type=playlist").
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
            return null;
        };

        service.getPlaylistId = function(){
            var playlistId;
            if(service.youtube.items.length > 0 ){
                playlistId = service.youtube.items[0].playlistId;
                return playlistId;
            }
            //return default youtube
            return null;
        };

        return service;
    }

    angular.module('SmartMirror')
        .factory('ShowAddService', ShowAddService);

}(window.annyang));

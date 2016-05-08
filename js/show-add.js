/**
 * Created by coolc on 2016-05-03.
 */
(function(annyang) {
    'use strict';

    function ShowAddService($http) {
        var service = {};
        service.show = null;

        service.generateAdd = function() {
            return [{image : "image/a.jpg"},
                {image : "image/b.jpg"},
                {image : "image/c.jpg"}];
        };

        return service;
    }

    angular.module('SmartMirror')
        .factory('ShowAddService', ShowAddService);

}(window.annyang));

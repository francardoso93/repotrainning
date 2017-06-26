/* 
Author: Francisco F. Cardoso
Objective: This service has the purpose of making requests for youtube API
*/
angular.module("videoapp").factory("youtubeVideoService", function ($http) {
    var service = {};

    var videosList = [];
    var apiPrefix = 'https://www.googleapis.com/youtube/v3/search?'
    var myKey = 'AIzaSyBEMSXL57odvLaAG-9Fc-RuHBqjZq4CG9Q';
    var channeldId = 'UCLp2KVhSvZKQ3gsqXU8uBEA';
    var maxResults = 30;
    var fields = 'items(id,snippet(title,description,thumbnails,publishedAt))';
    var part = 'snippet'
    var youtubeApiUrl = apiPrefix + 'key=' + myKey + '&channelId=' + channeldId + '&part=snippet,id&order=date&maxResults=' + maxResults + '&fields=' + fields + '&part=' + part;

    /* 
    Summary: This method will return all from an youtube channel
    Paramethers: -
    Return: -
    */
    var requestYoutubeVideos = function () {
        return $http.get(youtubeApiUrl);
    };


    service.requestYoutubeVideos = requestYoutubeVideos;
    return service;
});
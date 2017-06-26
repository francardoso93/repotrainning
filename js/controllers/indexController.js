/* 
Author: Francisco F. Cardoso
Objective: This controller has the purpose of handling needs which are generic for all parts of the system
*/
angular.module("videoapp").controller("indexController", function ($scope, youtubeVideoService, $sce) {
    /* 
    Summary: This method will show a bootstrap modal 
    Paramethers: 
        -Id: Id associated with the html element 
    Return: -
    */
    $scope.showModal = function (id) {
        $("#" + id).show();
    };

    /* 
   Summary: This method will hide a bootstrap modal 
   Paramethers: 
       -Id: Id associated with the html element 
   Return: -
   */
    $scope.closeModal = function (id) {
        $("#" + id).hide();
    }

    $scope.search;

    /* 
   Summary: This method will filter video lists based on a search request
   Paramethers: 
       -Search: Text to be searched
   Return: -
   */
    $scope.filterList = function (search) {
        if (window.location.hash.substr(1) == '/home')
            window.location.href = "#/videos"
        $scope.search = search;
    };

    /* 
   Summary: This method will clean search filters when switching between pages
   Paramethers: -
   Return: -
   */
    // $(window).on('hashchange', function () {
    //     if (window.location.hash.substr(1) != '/videos') {
    //         $scope.search = '';
    //         document.getElementById('search').value = '';
    //     }        
    // });

    var videoPrefix = 'http://www.youtube.com/embed/'

    /* 
   Summary: This method will call a service which returns videos from youtube API
   Paramethers: -
   Return: -
   */
    youtubeVideoService.requestYoutubeVideos().then(function (res) {
        console.log(res);
        $scope.videosList = res.data.items;
        selectVideo(res.data.items[0]);

    });

    /* 
    Summary: This method will change the video displayed for user to watch
    Paramethers: 
        -VideoItem: video chosen by the user
    Return: -
    */
    var selectVideo = function (videoItem) {
        $scope.selectedVideo = videoItem;
        $scope.selectedVideoUrl = videoPrefix + videoItem.id.videoId;
        $scope.selectedVideoUrl = $sce.trustAsResourceUrl($scope.selectedVideoUrl);
    }

    $scope.selectVideo = selectVideo;

});
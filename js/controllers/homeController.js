/* 
Author: Francisco F. Cardoso
Objective: This controller has the purpose of handling the specific needs of the page 'Home' 
*/
angular.module("videoapp").controller("homeController", function ($scope, youtubeVideoService, $sce) {
    $scope.amountOfVideos = 5;


    /* 
   Summary: This method will expand the limit of shown videos in the '+ Videos' section
   Paramethers: -    
   Return: -
   */
    $scope.loadMoreVideosClick = function () {
        $scope.amountOfVideos += 5;
    }
});
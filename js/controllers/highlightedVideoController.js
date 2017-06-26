/* 
Author: Francisco F. Cardoso
Objective: This controller has the purpose of handling the specific needs of the page 'Destaques' 
*/

angular.module("videoapp").controller("highlightedVideoController", function ($scope, columnOrganizatorService) {
    /* 
    Summary: This method will find the highlighted videos, filter them, and call a service which divides the list into 3 different sections
    Paramethers: 
        -ColumnPosition: which list section (0, 1 or 2) is the column requesting
        -VideoList: full list of videos acquired 
    Return: A piece of the videoList array
    */
    $scope.getColumn = function (columnPosition, videoList) {
        if (videoList) {
            videoList = videoList.slice(0, 9) //TODO: Replace this row for showing top 9 best rated videos
            return columnOrganizatorService.doColumnOrganization(columnPosition, videoList);
        }
    };
});
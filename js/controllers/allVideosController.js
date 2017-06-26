/* 
Summary: This controller has the purpose of handling the specific needs of the page 'Videos' 
Author: Francisco F. Cardoso
*/

angular.module("videoapp").controller("allVideosController", function ($scope, columnOrganizatorService) {
    /* 
    Summary: This method will call a service which divides the list into 3 different sections
    Paramethers: 
        -ColumnPosition: which list section (0, 1 or 2) is the column requesting
        -VideoList: full list of videos acquired 
    Return: A piece of the videoList array
    */
    $scope.getColumn = function (columnPosition, videoList) {
        if (videoList) {
            return columnOrganizatorService.doColumnOrganization(columnPosition, videoList);
        }
    };
});
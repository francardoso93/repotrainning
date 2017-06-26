/* 
Author: Francisco F. Cardoso
Objective: This service has the purpose of organizing video columns content
*/
angular.module("videoapp").factory("columnOrganizatorService", function ($http) {
    var service = {};
     /* 
     Summary: This method will divide the list into 3 different sections
     Paramethers: 
        -ColumnPosition: which list section (0, 1 or 2) is the column requesting
        -VideoList: full list of videos acquired 
     Return: A piece of the videoList array
    */
    service.doColumnOrganization = function (columnPosition, videoList) {
        var columnVideoList = [];

        var chunk = videoList.length / 3;
        for (var i = 0, j = videoList.length; i < j; i += chunk) {
            columnVideoList.push(videoList.slice(i, i + chunk));
        }

        return columnVideoList[columnPosition];
    }

    return service;
});
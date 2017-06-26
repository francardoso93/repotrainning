angular.module("videoapp").config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        // .when("/home", {
        //     templateUrl: "view/home.html",
        // })
        .when("/", {
            templateUrl: "view/home.html",
        })
        //    .when("/highlights", {
        //        templateUrl: "view/highlightedVideos.html",
        //    })
        .when("/searchResults", {
            templateUrl: "view/searchResultsVideos.html",
        })
        .when("/queroajudar", {
            templateUrl: "view/donorRegister.html",             
        })
        .when("/receberprotese", {
            templateUrl: "view/patientRegister.html",
        })
        .when("/obrigado", {
            templateUrl: "view/thankYou.html",
        })
        .when("/quemsomos", {
            templateUrl: "view/whoweare.html",
        })
        .when("/colaboradores", {
            templateUrl: "view/helpers.html",
        })
        .when("/videos", {
            templateUrl: "view/videos.html",
        })
        .otherwise({ redirectTo: '/home' });
});

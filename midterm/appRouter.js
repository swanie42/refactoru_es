angular.module('gbApp').config(myRouter);


  myRouter.$inject = ['$routeProvider'];


function myRouter($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html'
        })
        .when('/jobs', {
            templateUrl: '/templates/jobs.html',
        })
        .when('/reports', {
            templateUrl: '/templates/reports.html'
        })
        .when('/jobDetails', {
            templateUrl: '/templates/jobDetails.html'
        })
        .otherwise({
            redirectTo: '/index.html'
        })
}

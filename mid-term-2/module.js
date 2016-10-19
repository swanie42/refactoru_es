angular.module('gbApp',['ngRoute']).config(myRouter);


myRouter.$inject = ['$routeProvider'];


function myRouter($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html'
        })
        .when('/jobs', {
            templateUrl: '/templates/jobs.html'
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

//angular.module('Name', [requires], configFn)The angula­r.m­odule is a global place for creating and regist­ering Angular modules. Requires argument always creates a new module.

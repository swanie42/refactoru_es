angular.module('CremeFraiche', ['ngRoute'])
    .controller("SoFreshAndSoCremeCreme", cremeController);


angular.module('CremeFraiche')
    .config(myRouter);

myRouter.$inject = ['$routeProvider'];

function myRouter($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html'
        })
        .when('/origins', {
            templateUrl: '/templates/origins.html'
        })
        .when('/menu', {
            templateUrl: '/templates/menu.html'
        })
}   


function cremeController() {
    var cCtrl = this;

    cCtrl.greeting = "Welcome to our coffee shop!";
}    
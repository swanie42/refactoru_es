angular.module("Superheroes", [])
    .controller("TheAvengers", ['$scope',avengersController]);

function avengersController($scope){
  $scope.title = "Every team needs a captain";
  $scope.heroes = ['Captain America',
                    'Ironman',
                    'Captain Obvious',
                    'Thor'];
}
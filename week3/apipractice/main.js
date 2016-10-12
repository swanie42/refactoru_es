angular.module('pokeapp',[])
    .controller('PokeController', pokeController);

pokeController.$inject = ['$http'];

// Using this form makes this order-dependent, so things that refer to pokeController must be
// declared before and functions that it uses should be defined before
// var pokeController = function($http) { ...}
// Using this form, the function is not order dependent
function pokeController($http, pCtrl) {
    var pCtrl = this;
    pCtrl.text = "Hello there";

    getPokemon($http, pCtrl);

}

function getPokemon ($http, pCtrl) {
    $http.get('http://pokeapi.co/api/v1/pokemon/139')
    .then(function(res, status){
      pCtrl.myData = res.data;
        console.log("Success:",res);
        //get the name, height, weight
    }, function(res, status) {
        console.log("Failure:",status);
    });

}

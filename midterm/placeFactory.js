angular.module('gbApp')
    .factory("PlaceFactory", ['$http', function($http) {
        return {
          searchPlace : function(search){
            return $http({
              method : "GET",
              url : "https://maps.googleapis.com/maps/api/place/autocomplete/json",
              params : {
              key : "AIzaSyDUc_Yr0rbxPpJH9fF3cbj5Ao1VxQSAi4E",
              input : search
              }
            })
          }




        }

      }]);
// "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"

      // var pFacto = {};
      //
      // pFacto.searchPlace = function(search){
      //   $http.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+search+"&key=AIzaSyDUc_Yr0rbxPpJH9fF3cbj5Ao1VxQSAi4E")
      //   .success(function(data){
      //     // console.log(data);
      //
      //   pFacto.predictions = data.predictions;

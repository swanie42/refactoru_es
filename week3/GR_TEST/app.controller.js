
angular.module('mapApp')
    .controller('mainCtrl', markerCtrl);

markerCtrl.$inject = ['$timeout']

function markerCtrl ($timeout){
    console.log('goldrush');
    var marker = this; 
    marker.greeting = 'This is Gold Rush';
}

$scope.addMarker = function (lat, lng, isUserLocation) {

    if (typeof(isUserLocation) === undefined || isUserLocation === false) 
        var icon = "img/marker-map.png";

    $scope.markers.push({
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        icon: icon
    });
}

$scope.populateMarkers = function(locations) {
    for (var i = 0; i < locations.length; i++) {
        $scope.addMarker(locations[i].Latitude, locations[i].Longitude);
    }
}
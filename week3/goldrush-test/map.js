//default map position and zoom
//Location: RefactorU
//
//Old way to access our map object
//window.mapInit = function() {
		//var mapDiv = document.getElementById('map');
		//mapDiv.style.width = window.innerWidth;
	//	mapDiv.style.height = window.innerHeight;

   // 	var map = new google.maps.Map(mapDiv, {
   // 		center: {lat: 40.0169753, lng: -105.2222925},
     // 		zoom: 12
    //	});
    //	return map;
//}

var app = angular.module('goldRush', []);

//injecting in $window so we can initialize our map like the old above commented out version
app.factory("mapFactory", ["$window", function($window) {
	var map = $window.mapInit = function() {
		var mapDiv = document.getElementById("map");
		var map = new google.maps.Map(mapDiv, {		
			center: {lat: 40.0169753, lng: -105.2222925},
			zoom: 12
		});
		return map;
	};	
	return {
		map: map	
	};
}]);


app.controller('mapControl', ['$scope', "mapFactory", function($scope, mapFactory) {
	//array to hold markers
	var markers = [];
	//variable to identify markers
	var markerID = 0;
	//reference to our map from the mapFactory factory
	var map = mapFactory.map(); 
	console.log(map);

	var convertXYToLatLng = function(x,y) {
		//get top left point on the map and then offset from there	
		var northEast = map.getBounds().getNorthEast();
		var southWest = map.getBounds().getSouthWest();
		var proj = map.getProjection();
		var tRight = proj.fromLatLngToPoint(northEast);
		var bLeft = proj.fromLatLngToPoint(southWest);
		var scale = 1 << map.getZoom();
		var newLatLng = proj.fromPointToLatLng(new google.maps.Point(x / scale + bLeft.x, y / scale + tRight.y));
		return newLatLng; 	
	}

	// TODO: Remove Marker function
	// Possible way to remove our markers
	// Need to somehow pass in the clicked marker title property into remove property and then 
	// set that index to null to delete the object.
	
	//TODO: finish writing this function 
	var showMarkersOnMap = function() {
		var markerLength = markers.length;
	}	
	//TODO: finish writing this function
	var showMapMarkers = function() {
		showMarkersOnMap();
	}
	//TODO: finish writing this function
	var clearAllMarkers = function() {
		showMarkersOnMap(null);	
	}


	//creates a marker object on click
	$scope.createMarker = function($event) {
		//console.log($event);	
		var x = $event.clientX;
		var y = $event.clientY;
		//first convert x and y coordinate to lat and longitude coordinates
		var latLng = convertXYToLatLng(x, y);
		var marker = new google.maps.Marker({
			position:latLng,
			map: map,
			title: "mapPoint" + markerID++
		});
		console.log(marker);
		//push the created marker into markers array
		markers.push(marker);
		//console.log("map clicked");
		//console.log(markers);
	}			

	//TODO: finish writing this function
	$scope.removeMarker = function($event) {
		console.log($event);	

	}
	
}]);
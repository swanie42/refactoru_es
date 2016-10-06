
angular.module('goldRush', [])
    .controller('goldCtrl', function() {
        var gold = this;
        console.log('Gold Found');

        gold.markers = [];
        gold.addMarker = function($event) {
            console.log('Marker Event', $event);
            gold.markers.push({
                left: $event.pageX + 'px',
                top: $event.pageY + 'px'
            });
        };

        gold.removeMarker = function($event, $index) {
            console.log("Marker", $index);
            gold.markers.splice($index, 1);
        };
    });
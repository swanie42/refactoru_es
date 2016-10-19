// ---------SETTING UP ROUTE SERVICE---------
angular.module('gbApp')
  .factory("zoneFacto", zoneFactory)



// ---------CREATING THE FACTORY FOR ZONECONTROLLER---------
function zoneFactory() {
  return {
    zones: [
        {
          img:"https://s-media-cache-ak0.pinimg.com/originals/bc/6f/27/bc6f2743296b0fdc75322f56ef5bf3bd.jpg"
          ,name: "Zone 1"
          ,city: "Appleton"
          ,state: "WI"
          ,margin: 86
          ,complete: 20
          ,zones:[]
        },
    ],
  }
}

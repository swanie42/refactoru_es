// ---------SETTING UP ROUTE SERVICE---------
angular.module('gbApp')
  .factory("zoneFacto", zoneFactory)



// ---------CREATING THE FACTORY FOR ZONECONTROLLER---------
function zoneFactory() {
  return {
    zones: [
        {
          img:"http://animalnewyork.com/wp-content/uploads/domino-sugar-factory-continued.jpg"
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

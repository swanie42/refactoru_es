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
          ,estSquareFeet: 300000
          ,state: "WI"
          ,margin: 35
          ,complete: 80
        },
        {
          img:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Pepsi_Center,_Denver.jpg"
          ,name: "Zone 2"
          ,estSquareFeet: 300000
          ,state: "CO"
          ,margin: 22
          ,complete: 100
        },
        {
          img:"https://3dprint.com/wp-content/uploads/2016/01/strykerhq.png"
          ,name: "Zone 3"
          ,estSquareFeet: 300000
          ,state: "AZ"
          ,margin: 22
          ,complete: 100
        },
    ],
  }
}

// ---------SETTING UP ROUTE SERVICE---------
angular.module('gbApp')
  .factory("zoneFacto", zoneFactory)

// ---------CREATING THE FACTORY FOR ZONECONTROLLER---------
function zoneFactory() {
  return {
    zones: [
        {
          img:"http://animalnewyork.com/wp-content/uploads/domino-sugar-factory-continued.jpg"
          ,name: "Domino Sugar"
          ,estSquareFeet: 300000
          ,state: "WI"
          ,margin: 35
          ,complete: 80
        },
        {
          img:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Pepsi_Center,_Denver.jpg"
          ,name: "Pepsi Center"
          ,estSquareFeet: 300000
          ,state: "CO"
          ,margin: 22
          ,complete: 100
        },
        {
          img:"https://3dprint.com/wp-content/uploads/2016/01/strykerhq.png"
          ,name: "Printer Facility"
          ,estSquareFeet: 300000
          ,state: "AZ"
          ,margin: 22
          ,complete: 100
        },
        {
          img:"http://forteandtablada.com/site/wp-content/uploads/2016/04/STAFA-900x600.jpg"
          ,name: "St. Amant HS"
          ,estSquareFeet: 300000
          ,state: "LA"
          ,margin: 22
          ,complete: 100
        },
        {
          img:"http://www.neumannsmith.com/wp-content/uploads/2015/06/WSU-STUDENT-CENTER-JD-9.jpg"
          ,name: "Student Center"
          ,estSquareFeet: 300000
          ,state: "MI"
          ,margin: 22
          ,complete: 100
        },
    ],
  }
}

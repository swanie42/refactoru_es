// ---------SETTING UP ROUTE SERVICE---------
angular.module('gbApp')
  .factory("jobFacto", jobFactory)

// ---------CREATING THE FACTORY FOR JOBCONTROLLER---------
function jobFactory() {
  return {
    jobs: [
        {
          img:"http://animalnewyork.com/wp-content/uploads/domino-sugar-factory-continued.jpg"
          ,name: "Domino Sugar"
          ,city: "Appleton"
          ,state: "WI"
          ,margin: 35
          ,complete: 80
          ,zones:[]
        },
        {
          img:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Pepsi_Center,_Denver.jpg"
          ,name: "Pepsi Center"
          ,city: "Denver"
          ,state: "CO"
          ,margin: 22
          ,complete: 100
          ,zones:[]
        },
        {
          img:"https://3dprint.com/wp-content/uploads/2016/01/strykerhq.png"
          ,name: "Printer Facility"
          ,city: "Mesa"
          ,state: "AZ"
          ,margin: 22
          ,complete: 100
          ,zones:[]
        },
        {
          img:"http://forteandtablada.com/site/wp-content/uploads/2016/04/STAFA-900x600.jpg"
          ,name: "St. Amant HS"
          ,city: "Gonzales"
          ,state: "LA"
          ,margin: 22
          ,complete: 100
          ,zones:[]
        },
        {
          img:"http://www.neumannsmith.com/wp-content/uploads/2015/06/WSU-STUDENT-CENTER-JD-9.jpg"
          ,name: "Student Center"
          ,city: "Flint"
          ,state: "MI"
          ,margin: 22
          ,complete: 100
          ,zones:[]
        },
    ],
  }
}

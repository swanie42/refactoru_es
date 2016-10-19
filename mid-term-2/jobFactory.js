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
          ,margin: 86
          ,complete: 20
          ,address: "2888 Main St"
          ,zip: "12345"
          ,phone: "555-555-5555"
          ,description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ,zones:[]

        },
        {
          img:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Pepsi_Center,_Denver.jpg"
          ,name: "Pepsi Center"
          ,city: "Denver"
          ,state: "CO"
          ,margin: 22
          ,complete: 80
          ,address: "559 April Rd"
          ,zip: "12345"
          ,phone: "555-555-5555"
          ,description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ,zones:[]




        },
        {
          img:"http://forteandtablada.com/site/wp-content/uploads/2016/04/STAFA-900x600.jpg"
          ,name: "St. Amant HS"
          ,city: "Gonzales"
          ,state: "LA"
          ,margin: 22
          ,complete: 100
          ,address: "4568 June Ave"
          ,zip: "12345"
          ,phone: "555-555-5555"
          ,description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ,zones:[]


        }

    ],
  }
}

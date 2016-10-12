

// ---------SETTING UP MODULE METHODS---------
angular.module('gbApp')//stating the module created on module.js
//angular.module('name')

  .controller("JobController", jobCtrl)//creating a new controller for the above module
  //controller(name, constructor)

  .factory("jobFacto", jobFactory)//creating a factory for the above module
  //factory(name, providerFunction)

angular.module('gbApp')//stating the module for the config
//angular.module('name')
      .config(myRouter);//method to register work which needs to be performed on module loading
      //config(configFn)

// --------SETTING UP SERVICES---------

jobCtrl.$inject = ["jobFacto"];//injecting the factory into the controller constructor
//controller constructor.$inject property = ["factoryName"];

myRouter.$inject = ['$routeProvider'];//naming a router
//routerName.$inject property = ["functionPerameter"];

// ---------SETTING UP ROUTE SERVICE---------
  function myRouter($routeProvider) {

      $routeProvider
          .when('/', {
              templateUrl: '/templates/home.html'
          })
          .when('/jobs', {
              templateUrl: '/templates/jobs.html',
          })
          .when('/reports', {
              templateUrl: '/templates/reports.html'
          })
          .when('/jobDetails', {
              templateUrl: '/templates/jobDetails.html'
          })
          .otherwise({
              redirectTo: '/index.html'
          })
  }
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
        },
        {
          img:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Pepsi_Center,_Denver.jpg"
          ,name: "Pepsi Center"
          ,city: "Denver"
          ,state: "CO"
          ,margin: 22
          ,complete: 100
        },
        {
          img:"https://3dprint.com/wp-content/uploads/2016/01/strykerhq.png"
          ,name: "Printer Facility"
          ,city: "Mesa"
          ,state: "AZ"
          ,margin: 22
          ,complete: 100
        },
        {
          img:"http://forteandtablada.com/site/wp-content/uploads/2016/04/STAFA-900x600.jpg"
          ,name: "St. Amant HS"
          ,city: "Gonzales"
          ,state: "LA"
          ,margin: 22
          ,complete: 100
        },
        {
          img:"http://www.neumannsmith.com/wp-content/uploads/2015/06/WSU-STUDENT-CENTER-JD-9.jpg"
          ,name: "Student Center"
          ,city: "Flint"
          ,state: "MI"
          ,margin: 22
          ,complete: 100
        },
    ],
  }
}

//--------ADDING FUNCTIONALITY TO THE JOBCONTROLLER--------
function jobCtrl(jobFactory){
    var jCtrl = this;

    jCtrl.jobs = jobFactory.jobs;//defining relationship between the controller and factory
//controller constructor.name of object array

    jCtrl.setActiveJob = function(index) {
        jCtrl.jobDetails = jCtrl.jobs[index];
    }
}

//--------CREATING MODELS-----------
var job = {
    name : ""
  , image : ""
  , description : ""
  , address : ""
  , city : ""
  , state : ""
  , zip : ""
  , sqft : ""
  , contact_name : ""
  , contact_address : ""
  , contact_city : ""
  , contact_state : ""
  , contact_zip : ""
  , zones : ""
  , areas : ""
  , activities : ""
  , components : ""
  , materials : ""
  , actions : ""
  , methods : ""
};

var zone = {
    name : ""
  , image : ""
  , description : ""
  , sqft : ""
  , job : ""
  , areas : ""
  , activities : ""
  , components : ""
  , materials : ""
  , actions : ""
  , methods : ""
};
var area = {
    name : ""
  , image : ""
  , description : ""
  , sqft : ""
  , job : ""
  , zone : ""
  , activities : ""
  , components : ""
  , materials : ""
  , actions : ""
  , methods : ""
};
var activity = {
    name : ""
  , image : ""
  , description : ""
  , jobs : ""
  , zones : ""
  , areas : ""
  , components : ["Ceiling", "Component", "Content", "Deck", "Door", "Floor", "Mechanical/Equipment", "Rack/Shelves", "Roof", "Stairwell", "Surface", "Wall", "Window"]

  , materials : ["Beams Brick", "Cable Runs", "Carpet", "Ceiling Tile", "Ceramic Tile", "Concrete", "Conduit", "Contents", "Decking", "Documents", "Double Drywall", "Drains", "Drywall", "Ducting", "Electric", "Electric w/Conduit", "Electrical Fixtures", "Electrical Wire", "Epoxy", "Equipment", "Facility", "Flat", "Framing - Metal", "Framing - Wood", "Furnace Feeders", "Girts and Purlins", "Grating", "Gypcrete", "Hoses/Wire/Conduit", "HVAC","Insulation", "Masonry", "Material", "Metal Stud", "Motors", "Office Furniture", "Paneling", "Piping", "Plaster", "Plumbing Fixtures", "Plumbing Pipes", "Racking", "Railing /Chains", "Shingles", "Siding", "Stacked Water Diverters", "Stone", "Sub Floor", "Tanks", "Tile", "VCT (Vinyl)", "Vinyl Sheet Goods", "Wood", "Wood Stud"]

  , actions : ["Action", "Board Up", "Clean", "Contain","Demo", "Deodorize", "Encapsulate", "Extract", "Manipulate"]

  , methods : ["Air Clean - Compressor", "Apply Rust Inhibitor", "Bad Air Sponge", "Disassemble", "Dispose", "Dry Sponge", "Drywall - Flood Cut", "Drywall - No Cuts", "Drywall w/ Insulation - Flood Cut", "Drywall w/ Insulation - Floor to Ceiling", "Final", "Glue/Residue", "HEPA VAC", "HVAC - Air Whip", "HVAC - Brush", "HVAC Metal Duct <12in", "HVAC Metal Duct >12in", "Inventory - Basic", "Inventory - Detailed", "Media Bast", "Method", "Mop", "Move to another building", "Move to another room", "Move to center of room", "Muck Out", "Ozone", "Pack and Box", "Poly <1 Mil and Tape", "Poly 10 Mil And Poles", "Poly 10 Mil and Tape", "Portable - Black", "Portable - Clean", "Post Contruction", "Power Wash", "Pump <1.5in", "Pump >1.5in", "Pump Truck - Black Water", "Pump Truck - Clean Water", "Remove", "Rough", "Scrub Air", "Scrub brush", "Shallac", "Store", "Thermofog", "Truck Mount - Black", "Truck Mount - Clean", "Wet Wipe - Heavy Chem", "Wet Wipe - Light Chem", "Wet Wipe - Water"]
};

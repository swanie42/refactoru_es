

// ---------CONTROLLER---------
angular.module('gbApp')
  .controller("JobController", jobCtrl)

// ---------FACTORY ---------
  .factory("jobFacto", jobFactory)

angular.module('gbApp')
      .config(myRouter);

jobCtrl.$inject = ["jobFacto"];

myRouter.$inject = ['$routeProvider'];

// ---------ROUTE---------
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
// ---------FACTORY---------
function jobFactory() {
  return {
    jobs: [
        {
          img:"http://www.jesuismonreve.org/wp-content/uploads/2010/11/the_cloud_factory_01.jpg"
          ,name: "AppleJelly Factory"
          ,city: "Appleton"
          ,state: "WI"
          ,margin: 35
          ,complete: 80
        },
        {
          img:"http://d1ya1fm0bicxg1.cloudfront.net/14-08222012-5035b51f34061.jpeg"
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
          img:"http://www.adweek.com/agencyspy/wp-content/uploads/sites/7/2015/07/toys-r-us-store.jpg"
          ,name: "Toys R Us"
          ,city: "Las Vegas"
          ,state: "NV"
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

function jobCtrl(jobFactory){
    var jCtrl = this;

    jCtrl.jobs = jobFactory.jobs;

    jCtrl.setActiveJob = function(index) {
        jCtrl.jobDetails = jCtrl.jobs[index];
    }
}
var colorMatchMargin = {
  '0-19'     : 'red',
  '20-59'    : 'orange',
  '60-100'   : 'green'
};
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

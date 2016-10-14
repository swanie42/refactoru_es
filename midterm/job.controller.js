

// ---------SETTING UP MODULE METHODS---------
angular.module('gbApp')//stating the module created on module.js
//angular.module('name')

  .controller("JobController", jobCtrl)//creating a new controller for the above module
  //controller(name, constructor)

// set up google maps api
  // $http.get("")
  // .success(functional(data){
  //   main.animeList.push([])
  // })

// --------SETTING UP SERVICES---------

jobCtrl.$inject = ["jobFacto", "$timeout"];//injecting the factory into the controller constructor
//controller constructor.$inject property = ["factoryName"];




//--------ADDING FUNCTIONALITY TO THE JOBCONTROLLER--------
function jobCtrl(jobFacto, $timeout){
    var jCtrl = this;

    jCtrl.jobs = jobFacto.jobs;//defining relationship between the controller and factory
//controller constructor.name of object array

    jCtrl.setActiveJob = function(index) {//making a function to get properties in the jobs object by index
        jCtrl.jobDetails = jCtrl.jobs[index];
    }
    jCtrl.newJob = {}; // declaring newJob for readibility, angular WILL create it when we type into the inputs.  It's nice to show other developers and remind yourself that this is a variable being used in the controller


    //window.jCtrl = jCtrl; // Attaching the ctrl object to the window is nice for debugging, but shouldn't stay in your production code

    jCtrl.greeting = 'Fill out this form please!';

    jCtrl.addJob = function(){

        if(jCtrl.newJob.img && jCtrl.newJob.name && jCtrl.newJob.city && jCtrl.newJob.state && jCtrl.newJob.complete && jCtrl.newJob.margin){

            jCtrl.jobs.unshift( jCtrl.newJob );

            // Give newJob a new object
            jCtrl.newJob = {};

            // Manually trigger the modal
            $('#myModal').modal('toggle');


            var jobs = angular.copy(jCtrl.jobs); // copy our list of jobs

            // Strip $$hashKey for storage
            jobs.forEach(function(job){
                delete job.$$hashKey;
            });
        }
        else{
            jCtrl.jobFormErrMessage = 'Fill out the form completely!';
            $timeout(function(){
                jCtrl.jobFormErrMessage = '';
            }, 3000)
        }

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

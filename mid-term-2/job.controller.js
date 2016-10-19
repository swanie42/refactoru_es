

// ---------SETTING UP MODULE METHODS---------
angular.module('gbApp')//stating the module created on module.js
//angular.module('name')

.controller("JobController", jobCtrl)//creating a new controller for the above module
//controller(name, constructor)

// set up google maps api


// --------SETTING UP SERVICES---------

//injecting the factory into the controller constructor
jobCtrl.$inject  = ["jobFacto", "PlaceFactory","$timeout", "$http"];




//--------ADDING FUNCTIONALITY TO THE JOBCONTROLLER--------
function jobCtrl(jobFacto, PlaceFactory, $timeout, $http) {
    // $http.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+"boulder"+"&key=AIzaSyDUc_Yr0rbxPpJH9fF3cbj5Ao1VxQSAi4E").success(function(data){
    //   console.log(data);
    // });

    // SET JOB EDIT TOGGLE TO FALSE
    var jCtrl = this;

    jCtrl.editName = false;
    jCtrl.editCity = false;
    jCtrl.editState = false;
    jCtrl.editAddress = false;
    jCtrl.editZip = false;
    jCtrl.editPhone = false;
    jCtrl.editContact = false;
    jCtrl.editDescription = true;
    jCtrl.editFNOLdate = false;

    jCtrl.checkNewJob = function() {
        if(jCtrl.jobDetails.address === "") {
            jCtrl.editAddress = true;

        }
        if(jCtrl.jobDetails.zip === "") {
            jCtrl.editZip = true;

        }
        if(jCtrl.jobDetails.phone === "") {
            jCtrl.editPhone = true;

        }
    }


    jCtrl.jobs = jobFacto.jobs;//defining relationship between the controller and factory
    //controller constructor.name of object array

    jCtrl.setActiveJob = function(index) {//making a function to get properties in the jobs object by index
        jCtrl.jobDetails = jCtrl.jobs[index];
    }
    jCtrl.newJob = {}; // declaring newJob for readibility, angular WILL create it when we type into the inputs.  It's nice to show other developers and remind yourself that this is a variable being used in the controller


    //window.jCtrl = jCtrl; // Attaching the ctrl object to the window is nice for debugging, but shouldn't stay in your production code

    jCtrl.autoPlace = function(){
        if(jCtrl.timePromise){
            $timeout.cancel(jCtrl.timePromise)
        }
        jCtrl.timePromise = $timeout(function(){
            PlaceFactory.searchPlace(jCtrl.search)
            .then(function(res){
                console.log(res.data);
                jCtrl.autoResults = res.data;

                jCtrl.newJob.name = res.data.predictions[0].terms[0].value;
                jCtrl.newJob.street = res.data.predictions[0].terms[1].value;
                jCtrl.newJob.city = res.data.predictions[0].terms[2].value;
                jCtrl.newJob.state = res.data.predictions[0].terms[3].value;
                jCtrl.newJob.margin = "0";
                jCtrl.newJob.complete = "0";
                jCtrl.newJob.img = "https://s-media-cache-ak0.pinimg.com/originals/bc/6f/27/bc6f2743296b0fdc75322f56ef5bf3bd.jpg";
                jCtrl.newJob.address = "";
                jCtrl.newJob.zip = "";
                jCtrl.newJob.phone = "";
                jCtrl.newJob.description = "";




            }, function(err){
                console.error(err);

            });
        }, 1000);

        // PlaceFactory.predictions = [];
    };

    jCtrl.greeting = 'Fill out this form please!';

    jCtrl.addJob = function(){

        if(jCtrl.newJob.name && jCtrl.newJob.city && jCtrl.newJob.state){

            jCtrl.jobs.unshift( jCtrl.newJob );

            // Give newJob a new object
            jCtrl.newJob = {};

            // Manually trigger the modal

            var jobs = angular.copy(jCtrl.jobs); // copy our list of jobs

            // Strip $$hashKey for storage
            jobs.forEach(function(job){
                delete job.$$hashKey;

            });

            setTimeout(function(){
                jCtrl.search = "";
                jCtrl.newJob.name = "";
                jCtrl.newJob.city = "";
                jCtrl.newJob.state = "";
            }, 3500)
        } else {
            jCtrl.jobFormErrMessage = 'Fill out the form completely!';
            $timeout(function(){
                jCtrl.jobFormErrMessage = '';
            }, 3000)

        }

    }
    jCtrl.done = function(jobs){
        var done = 0;
        jobs.forEach(function(job){
            if(job.complete === 100){
                done++
            };

        });
        return done;
    };
    jCtrl.active = function(jobs){
        var active = 0;
        jobs.forEach(function(job){
            if(job.complete < 100){
                active++
            };

        });
        return active;
    }

    jCtrl.hideText = function(id, editToggle) {
        console.log("running");

        jCtrl[editToggle] = true;
        console.log(document.getElementById(id))

        setTimeout(function(){
            document.getElementById(id).focus();
        }, 1)
    }

    jCtrl.blurText = function(editToggle, field) {
        console.log("Blurring!");
        if(jCtrl.jobDetails[field]) {
            jCtrl[editToggle] = false;
        }
    }

    jCtrl.toggleModal = function(id, focusId) {
        $('#'+ id).openModal();
        if(focusId) {
            jCtrl.focusId(focusId);
        }
    };

    jCtrl.focusId = function(id){
        setTimeout(function(){
            document.getElementById(id).focus();
        }, 500)
    }
}

window.gen = function genterateHexString(length) {
    var ret="";
    while(ret.length < length){
        ret += Math.random().toString(16).substring(2);
    };
    return ret.substring(0,length);
};



// //--------CREATING MODELS-----------
// var job = {
//     name : ""
//   , image : ""
//   , description : ""
//   , address : ""
//   , city : ""
//   , state : ""
//   , zip : ""
//   , sqft : ""
//   , contact_name : ""
//   , contact_address : ""
//   , contact_city : ""
//   , contact_state : ""
//   , contact_zip : ""
//   , zones : ""
//   , areas : ""
//   , activities : ""
//   , components : ""
//   , materials : ""
//   , actions : ""
//   , methods : ""
// };
//
// var zone = {
//     name : ""
//   , image : ""
//   , description : ""
//   , sqft : ""
//   , job : ""
//   , areas : ""
//   , activities : ""
//   , components : ""
//   , materials : ""
//   , actions : ""
//   , methods : ""
// };
// var area = {
//     name : ""
//   , image : ""
//   , description : ""
//   , sqft : ""
//   , job : ""
//   , zone : ""
//   , activities : ""
//   , components : ""
//   , materials : ""
//   , actions : ""
//   , methods : ""
// };
// var activity = {
//     name : ""
//   , image : ""
//   , description : ""
//   , jobs : ""
//   , zones : ""
//   , areas : ""
//   , components : ["Ceiling", "Component", "Content", "Deck", "Door", "Floor", "Mechanical/Equipment", "Rack/Shelves", "Roof", "Stairwell", "Surface", "Wall", "Window"]
//
//   , materials : ["Beams Brick", "Cable Runs", "Carpet", "Ceiling Tile", "Ceramic Tile", "Concrete", "Conduit", "Contents", "Decking", "Documents", "Double Drywall", "Drains", "Drywall", "Ducting", "Electric", "Electric w/Conduit", "Electrical Fixtures", "Electrical Wire", "Epoxy", "Equipment", "Facility", "Flat", "Framing - Metal", "Framing - Wood", "Furnace Feeders", "Girts and Purlins", "Grating", "Gypcrete", "Hoses/Wire/Conduit", "HVAC","Insulation", "Masonry", "Material", "Metal Stud", "Motors", "Office Furniture", "Paneling", "Piping", "Plaster", "Plumbing Fixtures", "Plumbing Pipes", "Racking", "Railing /Chains", "Shingles", "Siding", "Stacked Water Diverters", "Stone", "Sub Floor", "Tanks", "Tile", "VCT (Vinyl)", "Vinyl Sheet Goods", "Wood", "Wood Stud"]
//
//   , actions : ["Action", "Board Up", "Clean", "Contain","Demo", "Deodorize", "Encapsulate", "Extract", "Manipulate"]
//
//   , methods : ["Air Clean - Compressor", "Apply Rust Inhibitor", "Bad Air Sponge", "Disassemble", "Dispose", "Dry Sponge", "Drywall - Flood Cut", "Drywall - No Cuts", "Drywall w/ Insulation - Flood Cut", "Drywall w/ Insulation - Floor to Ceiling", "Final", "Glue/Residue", "HEPA VAC", "HVAC - Air Whip", "HVAC - Brush", "HVAC Metal Duct <12in", "HVAC Metal Duct >12in", "Inventory - Basic", "Inventory - Detailed", "Media Bast", "Method", "Mop", "Move to another building", "Move to another room", "Move to center of room", "Muck Out", "Ozone", "Pack and Box", "Poly <1 Mil and Tape", "Poly 10 Mil And Poles", "Poly 10 Mil and Tape", "Portable - Black", "Portable - Clean", "Post Contruction", "Power Wash", "Pump <1.5in", "Pump >1.5in", "Pump Truck - Black Water", "Pump Truck - Clean Water", "Remove", "Rough", "Scrub Air", "Scrub brush", "Shallac", "Store", "Thermofog", "Truck Mount - Black", "Truck Mount - Clean", "Wet Wipe - Heavy Chem", "Wet Wipe - Light Chem", "Wet Wipe - Water"]
// };

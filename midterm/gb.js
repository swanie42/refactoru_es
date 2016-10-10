angular.module('gbApp',['ngRoute'])
  .contoller("gbCtrl", gbCtrl);

  angular.module('gbApp')
      .config(myRouter);



myRouter.$inject = ['$routeProvider'];

  function myRouter($routeProvider) {

      $routeProvider
          .when('/', {
              templateUrl: '/templates/home.html'
          })
          .when('/jobs', {
              templateUrl: '/templates/jobs.html',
              controller: "gbCtrl as gbCtrl"
          })
          .when('/reports', {
              templateUrl: '/templates/reports.html'
          })
          .otherwise({
              redirectTo: '/index.html'
          })
  }

var gbCtrl = function(){
    var gb = this;
}

var job = {
  job_name : ""
  , job_image : ""
  , job_description : ""
  , job_address : ""
  , job_city : ""
  , job_state : ""
  , job_zip : ""
  , job_sqft : ""
  , client_name : ""
  , client_address : ""
  , client_city : ""
  , client_state : ""
  , client_zip : ""
  , job_zones : ""
  , job_areas : ""
  , job_activities : ""
  , job_components : ""
  , job_materials : ""
  , job_actions : ""
  , job_methods : ""
};

var zone = {
  zone_name : ""
  , zone_image : ""
  , zone_description : ""
  , zone_sqft : ""
  , zone_job : ""
  , zone_areas : ""
  , zone_activities : ""
  , zone_components : ""
  , zone_materials : ""
  , zone_actions : ""
  , zone_methods : ""
};
var area = {
  area_name : ""
  , area_image : ""
  , area_description : ""
  , area_sqft : ""
  , area_job : ""
  , area_zone : ""
  , area_activities : ""
  , area_components : ""
  , area_materials : ""
  , area_actions : ""
  , area_methods : ""
};
var activity = {
  activity_name : ""
  , activity_image : ""
  , activity_description : ""
  , activity_jobs : ""
  , activity_zones : ""
  , activity_areas : ""
  , activity_components : ["Ceiling", "Component", "Content", "Deck", "Door", "Floor", "Mechanical/Equipment", "Rack/Shelves", "Roof", "Stairwell", "Surface", "Wall", "Window"]

  , activity_materials : ["Beams Brick", "Cable Runs", "Carpet", "Ceiling Tile", "Ceramic Tile", "Concrete", "Conduit", "Contents", "Decking", "Documents", "Double Drywall", "Drains", "Drywall", "Ducting", "Electric", "Electric w/Conduit", "Electrical Fixtures", "Electrical Wire", "Epoxy", "Equipment", "Facility", "Flat", "Framing - Metal", "Framing - Wood", "Furnace Feeders", "Girts and Purlins", "Grating", "Gypcrete", "Hoses/Wire/Conduit", "HVAC","Insulation", "Masonry", "Material", "Metal Stud", "Motors", "Office Furniture", "Paneling", "Piping", "Plaster", "Plumbing Fixtures", "Plumbing Pipes", "Racking", "Railing /Chains", "Shingles", "Siding", "Stacked Water Diverters", "Stone", "Sub Floor", "Tanks", "Tile", "VCT (Vinyl)", "Vinyl Sheet Goods", "Wood", "Wood Stud"]

  , activity_actions : ["Action", "Board Up", "Clean", "Contain","Demo", "Deodorize", "Encapsulate", "Extract", "Manipulate"]

  , activity_methods : ["Air Clean - Compressor", "Apply Rust Inhibitor", "Bad Air Sponge", "Disassemble", "Dispose", "Dry Sponge", "Drywall - Flood Cut", "Drywall - No Cuts", "Drywall w/ Insulation - Flood Cut", "Drywall w/ Insulation - Floor to Ceiling", "Final", "Glue/Residue", "HEPA VAC", "HVAC - Air Whip", "HVAC - Brush", "HVAC Metal Duct <12in", "HVAC Metal Duct >12in", "Inventory - Basic", "Inventory - Detailed", "Media Bast", "Method", "Mop", "Move to another building", "Move to another room", "Move to center of room", "Muck Out", "Ozone", "Pack and Box", "Poly <1 Mil and Tape", "Poly 10 Mil And Poles", "Poly 10 Mil and Tape", "Portable - Black", "Portable - Clean", "Post Contruction", "Power Wash", "Pump <1.5in", "Pump >1.5in", "Pump Truck - Black Water", "Pump Truck - Clean Water", "Remove", "Rough", "Scrub Air", "Scrub brush", "Shallac", "Store", "Thermofog", "Truck Mount - Black", "Truck Mount - Clean", "Wet Wipe - Heavy Chem", "Wet Wipe - Light Chem", "Wet Wipe - Water"]
};

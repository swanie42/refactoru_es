angular.module('gbApp')
  .factory("actFacto", actFactory);





  function actFactory() {
    return {
      activity : {
        components:[
          {label : "ceiling", show:["ceiling tile"]},
          {label : "floor", show : ["carpet"]},
          {label : "wall", show : ["brick"]},

        ],
        materials:[
          {label : "brick", show:["with vacuum", "deodorize"]},
          {label : "carpet", show:[]},
          {label : "ceiling tile", show:[]},
        ],
        actions:[
          {label : "clean", show:[]},
          {label : "deodorize", show:[]},
          {label : "air dry", show:[]},
        ],
        methods:[
          {label : "with bleach", show:[]},
          {label : "with fabreeze", show:[]},
          {label : "with vacuum", show:[]},
        ]
      },
      };
    };
      // activity = {
      //
      //   components : ["Ceiling", "Component", "Content", "Deck", "Door", "Floor", "Mechanical/Equipment", "Rack/Shelves", "Roof", "Stairwell", "Surface", "Wall", "Window"]
      //
      //
      //   , materials : ["Beams", "Brick", "Cable Runs", "Carpet", "Ceiling Tile", "Ceramic Tile", "Concrete", "Conduit", "Contents", "Decking", "Documents", "Double Drywall", "Drains", "Drywall", "Ducting", "Electric", "Electric w/Conduit", "Electrical Fixtures", "Electrical Wire", "Epoxy", "Equipment", "Facility", "Flat", "Framing - Metal", "Framing - Wood", "Furnace Feeders", "Girts and Purlins", "Grating", "Gypcrete", "Hoses/Wire/Conduit", "HVAC","Insulation", "Masonry", "Material", "Metal Stud", "Motors", "Office Furniture", "Paneling", "Piping", "Plaster", "Plumbing Fixtures", "Plumbing Pipes", "Racking", "Railing /Chains", "Shingles", "Siding", "Stacked Water Diverters", "Stone", "Sub Floor", "Tanks", "Tile", "VCT (Vinyl)", "Vinyl Sheet Goods", "Wood", "Wood Stud"]
      //
      //
      //   , actions : ["Action", "Board Up", "Clean", "Contain","Demo", "Deodorize", "Encapsulate", "Extract", "Manipulate"]
      //
      //
      //   , methods : ["Air Clean - Compressor", "Apply Rust Inhibitor", "Bad Air Sponge", "Disassemble", "Dispose", "Dry Sponge", "Drywall - Flood Cut", "Drywall - No Cuts", "Drywall w/ Insulation - Flood Cut", "Drywall w/ Insulation - Floor to Ceiling", "Final", "Glue/Residue", "HEPA VAC", "HVAC - Air Whip", "HVAC - Brush", "HVAC Metal Duct <12in", "HVAC Metal Duct >12in", "Inventory - Basic", "Inventory - Detailed", "Media Bast", "Method", "Mop", "Move to another building", "Move to another room", "Move to center of room", "Muck Out", "Ozone", "Pack and Box", "Poly <1 Mil and Tape", "Poly 10 Mil And Poles", "Poly 10 Mil and Tape", "Portable - Black", "Portable - Clean", "Post Contruction", "Power Wash", "Pump <1.5in", "Pump >1.5in", "Pump Truck - Black Water", "Pump Truck - Clean Water", "Remove", "Rough", "Scrub Air", "Scrub brush", "Shallac", "Store", "Thermofog", "Truck Mount - Black", "Truck Mount - Clean", "Wet Wipe - Heavy Chem", "Wet Wipe - Light Chem", "Wet Wipe - Water"]
      // };

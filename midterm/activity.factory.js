angular.module('gbApp')
  .factory("actFacto", actFactory);





  function actFactory() {
    return {
      activity : {
        components:[
          {label : "ceiling", show:["beams", "ceiling tile", "brick"]},
          {label : "content", show : ["carpet"]},
          {label : "deck", show : ["brick"]},
          {label : "door", show:["ceiling tile", "brick"]},
          {label : "floor", show : ["carpet"]},
          {label : "mechanical/equiptment", show : ["brick"]},
          {label : "rack/shelves", show:["ceiling tile", "brick"]},
          {label : "roof", show : ["carpet"]},
          {label : "stairwell", show : ["brick"]},
          {label : "surface", show:["ceiling tile", "brick"]},
          {label : "wall", show : ["carpet"]},
          {label : "window", show : ["brick"]},

        ],
        materials:[
          {label : "beams", show:["clean"]},
          {label : "brick", show:[]},
          {label : "cable runs", show:[]},
          {label : "carpet", show:["clean"]},
          {label : "ceiling tile", show:[]},
          {label : "ceramic tile", show:[]},
          {label : "concrete", show:["clean"]},
          {label : "conduit", show:[]},
          {label : "contents", show:[]},
          {label : "decking", show:["clean"]},
          {label : "documents", show:[]},
          {label : "double drywall", show:[]},
          {label : "drains", show:["clean"]},
          {label : "drywall", show:[]},
          {label : "ducting", show:[]},
          {label : "electric", show:["clean"]},
          {label : "electric w/conduit", show:[]},
          {label : "electrical fixtures", show:[]},
          {label : "electrical wire", show:["clean"]},
          {label : "epoxy", show:[]},
          {label : "equiptment", show:[]},
          {label : "facility", show:["clean"]},
          {label : "flat", show:[]},
          {label : "framing - metal", show:[]},
          {label : "framing - wood", show:["clean"]},
          {label : "furnace feeders", show:[]},
          {label : "girts and purlins", show:[]},
          {label : "grating", show:[]},
          {label : "gypcrete", show:["clean"]},
          {label : "hoses/wire/conduit", show:[]},
          {label : "HVAC", show:[]},
          {label : "insulation", show:["clean"]},
          {label : "masonry", show:[]},
          {label : "material", show:[]},
          {label : "metal stud", show:["clean"]},
          {label : "motors", show:[]},
          {label : "office furniture", show:[]},
          {label : "paneling", show:["clean"]},
          {label : "piping", show:[]},
          {label : "plaster", show:[]},
          {label : "plumbing fixtures", show:["clean"]},
          {label : "plumbing pipes", show:[]},
          {label : "racking", show:[]},
          {label : "railing/chains", show:[]},
          {label : "shingles", show:["clean"]},
          {label : "siding", show:[]},
          {label : "stacked water diverters", show:[]},
          {label : "stone", show:["clean"]},
          {label : "sub floor", show:[]},
          {label : "tanks", show:[]},
          {label : "tile", show:["clean"]},
          {label : "VCT (vinyl)", show:[]},
          {label : "vinyl sheet goods", show:[]},
          {label : "wood", show:["clean"]},
          {label : "wood stud", show:[]}
        ],
        actions:[
          {label : "board up", show:["with bleach"]},
          {label : "clean", show:[]},
          {label : "contain", show:[]},
          {label : "demo", show:["with bleach"]},
          {label : "deodorize", show:[]},
          {label : "encapsulate", show:[]},
          {label : "extract", show:[]},
          {label : "manipulate", show:[]}
        ],
        methods:[
          {label : "apply rust inhibitor", show:[]},
          {label : "bad air sponge", show:[]},
          {label : "disassemble", show:[]},
          {label : "dispose", show:[]},
          {label : "dry sponge", show:[]},
          {label : "drywall - flood cut", show:[]},
          {label : "drywall - no cut", show:[]},
          {label : "drywall w/insulation - flood cut", show:[]},
          {label : "drywall w/insulation - floor to ceiling", show:[]},
          {label : "final", show:[]},
          {label : "flue/residue", show:[]},
          {label : "HEPA vac", show:[]},
          {label : "HVAC - air whip", show:[]},
          {label : "HVAC - brush", show:[]},
          {label : "HVAC metal duct <12in", show:[]},
          {label : "HVAC metal duct >12in", show:[]},
          {label : "inventory - basic", show:[]},
          {label : "inventory - detailed", show:[]},
          {label : "media bast", show:[]},
          {label : "method", show:[]},
          {label : "mop", show:[]},
          {label : "move to another building", show:[]},
          {label : "move to another room", show:[]},
          {label : "move to center of room", show:[]},
          {label : "muck out", show:[]},
          {label : "ozone", show:[]},
          {label : "pack and box", show:[]},
          {label : "poly <1 mil and tape", show:[]},
          {label : "poly 10 mil and poles", show:[]},
          {label : "poly 10 mil and tape", show:[]},
          {label : "portable - black", show:[]},
          {label : "portable - clean", show:[]},
          {label : "post construction", show:[]},
          {label : "power wash", show:[]},
          {label : "pump <1.5in", show:[]},
          {label : "pump >1.5in", show:[]},
          {label : "pump truck - black water", show:[]}



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

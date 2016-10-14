

// ---------SETTING UP MODULE METHODS---------
angular.module('gbApp')//stating the module created on module.js
//angular.module('name')

  .controller("ZoneController", zoneCtrl)//creating a new controller for the above module
  //controller(name, constructor)

// --------SETTING UP SERVICES---------

zoneCtrl.$inject = ["zoneFacto", "$timeout"];//injecting the factory into the controller constructor
//controller constructor.$inject property = ["factoryName"];




//--------ADDING FUNCTIONALITY TO THE JOBCONTROLLER--------
function zoneCtrl(zoneFacto, $timeout){
    var zCtrl = this;

    zCtrl.zones = zoneFacto.zones;//defining relationship between the controller and factory
//controller constructor.name of object array

    zCtrl.setActiveZone = function(index) {//making a function to get properties in the zones object by index
        zCtrl.zoneDetails = zCtrl.zones[index];
    }
    zCtrl.newZone = {}; // declaring newZone for readibility, angular WILL create it when we type into the inputs.  It's nice to show other developers and remind yourself that this is a variable being used in the controller


    //window.zCtrl = zCtrl; // Attaching the ctrl object to the window is nice for debugging, but shouldn't stay in your production code

    zCtrl.greeting = 'Fill out this form please!';

    zCtrl.addZone = function(){

        if(zCtrl.newZone.img && zCtrl.newZone.name && zCtrl.newZone.city && zCtrl.newZone.state && zCtrl.newZone.complete && zCtrl.newZone.margin){

            zCtrl.zones.unshift( zCtrl.newZone );

            // Give newZone a new object
            zCtrl.newZone = {};

            // Manually trigger the modal
            $('#myModal').modal('toggle');


            var zones = angular.copy(zCtrl.zones); // copy our list of zones

            // Strip $$hashKey for storage
            zones.forEach(function(zone){
                delete zone.$$hashKey;
            });
        }
        else{
            zCtrl.zoneFormErrMessage = 'Fill out the form completely!';
            $timeout(function(){
                zCtrl.zoneFormErrMessage = '';
            }, 3000)
        }

    }
}

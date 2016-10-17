angular.module('gbApp')
      .controller('activityController', actCtrl)

actCtrl.$inject = ["actFacto"];

function actCtrl(actFacto){
    var aCtrl = this;

    aCtrl.activity = actFacto.activity;//defining relationship between the controller and factory
//controller constructor.name of object array

  aCtrl.selected = {
    component : {},
    material : {},
    action : {},
    method : {},
};
aCtrl.activityFilter = function(item, label){
  console.log(aCtrl.selected[item].show);
  if(!aCtrl.selected[item].show){
    return true
  }
  var show = aCtrl.selected[item].show
    for(var i=0; i < show.length; i++){
      if(show[i] == label){
        console.log(label)
        return true
      }
        else{
        return false
      };
    };
};
};

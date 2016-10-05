angular.module('FormMagic')
    .controller('theWand', wandCtrl);
    
function wantCtrl (){
    console.log('Alakazaam');
    var wand = this;
    
    wand.greeting = 'Any sufficiently ....';
    
    wand.addSpell = function(){
        wand.spellList.push( wand.newSpell );
    }
    
}
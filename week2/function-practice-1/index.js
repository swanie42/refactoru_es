 //Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
    // tripleFive() 
    //Five! Five! Five!
function tripleFive () {
    for (var i = 0; i < 3; i++) {
        console.log("Five!")
    }

}

tripleFive(); 
    
/*
- Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
    - lastLetter('hello') should return 'o'
    - lastLetter('island') should return 'd'
*/
var lastLetter = function (name) {
    return name.charAt(name.length -1);
}
    
console.log(lastLetter("jeffrey"));    

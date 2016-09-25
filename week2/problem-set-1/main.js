// console.log("jelly red");

// - Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.

var letterCapitalize = function(string){
    return string.toUpperCase();
}
console.log(letterCapitalize("happy birthday!!!"));

// - Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.
// tou


var wordCount = function (string) {
    return string.split(" ").length;
}
console.log(wordCount("hi everyone my name is dr nick"));

// - <em>Bonus:</em> Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.

var primeTime = function (number) {
    if (number)

    for(var i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return number > 1;
}
console.log(primeTime(41));
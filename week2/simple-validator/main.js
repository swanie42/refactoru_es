
// - Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth characters must be dashes.

// var userInput = prompt("Enter your phone number with dashes");

//     if(userInput.charAt(3) !== '-' && userInput.charAt(7) !== '-'){
//         alert("Try again! This time use dashes!");
//     }
//     else{
//         alert("Thanks for your number sucker!");
//     }

//  - birth date
//     - must follow the format xx/xx/xx

// var birthDate = prompt("Enter your birth date with slashes '/'");

//     if(birthDate.charAt(2) !== '/' && birthDate.charAt(5) !== '/'){
//         alert("Try again! This time use slashes!");
//     }
//     else{
//         alert("Thanks for your number sucker!");
//     }


//     - postal code
//     - must follow the format xxxxx OR xxxxx-xxxx

var postalCode = prompt("Enter your postal code with only 5 or 10 characters");

    if(postalCode.toString().length !== 5 || 
        postalCode.toString().length !== 10){
        alert("Try again! Only 5 characters please!");
    }
    else{
        alert("Success!!!!");
    }
    
//     - state abbreviation
//     - must be two characters
//     - must be all caps
//     - married
//     - must be yes or no
//     - may be any capitalization: YES, Yes, yes
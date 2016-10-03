console.log("test");
// - First prompt the user to ask how many disaster victims they wish to enter.


// - For each disaster victim that will be added, prompt the user to enter their name, phone number, and street. You don't need to validate the information. Add each newly entered user to three arrays, one for each piece of information, using array.push. <em>Think!</em> How will you know how many times to prompt the user for a name/phone/street? How can you make this dynamic so that it works for any number of people?

var people=[];


function person(firstName, lastName, street){
   return {
       firstName: firstName,
       lastName: lastName,
       street: street
   };
}

var vNumber = prompt("How many victims are there?");
for(var i=0; i < vNumber; i++){
    var firstName = prompt("enter your first name");
    var lastName = prompt("enter your last name");
    var street = prompt("enter your street");
    people.push(person(firstName, lastName, street));
};


console.log(people);
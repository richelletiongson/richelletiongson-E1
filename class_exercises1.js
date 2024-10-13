const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

//determine a proper parameter variable name


function CheckDrinkingAge(age){
  if (age <13) {
    console.log("Leave!");
  } else if (age >= 13 && age < 19) {
    console.log("Grow up to be 19.")
  } else if (age >= 19 && age <= 50) {
    console.log("Drink away!")
  } else if (age > 50 && age <=70) {
    console.log("Watch your health.")
  } else if (age > 70) {
    console.log("Watch you health and life.")
  } else {
    console.log ("Invalid age.")
  }
}

readline.question('How old are you? ', userAge => {
  
CheckDrinkingAge ();

  readline.close();
});
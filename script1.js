
function userPlays(choice) { //whatever is entered in the HTML, is stored as Choice
var i=0;
i=i+1;
for (i=0; i<=3; i++){ if (i===3) {alert ("end!")}

let userChoice = choice; //let declares a variable than can change later within a scope, const means it cant change, both are VAR
const compArray=["Rock", "Paper", "Scissors"];


let compChoice=compArray[parseInt((Math.random()*3))];
console.log(compChoice);

 if (compChoice == userChoice) {
 result = "Draw!"}

 else if (userChoice == "Rock") {
	  if (compChoice == "Paper") {
    result = 'You lost!'
  }
  else { result= "You won!"; }
}

  else if (userChoice == "Paper"){
	  if (compChoice == "Scissors") {
    result = "You lost!"
  }
  else {result="You won!"; }
}
  else if (userChoice == "Scissors") {
	  if (compChoice == "Paper") {
    result = "You won!";
  }
  else {
    result = "You lost!";
  }
}


document.getElementById("Result").innerHTML = "You chose  " +userChoice+ " computer chose  " +compChoice+ " so " + result


}}
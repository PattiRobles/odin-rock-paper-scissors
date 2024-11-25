//Global variables

let personCounter = 0;
let computerCounter = 0;
let round = 0;

//Functions

function getPersonChoice() {
  let personChoice;
  do {
    personChoice = prompt('Rock, paper, scissors? Choose by selecting "r", "p" or "s"').toLowerCase();
    if (personChoice != 'r' && personChoice != 'p' && personChoice != 's') {
    alert('Incorrect value entered.\nPlease try again.')
    }
  } while (personChoice != 'r' && personChoice != 'p' && personChoice != 's')

console.log(`Person choice: ${personChoice}`);
return personChoice;

}

function getComputerChoice() {
  let random = Math.floor(Math.random()*3);
  let computerChoice;
    if (random == 0) {
      computerChoice = 'r';
    } else if (random == 1) {
      computerChoice = 'p';
    } else if (random == 2) {
      computerChoice = 's';
    }

  console.log(`Computer choice: ${computerChoice}`);
  return computerChoice;
}

function play (personChoice, computerChoice) {
  
   if (personChoice == computerChoice) {
      console.log('Draw!') 
   }
   else if (
    (personChoice == 'r' && computerChoice == 's') ||
    (personChoice == 'p' && computerChoice == 'r') ||
    (personChoice == 's' && computerChoice == 'p')  
  ) {
    personCounter++;
   } else {
    computerCounter++;
   }
   console.log(`Round ${++round} - Person: ${personCounter} Computer: ${computerCounter}`)
}

//START GAME
do {
  let a = getPersonChoice();
  let b = getComputerChoice();
  play(a, b); // variables where functions are stored
}
while ( personCounter < 3 && computerCounter < 3) 

if (personCounter == 3) {
  console.log('Human wins!!')
} else if (computerCounter == 3) {
  console.log('Computer wins!!')
}

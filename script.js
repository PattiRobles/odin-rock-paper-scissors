//Global variables
let personCounter = 0;
let computerCounter = 0;

//Functions

function getPersonChoice() {
let personChoice = prompt('Rock, paper, scissors? Choose by selecting "r", "p" or "s"').toLocaleLowerCase();
console.log(`Person: ${personChoice}`);
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

  console.log(`Computer: ${computerChoice}`);
  return computerChoice;
}

function play (personChoice, computerChoice) {
  
   if (personChoice == computerChoice) {
      console.log('Draw!') // change for alert later
   }
   else if (
    (personChoice == 'r' && computerChoice == 's') ||
    (personChoice == 'p' && computerChoice == 'r') ||
    (personChoice == 's' && computerChoice == 'p')  
  ) {
    personCounter++;
    // console.log('one point for the human!')
   } else {
    computerCounter++;
    // console.log('one point for the machine!')
   }
   console.log(`Person: ${personCounter} Computer: ${computerCounter}`)
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


//bring into global scope
let personCounter = 0;
let computerCounter = 0;

//invoke play
play();

//determine if play should continue
while ( personCounter < 3 && computerCounter < 3) {
if (personCounter == 3) {
  console.log('Human wins!!')
} else if (computerCounter == 3) {
  console.log('Computer wins!!')
} else {
  console.log('lets carry on playing')
  play();
}
}

//create play function
function play() {

// get input from player

let personChoice = prompt('Rock, paper, scissors? Choose by selecting "r", "p" or "s"').toLocaleLowerCase();
console.log(personChoice)

//generate choice from computer
let random = Math.floor(Math.random()*3);
console.log(random);

let computerChoice;
if (random == 0) {
  computerChoice = 'r';
} else if (random == 1) {
  computerChoice = 'p';
} else if (random == 2) {
  computerChoice = 's';
}

console.log(computerChoice);

//compare choices and allocate score
 // same choice
 if (personChoice == computerChoice) {
  console.log('Draw!') // change for alert later
 }
 //different choices 
 else if (personChoice == 'r' && computerChoice == 's' ||
          personChoice == 'p' && computerChoice == 'r' ||
          personChoice == 's' && computerChoice == 'p'  ) {
  personCounter++;
  console.log('one point for the human!')
  console.log(personCounter)
 } else {
  computerCounter++;
  console.log('one point for the machine!')
  console.log(computerCounter)
 }

 console.log(`Person: ${personCounter} Computer: ${computerCounter}`)
}
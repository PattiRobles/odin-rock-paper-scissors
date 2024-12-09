//Global variables
let humanCounter = 0;
let computerCounter = 0;
let round = 0;


//select elem from DOM
const buttons = document.querySelectorAll('button');
const humanChoiceDisplay = document.querySelector('.humanChoiceDisplay');
const computerChoiceDisplay = document.querySelector('.computerChoiceDisplay');
const humanCounterDisplay = document.querySelector('.humanCounter');
const computerCounterDisplay = document.querySelector('.computerCounter');
const winnerDisplay = document.querySelector('.winner');
const roundDisplay = document.querySelector('.roundDisplay')

//fx human choice to de done via event listener

function getComputerChoice() {
  let random = Math.floor(Math.random()*3);
  const choices = ['rock', 'paper', 'scissors']
  return choices[random] 
  //much cleaner than assigning each random number a choice
}

function resetGame() {
humanCounter = 0;
computerCounter = 0;
round = 0;
humanChoiceDisplay.textContent = '';
computerChoiceDisplay.textContent = '';
// humanCounterDisplay.textContent = 0 ;
// computerCounterDisplay.textContent = '0'
console.log('game reset');
// winnerDisplay = '';
}

function play (humanChoice, computerChoice) {
  
   if (humanChoice == computerChoice) {
      console.log('Draw!') 
   }
   else if (
    (humanChoice == 'rock' && computerChoice == 'scissors') ||
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissors' && computerChoice == 'paper')  
  ) {
    humanCounter++;
   } else {
    computerCounter++;
   }
   round++;
   roundDisplay.textContent = `Round: ${round}`
   humanCounterDisplay.textContent = humanCounter;
   computerCounterDisplay.textContent = computerCounter;

   console.log(`Round ${round} - Human: ${humanCounter} Computer: ${computerCounter}`)

  //check for overall winner
  if (humanCounter == 3 || computerCounter == 3 ) {
  const winner = humanCounter == 3 ? 'Human' : 'Computer';
  winnerDisplay.textContent = `${winner} wins the game!`;
  resetGame();
}
}

//add event listeners to game buttons
for (let button of buttons) {
  button.addEventListener('click', (e) => {
    //get human choice from button selection
    const humanChoice = e.target.offsetParent.className;
    console.log(`Human: ${humanChoice} `)
    humanChoiceDisplay.textContent = humanChoice;
    winnerDisplay.textContent = '';
    humanCounterDisplay.textContent = 0 ;
    computerCounterDisplay.textContent = '0'


    //get computers choice
    const computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    console.log(`Computer: ${computerChoice}`)

    //play the round
    play(humanChoice, computerChoice)
    }
)}


//Global variables
const openRules = document.getElementById('open-rules-btn');
const rules = document.getElementById('rules-container');
const close = document.getElementById('close');

const computerHand = document.getElementById('computer-hand');
const playerHand = document.getElementById('player-hand');
const gameResultElement = document.getElementById('result');
const choiceButtons = document.querySelectorAll('.options button');
const resetButton = document.querySelector('.reset-button');

// Create array for computer's choices
let computerChoiceOptions = {
    rock: '<div><i class="fa-solid fa-hand-fist fa-rotate-90"></i></div>',
    scissors: '<div><i class="fa-solid fa-hand-scissors fa-flip-horizontal"></i></div>',
    paper: '<div><i class="fa-solid fa-hand fa-rotate-90"></i></div>',
    lizard: '<div><i class="fa-solid fa-hand-lizard fa-flip-horizontal"></i></div>',
    spock: '<div><i class="fa-solid fa-hand-spock fa-rotate-90"></i></div>',
    default: '<i class="fa-solid fa-hand-fist"></i>',
};
//Create array for player's options
let playerChoiceOptions = {
    rock: '<div class="p-fist"><i class="fa-solid fa-hand-fist fa-rotate-270"></i></div>',
    scissors: '<div><i class="fa-solid fa-hand-scissors"></i></div>',
    paper: '<div class="p-paper"><i class="fa-solid fa-hand fa-rotate-270"></i></div>',
    lizard: '<div><i class="fa-solid fa-hand-lizard"></i></div>',
    spock: '<div class="p-spock"><i class="fa-solid fa-hand-spock fa-rotate-270"></i></div>',
    default: '<i class="fa-solid fa-hand-fist fa-flip-horizontal"></i>',
};
// Determine max score for the winner
const MAX_SCORE = 5;

let playerScore = 0;
const playerScoreEl = document.getElementById('playerScore');

let computerScore = 0;
const computerScoreEl = document.getElementById('computerScore');


//add event listener for buttons
choiceButtons.forEach((button) =>
    button.addEventListener('click', () => {
        // check if one the players reaches the max score
        if (computerScore === MAX_SCORE || playerScore === MAX_SCORE) {
            return;
        }

        const computerChoice = computerRandomChoice();
        const playerChoice = button.id; // get button id

        // display computer and player's choice by changing the icon
        computerHand.innerHTML = computerChoiceOptions[computerChoice];
        playerHand.innerHTML = playerChoiceOptions[playerChoice];

        const roundResult = compareRound(playerChoice, computerChoice);
        

        //Add a score to the winner result
        if (roundResult === 'Computer Wins') {
            computerScore++;
            computerScoreEl.innerHTML = computerScore;
        } else if (roundResult === 'Player Wins') {
            playerScore++;
            playerScoreEl.innerHTML = playerScore;
        }

        // decide the winner and reset scores
        if (computerScore === MAX_SCORE) {
            gameResultElement.innerText = 'Computer Wins!';
            document.querySelector('.options').style = 'visibility:hidden';
            resetButton.style = 'visibility:visible';
        } else if (playerScore === MAX_SCORE) {
            gameResultElement.innerText = 'Player Wins!';
            document.querySelector('.options').style = 'visibility:hidden';
            resetButton.style = 'visibility:visible';
        }
    })
);
    // determine winner hand by using rules
 function compareRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
     return 'Draw!';
   } else if (
    (playerChoice === 'rock' && (computerChoice ==='scissors' || computerChoice ==='lizard')) || 
    (playerChoice === 'scissors' && (computerChoice ==='paper'|| computerChoice ==='lizard')) || 
    (playerChoice === 'paper' && (computerChoice ==='rock' || computerChoice ==='spock')) || 
    (playerChoice === 'lizard' && (computerChoice ==='paper'|| computerChoice ==='spock')) ||
    (playerChoice === 'spock' && (computerChoice ==='scissors'||computerChoice ==='rock'))
 )  { 
    return 'Player Wins!';
    } else {
     return 'Computer Wins!';
   }
 }

//Computer random choice;
function computerRandomChoice() {
    let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomNumber = Math.floor(Math.random() * 5); // only indeces from 0-4
    let computerNumber = options[randomNumber];
    return computerNumber;
}

resetButton.addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    computerScoreEl.innerHTML = 0;
    playerScoreEl.innerHTML = 0;
    computerHand.innerHTML = computerChoiceOptions.default;
    playerHand.innerHTML = playerChoiceOptions.default;
    document.querySelector('.options').style = 'visibility:visible';
    gameResultElement.innerText = '';
    resetButton.style = 'display:none';
});

//Rules Button
openRules.onclick = function () {
    rules.style.display = 'block';
};
close.onclick = function () {
    rules.style.display = 'none';
};

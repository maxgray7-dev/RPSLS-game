//Global variables
const openRules = document.getElementById('open-rules-btn');
const rules = document.getElementById('rules-container');
const close = document.getElementById('close');

//Player Buttons
const rockButton = document.getElementById("#rockBtn")
const scissorsButton = document.getElementById("scissorsBtn")
const paperButton = document.getElementById("#paperBtn")
const lizardButton = document.getElementById("#lizardBtn")
const spockButton = document.getElementById("#spockBtn")

const computerHand = document.getElementById("#computer");
const playerHand = document.getElementById("#player");
const gameResult = document.querySelector("#result")
const computerChoice = document.getElementsByClassName("c_default");
const playerChoice = document.getElementsByClassName("p_default");
const choiceButtons = document.querySelectorAll(".choiceBtn")

// Create array for computer's choices
let computerChoiceOptions = {
    "fa-hand-fist fa-rotate-90": "rock",
    "fa-hand-scissors fa-flip-horizontal": "scissors",
    "fa-hand fa-rotate-90": "paper",
    "fa-hand-lizard fa-flip-horizontal":"lizard",
    "fa-hand-spock fa-rotate-90":"spock",
};
//Create array for player's options
let playerChoiceOptions = {
    "fa-solid fa-hand-fist fa-rotate-270": "rock",
    "fa-solid fa-hand-scissors": "scissors",
    "fa-solid fa-hand fa-rotate-270":"paper",
    "fa-solid fa-hand-lizard": "lizard",
    "fa-solid fa-hand-spock fa-rotate-270": "spock",
    };
//Rules Button
openRules.onclick = function () {
    rules.style.display = "block";
};
close.onclick = function () {
    rules.style.display = "none";
};


let computer;
let player;
let result;

//Player choice;

choiceButtons.forEach(button => button.addEventListener ("click", () => {
    player = playerChoiceOptions();

    switch(player) {
        case 1:
            rockButton = "rock";
            break;
        case 2:
            scissorsButton = "scissors";
            break;
        case 3:
            paperButton ="paper";
            break;
        case 4:
            lizardButton ="lizard";
            break;
        case 5:
            spockButton ="spoke";
            break;
    }


}))




//Computer random choice;
function computerRandomChoice() {
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomNumber = Math.floor(Math.random() * 5); // only indeces from 0-4
    let computerNumber = options[randomNumber];
    return computerNumber;

}







// Event Listeners for buttons that player clicks;






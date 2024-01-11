//Global variables
const openRules = document.getElementById('open-rules-btn');
const rules = document.getElementById('rules-container');
const close = document.getElementById('close');

const computerHand = document.getElementById("computer");
const playerHand = document.getElementById("player");
const gameResult = document.querySelector("#result")
const computerChoice = document.getElementsByClassName("c_default");
const playerChoice = document.getElementsByClassName("p_default");

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



let computer;
let player;
let result;


//Computer random choice;
function computerRandomChoice() {
 let options = ["rock", "paper","scissors", "lizard","spock"];
 let randomNumber = Math.floor(Math.random()*5); // only indeces from 0-4
 let computerNumber = options[randomNumber];
 return computerNumber;

}

//Player random choice;
function Choice()












openRules.onclick = function () {
    rules.style.display = "block";
};
close.onclick = function () {
    rules.style.display = "none";
};

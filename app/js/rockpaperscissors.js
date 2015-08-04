////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move == "rock" || move =="paper" || move =="scissors") 
        { return move; }
        else { return getInput();
        }
    }

function getComputerMove(move) {
    if (move == "rock" || move =="paper" || move =="scissors") 
        { return move; }
        else { return randomPlay() };
        }

function getWinner(playerMove,computerMove) {
    computerMove = getComputerMove(randomPlay());
    playerMove = "rock";
    console.log(computerMove + " VS " + playerMove);
    if (playerMove == "rock" && computerMove =="Scissors") {
    result = "player" }
    else if (playerMove =="rock" && computerMove == "paper") { return "computer" }
    else if (playerMove =="rock" && computerMove == "rock") { return "tie" }
    else if (playerMove =="paper" && computerMove == "paper") { return "tie" }
    else if (playerMove =="scissors" && computerMove == "scissors") { return "tie" }
    else if (playerMove =="paper" && computerMove == "scissors") { return "computer" }
    else if (playerMove =="rock" && computerMove == "scissors") { return "computer" }
    else if (playerMove =="paper" && computerMove == "rock") { return "player" }
    else if (playerMove =="scissors" && computerMove == "rock") { return "computer" }
    else if (playerMove =="scissors" && computerMove == "paper") { return "player" }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

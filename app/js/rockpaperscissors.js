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
        { return move; 
        } else {return getInput();
        }
}

function getComputerMove(move) {
    if (move == "rock" || move =="paper" || move =="scissors") { 
        return move; 
        } else { 
            return randomPlay() 
        }
}

function getWinner(playerMove,computerMove) {
    console.log(computerMove + " VS " + playerMove);
    if (playerMove == "rock" && computerMove =="scissors") { return "player"; 
    } else if (playerMove =="rock" && computerMove == "paper") { return "computer"; 
    } else if (playerMove == computerMove) { return "tie"; 
    } else if (playerMove =="paper" && computerMove == "scissors") { return "computer"; 
    } else if (playerMove =="rock" && computerMove == "scissors") { return "player";  
    } else if (playerMove =="paper" && computerMove == "rock") { return "player"; 
    } else if (playerMove =="scissors" && computerMove == "rock") { return "computer"; 
    } else if (playerMove =="scissors" && computerMove == "paper") { return "player"; 
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
        while (computerWins < 5 && playerWins <5) {
            var computerMove = getComputerMove(randomPlay());
            var playerMove = getPlayerMove();
            var winner = getWinner(computerMove, playerMove);
                console.log(winner);
                if (winner=="computer") {computerWins++
                } else if (winner=="player") {playerWins++
                } console.log(playerWins,computerWins);
        }
    if (playerWins==5) {console.log("You beat a computer!!!")
    } else if (computerWins==5) {console.log("A computer beat you!!!!")
    }    return [playerWins, computerWins];
}
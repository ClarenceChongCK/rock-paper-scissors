const moves = ["rock", "paper", "scissors"]

let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');

const welcome = "Welcome to Rock Paper Scissors!"

const resetButton = document.querySelector('#reset');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        round(button.id,getComputerChoice());
    });
});

resetButton.addEventListener('click', () => {
    reset();
});

function getComputerChoice() {
    const temp = Math.floor(Math.random() * 3);
    return moves[temp];
}

function winCondition() {
    if (playerWins == 5) {
        document.getElementsByClassName("scoreboard")[0].textContent = "YOU WIN";
        document.querySelector('#rock').disabled = true;
        document.querySelector('#scissors').disabled = true;
        document.querySelector('#paper').disabled = true;
    } else if( computerWins == 5) {
        document.getElementsByClassName("scoreboard")[0].textContent = "YOU LOSE";
        document.querySelector('#rock').disabled = true;
        document.querySelector('#scissors').disabled = true;
        document.querySelector('#paper').disabled = true;
    } else {
        document.getElementsByClassName("scoreboard")[0].textContent = `YOU: ${playerWins}     CPU: ${computerWins}`;
    }
}

function reset() {
    playerWins = 0;
    computerWins = 0;
    document.querySelector('#rock').disabled = false;
        document.querySelector('#scissors').disabled = false;
        document.querySelector('#paper').disabled = false;
    document.getElementsByClassName("scoreboard")[0].textContent = welcome;
}

function round(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock" :
            switch (computerSelection) {
                case "rock" :
                    console.log("Draw");
                    winCondition();
                    break;
                case "paper" :
                    console.log("Lose");
                    computerWins += 1;
                    winCondition();
                    break;
                case "scissors" :
                    console.log("Win");
                    playerWins += 1;
                    winCondition();
                    break;
            }
            break;
        case "paper" :
            switch (computerSelection) {
                case "rock" :
                    console.log("Win");
                    playerWins += 1;
                    winCondition();
                    break;
                case "paper" :
                    console.log("Draw");
                    computerWins += 1;
                    winCondition();
                    break;
                case "scissors" :
                    console.log("Lose");
                    winCondition();
                
                    break;
            }
            break;
        case "scissors" :
            switch (computerSelection) {
                case "rock" :
                    console.log("Lose");
                    computerWins += 1;
                    winCondition();
                    break;
                case "paper" :
                    console.log("Win");
                    playerWins += 1;
                    winCondition();
                    break;
                case "scissors" :
                    console.log("Draw");
                    winCondition();
                    break;
            }
            break;
        default :
            console.log("Error");        
    }
}

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let computer = getComputerChoice();
//         round("Rock", computer);
//     }
// }


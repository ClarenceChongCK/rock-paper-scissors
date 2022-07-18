const moves = ["rock", "paper", "scissor"]

function getComputerChoice() {
    const temp = Math.floor(Math.random() * 3);
    return moves[temp];
}

function round(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock" :
            switch (computerSelection) {
                case "rock" :
                    console.log("Draw");
                    //return "Draw";
                    break;
                case "paper" :
                    console.log("Lose");
                    //return "Lose";
                    break;
                case "scissor" :
                    console.log("Win");
                    //return "Win";
                    break;
            }
            break;
        case "paper" :
            switch (computerSelection) {
                case "rock" :
                    console.log("Win");
                    //return "Win";
                    break;
                case "paper" :
                    console.log("Draw");
                    //return "Draw";
                    break;
                case "scissor" :
                    console.log("Lose");
                    //return "Lose";
                    break;
            }
            break;
        case "scissor" :
            switch (computerSelection) {
                case "rock" :
                    console.log("Lose");
                    //return "Lose";
                    break;
                case "paper" :
                    console.log("Win");
                    //return "Win";
                    break;
                case "scissor" :
                    console.log("Draw");
                    //return "Draw";
                    break;
            }
            break;
        default :
            console.log("Error");        
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computer = getComputerChoice();
        round("Rock", computer);
    }
}


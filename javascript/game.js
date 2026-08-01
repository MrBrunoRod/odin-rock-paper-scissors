function getComputerChoice() {
    const max = 3;
    const num = Math.floor(Math.random() * max);
    let computerChoice;

    if (num == 0) {
        computerChoice = "rock";
    }
    else if (num == 1) {
        computerChoice = "paper";
    }
    else if (num == 2) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Pick rock, paper, or scissors!");

    return humanChoice.toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let winnerNum;

        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            winnerNum = 0;
        }
        else if ((humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors")) {
            winnerNum = 1;
        }
        else {
            winnerNum = 3;
        }

        if (winnerNum == 0) {
            console.log("Human wins round!");
            humanScore++;
        }
        else if (winnerNum == 1) {
            console.log("Computer wins round!");
            computerScore++;
        }
        else if (winnerNum == 3) {
            console.log("Round is a tie!");
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`Human score ${humanScore} : Computer score ${computerScore}`);
        console.log(`Human wins game!`);
    }

    else if (humanScore < computerScore) {
        console.log(`Human score ${humanScore} : Computer score ${computerScore}`);
        console.log(`Computer wins game!`);
    }
    else {
        console.log(`Human score ${humanScore} : Computer score ${computerScore}`);
        console.log(`Game ends in a tie!`);
    }
}

playGame();
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
            finalResult.textContent = "Human wins round!";
            humanScore++;
        }
        else if (winnerNum == 1) {
            finalResult.textContent = "Computer wins round!";
            computerScore++;
        }
        else if (winnerNum == 3) {
            finalResult.textContent = "Round is a tie!";
        }
    }

    // for (let i = 0; i < 5; i++) {
    //     let humanChoice = getHumanChoice();
    //     let computerChoice = getComputerChoice();
    //     playRound(humanChoice, computerChoice);
    // }

    const container = document.getElementById("container");
    const resultContainer = document.getElementById("result-container");

    const rockBtn = document.createElement("button");
    rockBtn.id = "rock";
    rockBtn.innerText = "Rock!";
    rockBtn.type = "button";
    const paperBtn = document.createElement("button");
    paperBtn.id = "paper";
    paperBtn.innerText = "Paper!";
    paperBtn.type = "button";
    const scissorsBtn = document.createElement("button");
    scissorsBtn.id = "scissors";
    scissorsBtn.innerText = "Scissors!"
    scissorsBtn.type = "button";

    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);

    const resultText = document.createElement("p");
    const finalResult = document.createElement("p");

    resultText.textContent = `Human Score ${humanScore} : Computer Score ${computerScore}`;
    finalResult.textContent = "Winner to be determined..."

    resultContainer.appendChild(resultText);
    resultContainer.appendChild(finalResult);

    container.addEventListener("click", (event) => {
        let target = event.target;
        let humanChoice = "";

        switch(target.id) {
            case "rock":
                humanChoice = "rock";
                break;

            case "paper":
                humanChoice = "paper";
                break;

            case "scissors":
                humanChoice = "scissors";
                break;   
        }

        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        resultText.textContent = `Human Score ${humanScore} : Computer Score ${computerScore}`;

        if (humanScore >= 5) {
        finalResult.textContent = "Human wins the game!";
        }
        else if (computerScore >= 5) {
            finalResult.textContent = "Computer wins game!";
        }
    })
}

playGame();
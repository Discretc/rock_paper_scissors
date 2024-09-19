let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        console.log("rock");
        return "rock";
    }

    else if (random === 1) {
        console.log("paper");
        return "paper";
    }

    else {
        console.log("scissors");
        return "scissors";
    }

}

function getHumanChoice() {
    let choice = prompt();
    let low = choice.toLowerCase();
    if (low === "rock") {
        console.log("rock");
        return "rock";
    }

    else if (low === "paper") {
        console.log("paper");
        return "paper";
    }

    else if (low === "scissors") {
        console.log("scissors");
        return "scissors";
    }

    else {
        return;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("That's a tie!");
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }

    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }

    if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
}



// this is a comment

function playGame(pcChoice, humanChoicce, game) {
    for (i = 0; i < 5; i++) {
        const computerSelection = pcChoice();
        const humanSelection = humanChoicce();
        game(humanSelection, computerSelection);
    }
}


playGame(getComputerChoice, getHumanChoice, playRound);
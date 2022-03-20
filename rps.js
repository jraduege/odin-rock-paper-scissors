function computerPlay() {
    let num = Math.floor(Math.random()*3)+1
    switch (num) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function vsRock(selection) {
    switch (selection) {
        case "Rock":
            return "Tie: you both chose Rock"
            break;
        case "Paper":
            return "You win!: Paper covers Rock"
            break;
        case "Scissors":
            return "You lose: Rock breaks Scissors"
            break;
    }
}

function vsPaper(selection) {
    switch (selection) {
        case "Paper":
            return "Tie: you both chose Paper"
            break;
        case "Scissors":
            return "You win!: Scissors cuts Paper"
            break;
        case "Rock":
            return "You lose: Paper covers Rock"
            break;
    }
}

function vsScissors(selection) {
    switch (selection) {
        case "Scissors":
            return "Tie: you both chose Scissors"
            break;
        case "Rock":
            return "You win!: Rock breaks Scissors"
            break;
        case "Paper":
            return "You lose: Scissors cuts Paper"
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    switch (computerSelection) {
        case "Rock":
            return vsRock(playerSelection);
            break;
        case "Paper":
            return vsPaper(playerSelection);
            break;
        case "Scissors":
            return vsScissors(playerSelection);
            break;
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
function computerPlay() {
    let num = Math.floor(Math.random()*3)+1
    switch (num) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function vsRock(selection) {
    switch (selection) {
        case "rock":
            return "Tie: you both chose rock"
            break;
        case "paper":
            return "You win!: paper covers rock"
            break;
        case "scissors":
            return "You lose: rock breaks scissors"
            break;
    }
}

function vsPaper(selection) {
    switch (selection) {
        case "paper":
            return "Tie: you both chose paper"
            break;
        case "scissors":
            return "You win!: scissors cuts paper"
            break;
        case "rock":
            return "You lose: paper covers rock"
            break;
    }
}

function vsScissors(selection) {
    switch (selection) {
        case "scissors":
            return "Tie: you both chose scissors"
            break;
        case "rock":
            return "You win!: rock breaks scissors"
            break;
        case "paper":
            return "You lose: scissors cuts paper"
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    switch (computerSelection) {
        case "rock":
            return vsRock(playerSelection);
            break;
        case "paper":
            return vsPaper(playerSelection);
            break;
        case "scissors":
            return vsScissors(playerSelection);
            break;
    }
}

function getPlayerSelection() {
    let inputValue=prompt("Choose rock, paper, or scissors");
    let lowerValue=inputValue.toLowerCase();
    switch (lowerValue) {
        case "r":
            return "rock";
            break;
        case "p":
            return "paper";
            break;
        case "s":
            return "scissors";
            break;
    }
    while (!((lowerValue==="rock")||(lowerValue==="paper")||(lowerValue==="scissors"))) { 
        let inputValue=prompt("That is not a valid choice.  Choose rock, paper, or scissors:");
        let lowerValue=inputValue.toLowerCase();
    }
    return lowerValue;
}

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        let playerSelection = getPlayerSelection();
        let outcome=playRound(playerSelection, computerPlay());
        switch (true) {
            case outcome.includes("win"): 
                roundWins++;
                console.log(`Round ${i}: ${outcome}\n`);
                break;
            case outcome.includes("lose"):
                roundLosses++;
                console.log(`Round ${i}: ${outcome}\n`);
                break;
            default:
                roundTies++;
                console.log(`Round ${i}: ${outcome}.  Repeating round due to tie.\n`);
                i--;
        }
    }
    switch (true) {
        case (roundWins > roundLosses):
            console.log(`You win!  The score was ${roundWins} to ${roundLosses}.`);
            break;
        case (roundLosses > roundWins):
            console.log(`You lose!  The score was ${roundWins} to ${roundLosses}.`);
            break;
        default:
            console.log(`You tied.  The score was ${roundWins} to ${roundLosses}.`);
    }
}

let roundWins=0;
let roundLosses=0;
let roundTies=0;
let gameWins=0;
let gameLosses=0;
let gameTies=0;

game(5);
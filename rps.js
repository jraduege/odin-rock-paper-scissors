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

const buttons=document.querySelectorAll("button");
const result=document.querySelector(".roundResult");
const scoreboard=document.querySelector(".scoreboard");
const games=document.querySelector(".gameOutcome");
const reset=document.querySelector(".reset");
reset.addEventListener("click", handleReset);

buttons.forEach(button => addEventListener("click", handleClick));

function handleClick(e) {
    const wasClicked = e.target.className;
    if (roundWins < 5 && roundLosses < 5) {
        if (!(wasClicked==="rock"||wasClicked==="paper"||wasClicked==="scissors")){
            return ""
        } else {
            let currentRound = playRound(wasClicked,computerPlay());
            result.textContent = currentRound;
            switch (true) {
                case currentRound.includes("win"): 
                    roundWins++;
                    break;
                case currentRound.includes("lose"):
                    roundLosses++;
                    break;
                default:
                    roundTies++;
            }
            updateScore();
        }
    } else {
        result.textContent = "You must reset to start another game";
    }
}

function updateScore() {
    scoreboard.textContent= `Wins: ${roundWins}
    Losses: ${roundLosses}
    Ties: ${roundTies}`
    if (roundWins>=5) {
        gameWins++;
        games.textContent=`You Win!  Your record is now ${gameWins} wins and ${gameLosses} losses.`;
    }
    if (roundLosses>=5) {
        gameLosses++;
        games.textContent=`Bummer, you lose.  Your record is now ${gameWins} wins and ${gameLosses} losses.`;
    }
}



function handleReset() {
    roundWins=0;
    roundLosses=0;
    roundTies=0;
    result.textContent="";
    scoreboard.textContent="";
    games.textContent="";
}



let roundWins=0;
let roundLosses=0;
let roundTies=0;
let gameWins=0;
let gameLosses=0;
let gameTies=0;


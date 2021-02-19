let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget=()=> {
    return Math.floor(Math.random() * 10)
}

let compareGuesses = (humanGuess,computerGuess,secretNumber)=>{
    let humanValue= Math.abs(humanGuess-secretNumber);
    let computerValue=Math.abs(computerGuess-secretNumber);
    if(humanValue===computerValue){
        return true;
    }
    else if(humanValue<computerValue){
        return true
    }
    else {
        return false;
    }
}

let updateScore=(whoWon)=>{
    if (whoWon==='human'){
        return humanScore++;
    }
    else if (whoWon==='computer'){
        return computerScore++;
    }
}

let advanceRound=()=>{
    currentRoundNumber++;
}


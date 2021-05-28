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

/*

// Alternate solution with my own abs method 
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
    const randomNumber = Math.floor(Math.random()* 10)
    return randomNumber;
}
let randomNumber=generateTarget();

const absVal = guess =>{
    if (guess<0){
        guess=guess*-1;
        return guess;
    }
}

const compareGuesses = (humanGuess,computerGuess,randomNumber)=>{
    let humanCloseness=humanGuess-randomNumber;
    let computerCloseness = computerGuess-randomNumber;
    let humanFinal = absVal(humanCloseness);
    let computerFinal = absVal(computerCloseness);
    if (humanFinal<computerFinal){
        return true;
    }
    else if (humanFinal>computerFinal){
        return false;
    }
    else if(humanFinal===computerFinal){
        return true;
    }
}

const updateScore = (winner)=>{
    let humanScore;
    let computerScore;
    if(winner==='human'){
        humanScore= humanScore+1;
    }
    else if (winner==='computer'){
        computerScore=computerScore+1;
    }
}

const advanceRound=()=>{
    currentRoundNumber = currentRoundNumber + 1;

}
*/

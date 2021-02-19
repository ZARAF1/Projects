// get Users choice

const getUserChoice = userInput =>{
    userInput=userInput.toLowerCase();
    if(userInput=== 'rock'|| userInput==='paper' || userInput==='scissors' || userInput==='bomb'){
        return userInput;
    }
    else{
        return 'Invalid Input please correct'
    }
}

// get computers choice
let getComputerChoice = () => {
    let randomNumber=Math.floor(Math.random()*3);
    if (randomNumber===0){
        return 'rock';
    }
    else if (randomNumber===1){
        return 'paper'
    }
    else{
        return 'scissors'
    }
}


// determine a winner
function determineWinner(userChoice,computerChoice){
    if (userChoice===computerChoice){
        return 'Game is a tie!'
    }
    if(userChoice==='rock'){
        if(computerChoice==='paper'){
            return 'Computer won!'
        }
        else{
            return 'User won!'
        }
    }

    if (userChoice==='paper'){
        if(computerChoice==='scissors'){
            return 'Computer won!'
        }
        else{
            return 'User won!'
        }
    }

    if (userChoice==='scissors'){
        if(computerChoice==='rock'){
            return 'Computer won!'
        }
        else{
            return 'User won!'
        }
    }

    if(userChoice==='bomb'){
        if(computerChoice==='rock'){
            return "User won!";
        }
        else if(computerChoice==='paper'){
            return 'User won!'
        }
        else{
            return "User won!";
        }
    }
}

// start the game

function playGame(){
    let userChoice=getUserChoice('bomb');
    let computerChoice=getComputerChoice();
    console.log('Users Choice is : ' + userChoice)
    console.log('Computers choice is : ' + computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
}

playGame()


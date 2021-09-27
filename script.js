function computerPlay(){
    let randomPick = Math.floor(Math.random()*3)+1;
    let handForm = ["Rock", "Paper", "Scissors"];
    return (handForm[randomPick-1]);
}

// TEST

let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(computerSelection);
let playerPick = playerSelection.toLowerCase(); 
let computerPick = computerSelection.toLowerCase();

function playRound(playerPick, computerPick){ 
    ///////////////////////////// 
    /* DRAW FUNCTION FOR EACH */
    ///////////////////////////
    if(playerPick == computerPick){
        return "Draw, each of you picked " + playerSelection;
    }
    /////////////////////////////
    /*    ROCK WIN OR LOSE    */
    ///////////////////////////
    else if(playerPick=="rock" && computerPick=="scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if(playerPick=="rock" && computerPick=="paper"){
        return "You Lose! Paper beats Rock";
    }
    /////////////////////////////
    /*  SCISSORS WIN OR LOSE  */
    ///////////////////////////
    else if(playerPick=="scissors" && computerPick=="rock"){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerPick=="scissors" && computerPick=="paper"){
        return "You Win! Scissors beats Paper";
    }
    /////////////////////////////
    /*    PAPER WIN OR LOSE   */
    ///////////////////////////
    else if(playerPick=="paper" && computerPick=="rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerPick=="paper" && computerPick=="scissors"){
        return "You Win! Scissors beats Paper";
    }
    else{
        return "Something went wrong or do you not pick any hand. So if you don't play, you can't lose either?!"
    }
}

function game(){
    
}

console.log(playRound(playerPick, computerPick));
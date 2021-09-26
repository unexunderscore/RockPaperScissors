let computerPlay = function(){
    let randomPick = Math.floor(Math.random()*3)+1;
    let handForm = ["Rock", "Paper", "Scissors"];
    console.log(handForm[randomPick-1]);
}
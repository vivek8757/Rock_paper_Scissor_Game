function getComputerChoice(){
    let computerChoice=Math.floor((Math.random()*100))+1;
    if( computerChoice>0 && computerChoice<33.33){
        computerChoice="Rock";
    }else if(computerChoice>33.33 && computerChoice<66.66){
        computerChoice="Paper";
    }else{
        computerChoice="Scissor";
    }
    return computerChoice;
}
let computercount=0;
let playercount=0;

function play(playerSelection,computerSelection){
    // playerSelection=prompt("enter your choice Rock,Paper and Scissor");
    // computerSelection=getComputerChoice();
    if((playerSelection=="Rock"||playerSelection=="rock")&&computerSelection=="Scissor"){
        console.log("You win! Rock Beat Scissor");
        console.log("Computer Choice:"+computerSelection);
        playercount++;

    }else if((playerSelection=="Scissor"||playerSelection=="scissor")&&computerSelection=="Rock"){
        console.log("You Loose! Rock Beat Scissor");
        console.log("Computer Choice:"+computerSelection);
        computercount++;

    }else if((playerSelection=="Rock"||playerSelection=="rock")&&computerSelection=="Paper"){
        console.log("You Loose! Paper Beat Rock");
        console.log("Computer Choice:"+computerSelection);
        computercount++;

    }else if((playerSelection=="Paper"||playerSelection=="paper")&&computerSelection=="Rock"){
        console.log("You Win! Paper Beat Rock");
        console.log("Computer Choice:"+computerSelection);
        playercount++;

    }else if((playerSelection=="Paper"||playerSelection=="paper")&& computerSelection=="Scissor"){
        console.log("You Loose! Scissor Beat Paper");
        console.log("Computer Choice:"+computerSelection);
        computercount++;

    }else if((playerSelection=="Scissor"||playerSelection=="scissor")&& computerSelection=="Paper"){
        console.log("You Win! Scissor Beat Paper");
        console.log("Computer Choice:"+computerSelection);
        playercount++;

    }else{
        console.log("Draw/Tie");
    }
}
function decidewinner(){
    if(computercount>playercount){
        console.log("You Loose! computer win by"+computercount+"-"+playercount);
    }else if(playercount>computercount){
        console.log("You win! by "+playercount+"-"+computercount+" Computer loose");
    }else{
        console.log("Draw");
    }

}

function playgame(){
    for(let i=0;i<5;i++){
        let playerSelection=prompt("enter your choice Rock,Paper and Scissor");
        let computerSelection=getComputerChoice();
        console.log("Your Choice:"+playerSelection);
        play(playerSelection,computerSelection);
    }
}
playgame();
decidewinner();

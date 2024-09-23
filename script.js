let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let score = document.querySelector("#score");
let result = document.querySelector("#result");

let yourMove = null;
let computerChoice = ()=>{
    let options = ["Rock","Paper","Scissors"];
    let randonIdx = Math.floor(Math.random() * 3) ;
    let computerMove = options[randonIdx];
    return computerMove;
};

let yourScore = 0;
let computerScore = 0;

rock.addEventListener("click",()=>{
    yourMove="Rock";
    computerMove=computerChoice();
    if(yourMove==computerMove){
        result.innerText=`You select ${yourMove}. Computer selects ${computerMove}. Match Tied`;
        result.style.backgroundColor="black";
        result.style.color="white";
        score.innerText=`You:${yourScore} | Computer:${computerScore}`
    }
    else if(yourMove==="Rock" && computerMove==="Paper"){
        result.innerText=`You select ${yourMove}. Computer selects ${computerMove}. You Lose`
        result.style.backgroundColor="red";
        result.style.color="white";
        computerScore++;
        score.innerText=`You:${yourScore} | Computer:${computerScore}`
    }
    else if(yourMove==="Rock" && computerMove==="Scissors"){
        result.innerText=`You select ${yourMove}. Computer selects ${computerMove}. You Win`
        result.style.backgroundColor="greenYellow";
        result.style.color="black";
        yourScore++;
        score.innerText=`You:${yourScore} | Computer:${computerScore}`
    }
})

paper.addEventListener("click",()=>{
    yourMove="Paper";
    computerMove=computerChoice();
    if(yourMove==computerMove){
        result.innerText=`You select ${yourMove}. Computer selects ${computerMove}. Match Tied`;
        result.style.color="white";
        result.style.backgroundColor="black";
        score.innerText=`You:${yourScore} | Computer:${computerScore}`
    }
    else if(yourMove==="Paper" && computerMove==="Scissors"){
        result.innerText=`You select ${yourMove}. Computer selects ${computerMove}. You Lose`
        result.style.backgroundColor="red";
        result.style.color="white";
        computerScore++;
        score.innerText=`You:${yourScore} | Computer:${computerScore}`
    }
    else if(yourMove==="Paper" && computerMove==="Rock"){
        result.innerText=`You select ${yourMove}. Computer selects ${computerMove}. You Win`
        result.style.backgroundColor="greenYellow";
        result.style.color="black";
        yourScore++;
        score.innerText=`You:${yourScore} | Computer:${computerScore}`
    }
})

scissors.addEventListener("click",()=>{
    yourMove="Scissors";
    computerMove=computerChoice();
    if(yourMove==computerMove){
        result.innerText=`You select ${yourMove}. Computer selects ${computerMove}. Match Tied`;
        result.style.color="white";
        result.style.backgroundColor="black";
        score.innerText=`You:${yourScore} | Computer:${computerScore}`
    }
    else if(yourMove==="Scissors" && computerMove==="Rock"){
        result.innerText=`You select ${yourMove}. Computer selects ${computerMove}. You Lose`
        result.style.backgroundColor="red";
        result.style.color="white";
        computerScore++;
        score.innerText=`You:${yourScore} | Computer:${computerScore}`
    }
    else if(yourMove==="Scissors" && computerMove==="Paper"){
        result.innerText=`You select ${yourMove}. Computer selects ${computerMove}. You Win`
        result.style.backgroundColor="greenYellow";
        result.style.color="black";
        yourScore++;
        score.innerText=`You:${yourScore} | Computer:${computerScore}`
    }
})

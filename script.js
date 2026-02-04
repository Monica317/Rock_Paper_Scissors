let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscores = document.querySelector("#user");
const compscores = document.querySelector("#comp");


const genCompChoice = () =>{
  const options = ["rock","paper","scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

const drawGame = () => {
  console.log("Game is draw");
   msg.innerText = ("Game was draw. Play again.");
   msg.style.backgroundColor = "#081b31";
}
let userWin=true;
const showWinner = (userWin, choiceId ,compChoice) => {
  if(userWin){
    user++;
    userscores.innerText = user;
    msg.innerText = `You win! Your ${choiceId} beats ${compChoice}.`;
     msg.style.backgroundColor = "green";
  }else{
     comp++;
    compscores.innerText = comp;
     msg.innerText = `You lose! ${compChoice} beats your ${choiceId}.`;
      msg.style.backgroundColor = "red";
  }
}

const playGame = (choiceId) =>{
  console.log("user Choice =",choiceId)
  const compChoice = genCompChoice();
  console.log("comp Choice =",compChoice);
  
  if(choiceId === compChoice){
    drawGame();
  } else{
    // let userWin = true;
    if(choiceId === "rock"){
     userWin = compChoice === "paper" ? false : true;
    } else if(choiceId === "paper"){
     userWin = compChoice === "scissors" ? false : true;
    }else{
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, choiceId ,compChoice)
  }
};


choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const choiceId = choice.getAttribute("id");
   console.log(choiceId,"was clicked");
   playGame(choiceId);
  })
})

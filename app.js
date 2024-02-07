let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx =  Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock,paper , scissors
};

const drawGame = () => {
    msg.innerText = "Game was Draw, play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
    } else {
       compScore++;
       compScorePara.innerText = compScore;
       msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
       msg.style.backgroundColor = "red";
    }
 };

const playGame = (userChoice) => {
   console.log("user choice = ",userChoice);
   //generate computer choice
   const compChoice = generateCompChoice();
   console.log("comp choice = ", compChoice);

   if(userChoice === compChoice) {
    //draw condition
    drawGame();
   } else {
    let userWin = true;
    if(userChoice === "rock") {
        //sci,ppr
      userWin =  compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        //rock,sci
        userWin = compChoice === "scissors" ? false : true; 
    } else {
        //rock,ppr
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   } 
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =  choice.getAttribute("id");
        console.log("userChoice:", userChoice);
        playGame(userChoice);
    });
});


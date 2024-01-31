let userScore=0;
let compScore=0;

let userScoreDisplay=document.querySelector("#user-score");

let compScoreDisplay=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
console.log(msg)


let compDisplay=document.querySelector("#compDisplay")
let userDisplay=document.querySelector("#userDisplay")

const genCompChoice=()=>{
  const options=["rock","paper","scissor"]
  const randIdx = Math.floor(Math.random() * 3);
  compDisplay.innerHTML=options[randIdx];
  return options[randIdx];
}

const playGame=(userChoice) => {
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=" ,compChoice);
    if(compChoice===userChoice){
       
        msg.innerHTML="Game was draw";
        setTimeout(function(){ 
            msg.style.backgroundColor = "blue";
        });
       
    }else{
                      //user win condition

            if (userChoice==="rock" && compChoice==="scissor"      ||               userChoice==="paper" && compChoice==="rock" ||           userChoice==="scissor" && compChoice==="paper" ){

                msg.innerHTML="You win";
                msg.style.backgroundColor="green"
                userScore= userScore+1
                
            }
            
              
            else{
                console.log("computer win");
                msg.innerHTML="You Lose";
                compScore=compScore+1;
                msg.style.backgroundColor="red"
               
            }
            userScoreDisplay.innerHTML=userScore;
            compScoreDisplay.innerHTML=compScore;
        }
};

choices.forEach((choice) => { 
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        userDisplay.innerHTML=userChoice;
        playGame(userChoice);

    });
});




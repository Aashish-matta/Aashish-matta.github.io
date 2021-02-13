let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("Comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
    

function getComputerchoice() {
    const choices = ['r','p','s'];
    const randomnumber = Math.floor(Math.random () * 3);
    return choices[randomnumber];
}



function converttoword(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";  
}
 
 
function win( userchoice ,computerchoice ) {
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userchoice + " beats " + computerchoice +  " You Win!";
    
}
function lose( computerchoice , userchoice) {
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerchoice + " beats " + userchoice +  " You lose!";
}
function draw( userchoice , computerchoice) {
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;   
    result_p.innerHTML = userchoice + " equals " + computerchoice +  " Draw!";
}



function game (userchoice) {
    const computerchoice = getComputerchoice();
    switch (userchoice +  computerchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice + computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice + computerchoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userchoice + computerchoice);
    }
        
}


function main() {
rock_div.addEventListener('click', function() {
    game("r");
} )

paper_div.addEventListener('click', function() {
    game("p");
} )

scissors_div.addEventListener('click', function() {
    game("s") ;
} )
}

main();
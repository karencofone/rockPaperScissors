// * DECLARACIÓN DE VARIABLES

let userScore = 0;
let pcScore = 0;
let userScoreSpan = document.getElementById("userScore");
let pcScoreSpan = document.getElementById("pcScore");
let scoreBoard = document.getElementById("scoreBoard");
let result = document.getElementById("result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

// * RANDOM PC OPTION

function getPcOption(){
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};

// * USER OPTION: el click que haga se va a pasar como parámetro a game()

function main() {
    rock.addEventListener('click', function(){
        game("rock")
    })
    
    paper.addEventListener('click', function(){
        game("paper")
    })
    
    scissors.addEventListener('click', function(){
        game("scissors")
    })  
};

main();

// * FUNCIÓN DEL JUEGO

function game(userOption) {
    let pcOption = getPcOption()
    
    switch (userOption + pcOption) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("USER WINS");
            win(userOption, pcOption);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("USER LOOSE");
            lose(userOption, pcOption);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("DRAW");
            draw(userOption, pcOption)
            break;
    }
};

// * FUNCIÓN GANAR

function win(user, pc){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    pcScoreSpan.innerHTML = pcScore;
    result.innerHTML = user + " beats " + pc + ", you win!🔥";
};

// * FUNCIÓN PERDER

function lose(user, pc){
    pcScore++;
    pcScoreSpan.innerHTML = userScore;
    userScoreSpan.innerHTML = pcScore;
    result.innerHTML = user + " loses against " + pc + ", you lose!☠️";
};

// * FUNCIÓN EMPATE

function draw(user, pc){
    pcScoreSpan.innerHTML = userScore;
    userScoreSpan.innerHTML = pcScore;
    result.innerHTML = user + " ties with " + pc + ", it's a draw!🤝";
};


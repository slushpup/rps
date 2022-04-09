const btns = document.querySelectorAll("#btn");
const container = document.querySelector("#game");

let wins = 0;
let losses = 0;
let games = 0;

btns.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (games === 5) {
            resetGame();
        }
        let p = e.target.id;
        let c = computerPlay();
        console.log(p,c)
        result = playRound(p,c);
        updateScore(result,p,c);
        console.log(wins,losses,games);    
    })
})

function capitalFirst(s){
    return s.slice(0,1).toUpperCase() + s.slice(1).toLowerCase();
}

function calculateWinner(){
    if (wins > losses) {
        displayResult(wins + " wins to " + losses + " loses: You win!");
    }
    else if(wins < losses) {
        displayResult(wins + " wins to " + losses + " losses: You lose!");
    }
    else {
        displayResult(wins + " wins to " + losses + " losses: Its a Tie!");
    }
}

function computerPlay(){
    let hands = ["Rock","Paper","Scissors"];
    return hands[Math.floor(Math.random() * 3)];
}

function displayResult(str){
    const r = document.createElement('p');
    r.textContent = str;
    container.appendChild(r);
}

function updateScore(result,player,comp){
    if (result == "win")
        {
            wins += 1;
            displayResult(wins + ":" + losses + " " + player + " beats " + comp );
        }
    else if (result == "lose")
        {
            losses += 1;
            displayResult(wins + ":" + losses  + " " + player + " loses to " + comp );
        } 
    else {
        displayResult(wins + ":" + losses + " " + player + " ties with " + comp );
    }
    games += 1;
    if (games === 5) {
        calculateWinner();
    }
}

function resetGame() {
    wins = 0;
    losses = 0;
    games = 0;
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalFirst(playerSelection)
    computerSelection = capitalFirst(computerSelection)
    if (playerSelection == computerSelection)
    {
        return "tie";
    }
    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            return "win";
        }
        else {
            return "lose";
        }
    }
    else if  (playerSelection == "Scissors"){
        if (computerSelection == "Paper") {
            return "win";
        }
        else {
            return "lose";
        }
    }
    else if  (playerSelection == "Paper"){
        if (computerSelection == "Rock") {
            return "win";
        }
        else {
            return "lose";
        }
    }
}



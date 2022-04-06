function capital(s){
    return s.slice(0,1).toUpperCase() + s.slice(1).toLowerCase()
}

function calculateWinner(win, lose){
    if (win > lose) {
        console.log(win + " wins to " + lose + " loses: Final Winner!")
    }
    else if(win < lose) {
        console.log(win + " wins to " + lose + " loses: Defeated!")
    }
    else {
        console.log(win + " wins to " + lose + " loses: Its a Tie!")
    }
}

function computerPlay(){
    let hands = ["Rock","Paper","Scissors"]
    return hands[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capital(playerSelection)
    computerSelection = capital(computerSelection)
    if (playerSelection == computerSelection)
    {
        console.log(playerSelection + " and " + computerSelection + " a Tie!")
        return "tie"
    }
    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            console.log("You Win - " + playerSelection + " beats " + computerSelection) 
            return "win"
        }
        else {
            console.log("You Lose - " + computerSelection + " beats " + playerSelection)
            return "lose"
        }
    }
    else if  (playerSelection == "Scissors"){
        if (computerSelection == "Paper") {
            console.log("You Win - " + playerSelection + " beats " + computerSelection) 
            return "win"
        }
        else {
            console.log("You Lose - " + computerSelection + " beats " + playerSelection)
            return "lose"
        }
    }
    else if  (playerSelection == "Paper"){
        if (computerSelection == "Rock") {
            console.log("You Win - " + playerSelection + " beats " + computerSelection) 
            return "win"
        }
        else {
            console.log("You Lose - " + computerSelection + " beats " + playerSelection)
            return "lose"
        }
    }
}

function game() {
    let games = 5
    let wins = 0
    let losses = 0
    for (let index = 0; index < games; index++) {
        p = prompt("")
        c = computerPlay()
        result = playRound(p,c)
        if (result == "win")
        {
            wins += 1
        }
        if (result == "lose")
        {
            losses += 1
        } 
    }
    calculateWinner(wins,losses)
}

game()



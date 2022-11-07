const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
    play(0);
})

paper.addEventListener("click", () => {
    play(1);
})

scissors.addEventListener("click", () => {
    play(2);
})

var score = 0;

function play(usrChoise){
    var cpuChoise = Math.floor(Math.random() * 3); //return int 0 to 3
    if (cpuChoise == 0){
        text = "Computer chooses rock. "
    }
    if (cpuChoise == 1){
        text = "Computer chooses paper. "
    }
    if (cpuChoise == 2){
        text = "Computer chooses scissors. "
    }
    if (usrChoise == cpuChoise){
        text = text + "It's a tie!"
    }

    else if (usrChoise == 0) {
            if (cpuChoise == 1){
                text = text + "You lose!";
                score--;
            }
            else {
                text = text + "You win!";
                score++;
            }
        }
    else  if (usrChoise == 1) {
            if (cpuChoise == 0){
                text = text + "You win!";
                score++;
            }
            else {
                text = text + "You lose!";
                score--;
            }
        }
    else {
        if (cpuChoise == 1){
            text = text + "You win!";
            score++;
        }
        else {
            text = text + "You lose!";
            score--;
        }
    }
    document.querySelector('.info').innerHTML = text;
    document.querySelector('.score').innerHTML = "Score: " + score;
} 
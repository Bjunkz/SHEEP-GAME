const gameBoard = document.querySelector(".game-board")
const box = document.querySelectorAll(".box")
const score = document.querySelector('#score')
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', startGame)
const description = document.getElementById("description");
const time = document.getElementById("time");
const sheep = document.querySelector("#caughtSheep")
const sheepImg = "<img src='little-sheep.png'>"

let level=2000
let timer;
let sheepCatcher;
let currentScore = 0;

//STARTAR SPELET OCH TIMERN
function startGame() {
    if(timer){
        clearInterval(timer);
    }
    if(sheepCatcher){
        clearInterval(sheepCatcher);
    }

    sheep.innerHTML= ""

    let timeLeft = 20; 
    timer = setInterval(function () {
        timeLeft --

        //break timer countdown 10-0
        if (timeLeft == 0) {
            clearInterval(timer);
            clearInterval(sheepCatcher);
            alert("Sorry, tiden är slut")
        };
        
        time.innerHTML = "Tid kvar: " + timeLeft;
        console.log(timeLeft);
    }, 1000);
    
    placeSheep();
    sheepCatcher = setInterval(placeSheep, level)

    // if (currentScore == 3) {
    //     clearInterval(timer);
    //     clearInterval(sheepCatcher);
    //     alert("grattis nästa nivå")
    // };
};

// PLACERAR ETT FÅR I EN RANDOM BOX 
function placeSheep(){
    box.forEach((item, index) => item.classList.remove('sheep'))
    let number = Math.floor(getRandomArbitrary(1, 9))
    let div = document.getElementById(number)
    div.classList.add('sheep')
};

//GENERERAR EN SLUPMÄSSIG SIFFRA MELLAN MIN OCH MAX
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

 //RÄKNAR FÅREN NÄR MAN KLICKAR PÅ DEM OCH STOPPAR IN FÅREN I HAGEN
gameBoard.addEventListener('click', function (e) {
    
    if (e.target.classList.contains('sheep')) {
        currentScore++;
        
        // varje gång man träffar ett får går det fortare, funkar dock först när man startar om
        // clearInterval(sheepCatcher); 
        // sheepCatcher = setInterval(placeSheep, level); fungerar inte, ta bort?
        console.log("level: ",level)
        score.innerHTML = "Fångade får: " + currentScore
        e.target.classList.remove('sheep')
        sheep.insertAdjacentHTML("beforeend", sheepImg);
        console.log("currentScore", currentScore);

        
        if (currentScore === 3) {
            alert("Grattis, du har klarat första nivån");
            level-=80;
        };
    };

});


// fåret dyker upp på en random plats


const gameBoard = document.querySelector(".game-board")
const box = document.querySelectorAll(".box")
const score = document.querySelector('#score')
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', startGame)
const description = document.getElementById("description");
const time = document.getElementById("time");

let level="2000"
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
    let timeLeft = 20; 
    timer = setInterval(function () {
        timeLeft --

        //break timer countdown 10-0
        if (timeLeft == 0) {
            clearInterval(timer);
            clearInterval(sheepCatcher);
        };
        time.innerHTML = "Tid kvar: " + timeLeft;
        console.log(timeLeft);
    }, 1000);
    
    box.forEach((item, index) => item.classList.remove('sheep'))
    let number = Math.floor(getRandomArbitrary(1, 9));
    let div = document.getElementById(number);
    div.classList.add('sheep');

        sheepCatcher = setInterval(function () {
        box.forEach((item, index) => item.classList.remove('sheep'))
        let number = Math.floor(getRandomArbitrary(1, 9))
        let div = document.getElementById(number)
        div.classList.add('sheep')
    }, level)
};

//GENERERAR EN SLUPMÄSSIG SIFFRA MELLAN MIN OCH MAX
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

 //RÄKNAR FÅREN NÄR MAN KLICKAR PÅ DOM
gameBoard.addEventListener('click', function (e) {
    
    // score.innerHTML = "Poäng: "+ currentScore;
    if (e.target.classList.contains('sheep')) {
        currentScore++
        score.innerHTML = "Fångade får: " + currentScore
        e.target.classList.remove('sheep')
    };

});
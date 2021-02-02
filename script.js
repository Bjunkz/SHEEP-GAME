// fåret dyker upp på en random plats
let level="2000"

const gameBoard = document.querySelector(".game-board")
const box = document.querySelectorAll(".box")
const score = document.querySelector('#score')
let currentScore = 0;
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', startGame)
const description = document.getElementById("description");
description.appendChild(startBtn);
const time = document.getElementById("time");

time.innerHTML = "Time left: 10";

function startGame() {
    let timeLeft = 20; 
    let timer = setInterval(function () {
        timeLeft --

        //break timer countdown 10-0
        if (timeLeft == 0) {
            clearInterval(timer);
            clearInterval(sheepCatcher);
        };
        time.innerHTML = "Time left: " + timeLeft;
        console.log(timeLeft);
    }, 1000);
    
    box.forEach((item, index) => item.classList.remove('sheep'))
    let number = Math.floor(getRandomArbitrary(1, 9));
    let div = document.getElementById(number);
    div.classList.add('sheep');

    let sheepCatcher = setInterval(function () {
        box.forEach((item, index) => item.classList.remove('sheep'))
        let number = Math.floor(getRandomArbitrary(1, 9))
        let div = document.getElementById(number)
        div.classList.add('sheep')
    }, level)
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

gameBoard.addEventListener('click', function (e) {

    if (e.target.classList.contains('sheep')) {
        currentScore++
        score.innerHTML = currentScore
        e.target.classList.remove('sheep')
    };

});
// fåret dyker upp på en random plats
let level="2000"

const gameBoard = document.querySelector(".game-board")
const box = document.querySelectorAll(".box")
const score = document.querySelector('#score')
let currentScore = 0;
const startBtn = document.createElement("button");
startBtn.textContent = "starta";
startBtn.addEventListener('click', startGame)
const description = document.getElementById("description");
description.appendChild(startBtn);

function startGame() {
    setTimeout()
    setInterval(function () {
        box.forEach((item, index) => item.classList.remove('sheep'))
        let number = Math.floor(getRandomArbitrary(1, 9))
        let div = document.getElementById(number)
        div.classList.add('sheep')
    }, level)
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


gameBoard.addEventListener('click', function (e) {

    if (e.target.classList.contains('sheep')) {
        currentScore++
        score.innerHTML = currentScore
        e.target.classList.remove('sheep')
    };

})
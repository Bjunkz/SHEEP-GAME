// fåret dyker upp på en random plats

const gameBoard = document.querySelector(".game-board")
const box = document.querySelectorAll(".box")
const score = document.querySelector('#score')
let currentScore = 0;


setInterval(function (){
box.forEach((item, index) => item.classList.remove('sheep'))
let number = Math.floor(getRandomArbitrary(1,9))
let div = document.getElementById(number)
div.classList.add('sheep')
}, 2000)

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
 

gameBoard.addEventListener('click', function(e){

    if (e.target.classList.contains('sheep')){
        currentScore ++
        score.innerHTML = currentScore 
        e.target.classList.remove('sheep')  
    };

})
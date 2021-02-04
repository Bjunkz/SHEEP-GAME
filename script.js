const gameBoard = document.querySelector(".game-board")
const box = document.querySelectorAll(".box")
const score = document.querySelector('#score')
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', startGame)
const description = document.getElementById("description");
const time = document.getElementById("time");
const sheep = document.querySelector("#caughtSheep")
const sheepImg = "<img src='little-sheep.png'>"
const stopBtn = document.querySelector("#stopBtn")


let level=2000
let timer;
let sheepCatcher;
let currentScore = 0;
let timeLeft = 40; 
time.innerHTML = "Tid kvar: " + timeLeft;

// STOPPA ELLER STARTA OM SPELET
stopBtn.addEventListener('click', function(){
    clearInterval(timer);
    clearInterval(sheepCatcher);
    clearAnimal("sheep")
    clearAnimal("goat")
    score.innerHTML= "Fångade får: 0";
    timeLeft = 40
    time.innerHTML = "Tid kvar: " + timeLeft;
    currentScore = 0;
    sheep.innerHTML= ""

})

//STARTAR SPELET OCH TIMERN
function startGame() {
    if(timer){
        clearInterval(timer);
    }
    if(sheepCatcher){
        clearInterval(sheepCatcher);
    }


    timer = setInterval(function () {
        timeLeft --

        //break timer countdown 10-0
        if (timeLeft == 0) {
            clearInterval(timer);
            clearInterval(sheepCatcher);
            alert("Sorry, tiden är slut")
        };
        
        time.innerHTML = "Tid kvar: " + timeLeft;
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
    clearAnimal("sheep")
    let number = Math.floor(getRandomArbitrary(1, 9))
    let div = document.getElementById(number)
    div.classList.add('sheep')
    placeGoat()
};

// PLACERAR EN GET SOM GER MINUSPOÄNG OM MAN KLICKAR
function placeGoat (){
    clearAnimal("goat")
    let goatNumber = Math.random()
    let number = Math.floor(getRandomArbitrary(1, 9))
    let div = document.getElementById(number)
    if(goatNumber<0.3){
        div.classList.add('goat')

    }

}
//GENERERAR EN SLUPMÄSSIG SIFFRA MELLAN MIN OCH MAX
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};


// TAR BORT ANIMAL
function clearAnimal(animal){
    box.forEach((item, index) => item.classList.remove(animal))
}

 //RÄKNAR FÅREN NÄR MAN KLICKAR PÅ DEM OCH STOPPAR IN FÅREN I HAGEN
gameBoard.addEventListener('click', function (e) {
    
    if (e.target.classList.contains('sheep')) {
        currentScore++;
        
        // varje gång man träffar ett får går det fortare, funkar dock först när man startar om
        // clearInterval(sheepCatcher); 
        // sheepCatcher = setInterval(placeSheep, level); fungerar inte, ta bort?
        score.innerHTML = "Fångade får: " + currentScore
        e.target.classList.remove('sheep')
        sheep.insertAdjacentHTML("beforeend", sheepImg);

        
        if (currentScore === 5) {
            clearInterval(timer);
            clearInterval(sheepCatcher);
            alert("Grattis, du har klarat första nivån. Nu går det snabbare");
            level = 1300;
        };

        if (currentScore === 10) {
            clearInterval(timer);
            clearInterval(sheepCatcher);
            alert("Grattis, du har klarat andra nivån. Nu springer fåren ännu snabbare");
            level = 800;
        };

    };

    if (e.target.classList.contains('goat')) {
        currentScore--;
        score.innerHTML = "Fångade får: " + currentScore
        e.target.classList.remove('goat')
        e.target.classList.add('failGoat')
        let failGoat = setTimeout(function(){
            e.target.classList.remove('failGoat')

    }, 200)

        
        
    };

});


const rollButton = document.getElementById("rollButton")
const Mylabel = document.getElementById("Mylabel")
const min = 1;
const max = 6;
let randomNum;

rollButton.onclick = function(){
    randomNum = Math.floor(Math.random()* max) + min
    Mylabel.textContent = randomNum;
}
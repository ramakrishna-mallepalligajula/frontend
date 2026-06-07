const Decreasebtn = document.getElementById("Decreasebtn");
const Resetbtn = document.getElementById("Resetbtn");
const Increasebtn = document.getElementById("Increasebtn");
const countlabel = document.getElementById("countlabel");

let count = 0;

Increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

Decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

Resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

const Pi = 3.14
let radius;
let circumference;






document.getElementById("txt-sub").onclick = function(){
    radius = document.getElementById("my-txt").value
    radius = Number(radius)
    circumference = 2 * Pi * radius;
    document.getElementById("h3").textContent = circumference + `cm`;
}
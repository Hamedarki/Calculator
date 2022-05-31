"use strict"

//This function Display Time

let clock = document.getElementById("timer");
function myTime(){
    let myTimer = new Date();
    clock.innerHTML=myTimer.toLocaleTimeString();
}
setInterval(myTime, 1000);

//This function Refresh all the values

function refresh(){
    window.location.href= window.location.href
}

//This function Clear all the values

function clearScreen() {
    document.getElementById("result").value = "";
}

//This function Clear one item values

function clearItem(){
let a = document.getElementById("result").value;
let b = a.slice(0,-1);
document.getElementById("result").value = b;
}

//This function Display values

function display(value) {
document.getElementById("result").value += value;
}

//This function evaluates the expression and return result

function calculate() {
let c = document.getElementById("result").value;
let d = eval(c);
document.getElementById("result").value = d;
}

//This function Display Dark mode

function darkMode(){
    document.body.classList.toggle("dark");
}



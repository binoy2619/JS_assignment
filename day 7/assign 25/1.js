console.log("make a webpage that will ask the name of the user . Then will display a wecome message on the webpage . Also the webpage should also have a clock.using the toggle method of classList add a dark mode feature to the webpage.");

let name = prompt("Enter your name");
let title = document.getElementById("title");
title.innerText = `Welcome ${name}`;

let clock = document.getElementById("clock");
function ctime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    clock.innerText = time;
}
setInterval(ctime,1000);

let dark = document.getElementById("dark");
dark.classList.add('dark');

function change_color(){

    document.body.style.color = "white";
    document.body.style.fontFamily = 'Helvetica';
}
change_color();
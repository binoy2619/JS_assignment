console.log("write a program that will display the multiplication table of a number on the webpage. Take input from the user.")

let num = Number(prompt(" Enter the number "));
let title = document.getElementById("title");
title.innerText += `multiplication table of ${num}`;

let table = document.getElementById("table");
for(let i = 1; i<=10;i++){
    let j = num * i;
    table.innerHTML += `<li>${num} x ${i}   =  ${j}</li>`;
}


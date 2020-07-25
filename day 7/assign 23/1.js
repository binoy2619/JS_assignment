console.log("write a program that will iterate over an array of colors and change the background of the page after 5 seconds");

let arr = ["yellow","red","wheat","blue","black","green","white"]
let i = 0;
 function change_color(col){
    
    while(1){
    document.body.style.background = `${arr[i]}`;
    i++;
    break
    }
}

setInterval(change_color,5000);


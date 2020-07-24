// 1.
console.log("takes a positive number from the user") 

let num = Number(prompt("enter a positive number"));

while(1){
    if(  num > 0){
        break;
    }
        
    else{
        num = prompt("WRONG ! enter positive number");
    }
}

console.log(num);
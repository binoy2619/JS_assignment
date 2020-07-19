
let number = Number(prompt("Enter a number " , " 0 "));

let x = function(num = 0){
    if(num % 2 != 0){
        console.log(`The number entered is ${num} and number is odd`);
    }
    else{
        console.log(`The number entered is ${num} and number is even`);
    }
}

x(number);
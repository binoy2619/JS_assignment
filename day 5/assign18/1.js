console.log("check if the number entered by the user is prime or not");

// prime number

let num = Number(prompt("enter number u want check if it's a prime number or not"));
let j,i;
for( i=2;i<num;i++){
    for( j=2;j<i;j++){
        if(i%j == 0)
        break;
    }
    if(i == j){
        console.log(i);
    }
}
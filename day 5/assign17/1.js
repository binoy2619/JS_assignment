console.log("write a loop,where user enter number greater than 100 and if the user enter number other than greater tham 100,  then input again");

let num;
num = Number(prompt("enter number greater than 100"));
while(num < 100 || !Number.isInteger(num)){
    num = Number(prompt("wrong ! enter number greater than 100"))
}
if(num > 100){
    console.log("true")
    console.log("number is" , num);
}
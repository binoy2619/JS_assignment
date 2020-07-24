console.log("makes an array of numbers till the number is given by the user")

let size = Number(prompt("enter  a number"));
let arr = []
for(let i=1;i<=size ; i++){
    arr.push(i);
}

arr.forEach(i=>{
    console.log(i);
})
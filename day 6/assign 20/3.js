console.log("use higher order function to filter the odd numbers")

console.log("mixed array ");
let arr = [21,13,413,423,42512343,245,36,46,3,4,6,8,10];
arr.forEach(i=>{
    console.log(i);
})
console.log("odd array");
let new_arr = arr.filter(i=>i%2!=0)
new_arr.forEach(i=>{
    console.log(i);
})
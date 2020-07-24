console.log("genterate and  array of the cubes of the filtered numbers");

console.log("old array");
arr = [1,2,3,4,5,6,7,8];
arr.forEach(i=>{
    console.log(i);
})
console.log("new array");
let new_arr = arr.filter(i=>i>4).map(i=>i**3);
new_arr.forEach(element => {
    console.log(element);
});
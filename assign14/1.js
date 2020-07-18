console.log("spread operator in array");

let array = ["a1","a2","a3","a4"];
let copy_array = ["b1","b2","b3",...array,"c1","c2","c3"];
console.log(array);
console.log(copy_array);
// using ternary
let mark = Number(prompt("enter the marks"));

console.log(mark >= 90 ? `marks are ${mark} and grade is A` : mark >=80 ? `marks are ${mark} and grade is B`: mark >=70 ? `marks are ${mark} and grade is C`:`you are Fail`);
// string
// 1. search = searches a string for a specified value and returns the position of the match
 let str = "Please locate where 'locate' occurs!";
 console.log(str.search("locate"));
  
 // 2. slice = extracts a part of a string and returns the extracted part in a new    string

 let str1 = "Apple, Banana, Kiwi";
 console.log(str1.slice(7, 13));
 console.log(str1.slice(-12, -6));

 // 3. substring = is similar to slice()
 let str2 = "Apple, Banana, Kiwi";
 console.log(str2.substring(7, 13));

 // 4. substr() = If you omit the second parameter, substr() will slice out the rest of the string.
let str3 = "Apple, Banana, Kiwi";
 console.log(str3.substr(7));
 console.log(str3.substr(-4));


 // Array
 // 1. deleting a element
let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];   
console.log(fruits);

// 2. splice = The splice() method can be used to add new items to an array:
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits1);

// 3. tostring() = converts an array to a comma separated string 
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.toString());

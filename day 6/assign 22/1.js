console.log("using promises/async await/ fetch get the random todos from the json placeholder api. Amd log all the comleted todos to the console.");

fetch("https://jsonplaceholder.typicode.com/todos")
.then(i=> i.json()).then(i=>console.log(i));

console.log("destructuring the object");

const student = {
    name : "Helsinki",
    age : 24,
    projects : {
        dicegame: "two player dice game using javascript"
    }
}

const {name,age,projects:{dicegame}} = student;
console.log(name,age,dicegame);
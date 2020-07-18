console.log("calculator");

let i = prompt("enter (*) or (-) or (+) or (/) or (perc) or (sqrt) and also enter the two numbers sperated with a space");

let result = i.split(" ");
let obj = { operator: result[0],
            operand1: Number(result[1]),
            operand2: Number(result[2]) };

const {operator,operand1,operand2} = obj;

switch(operator){
    case "*": 
              console.log("multiplication");
              console.log(operand1 * operand2);
              break;

    case "-":
              console.log("subtraction");
              console.log(operand1 - operand2);
              break;

    case "+": 
              console.log("addition");
              console.log(operand1 + operand2);
              break;
            
    case "/":
              console.log("division");
              console.log(operand1 / operand2);
              break;

    case "perc": 
              console.log("percentage")
              console.log((operand1 / operand2) * 100);
              break;
    
    case "sqrt":
              console.log("square root");
              console.log(Math.sqrt(operand1));
              break;

    default:
             console.log("entered wrong operator");
             break;
}

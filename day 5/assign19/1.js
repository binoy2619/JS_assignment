console.log("arrow function")

/*function ask(question,yes,no){
    if(confirm(question)) 
        yes();
    else
        no();
}
ask("do you agree?",
function(){ alert("you agreed.");},
function(){ alert("you canceled the execution.");}
) */
// using arrow function

let ASK = (question,yes,no)=> {if(confirm(question)){yes();} else{no();}}
ASK("do you agree?",
function(){ alert("you agreed.");},
function(){ alert("you canceled the execution.");}
)

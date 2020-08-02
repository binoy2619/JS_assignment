let btn1 = document.getElementById("change");
btn1.onclick = function change(){
    document.body.style.background = "black";
    document.body.style.color = "Yellow";
    document.body.style.fontFamily = "Helvetica";
}


let btn = document.getElementById("btn");
let l = document.getElementById("list");
let rbtn = document.getElementById("rbtn");

btn.onclick =  function(){
    let t = document.getElementById("todo").value;
    let c = document.createElement("li");
    c.setAttribute("class","li")
    c.innerText = t
    l.appendChild(c);
    document.forms.myform.reset();

}

rbtn.onclick = function(){
    let t1 = document.getElementById("todo").value;
    let g = document.getElementById("list");
    let li = document.getElementsByClassName("li");
    let d = Array.from(li);
    d.forEach(i=>{
        if(i.innerText == t1){
            g.removeChild(i);
        }
        document.forms.myform.reset();
    })
    
}
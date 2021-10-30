const btn1 = document.querySelectorAll("button")
const screen = document.querySelector("h1")

const addText0 = () =>{
    screen.appendChild(document.createTextNode("C"));
}
const addText1 = () =>{
    screen.appendChild(document.createTextNode("/"));
}
const addText2 = () =>{
    screen.appendChild(document.createTextNode("*"));
}
const addText3 = () =>{
    screen.appendChild(document.createTextNode("del"));
}
const addText4 = () =>{
    screen.appendChild(document.createTextNode("7"));
}
const addText5 = () =>{
    screen.appendChild(document.createTextNode("8"));
}
const addText6 = () =>{
    screen.appendChild(document.createTextNode("9"));
}
const addText7 = () =>{
    screen.appendChild(document.createTextNode("-"));
}
const addText8 = () =>{
    screen.appendChild(document.createTextNode("4"));
}
const addText9 = () =>{
    screen.appendChild(document.createTextNode("5"));
}
const addText10 = () =>{
    screen.appendChild(document.createTextNode("6"));
}



function testFun (){
    alert("hi its me");
}







btn1[0].addEventListener("click", addText0) 
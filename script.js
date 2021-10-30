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
const addText11 = () =>{
    screen.appendChild(document.createTextNode("+"));
}
const addText12 = () =>{
    screen.appendChild(document.createTextNode("1"));
}
const addText13 = () =>{
    screen.appendChild(document.createTextNode("2"));
}
const addText14 = () =>{
    screen.appendChild(document.createTextNode("3"));
}
const addText15 = () =>{
    screen.appendChild(document.createTextNode("."));
}
const addText16 = () =>{
    screen.appendChild(document.createTextNode("("));
}
const addText17 = () =>{
    screen.appendChild(document.createTextNode("0"));
}
const addText18 = () =>{
    screen.appendChild(document.createTextNode(")"));
}
function testFun (){
    alert("hi its me");
}


btn1[0].addEventListener("click", testFun) 
btn1[1].addEventListener("click", addText1) 
btn1[2].addEventListener("click", addText2) 
btn1[3].addEventListener("click", addText3) 
btn1[4].addEventListener("click", addText4) 
btn1[5].addEventListener("click", addText5) 
btn1[6].addEventListener("click", addText6) 
btn1[7].addEventListener("click", addText7) 
btn1[8].addEventListener("click", addText8) 
btn1[9].addEventListener("click", addText9)
btn1[10].addEventListener("click", addText10)
btn1[11].addEventListener("click", addText11)
btn1[12].addEventListener("click", addText12)
btn1[13].addEventListener("click", addText13)
btn1[14].addEventListener("click", addText14)
btn1[15].addEventListener("click", addText15)
btn1[16].addEventListener("click", addText16)
btn1[17].addEventListener("click", addText17)
btn1[18].addEventListener("click", addText18)
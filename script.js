const btn1 = document.querySelector("button")
const screen = document.querySelector("h1")

const addText = () =>{
    screen.appendChild(document.createTextNode("7"));
}
function testFun (){
    alert("hi its me");
}
btn1.addEventListener("click", addText)
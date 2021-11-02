const btn1 = document.querySelectorAll("button")
const screen = document.querySelector("h1")

// classSelectors
const body = document.querySelector("body")
const mainDiv = document.querySelector("div")


// ---------themeFunctions
function changeTheme() {
    body.classList.toggle('dark');
    btn1.forEach( btn => btn.classList.toggle('btnStyleDark'));
    mainDiv.classList.toggle('mainBodyDark');
}


// ---------btnsFunctions--------

const addText0 = () => {
    screen.textContent = '';
}
const addText1 = () => {
    screen.appendChild(document.createTextNode(" / "));
}
const addText2 = () => {
    screen.appendChild(document.createTextNode(" * "));
}
const addText3 = () => {
    let text = screen.textContent;
    const textarr1 = text.split("");
    textarr1.pop()
    screen.textContent = textarr1.join('');
    // screen.appendChild(document.createTextNode("del"));
}
const addText4 = () => {
    screen.appendChild(document.createTextNode("7"));
}
const addText5 = () => {
    screen.appendChild(document.createTextNode("8"));
}
const addText6 = () => {
    screen.appendChild(document.createTextNode("9"));
}
const addText7 = () => {
    screen.appendChild(document.createTextNode(" - "));
}
const addText8 = () => {
    screen.appendChild(document.createTextNode("4"));
}
const addText9 = () => {
    screen.appendChild(document.createTextNode("5"));
}
const addText10 = () => {
    screen.appendChild(document.createTextNode("6"));
}
const addText11 = () => {
    screen.appendChild(document.createTextNode(" + "));
}
const addText12 = () => {
    screen.appendChild(document.createTextNode("1"));
}
const addText13 = () => {
    screen.appendChild(document.createTextNode("2"));
}
const addText14 = () => {
    screen.appendChild(document.createTextNode("3"));
}
const addText15 = () => {
    screen.appendChild(document.createTextNode("."));
}
const addText16 = () => {
    screen.appendChild(document.createTextNode("( "));
}
const addText17 = () => {
    screen.appendChild(document.createTextNode("0"));
}
const addText18 = () => {
    screen.appendChild(document.createTextNode(" )"));
}
const addText19 = () => {
    try {
        alert(eval(document.querySelector("h1").textContent));
    }
    catch {
        alert("Invalid Entry")
    }
}
function testFun() {
    // var h1Text = document.querySelector("h1").textContent;
    // alert(eval(document.querySelector("h1").textContent));
    alert('hi it\'s me i\'am working')
}

// ------------btns-----------
btn1[0].addEventListener("click", addText0)
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
btn1[19].addEventListener("click", addText19)

// theme btn event
btn1[20].addEventListener("click",changeTheme)
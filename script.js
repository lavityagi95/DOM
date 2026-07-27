
const heading =document.getElementById("heading");
const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");
const randomBtn = document.getElementById("randomBtn");


function changeColor(color) {
    heading.style.color = color;
}

redBtn.addEventListener("click", () => {
    changeColor("red");
});

greenBtn.addEventListener("click", () => {
    changeColor("green");
});

blueBtn.addEventListener("click", () => {
    changeColor("blue");
});

const color = ["yellow","orange"];

const messages = [
    "Hello JavaScript",
    "DOM is Awesome",
    "Keep Learning",
    "Frontend Developer",
    "Never Give Up"
];


randomBtn.addEventListener("click",randomcolour)

function randomcolour(){
    let index = Math.floor(Math.random()*messages.length);

    console.log(index)

    heading.style.color =color[index]
    heading.textContent = messages[index]
    
}
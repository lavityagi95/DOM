
const heading =document.getElementById("heading");
const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");
const randomBtn = document.getElementById("randomBtn");
const heading2 = document.getElementById("heading2")
const btn = document.getElementById("btn")
const nameInput = document.getElementById("nameInput")
const message  = document.getElementById("message");
const count  = document.getElementById("count")
const words  = document.getElementById("words")


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

const color = ["yellow","orange","pink","purple"];

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



btn.addEventListener("click",()=>{

    const name = nameInput.value.trim();
    if(name == ""){
        heading2.textContent = `Please enter your name`
    }else{
        heading2.textContent =  `Welcome ${name}`;

    }
    nameInput.value = ""
})

message.addEventListener("input",()=>{

    count.textContent = message.value.length;

    const words = message.value.trim() === ""
        ? 0
        : message.value.trim().split(/\s+/).length;

    wordCount.textContent = words;

})



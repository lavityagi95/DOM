const heading = document.getElementById("heading")
const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{

    heading.classList.toggle("completed")
})

const list = document.getElementById("list")
const btn = document.getElementById("btn")
const lastBtn = document.getElementById("lastBtn")
const secondBtn = document.getElementById("secondBtn")

btn.addEventListener("click",()=>{
    list.firstElementChild.style.color ="red"
})
secondBtn.addEventListener("click",()=>{
    list.children[1].style.color ="green"
})

lastBtn.addEventListener("click",()=>{
    list.lastElementChild.style.color ="blue"
})



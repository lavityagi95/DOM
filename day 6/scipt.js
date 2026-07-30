const list = document.getElementById("list");

list.addEventListener("click", (event) => {
 
    if (event.target.tagName === "LI") {

        event.target.classList.toggle("completed");
    }
        
    if(event.target.tagName === "BUTTON"){

       event.target.parentElement.remove();
    }
});

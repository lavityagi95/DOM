const inputTask = document.getElementById("inputTask");
const AddBtn = document.getElementById("AddBtn");
const TaskList = document.getElementById("TaskList")


AddBtn.addEventListener("click",()=>{
    
    const input = inputTask.value.trim();
    
    if(input === ""){
        return;
    }
    const li = document.createElement("li")
    
    li.textContent = input;
    TaskList.appendChild(li);
    
    const button =document.createElement("button")
    
    button.textContent ="done"
    li.appendChild(button);

    button.addEventListener("click",()=>{
        
        li.classList.toggle("complete")
    })
    
    const removeButton = document.createElement("button");

    removeButton.textContent ="remove"
    li.appendChild(removeButton)

    removeButton.addEventListener("click",()=>{

        li.remove();
    })


    inputTask.value = ""

})
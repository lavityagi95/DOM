const inputTask = document.getElementById("inputTask");
const AddBtn = document.getElementById("AddBtn");
const TaskList = document.getElementById("TaskList")


AddBtn.addEventListener("click",()=>{
    
    const input = inputTask.value.trim();
    
    if(input == ""){
        return;
    }
    const li = document.createElement("li")
    
    li.textContent = input;
    TaskList.appendChild(li);
    
    const button =document.createElement("button")
    
    button.textContent ="done"
    TaskList.appendChild(button);

    button.addEventListener("click",()=>{
        li.style.color = "green"
    })
    
    const removeButton = document.createElement("button");

    removeButton.textContent ="remove"
    TaskList.appendChild(removeButton)

    removeButton.addEventListener("click",()=>{

        TaskList.removeChild(li)
        TaskList.removeChild(button)
        TaskList.removeChild(removeButton)
    })


    inputTask.value = ""

})
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");






addBtn.addEventListener("click",()=>{
    const li = document.createElement("li")
    
    let input = taskInput.value;

    li.textContent = `${input}`

    taskList.appendChild(li);

})
let input =document.getElementById("input")
let tasks = document.getElementById("tasks")
let addBtn= document.getElementById("add-button")
let alltask =document.querySelectorAll(".task")
 
addBtn.addEventListener("click",e=>{
    e.preventDefault();
    addtask();
   
})

function addtask(){
    
    let taskText =input.value.trim();
    if(taskText=="")return;
    let task =document.createElement("div")
    task.classList.add("task")
    task.innerHTML= `<i class='bx bx-check check-icon'></i>
          <h3 class="task-name">${taskText}</h3>
          
          <i class="bx bxs-trash-alt delete-icon"></i>`
input.value="";
tasks.append(task); 
saveData()
 
}



document.addEventListener("click",e=>{
    console.log(e.target)
if(e.target.classList.contains("check-icon")){
   e.target.classList.toggle("complete-task")
   e.target.parentElement.classList.toggle("text-fade")
   saveData()
} else if(e.target.classList.contains("delete-icon")){
    e.target.parentElement.remove();
    saveData()
}

})


function saveData(){
    localStorage.setItem("data" ,tasks.innerHTML)
}

window.addEventListener("load",e=>{
    e.preventDefault()
    tasks.innerHTML = localStorage.getItem("data")
})
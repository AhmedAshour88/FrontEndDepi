let taskForm = document.getElementById("taskForm");
let addbtn = document.getElementById("addBtn");
let task =  document.getElementById("task");
let tblTasks = document.getElementById("tblTasks");

taskForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // prevent page reload 

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = function(){
    let cel = this.parentElement.parentElement.children[1];
    cel.style.textDecoration  = this.checked? 'line-through':'none'
   }
   let cell1 = document.createElement("td");
   cell1.appendChild(checkBox);
   let cell2 = document.createElement("td"); 
   cell2.innerText = task.value;
   let delBtn = document.createElement("button"); 
   delBtn.innerText = "delete"
   delBtn.onclick = function () {
    this.parentElement.parentElement.remove();
   }
   let cell3 = document.createElement("td"); 
   cell3.appendChild(delBtn);

   let row = document.createElement("tr"); 
   row.classList.add("row")
   row.appendChild(cell1);
   row.appendChild(cell2);
   row.appendChild(cell3);

   tblTasks.appendChild(row);

})
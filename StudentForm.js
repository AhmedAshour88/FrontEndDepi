let form = document.querySelector("form");
let stdName = document.getElementById("StudentName");
let stdGrade = document.getElementById("StudentGrade");
let add = document.getElementById("addBtn");
let tbl = document.getElementById("tblStudents");
let tableBody = document.querySelector('#tblStudents tbody');
let drpFilter = document.getElementById("drpFilter");
let drpSort = document.getElementById("drpSort");


/*
const pascalCase = (inputString) => {
    const inputArray = inputString.toLowerCase().split(" ");
    let outputString = "";
    for (let i = 0; i < inputArray.length; i++) {
        outputString += inputArray[i][0].toUpperCase();
        outputString += inputArray[i].slice(1);
        outputString += " ";
    }
    return outputString;
};
*/

const capitalizeFirstLetter = (inputString) => {
    return inputString[0].toUpperCase() + inputString.slice(1);
};

let students = [];

form.addEventListener('submit', function (event){
    
  let exists = false
    for(let s of students){
      if (s.name === stdName.value){
        exists = true;
        break;
      }
    }
    if(exists){
      throw console.error();
      }

    event.preventDefault(); // Prevent form from refreshing the page

    students.push({
        name: stdName.value.trim(),
        grade: parseInt(stdGrade.value)
    });

    renderTable();
})

function renderTable(){
      let filtered = [...students];

      // Filter
      const fltrVal = drpFilter.value;
      if (fltrVal === 'fail') {
        filtered = filtered.filter(s => s.grade < 60);
      } else if (fltrVal === 'success') {
        filtered = filtered.filter(s => s.grade >= 60);
      }
      
      // Sort
      const sortVal = drpSort.value;
      if (sortVal === 'name')
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      else if  (sortVal === 'grade')
        filtered.sort((a, b) => a.grade-b.grade);
      
    // Render rows
    // Clear only the tbody (not the whole table!)
    tableBody.innerHTML = '';
    // Re-render student rows
    filtered.forEach(student => {
      const nameColumn = document.createElement("td");
      nameColumn.innerText = capitalizeFirstLetter(student.name);

      const gradeColumn = document.createElement("td");
      gradeColumn.innerText = student.grade;
      
      const deleteButtonColumn = document.createElement("td");
      deleteButtonColumn.innerHTML = `<button>del</button>`;
      deleteButtonColumn.classList.add("student-delete");
      deleteButtonColumn.onclick = function () {
          console.log(this);
          console.log(this.parentElement);
          this.parentElement.remove();
      };

      const row = document.createElement('tr');
      row.appendChild(nameColumn);
      row.appendChild(gradeColumn);
      row.appendChild(deleteButtonColumn);

    tableBody.appendChild(row);
    });
}

drpFilter.addEventListener('change', renderTable);
drpSort.addEventListener('change', renderTable);



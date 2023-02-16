// table elements 
const table = document.querySelector("table tbody");
const createButton = document.querySelector("#create");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero to single-digit months
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero to single-digit days

  return `${year}-${month}-${day}`;
}

function generateMockData(){
  const data = [
    
    // ... add more items here
  ];
  let statusList = ["Waiting", "Failed", "Enabled", "Disabled"]
  let scheduleList = ["Daily", "Hourly", "Weekly", "Monthly"]
  for (let index = 0; index < 40; index++) {
    // Generate a random uppercase letter from A to Z
    let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      data.push(
        {
          Id: index,
          Name: "Task " + randomLetter,
          Status: statusList[Math.floor(Math.random()*4)],
          Schedule: scheduleList[Math.floor(Math.random()*4)],
          "Success-Count": 5,
          "Error-Count": 0,
          LastSuccess: formatDate(new Date()),
          LastError: formatDate(new Date()),
          Enabled: true,
          Retries: 3,
          Next: "2023-02-14"
        },
      );
  }
  window.data = data;
}



//event for check boxes when one of the rows toggled
function addEventListenerCheckbox(){
  table.addEventListener("change", (event) => {
    const checkbox = event.target;
    if (checkbox.tagName === "INPUT" && checkbox.type === "checkbox") {
        let checkedCheckboxes = table.querySelectorAll("input[type=checkbox]:checked");
        if (checkedCheckboxes.length > 0) {
          clearButton.style.display = "inline-block";
          deleteButton.style.display = "inline-block";
        } else {
          clearButton.style.display = "none";
          deleteButton.style.display = "none";
        }
    }
  });
}
  

function createCheckBox(){
  const checkboxTd = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkboxTd.appendChild(checkbox);
  addEventListenerCheckbox();

  return checkboxTd;
}


function createEditButton(item){
  const editButton = document.createElement("button");
  editButton.className = "btn btn-primary";
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
          window.location.href = "edit.html?id=" + item.Id;
          sessionStorage.setItem("editCronItem", JSON.stringify(item));
      });
  const editButtonTd = document.createElement("td");
  editButtonTd.appendChild(editButton);
  return editButtonTd;
}


function addEventListenerToCreateButton(){
  createButton.addEventListener("click", () => {
    window.location.href = "edit.html";
    sessionStorage.setItem("editCronItem", "");
  });
}


function addEventListenerToDeleteButton() {
  deleteButton.addEventListener("click", () => {
    const checkedCheckboxes = table.querySelectorAll("input[type=checkbox]:checked");
    checkedCheckboxes.forEach((checkbox) => {
      const row = checkbox.parentNode.parentNode;
      table.removeChild(row);
    });
    clearButton.style.display = "none";
    deleteButton.style.display = "none";
  });
}



function fillRow(tr, cronData){
  for (const key in cronData) {
    const td = document.createElement("td");
    td.textContent = cronData[key];
    td.setAttribute("id", key)
    tr.appendChild(td);
  }

}

function constructTable(){
  //note: window-data is used temporary, 
  //in c# project this data will come from api
  for (const item of window.data) {
    const tr = document.createElement("tr");
    const checkboxTd = createCheckBox();
    tr.appendChild(checkboxTd);
    
    fillRow(tr, item);
    // edit button for each row
    const  editButtonTd =  createEditButton(item);
    tr.appendChild(editButtonTd);
    table.appendChild(tr);
  }
}
 

function clearCheckBoxes(){
    $('input[type="checkbox"]:checked').prop('checked',false);
    clearButton.style.display = "none";
    deleteButton.style.display = "none";
}



generateMockData();
constructTable();
addEventListenerToCreateButton();
addEventListenerToDeleteButton();
//   export default data;
  
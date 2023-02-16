// load.js
const data = [
    {
      Id: 1,
      Name: "Task 1",
      Status: "Running",
      Schedule: "Daily",
      "Success-Count": 5,
      "Error-Count": 0,
      Enabled: true,
      Retries: 3,
      Next: "2023-02-14T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    {
      Id: 2,
      Name: "Task 2",
      Status: "Success",
      Schedule: "Weekly",
      "Success-Count": 10,
      "Error-Count": 1,
      Enabled: true,
      Retries: 2,
      Next: "2023-02-21T08:00:00"
    },
    // ... add more items here
  ];
  
  window.data = data;


  const table = document.querySelector("table tbody");
  const createButton = document.querySelector("#create");
  const clearButton = document.querySelector("#clear");
  const deleteButton = document.querySelector("#delete");

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

  for (const item of window.data) {
      const tr = document.createElement("tr");

      const checkboxTd = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      checkboxTd.appendChild(checkbox);
      tr.appendChild(checkboxTd);
      
      for (const key in item) {
          const td = document.createElement("td");
          td.textContent = item[key];
          tr.appendChild(td);
      }

      const editButton = document.createElement("button");
      editButton.className = "btn btn-primary";
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
              window.location.href = "edit.html?id=" + item.id;
          });
      const editButtonTd = document.createElement("td");
      editButtonTd.appendChild(editButton);


      // const deleteButton = document.createElement("button");
      // deleteButton.className = "btn btn-danger";
      // deleteButton.textContent = "Delete";
      // const deleteButtonTd = document.createElement("td");
      // deleteButtonTd.appendChild(deleteButton);


      tr.appendChild(editButtonTd);
      // tr.appendChild(deleteButtonTd);

      table.appendChild(tr);
  }

  function clearCheckBoxes(){
      $('input[type="checkbox"]:checked').prop('checked',false);
      clearButton.style.display = "none";
      deleteButton.style.display = "none";
  }

//   export default data;
  
const id = document.getElementById("id").value;
const cronName = document.getElementById("name").value;
const schedule = document.getElementById("schedule").value;
const enabled = document.getElementById("enabled").value;
const next = document.getElementById("next").value;


function back(){
  window.location.href="cron.html";
}


function setFormData(){
  var sessionData = sessionStorage.getItem("editCronItem");
  if(sessionData === "") return;

  const {Id, Name, Enabled, Schedule, Next} = JSON.parse(sessionData);
  console.log("id: " + Id);
  // Get form inputs and update their values with item data
  const nameInput = document.getElementById("name");
  nameInput.value = Name;
  const enabledInput = document.getElementById("enabled");
  enabledInput.checked = Enabled;
  const scheduleInput = document.getElementById("schedule");
  scheduleInput.value = Schedule;
  const nextInput = document.getElementById("next");
  nextInput.value = Next;7
  const idInput = document.getElementById("id");
  idInput.value = Id;
  idInput.disabled = true;
}



function saveData() {
  console.log("calling save ....");
  const formData = {
    id,
    cronName,
    schedule,
    enabled,
    next
  }

  //TODO: use real api here
  fetch("https://example.com/api/update-data", {
    method: "POST",
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // handle the success case here
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      //alert("error while savinf");
      back();
      // handle the error case here
    });
}

function handleFormSubmit(){
  const form = document.getElementById('cron-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission
    // add your form processing logic here
    
    // redirect the user to the "cron.html" page
    window.location.href = 'cron.html';
  });
  

}

handleFormSubmit();
setFormData();
function back(){
    window.location.href="cron.html";
}

function getFormData(){
    
}

function saveData() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;
  const schedule = document.getElementById("schedule").value;
  const successCount = document.getElementById("successCount").value;
  const errorCount = document.getElementById("errorCount").value;
  const enabled = document.getElementById("enabled").value;
  const retries = document.getElementById("retries").value;
  const next = document.getElementById("next").value;

  const formData = new FormData();
  formData.append("id", id);
  formData.append("name", name);
  formData.append("status", status);
  formData.append("schedule", schedule);
  formData.append("successCount", successCount);
  formData.append("errorCount", errorCount);
  formData.append("enabled", enabled);
  formData.append("retries", retries);
  formData.append("next", next);

  fetch("https://example.com/api/update-data", {
    method: "POST",
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      alert("error while savinf");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // handle the success case here
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      alert("error while savinf");
      // handle the error case here
    });
}
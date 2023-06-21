function logSubmit(event) {
  //log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  console.log("submit");
  event.preventDefault();
}

const form = document.getElementById("diary-form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

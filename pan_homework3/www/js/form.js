"use strict";

/****** form ******/
let form = document.getElementById("request");
form.addEventListener("submit", processForm);

function processForm(e) {
  e.preventDefault(); // stop the form after submitting, or it will sent data to database

  //get elements from html
  let guestName = document.getElementById("guestName").value;
  let guestEmail = document.getElementById("email").value;
  let note = document.getElementById("note").value;

  // change content with thank you message
  document.getElementById("container").textContent =
    "You've submitted the request, " +
    guestName +
    "! Thank you for your reservation!";

  console.log("guestName: " + guestName);
  console.log("guestEmail: " + guestEmail);
  console.log("note: " + note);
}

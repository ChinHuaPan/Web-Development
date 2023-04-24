"use strict";

// pet data
let petName = [
  "Name",
  "Matcha",
  "Diva",
  "Didi",
  "Guai Guai",
  "Adia",
  "Orange",
  "Pomelo",
];
let petSpecies = ["Species", "Dog", "Cat", "Cat", "Dog", "Dog", "Cat", "Cat"];
let petGender = ["Gender", "Boy", "Girl", "Boy", "Girl", "Boy", "Boy", "Girl"];
let petAge = ["Age", "3", "3", "4", "8", "3", "3", "3"];
//picture links
let petPicture = [
  "Picture",
  "https://build1snowman.neocities.org/web_development/images/Matcha.jpeg",
  "https://build1snowman.neocities.org/web_development/images/Diva.jpeg",
  "https://build1snowman.neocities.org/web_development/images/Didi.jpeg",
  "https://build1snowman.neocities.org/web_development/images/GuaiGuai.jpeg",
  "https://build1snowman.neocities.org/web_development/images/Adia.jpeg",
  "https://build1snowman.neocities.org/web_development/images/Orange.jpeg",
  "https://build1snowman.neocities.org/web_development/images/Pomelo.jpeg",
];

//create the table
let table = document.createElement("table");

//table style
table.setAttribute("border", "1");
$(table).addClass("table-style");

//attach it to the html body
document.body.appendChild(table);

//variables
let numRows = 8; // 7 pets and 1 header row
let row;
let cell;
let node;
let img;

//in a loop create the 8 rows
for (let i = 0; i < numRows; i++) {
  //create row
  row = document.createElement("tr");
  table.appendChild(row);

  //*** */ pet number
  cell = document.createElement("td");
  cell.setAttribute("width", "30");

  if (i != 0) {
    //if it's not the header row
    node = document.createTextNode(i);
  } else {
    //if it's 0 (header row), give it empty string
    node = document.createTextNode("");
  }

  cell.appendChild(node);
  row.appendChild(cell);

  //*** pet picture
  if (i != 0) {
    //if it's not the header row
    cell = document.createElement("td");
    cell.setAttribute("width", "100");

    //create img element
    img = document.createElement("img");

    //set the img resource
    img.setAttribute("src", petPicture[i]);
    img.setAttribute("width", "100");

    cell.appendChild(img);
    row.appendChild(cell);
  } else {
    //if it's 0 (header row), create the header "Picture"
    cell = document.createElement("td");
    node = document.createTextNode("Picture");
    cell.appendChild(node);
    row.appendChild(cell);
  }

  //*** pet name
  cell = document.createElement("td");
  cell.setAttribute("width", "70");

  node = document.createTextNode(petName[i]);
  cell.appendChild(node);
  row.appendChild(cell);

  //*** pet species
  cell = document.createElement("td");
  cell.setAttribute("width", "70");
  node = document.createTextNode(petSpecies[i]);
  cell.appendChild(node);
  row.appendChild(cell);

  //*** pet gender
  cell = document.createElement("td");
  cell.setAttribute("width", "70");
  node = document.createTextNode(petGender[i]);
  cell.appendChild(node);
  row.appendChild(cell);

  //*** pet age
  cell = document.createElement("td");
  cell.setAttribute("width", "70");
  node = document.createTextNode(petAge[i]);
  cell.appendChild(node);
  row.appendChild(cell);
}

//attach it to the div #pet
$("#pet").append(table);

//set the table color style
$("#pet tr:even").css({
  "background-color": "#292929",
  color: "white",
});

$("#pet tr:odd").css({
  "background-color": "#4a4a4a",
  color: "white",
});

$("#pet tr:first-child").css({
  "background-color": "black",
  color: "white",
});

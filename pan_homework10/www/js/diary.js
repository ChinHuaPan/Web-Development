let btn = document.getElementById("submit");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");

  //instantiate the quest
  let request = new XMLHttpRequest();

  //open the connection
  request.open("GET", "www/diary.json");

  // load data
  request.onload = function () {
    //console.log(request.response);

    //load data and parse to JSON
    let data = parseJson(request);

    //STRINGFY
    displayStringify(data);

    //render the page
    //renderHtml(data);
  };

  request.send();
});

function parseJson(request) {
  console.log("parsed");
  return JSON.parse(request.responseText);
}

function displayStringify(data) {
  //select the content section
  $("#diary-contnet").append(
    `<div><pre  class="wrap">${JSON.stringify(data, null, 4)}</pre></div>`
  );
}

function renderHtml(data) {
  //select the content section

  $("#diary-contnet").append(
    `<tr>
                  <th style="width:100px">Date</th>
                  <th style="width:100px">Mood</th>
                  <th style="width:200px">A sentence for today</th>
                  <th style="width:800px">Today's Sotry</th>
                  <th style="width:100px">Location</th>
                  <th style="width:100px">Tag</th>
              </tr>`
  );

  for (let i = 0; i < data.length; i++) {
    htmlString = data[i].date;

    $("#diary-contnet").append(
      `<table><tr>
          <td> ${data[i].date}</td>
          <td class="emoji-section"> ${data[i].mood_emoji} ${data[i].mood_rating}</td>
          <td> ${data[i].summary}</td>
          <td class="note-section"> ${data[i].note}</td>
          <td> ${data[i].location}</td>
          <td> ${data[i].tag}</td>
          </tr></table>`
    );
  }
  console.log("rendered");
}

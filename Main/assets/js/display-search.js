var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");

var getData = async function (format, search) {
  // fetch arg build
  var url = `https://www.loc.gov/${format}/?fo=json&q=${search}`;
  var response = await fetch(url);
  var data = await response.json();

  // look at data to figure out what to do
  let template = "";

  console.log(data.results);

  let count = 0;
  data.results.forEach(function (result) {
    count++;
    if (result.subject && count < 8) {
      template += `
        <div class="card bg-light text-dark mb-3 p-3">
          <div class="card-body">
            <h3>${result.title}</h3>
            <p>
              <strong>Date:</strong> ${result.date}
              <br>
              <strong>Subjects:</strong> ${result.subject.join(", ")}
              <br>
              <strong>Description:</strong> ${result.description[0]}
            </p>
            <a href="${result.url}" class="btn btn-dark">Read More</a>
          </div>
        </div>
      `;
    }
  });

  //show data button
  resultContentEl.innerHTML = template;
};

// get the information from the window location href
var params = location.search.split("&");
var search = params[0].split("=")[1];
var format = params[1].split("=")[1];

getData(format, search);

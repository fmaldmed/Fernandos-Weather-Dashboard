var searchFormEl = document.querySelector("#search-form");

// search button must be clickable
searchFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  // gather input fields
  var search = document.querySelector("#search-input").value;
  var format = document.querySelector("#format-input").value;
  // update the url window location
  location.assign(`./search-results.html?search=${search}&format=${format}`);
});

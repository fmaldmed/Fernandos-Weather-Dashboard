// Variable section.
var searchhistory = document.querySelector("#search-history");
var cityform =  document.querySelector("#city-search-form");
var searchbtn = document.querySelector("#searchbtn");
const apikey = "3ed16c2e8fec6eabeb503784d8e615d9";
var forecastcontainer = document.querySelector("#five-day");

// Cities Array
let cities = [];
// Search History function
function searchHistory() {
    cities = JSON.parse(localStorage.getItem("cities") || "[]");
    console.log("Search History successfully pulled.");


}


//5 day Forecast


// Current Day Forecast


// Event Listeners
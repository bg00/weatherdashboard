var emailInput = document.querySelector("#searchInput");
var signUpButton = document.querySelector(".searchButton");
var msgDiv = document.querySelector("#searchArea");
var userEmailSpan = document.querySelector("#lastSearched");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var email = localStorage.getItem("email");

  if (email === null) {
    return;
  }

  userEmailSpan.textContent = email;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#searchInput").value;

    localStorage.setItem("email", email);
    renderLastRegistered();
  })

  var APIKey = "90b16cb7762e1dd6f3bc29646115d409";

  var searchInput = document.querySelector("#searchInput");

  // Here we are building the URL we need to query the database
  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" + APIKey;

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
      $(".city").html("<h1>" + response.city.name + " Weather Details</h1>");
      $(".wind").text("Wind Speed: " + response.list[0].wind.speed);
      $(".humidity").text("Humidity: " + response.list[0].main.humidity);
      $(".temp").text("Temperature (F) " + response.list[0].main.temp);

      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);
    });

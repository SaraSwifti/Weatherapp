
//my api key from the system//
apiKey = "50c71d66656725befd4b46281e12c1a4";
//apiCall = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";
// function for creating City weather data



//button event that will run these functions
//$("#search-btn").on("click", function (event) {
// event.preventDefault();
var cityName = "Denver";
//$("#city-text").val().trim();
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
$.ajax({
    url: queryURL,
    method: "GET"
})
    // have the response data create the elements in the city page
    .then(function (response) {
        
        console.log(response);
        //variables for the JSON
        var cityNa = response.city.name;
        var todayDate = response.list[0].dt_txt; 
        var todayTemp = (response.list[0].main.temp-273.15);
        todayTemp = parseFloat(todayTemp);
        todayTemp = Math.round(todayTemp);

        //this is the icon call i belive, will need to work on that more
        var todayWeatherIcon = response.list[0].weather[0].icon;

        var todayHum = response.list[0].main.humidity;
        var todayWind = response.list[0].wind.speed;
        console.log();

        // now adding the elements and attributes for the values
        var todayIcon = $("<img>");
        todayIcon.attr("src", todayWeatherIcon);
        var todayHeaderRow = $("<h1>").text(cityNa + " " + " " + todayDate + todayIcon); 
        var toTemp = $("<p>").text("Temp: " + todayTemp + " Degrees Celsius (because that it what the rest of the world uses:)");
        var toHum = $("<p>").text("Humidity: " + todayHum + "%");
        var toWind = $("<p>").text("Wind Speed: " + todayWind + "Kilometers/hour.");

        
        //putting the data in the correct boxes
        $("#today-here").append(todayHeaderRow);
        $("#today-here").append(toTemp, toHum, toWind);

        //making the city button to save all the data
        var cityButton = $("<button>").text(cityNa);
        cityButton.addClass("list-group-item");
        $("#city-list").append(cityButton);
    
    });






        //call the functions for each box within this space passing the data from this function to the next



// Grabbing and storing the input on city name property value from the button

//today's weather function


            //defining the variables for each city
            //var cityNa = response.

            //creating and connecting the elements? 


            // Log the queryURL




/*I think this goes on the very end: code for clearing the text in the search button
function clear() {
$("#city-text").empty()*/

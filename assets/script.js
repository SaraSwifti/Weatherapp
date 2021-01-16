
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
        // not working var todayWeatherIcon = response.list[0].weather[0].icon;

        var todayHum = response.list[0].main.humidity;
        var todayWind = response.list[0].wind.speed;
        todayWind = Math.round(todayWind);
        console.log();

        // now adding the elements and attributes for the values
       // var todayIcon = $("<img>");
       // todayIcon.attr("src", todayWeatherIcon);
        var todayHeaderRow = $("<h1>").text(cityNa + " " + " " + todayDate); 
        var toTemp = $("<p>").text("Temp: " + todayTemp + " Degrees Celsius (because that it what the rest of the world uses:)");
        var toHum = $("<p>").text("Humidity: " + todayHum + "%");
        var toWind = $("<p>").text("Wind Speed: " + todayWind + " Km/hour.");

        
        //putting the data in the correct boxes
        $("#today-here").append(todayHeaderRow);
        $("#today-here").append(toTemp, toHum, toWind);

        //making the city button to save all the data
        var cityButton = $("<button>").text(cityNa);
        cityButton.addClass("list-group-item");
        $("#city-list").append(cityButton);
        // I need ot work on this
        var dayArray = [0,8,16,24,32,39];
            for (i = 1; i < dayArray.length; i++) {
                var theDate = response.list[i].dt_txt; 
                var theTemp = (response.list[i].main.temp-273.15);
                var theHum = response.list[i].main.humidity;
                var thDate = $("<h5>").text(theDate);
                var thTemp = $("<p>").text("Temp: " + theTemp + "C");
                var thHum = $("<p>").text("Humidity: " + theHum + "%");
                thDate.addId("card-date");
                thTemp.addId("card-temp");
                thHum.addId("card-hum");
                $("#card-body").append(thDate, thTemp, thHum);
            }

    });

//making the 5 day card function
      /*  function buildCard (response) {
            var dayArray = [0,8,16,24,32,39];
            for (i = 1; i < dayArray.length; i++) {
                var theDate = response.list[i].dt_txt; 
                var theTemp = (response.list[i].main.temp-273.15);
                var theHum = response.list[i].main.humidity;
                var thDate = $("<h5>").text(theDate);
                var thTemp = $("<p>").text("Temp: " + theTemp + "C");
                var thHum = $("<p>").text("Humidity: " + theHum + "%");
                thDate.addId("#card-date");
                thTemp.addId("#card-temp");
                thHum.addId("card-hum");
                $("#card-body").append(thDate, thTemp, thHum);
            };
            
        };








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

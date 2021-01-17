//$(document).ready(function () {

//  global variables




$("#search-btn").on("click", function (event) {
    //event.preventDefault();

    var cityName = $("#city-text").val().trim();
    apiKey = "50c71d66656725befd4b46281e12c1a4";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + apiKey;
    //;

    console.log(cityName);

    //function displaycityWeather() {

    // variables for dealing with the date and cycling through the functions
    var todayDate = new Date();
    var thisMonth = todayDate.getMonth() + 1;
    var today = todayDate.getDate();
    var thisYear = todayDate.getFullYear();
    var fullDate = thisMonth + "/" + today + "/" + thisYear;

    //my api key from the system//
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // have the response data create the elements in the city page
        .then(function (response) {
            console.log(response);
            //variables for the JSON

            var todayTemp = (response.list[0].main.temp - 273.15);
            todayTemp = parseFloat(todayTemp);
            todayTemp = Math.round(todayTemp);

            //this is the icon call i belive, will need to work on that more
            // not working var todayWeatherIcon = response.list[0].weather[0].icon;

            var todayHum = response.list[0].main.humidity;
            var todayWind = response.list[0].wind.speed;
            todayWind = Math.round(todayWind);


            // now adding the elements and attributes for the values
            var icon = response.list[0].weather.icon;
            var image = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + icon + ".png");
            var todayHeaderRow = $("<h1>").text("The Weather for " + cityName + " " + " " + fullDate);
            var toTemp = $("<p>").text("Temp: " + todayTemp + " Degrees Celsius (because that it what the rest of the world uses:)");
            var toHum = $("<p>").text("Humidity: " + todayHum + "%");
            var toWind = $("<p>").text("Wind Speed: " + todayWind + " Km/hour.");


            //putting the data in the correct boxes
            $("#today-here").append(todayHeaderRow);
            $("#today-here").append(image, toTemp, toHum, toWind);

            //making the city button to save all the data
            var cityButton = $("<button>").text(cityName);
            cityButton.addClass("list-group-item");
            $("#city-list").append(cityButton);

            var dayArray = [0, 8, 16, 24, 32, 39];
            for (i = 1; i < dayArray.length; i++) {
                var theDate = response.list[dayArray].dt_txt;
                var theTemp = (response.list[dayArray].main.temp - 273.15);
                var theHum = response.list[dayArray].main.humidity;
                var thDate = $("<h5>").text(theDate);
                var thTemp = $("<p>").text("Temp: " + theTemp + "C");
                var thHum = $("<p>").text("Humidity: " + theHum + "%");
                thDate.addClass("card-title");
                thTemp.addClass("card-text");
                thHum.addClass("card-text");
                $("card-body").append(thDate, thTemp, thHum);
            }



        });
    //};
    //displaycityWeather();
});





//button event that will run these functions
//


//var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;



// I need ot work on this





//making the 5 day card function
// function buildCard (response) {
/*var dayArray = [0, 8, 16, 24, 32, 39];
for (i = 1; i < dayArray.length; i++) {
    var theDate = response.list[i].dt_txt;
    var theTemp = (response.list[i].main.temp - 273.15);
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




/* I think this goes on the very end: code for clearing the text in the search button
 function clear() {
 $("#city-text").empty()
 */


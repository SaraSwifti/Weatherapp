
//my api key from the system//
apiKey = "50c71d66656725befd4b46281e12c1a4";
//apiCall = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";
// function for creating City weather data



//do I put event in the function parenthesis?
$("#search-btn").on("click", function (event) {

    // Grabbing and storing the input on city name property value from the button
    var cityName = $("#city-text").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // have the response data create the elements in the city page
        .then(function (response) {
            //defining the variables for each city
            

            //creating and connecting the elements? 
            var titleRow = $("<div>")
            titleRow.addClass("city-info")
            var cityNa = $("<h1")
            var todayDate = $("<h1>").innerhtml.text(response.city.list.dt_text);
            titleRow.append(cityNa, todayDate);
            $("#city-info").innerhtml.append(titleRow);

            // Log the queryURL
            console.log(response);
        });
});

/*I think this goes on the very end: code for clearing the text in the search button
function clear() {
$("#city-text").empty()*/

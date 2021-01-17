
# Student Submission is at the bottom

# Weatherapp
Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
## Student Submission for Review:
The criteria met for this app are as follows: 
input text bar with city search button is fired upon click to produce the weather for that day and the next 5 days per city entered. 
Criteria not met: local stored data can not be retrived again and the data is appending upon itself. 

# Myself evaluation: 
Image of final (assets\weatherapp.PNG)

I got stuck with clearing the field and text box when the button was triggered again. I don't think it was placed within the correct function and was managing to break everything. All of that said..8 weeks ago I hadn't been in the terminal of a computer since I was 15. I am rather pleased with myself that I stared with a blank files and got this far by reviewing previous lessons and code etc. and had a helping hand here and there from other students and the teaching staff. I am looking forward to looking this over with my tutor as well as reiewing the solved so that I can continue on my web development journey!
# git hub references and pages:
repository: https://github.com/SaraSwifti/Weatherapp
launched github pages: https://saraswifti.github.io/Weatherapp/


When I launch my code from the default brower, it is looking and functioning as expected. When I launch the exact same pages from github, it is missing it's styling and functinality. Again, i will be looking this over with my tutor to see what is happening. 
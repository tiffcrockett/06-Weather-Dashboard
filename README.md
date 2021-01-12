# Weather Dashboard

## Table of Contents
* [Description](#description)
* [Webpage-Images](#webpage-images)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies-Used](#technologies-used)
* [Deployed-Link](#deployed-link)
* [License](#license)

## Description

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. This project, a Weather Dashboard uses a third-party API to access weather data by making requests with specific parameters to a URL.  The Weather Dashboard runs in the browser, features dynamically updated HTML and CSS, and is responsive for mobile and desktop devices.

The Weather Dashboard is simple to use.  The user inputs a city name and clicks the send button and  the current and future weather conditions for that city appear.  The data consists of city name, date, an icon representing the weather conditions, the temperature, humidity, wind speed and UV index.  The UV Index is color coded to indicate if conditions are favorable, moderate or severe. The future weather presents as a 5-day forcast that displays the date, and icon, temperature and humidity.  A searched city name is added to a search history list.  Each  searchedcity name is “clickable” for searching  and the last search result will persist when the application is reloaded. The stored city names can be removed from local storage with the clear history button. 

Current and future weather forecasts are important to everyday life.  Daily people look to access that information to plan commutes, travel and activities.  The mobile-first feature of the Weather Dashboard makes it useful to users on-the-go.  The current design is flat.  Aesthetic enhancements would be future improvements the application along with adding a location feature so that the user's city location could render upon the application loading.


## Application-Images

### Desktop Screenshot
![Screenshot of desktop webpage](https://github.com/tiffcrockett/06-Weather-Dashboard/blob/main/assets/images/Dashboard-desktop.png?)

### Mobile Screenshot
![Screenshot of mobile webpage](https://github.com/tiffcrockett/06-Weather-Dashboard/blob/main/assets/images/Dashboard-mobile.png?)

## Installation

No prior installation is required to properly use the Weather Dashobard application. Simply head to the Deployed Link included towards the bottom of this README.

## Usage

1. Enter a city name in the input area.
2. Click the 'Search' button.
3. The city name will appear on the sidebar. 
4. Current weather and five-day forecast for that city will displayed in the main area of the weather dashboard.
5. Click on a city name on the sidebar to search that city again.
6. City names on the sidebar will persist when the application is reloaded.
7. Click "Clear History" to remove listed city names. 

## Technologies-Used

* [Open Weather Map api](https://openweathermap.org/api)
* [Bootstrap Framework](https://getbootstrap.com/)

## Deployed-Link

https://tiffcrockett.github.io/06-Weather-Dashboard/

## License

Licensed under [MIT](https://choosealicense.com/licenses/mit/) license.

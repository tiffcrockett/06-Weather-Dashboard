$(document).ready(function() {  

    var cityHistory = (localStorage.getItem("cityHistory") || "").split(",");
    console.log(cityHistory);
    for (var i = 0; i < cityHistory.length; i++){
        if(cityHistory[i]) {
            $("ul").append("<li>" + cityHistory[i] + "</li>"); 
        };  
    }; 

    $("#current-weather").hide();
    $("#five-day").hide(); 

        $("#add-city").on("click", function(event){
            event.preventDefault(); 

            var searchedCity = $("#city-input").val().trim(); 
            $("#weatherForecast").empty();
            displayWeather(searchedCity); 

            $("ul li").on("click", function(){
                var pastCity = $(this).text();
                $("#weatherForecast").empty();
                displayWeather(pastCity);
            })

        });  

        $("ul li").on("click", function(){
            var pastCity = $(this).text();
            $("#weatherForecast").empty();
            displayWeather(pastCity);
        });

        function displayWeather(city){

            var queryURL = "https://api.openweathermap.org/data/2.5/weather/?q=" + city + "&units=imperial&appid=12453634a0c3823fc0a03953fcfff02b";
            
            $.ajax({ 
                url:queryURL,
                method: "GET", 
            }).then(function(response) { 
                console.log(response);

                $(".city").html("<h4>" + response.name + " Weather Details</h4>\r\n"); 
                $("#current-day").text(new Date(response.dt*1000).toLocaleDateString('en-US', {weekday: 'long'}));
                $("#wicon").attr("src",`http://openweathermap.org/img/wn/` + response.weather[0].icon +".png");
                $("#tempF").text("Temperature (F): " + (Math.round(response.main.temp)));
                $("#humidty").text("Humidity: " + response.main.humidity + " %");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH"); 
                $("city-list").text(response.name);  
    
                var lat = response.coord.lat;
                var lon = response.coord.lon;

                var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&cnt=6&units=imperial&appid=12453634a0c3823fc0a03953fcfff02b";    
                console.log(queryURL2)
                
                $.ajax({ 
                    url:queryURL2,
                    method: "GET", 
                }).then(function(response) { 
                    console.log(response)  

                    $("#uvi").text("UV Index: " + response.current.uvi); 

                    for(var i = 1; i < 6; i++) {

                    var displayDiv = $("<div>").addClass("daily");
                    var card = $("<div>").addClass("card bg-primary text-white day");
                    var cardBody = $("<div>").addClass("card-body");
                    var date = $("<h6></h6>").addClass("card-text weekday").text(new Date(response.daily[i].dt*1000).toLocaleDateString('en-Us', {weekday: 'long'}));
                    var icon = $("<img>").attr("src","http://openweathermap.org/img/wn/" + response.daily[i].weather[0].icon +".png");
                    var temp = $("<div>").addClass("card-text").text(Math.round(response.daily[i].temp.day) + " Deg F");
                    var humid = $("<div>").addClass("card-text").text(response.daily[i].humidity + "% Humidity");

                    // * append elements to weatherForecast div
                    cardBody.append(date, icon, temp, humid);
                    card.append(cardBody);
                    displayDiv.append(card);
                    $("#weatherForecast").append(displayDiv); 

                    $("#current-weather").show();
                    $("five-day").show(); 
                    };    
                    
                    var uvi= $("#uvi").val();
                    if(uvi > 11) {
                        $("#uvi").css({"background-color":"#8e44ad", "color":"#fff"});
                    } else if (uvi > 7 && uvi < 11) {
                        $("#uvi").css({"background-color":"#e74c3c", "color":"#fff"});
                    } else if (uvi > 5 && uvi < 9 ){
                        $("#uvi").css({"background-color":"#f39c12"});
                    } else if (uvi > 2 && uvi < 7) {
                        $("#uvi").css({"background-color":"#f4d03f"});
                    } else {
                        $("#uvi").css({"background-color":"#27ae60", "color":"#fff"});
                    };

                }); 

            var cityHistory = (localStorage.getItem("cityHistory") || "").split(",");
            var doesCityExist = cityHistory.findIndex(function(item){
                return item.toLowerCase() === city.toLowerCase();        
                 }) > -1;
            if(!doesCityExist){
                $("ul").append("<li>" + city + "</li>");  
                var storedCities = [city, cityHistory];
                localStorage.setItem("cityHistory", storedCities);
            }   
        });  
    }; 
});
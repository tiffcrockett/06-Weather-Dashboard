
$(document).ready(function() { 

    function displayWeather() { 

        $("#add-city").on("click", function(event){
            event.preventDefault(); 

            var city = $("#city-input").val();

            var queryURL = "http://api.openweathermap.org/data/2.5/weather/?q=" + city + "&units=imperial&appid=12453634a0c3823fc0a03953fcfff02b";
            
            $.ajax({ 
                url:queryURL,
                method: "GET", 
            }).then(function(response) { 
                console.log(response);

                $(".city").html("<h2>" + response.name + " Weather Details</h2>");
                $("#current-date").text(new Date(response.dt).toLocaleDateString('en-US', {weekday: 'long'}));
                $("#nowicon").attr("src",`http://openweathermap.org/img/wn/`) +response.weather.icon+"png"
                $("#tempF").text("Temperature (F): " + response.main.temp);
                $("#humidty").text("Humidity: " + response.main.humidity + " %");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH"); 
                $("city-list").text(response.name);  
                // $("#uvi").text("UV Index:" + response.current.uvi); 

                var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast/daily/?q=" + city + "&units=imperial&cnt=5&appid=12453634a0c3823fc0a03953fcfff02b";           
                console.log(queryURL2)

                $.ajax({ 
                    url:queryURL2,
                    method: "GET", 
                }).then(function(response) { 
                    console.log(response)

                    for (var i = 0; i < 5; i++) {
                        $("#date").text(new Date(response.list[i].dt).toLocaleDateString('en-Us', {weekday: 'long'})), 
                        $("#icon").attr("src",`http://openweathermap.org/img/wn/`) + response.list[i].weather[0].icon +"png";
                        $("#temp").text(Math.round(response.list[i].temp.day) + " Degrees F");
                        $("#humid").text(response.list[i].humidity + "% Humidity");
                        
                        $("#weatherForecast").push(date[i],icon[i],temp[i],humid[i]);
                    }  
                });

            var newCity = $("input[name=listCity]").val();
            $("ul").append("<li>" + newCity + "</li>"); 

        });

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
                $("#uvi").css({"background-color":"#27ae60", "color":"#fff"})
            };  
        }); 
    } displayWeather()
});
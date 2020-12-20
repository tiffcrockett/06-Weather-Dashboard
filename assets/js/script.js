
$("document").ready(function() { 

    $("#add-city").on("click", function(event){
        event.preventDefault(); 

        var city = $("#city-input").val();

         var queryURL ="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=12453634a0c3823fc0a03953fcfff02b";
         
        $.ajax({
            url: queryURL,
            method: "GET" 
        }).then(function(response) { 
            console.log(queryURL);

            // var lat = $("<#lat>").text(response.coord.lat);
            // var lon = $("<#lon>").text(response.coord.lon);
            // $("#city-list").text(JSON.stringify(response));
            $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            $("#todaysdate").text(response.dt_txt);
            
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $("#tempF").text("Temperature (F): " + tempF.toFixed(2)); 

            $("#humidty").text("Humidity: " + response.main.humidity + " %");
            $("#wind").text("Wind Speed: " + response.wind.speed + " MPH"); 
            $("city-list").text(response.name); 
        }) 

        var lat = 

        var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?" + lat + "=" + "&" + lon + "=&exclude=minutely,hourly,alerts&appid=6513ce13c2a08e24c65cc6c032698552"
        $.ajax({
            url: queryURL2,
            method: "GET" 
        }).then(function(response) { 
            console.log(response); 

            $("#uvi").text("UV Index:" + response.daily.uvi);
            $("#dailydate").text(response.daily.dt);
            $("#daiytemp").text(response.daily.temp.day);
            $("#dailyhumid").text(response.daily.humidity);
        });

        var newCity = $("input[name=listCity]").val();
        $("ul").append("<li>" + newCity + "</li>");
    }); 
    
    


});     
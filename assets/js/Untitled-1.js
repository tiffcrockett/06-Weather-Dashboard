


// var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?" + lat + "=" + "&" + lon + "=&exclude=minutely,hourly,alerts&appid=6513ce13c2a08e24c65cc6c032698552"
//         $.ajax({
//             url: queryURL2,
//             method: "GET" 
//         }).then(function(response) { 
//             console.log(response); 

//             $("#uvi").text("UV Index:" + response.daily.uvi);
//             $("#dailydate").text(response.daily.dt);
//             $("#daiytemp").text(response.daily.temp.day);
//             $("#dailyhumid").text(response.daily.humidity);
//         });

//         var queryURL3 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
//         $.ajax({
//             url: queryURL3,
//             method: "GET" 
//         }).then(function(response) { 
//             console.log(response); 

//             $("#todaysicon").attr("src", icon); 
//             $("#dailyicon").attr("src", icon); 1,2,3,4,5
//         }) 
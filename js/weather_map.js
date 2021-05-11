"use strict";
// weather map
var coordinates = [37.8970, -122.5811];

function weather() {
    $('.forecast').html(' ');
    $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] +
        "&lon=" + coordinates[1] + "&exclude=current, hourly, minutely&appID=" + WEATHER_ACCESS_TOKEN).done(function (resp) {
        console.log(resp);
        var currentTemp = resp.daily[0].temp.day.toFixed(0);
        console.log(currentTemp);
        $(currentTemp).html('Current Temperature');
        var todayDate = new Date(resp.daily[0].dt * 1000).toDateString();
        console.log(todayDate);
    })

}

weather();

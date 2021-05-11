"use strict";

// map API

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4936,29.4241]
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);

marker.setDraggable(true);

marker.on('dragend', function(){
      var lat = marker.getLngLat().lat
    var lng = marker.getLngLat().lng
    var updateCoordinates = [lat, lng]
    console.log(updateCoordinates);
    $('#weather-info').empty();
    weather(updateCoordinates);
    marker.setPopup();
})

// weather forecast API

var coordinates = [37.8970, -122.5811];
var saCoordinates = [29.4241, -98.4936];
/* Your weather function is expecting an array to be passed as an argument because in the ajax call you have x set
 to both index of 0 and 1 to pull the coordinates from the marker drag end function
*/
function weather(x) {
    $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + x[0] +
        "&lon=" + x[1] + "&exclude=current, hourly, minutely&appID=" + WEATHER_ACCESS_TOKEN).done(function (resp) {
            // HTML rendering:
            var weatherHTML = '';
            for(var i = 0; i <=4; i++) {
               /* console.log(resp);*/
                var todayDate = new Date(resp.daily[i].dt * 1000).toDateString();
              /*  console.log(todayDate);*/
                var currentTemp = resp.daily[i].temp.day.toFixed(0);
                weatherHTML += '<div class="col-2 card-header" style="width: 18em;">' + todayDate
                weatherHTML += '<div class="list-group-item"><p>' + "Current Temperature: " + currentTemp + '</p></div>'
                weatherHTML += '<div class="list-group-item"><p>' + "Description: " + resp.daily[i].weather[0].description + '</p></div>'
                weatherHTML += '<div class="list-group-item"><p>' + '<img src=http://openweathermap.org/img/w/' + resp.daily[0].weather[0].icon + '.png></p></div>'
                weatherHTML += '<div class="list-group-item"><p>' + "Humidity %" + resp.daily[i].humidity + '</p></div>'
                weatherHTML += '<div class="list-group-item"><p>' + "Wind Speed: " + resp.daily[i].wind_speed + '</p></div>'
                weatherHTML += '<div class="list-group-item"><p>' + "Pressure: " + resp.daily[i].pressure + '</p></div>'
                weatherHTML += '</div>'
                weatherHTML += '</div>'

            }
$('#weather-info').append(weatherHTML);
   /*     console.log(weatherHTML);*/
    })

}

weather(saCoordinates);

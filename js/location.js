/**
 * Created by ss on 2017/4/22.
 */
$(function () {

    // connect();
    //
    // $(window).unload(function(){
    //     disconnect();
    // });
});

function initMap() {
var mapOptions = {
    center: new google.maps.LatLng(37.335, -121.88),
    zoom: 15,
    mapTypeId: 'roadmap'
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.3352, -121.88),
          map: map,
          title: 'Welcome to San Jose State University!'})

var mapOptions2 = {
              center: new google.maps.LatLng(37.548, -121.9886),
              zoom: 15,
              mapTypeId: 'roadmap'
          }
var map2 = new google.maps.Map(document.getElementById("map2"), mapOptions2);

var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(37.548271, -121.988571),
                    map: map2,
                    title: 'Welcome to San Jose State University!'})
}

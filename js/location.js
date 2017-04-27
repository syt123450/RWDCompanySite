/**
 * Created by ss on 2017/4/22.
 */


function initMap() {
var mapOptions = {
    center: new google.maps.LatLng(37.33, -121.88),
    zoom: 15,
    mapTypeId: 'roadmap'
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
 var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.3352, -121.88),
          map: map,
          title: 'Welcome to San Jose State University!'})
}
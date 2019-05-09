// Default JavaScript Functions and Initiations
import $ from 'jquery'
import WebFont from 'webfontloader'
import { tab } from 'bootstrap'
import GoogleMapsLoader from 'google-maps'

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Ubuntu:300,400,500,700', 'Montserrat:400,700']
  }
});

// Google Map
GoogleMapsLoader.load(function(google) {
    var map = document.getElementById('google-map');

    var map_options = {
      center: new google.maps.LatLng(-33.8726606,151.2054522),
      scrollwheel: false,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map, map_options)

    // Map Marker
    var myLatlng = new google.maps.LatLng(-33.8726606,151.2054522);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: 'img/location-pin.svg'
    });
})
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tem-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	// google_maps_5746e9b9ec998()
  }

}

declare var google

function google_maps_5746e9b9ec998() {
    var latlng = new google.maps.LatLng(-33.8710, 151.2039);
    var draggable = true;
    var myOptions = {
        zoom: 13,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f7f1df"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
                "color": "#d0e3b4"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbd3da"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#bde6ab"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffe15f"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#efd151"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fff"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "black"
            }]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#cfb2db"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#a2daf2"
            }]
        }],
        draggable: draggable,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("google-map-area-5746e9b9ec998"), myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        icon: "images/home_seo2_pin.png",
        map: map
    });
}
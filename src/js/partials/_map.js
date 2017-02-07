function initMap() {
    var myLatlng = new google.maps.LatLng(55.7545941,37.6218564),
        stylesArray = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#EEEEEE"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];
    var mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false,
        mapTypeControl: false,
        styles: stylesArray
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    setMarkers(map);
}

var markers = [
    ['МЦ “Ферти Мед”', 55.7727359, 37.5864169, 4],
    ['МЦ “Ферти”', 55.7797359, 37.6564169, 5],
    ['', 55.7097359, 37.6064169, 3],
    ['', 55.7297359, 37.6264169, 2],
    ['', 55.7497359, 37.5964169, 1]
];

function setMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
        var markerPoint = markers[i];

        var marker = new google.maps.Marker({
            position: {lat: markerPoint[1], lng: markerPoint[2]},
            map: map,
            icon: 'img/svg/marker.svg',
            title: markerPoint[0],
            zIndex: markerPoint[3]
        });
    }
}
setTimeout(function () {
    initMap();
}, 300);


// $('.change').on('change', function () {
//     initMap();
// });
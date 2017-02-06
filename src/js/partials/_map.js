function initMap() {
    var myLatlng = new google.maps.LatLng(55.7545941,37.6218564),
        marker1 = new google.maps.LatLng(55.7727359,37.5864169),
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

    var marker = new google.maps.Marker({
        position: marker1,
        icon: 'img/svg/marker.svg',
        title: ''
    });

    marker.setMap(map);
}
setTimeout(function () {
    initMap();
}, 300);
$('.change').on('change', function () {
    initMap();
});
var markers = [
    {
        title: 'МЦ “Ферти Мед”',
        description: 'Для записи на прием, позвоните по указанному телефону. Обязательно уточните, работает клиника по ОМС или ДМС полисам или организован платный режим.',
        metro: 'Измайловская',
        location: 'ул.3-я Парковая, д.8/19 и д.12',
        phone1: '8 (495) 504-1526',
        phone2: '8 (495) 249-8808',
        days: 'Понедельник — Пятница',
        times: '9-20 сб 9-18 вс 10-16',
        site: 'www.fertimed.ru',
        lat: 55.7727359,
        lng: 37.5864169,
        zIndex: 1
    },
    {
        title: 'МЦ “Ферти”',
        description: 'Для записи на прием, позвоните по указанному телефону. Обязательно уточните, работает клиника по ОМС или ДМС полисам или организован платный режим.',
        metro: 'Измайловская',
        phone1: '8 (495) 504-1526',
        lat: 55.7797359,
        lng: 37.6564169,
        zIndex: 2
    },
    {
        title: 'МЦ “Мед”',
        description: 'Для записи на прием, позвоните по указанному телефону. Обязательно уточните, работает клиника по ОМС или ДМС полисам или организован платный режим.',
        metro: 'Измайловская',
        location: 'ул.3-я Парковая, д.8/19 и д.12',
        lat: 55.7097359,
        lng: 37.6064169,
        zIndex: 3
    },
    {
        title: 'МЦ “Мед”',
        description: 'Для записи на прием, позвоните по указанному телефону. Обязательно уточните, работает клиника по ОМС или ДМС полисам или организован платный режим.',
        metro: 'Измайловская',
        location: 'ул.3-я Парковая, д.8/19 и д.12',
        lat: 55.7297359,
        lng: 37.6264169,
        zIndex: 4
    },
    {
        title: 'МЦ “Мед”',
        description: 'Для записи на прием, позвоните по указанному телефону. Обязательно уточните, работает клиника по ОМС или ДМС полисам или организован платный режим.',
        metro: 'Измайловская',
        location: 'ул.3-я Парковая, д.8/19 и д.12',
        lat: 55.7497359,
        lng: 37.5964169,
        zIndex: 5
    }
];

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

    var infoWindow = new google.maps.InfoWindow({
        maxWidth: 480
    });

    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        var marker = new google.maps.Marker({
            position: {lat: data.lat, lng: data.lng},
            map: map,
            icon: 'img/svg/marker.svg',
            title: data.title,
            zIndex: data.zIndex
        });
        (function (marker, data) {
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent('<div class="map-description">' +
                    '<h1 class="title">' + data.title + '</h1>' +
                    '<p class="description">' + data.description + '</p>' +
                    '<div class="attribute-row"><span class="attribute-name">Станция метро:</span><span class="attribute-val">' + (data.metro ? data.metro : '-') + '</span></div>' +
                    '<div class="attribute-row"><span class="attribute-name">Адрес:</span><span class="attribute-val">' + (data.location ? data.location : '-') + '</span></div>' +
                    '<div class="attribute-row"><span class="attribute-name">Контактный телефон:</span><span class="attribute-val">' + (data.phone1 ? data.phone1 + '<br>': '')  + (data.phone2 ? data.phone2 : '') + (!data.phone1 && !data.phone2 ? '-' : '') + '</span></div>' +
                    '<div class="attribute-row"><span class="attribute-name">Время работы:</span><span class="attribute-val">' + (data.days ? data.days + '<br>': '')  + (data.times ? data.times : '') + (!data.days && !data.times ? '-' : '') + '</span></div>' +
                    '<div class="attribute-row"><span class="attribute-name">Интернет-сайт:</span><span class="attribute-val">' + (data.site ? '<a href="' + data.site + '" target="_blank">' + data.site + '</a>' : '-') + '</span></div>' +
                    '</div>');
                infoWindow.open(map, marker);
            });
        })(marker, data);
    }
}

window.onload = function () {
    initMap();
};
// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';
		
// Initialize the map
var map = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/mapbox/light-v8',
    center: [-89.7372, 43.4316],
    zoom: 12,
    attributionControl: false,
    interactive:false
});
		
//map.addControl(new mapboxgl.Navigation());
		
map.on('style.load', function () {
    map.addSource("markers", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-90, 43]
                },
                "properties": {
                    "title": "Mapbox DC",
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-90.2, 43.1]
                },
                "properties": {
                    "title": "Mapbox SF",
                }
            }]
        }
    });
		
    map.addLayer({
        "id": "markers",
        "type": "circle",
        "interactive": true,
        "source": "markers",
        'paint': {
            'circle-radius': 8,
            'circle-color': 'rgba(102,255,178,1)'
        }
    }, 'admin-2-boundaries');
});
		
map.on('click', function (e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        includeGeometry: true,
        layer: 'markers'
    }, function (err, features) {
				
		if (features.length) {
            // Get coordinates from the symbol and center the map on those coordinates
            map.flyTo({center: features[0].geometry.coordinates});
        }
        //map.setBearing(50);
        map.setPitch(50);

        // Populate the popup and set its coordinates
        // based on the feature found.
        switchColor();
        		
    });
});
		
map.on('mousemove', function (e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        layer: 'markers'
    }, function (err, features) {
        map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';
    });
});
		
function switchColor(layer) {
    map.setPaintProperty('markers', 'circle-radius', 16);
};




var chapters = {
    'scrollBox1': {
        bearing: 27,
        center: [-89.7372, 43.4316],
        zoom: 12,
        pitch: 20,
        speed: 2
    },
    'scrollBox2': {
        //duration: 6000,
        center: [-89.7372, 43.4316],
        bearing: 150,
        zoom: 14,
        pitch: 0,
        speed: 2
    },
    'scrollBox3': {
        bearing: 90,
        center: [-89.7372, 43.4316],
        zoom: 13,
        speed: 2,
        pitch: 40
    },
    'scrollBox4': {
        bearing: 90,
        center: [-89.7372, 43.4316],
        zoom: 12.3,
        speed: 2
    },
    'scrollBox5': {
        bearing: 45,
        center: [-89.7372, 43.4316],
        zoom: 15.3,
        pitch: 20,
        speed: 2
    }
};

var mapScrollControl = false;
// get window Y offset - on scroll function update the variable and check
// On every scroll event, check which element is on screen - fix to not check after certain height
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'scrollBox1';

function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
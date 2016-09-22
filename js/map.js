// access token from specific mapbox account
mapboxgl.accessToken = 'pk.eyJ1IjoiYm9yZG5lcndsZWkiLCJhIjoiY2lyZjd1a2tyMDA3dmc2bmtkcjUzaG5meCJ9.eswxCZSAnob59HR0wEaTpA';
	
// define the map variable that will be displayed
var map = new mapboxgl.Map({
	container: 'map', //div id container of the map
	style: 'mapbox://styles/bordnerwlei/cirf7wsrr0003g8nlogxrqxyr', // specific mapbox styling code
	center: [-96, 37.8], // initial center
	zoom: 3, // initial zoom
	pitch: 0.1 // set to 0.1 for cross browser issues experienced earlier, may be able to change back
});

// start point
var origin = [-122.414, 37.776];

// end point
var destination = [-77.032, 38.913];

// A simple line from origin to destination.
var route = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                origin,
                destination
            ]
        }
    }]
};

// A single point that animates along the route.
// Coordinates are initially set to origin.
var point = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": origin
        }
    }]
};

// Calculate the distance in kilometers between route start/end point.
var lineDistance = turf.lineDistance(route.features[0], 'kilometers');

var arc = [];

// Draw an arc between the `origin` & `destination` of the two points
for (var i = 0; i < lineDistance; i++) {
    var segment = turf.along(route.features[0], i / 1000 * lineDistance, 'kilometers');
    arc.push(segment.geometry.coordinates);
}

// Update the route with calculated arc coordinates
route.features[0].geometry.coordinates = arc;

// Used to increment the value of the point measurement against the route.
var counter = 0;

map.on('load', function () {
	// prepare data
    map.addSource('route', {
        "type": "geojson",
        "data": route
    });
    
    map.addSource('point', {
        "type": "geojson",
        "data": point
    });
	
	// add to map
    map.addLayer({
        "id": "route",
        "source": "route",
        "type": "line",
        "paint": {
            "line-width": 2,
            "line-color": "#007cbf"
        }
    });
    
    map.addLayer({
        "id": "point",
        "source": "point",
        "type": "symbol",
        "layout": {
            "icon-image": "airport-15",
            "icon-rotate": 90
        }
    });
	
	
	
	var followMarkerTimer = setInterval(followMarker, 50);
	
	function followMarker() {
		
    	var target = point.features[0].geometry.coordinates;
    	map.flyTo({
        	center: target,
        	zoom: 5
    	});
	}
	
	var moveMarkerTimer = setInterval(moveMarker, 50);

	function moveMarker() {
    	point.features[0].geometry.coordinates = route.features[0].geometry.coordinates[counter];
    	
    	map.getSource('point').setData(point);
    	
    	counter = counter + 1;
	}
    
});
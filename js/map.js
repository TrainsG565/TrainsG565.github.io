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


map.on('load', function () {
	addMapSources();
	
	addMapLayers();

	
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
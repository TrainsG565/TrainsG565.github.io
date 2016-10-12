// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';
		
// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/mapbox/light-v8',
    center: [-89.7372, 43.4316],
    zoom: 12,
    attributionControl: false
});

var map02 = new mapboxgl.Map({
	container: 'map02',
	style: 'mapbox://styles/mapbox/light-v8',
	center: [-89.7372, 43.4316],
	zoom: 12,
	attributionControl: false
});
		

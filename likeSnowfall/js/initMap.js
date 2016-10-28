// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';
		
// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/mapbox/light-v8',
    center: [-89.4012, 43.0731],
    zoom: 12,
    attributionControl: false
});

map01.on('style.load', function () {
	map01.addSource('tax-parcels', {
		'type': 'geojson',
		'data': 'data/tax_parcels.geojson'
	});
	
	map01.addLayer({
		'id': 'tax-parcels',
		'type': 'fill',
		'source': 'tax-parcels',
		'paint': {
			'fill-color': 'orange',
			'fill-extrude-height': 50,
			'fill-extrude-base': 0,
			'fill-opacity': 0.5
		}
	});
});















var map02 = new mapboxgl.Map({
	container: 'map02',
	style: 'mapbox://styles/mapbox/light-v8',
	center: [-89.7372, 43.4316],
	zoom: 12,
	attributionControl: false
});
		

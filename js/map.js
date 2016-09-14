mapboxgl.accessToken = 'pk.eyJ1IjoiYm9yZG5lcndsZWkiLCJhIjoiY2lyZjd1a2tyMDA3dmc2bmtkcjUzaG5meCJ9.eswxCZSAnob59HR0wEaTpA';
	
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/bordnerwlei/cirf7wsrr0003g8nlogxrqxyr',
	center: [-89.5, 44.5],
	zoom: 6,
	preserveDrawingBuffer: false,
	hash: false,
	pitch: 0.1
});
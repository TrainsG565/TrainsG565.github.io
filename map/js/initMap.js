// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';
		
// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/skywilliams/ciw5saqfs00042kpdz6yh0zpa',
    center: [-89.4, 45],
    zoom: 5.75,
    pitch: 0.1,
    attributionControl: false
});

map01.on('load', function() {
	
	map01.addSource('amtrak', {
		'type': 'geojson',
		'data': '/map/data/amtrakLine.geojson'
	});
	
	map01.addSource('cityPolys', {
		'type': 'geojson',
		'data': '/map/data/cityPolys.geojson'
	});
	
	map01.addSource('msnRails', {
		'type': 'geojson',
		'data': '/map/data/msnRails.geojson'
	});
	
	map01.addSource('parking', {
		'type': 'geojson',
		'data': '/map/data/parking.geojson'
	});
	
	map01.addSource('wisconsinStops', {
		'type': 'geojson',
		'data': '/map/data/wisconsinStops.geojson'
	});
	
	map01.addSource('allRailWI', {
		'type': 'geojson',
		'data': '/map/data/allRailWI.geojson'
	});
	
	map01.addSource('amtrakAreasWI', {
		'type': 'geojson',
		'data': '/map/data/amtrakAreasWI.geojson'
	});
	
	map01.addSource('amtrakCitiesIL', {
		'type': 'geojson',
		'data': '/map/data/amtrakCitiesIL.geojson'
	});
	
	map01.addSource('amtrakCitiesMN', {
		'type': 'geojson',
		'data': '/map/data/amtrakCitiesMN.geojson'
	});
	
	map01.addSource('kohlRail', {
		'type': 'geojson',
		'data': '/map/data/kohlRail.geojson'
	});
	
	
	
	map01.addLayer({
		'id': 'amtrak',
		'type': 'line',
		'source': 'amtrak',
		'layout': {
			'line-cap': 'round',
			'line-join': 'round'
			},
		'paint': {
			'line-color': '#2471A3',
			'line-width': 5
		}
	});
	
	map01.addLayer({
		'id': 'cityPolys',
		'type': 'fill',
		'source': 'cityPolys',
		'layout': {},
		'paint': {
			'fill-color': '#EC7063',
			'fill-opacity': 0.75
		}
	});
	
	map01.addLayer({
		'id': 'msnRails',
		'type': 'line',
		'source': 'msnRails',
		'layout': {
			'line-cap': 'round',
			'line-join': 'round'
			},
		'paint': {
			'line-color': '#2471A3',
			'line-width': 2.5
		}
	});
	
	map01.addLayer({
		'id': 'parking',
		'type': 'fill',
		'source': 'parking',
		'layout': {},
		'paint': {
			'fill-color': '#BB8FCE',
			'fill-opacity': 0.75
		}
	});
	
	map01.addLayer({
		'id': 'wisconsinStops',
		'type': 'circle',
		'source': 'wisconsinStops',
		'layout': {},
		'paint': {
			'circle-color': '#F39C12',
			'circle-radius': 4
		}
	});
	
	map01.addLayer({
		'id': 'allRailWI',
		'type': 'line',
		'source': 'allRailWI',
		'layout': {},
		'paint': {
			'line-color': '#2471A3',
			'line-width': 2.5
		}
	});
	
	map01.addLayer({
		'id': 'amtrakAreasWI',
		'type': 'fill',
		'source': 'amtrakAreasWI',
		'layout': {},
		'paint': {
			'fill-color': 'black',
			'fill-opacity': 0.75
		}
	});
	
	map01.addLayer({
		'id': 'amtrakCitiesIL',
		'type': 'circle',
		'source': 'amtrakCitiesIL',
		'layout': {},
		'paint': {
			'circle-color': 'black',
			'circle-radius': 4
		}
	});
	
	map01.addLayer({
		'id': 'amtrakCitiesMN',
		'type': 'circle',
		'source': 'amtrakCitiesMN',
		'layout': {},
		'paint': {
			'circle-color': 'black',
			'circle-radius': 4
		}
	});
	
	map01.addLayer({
		'id': 'kohlRail',
		'type': 'line',
		'source': 'kohlRail',
		'layout': {},
		'paint': {
			'line-color': 'black',
			'line-width': 2.5
		}
	});
	
	
	
	
});











		

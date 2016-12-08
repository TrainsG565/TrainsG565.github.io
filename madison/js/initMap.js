// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';

		

// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/skywilliams/ciuxinskg00f92io46tlqruc3',
    center: [-89.348880892901192, 43.1363520479551],
    zoom: 11,
    pitch: 0.1,
    attributionControl: false
});




map01.on('style.load', function () {
	map01.setPaintProperty('taxparcels', 'fill-extrude-height', {
		'property': 'height',
		'type': 'identity'
	});
	
	map01.setPaintProperty('taxparcels', 'fill-extrude-base', 0);
	map01.setPaintProperty('taxparcels', 'fill-opacity', 0.5);
	
	
	
	map01.addSource('madisonStations', {
		'type': 'geojson',
		'data': '/madison/data/stations_v2.geojson'
	});
	
	map01.addSource('busKohl01', {
		'type': 'geojson',
		'data': '/madison/data/upload/1km/busKohl_1.geojson'
	});
	
	
	
	
	
	/*
	map01.addLayer({
		'id': 'busKohl01',
		'type': 'fill',
		'source': 'busKohl01',
		'layout': {},
		'paint': {
			'fill-color': 'orange',
			'fill-opacity': 0.5
		}
	});
	*/
	
	
	/*
	map01.addLayer({
		'id': 'madisonStations',
		'type': 'circle',
		'source': 'madisonStations',
		'layout': {},
		'paint': {
			'circle-color': 'black',
			'circle-radius': 10
		}
	});
	*/
	
	
});



function addStation(x) {
	//x = button id
	//get button id, add layer - filter
	var stationPosition = stationList.indexOf(x);
	var stationCross = stationListCross[stationPosition];
	
	map01.addLayer({
		'id': x,
		'type': 'circle',
		'source': 'madisonStations',
		'layout': {},
		'paint': {
			'circle-color': 'black',
			'circule-radius': 8
		},
		'filter': ['==', 'Name', stationCross]
	});
};


















		

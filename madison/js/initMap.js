// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';

		

// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/skywilliams/ciuxinskg00f92io46tlqruc3',
    center: [-89.396691603682072, 43.068686375866029],
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
	
	map01.setLayoutProperty('busstops', 'visibility', 'none');
	map01.setLayoutProperty('bikeshare', 'visibility', 'none');
	map01.setLayoutProperty('busroute', 'visibility', 'none');
	map01.setLayoutProperty('bikepath', 'visibility', 'none');
	
	
	
	map01.addSource('madisonStations', {
		'type': 'geojson',
		'data': '/madison/data/stations_v2.geojson'
	});
	
	map01.addSource('busKohl01', {
		'type': 'geojson',
		'data': '/madison/data/upload/1km/busKohl_1.geojson'
	});
	
	
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
			'circle-radius': 8
		},
		'filter': ['==', 'Name', stationCross]
	});
};

function removeStation(x) {
	map01.removeLayer(x);
	
	if (kohlButtonControl == false && mononaButtonControl == false && yaharaButtonControl == false && msnButtonControl == false) {
		
	}
};


















		

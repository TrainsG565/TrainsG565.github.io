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
	currentStationList.push(x);
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
	var remove = currentStationList.indexOf(x);
	currentStationList.splice(remove, 1);
	
	map01.removeLayer(x);
	
	if (kohlButtonControl == false && mononaButtonControl == false && yaharaButtonControl == false && msnButtonControl == false) {
		deactivateBuffers();
	}
};



function addBuffers(x) {
	
	var bufferPosition = bufferList.indexOf(x); // gets either bus1Button, bus2Button, bike1Button, bike2Button
	//var bufferCross = bufferListCross[bufferPosition]; 
	
	var i;
	for (i=0; i < currentStationList.length; i++) {
		var position = stationList.indexOf(currentStationList[i]);
		
		if (position == 0) {
			if (bufferPosition == 0) {
				console.log('add bus 1km kohl');
			} else if (bufferPosition == 1) {
				console.log('add bus 2km kohl');
			} else if (bufferPosition == 2) {
				console.log('add bike 1km kohl');
			} else if (bufferPosition == 3) {
				console.log('add bike 2km kohl');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				console.log('add bus 1km monona');
			} else if (bufferPosition == 1) {
				console.log('add bus 2km monona');
			} else if (bufferPosition == 2) {
				console.log('add bike 1km monona');
			} else if (bufferPosition == 3) {
				console.log('add bike 2km monona');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				console.log('add bus 1km yahara');
			} else if (bufferPosition == 1) {
				console.log('add bus 2km yahara');
			} else if (bufferPosition == 2) {
				console.log('add bike 1km yahara');
			} else if (bufferPosition == 3) {
				console.log('add bike 2km yahara');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				console.log('add bus 1km msn');
			} else if (bufferPosition == 1) {
				console.log('add bus 2km msn');
			} else if (bufferPosition == 2) {
				console.log('add bike 1km msn');
			} else if (bufferPosition == 3) {
				console.log('add bike 2km msn');
			}
		}
	}
};

function removeBuffers(x) {
	
};


















		

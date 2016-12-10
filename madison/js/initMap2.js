

// Initialize the map
var map02 = new mapboxgl.Map({
    container: 'map02',
    style: 'mapbox://styles/skywilliams/ciuxinskg00f92io46tlqruc3',
    center: [-89.396691603682072, 43.068686375866029],
    zoom: 11,
    pitch: 0.1,
    attributionControl: false
});

map02.on('style.load', function () {
	map02.setPaintProperty('taxparcels', 'fill-extrude-height', {
		'property': 'height',
		'type': 'identity'
	});
	
	map02.setPaintProperty('taxparcels', 'fill-extrude-base', 0);
	map02.setPaintProperty('taxparcels', 'fill-opacity', 0.5);
	
	map02.setLayoutProperty('busstops', 'visibility', 'none');
	map02.setLayoutProperty('bikeshare', 'visibility', 'none');
	map02.setLayoutProperty('busroute', 'visibility', 'none');
	map02.setLayoutProperty('bikepath', 'visibility', 'none');
	
	map02.addSource('madisonStations', {
		'type': 'geojson',
		'data': '/madison/data/stations_v2.geojson'
	});
	
	map02.addSource('busKohl01', {
		'type': 'geojson',
		'data': '/madison/data/upload/1km/busKohl_1.geojson'
	});
});


function addStation2(x) {
	currentStationList2.push(x);
	//x = button id
	//get button id, add layer - filter
	var stationPosition = stationList2.indexOf(x);
	var stationCross = stationListCross[stationPosition];
	
	map02.addLayer({
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

function removeStation2(x) {
	var remove = currentStationList2.indexOf(x);
	currentStationList2.splice(remove, 1);
	
	map02.removeLayer(x);
	
	if (kohlButtonControl2 == false && mononaButtonControl2 == false && yaharaButtonControl2 == false && msnButtonControl2 == false) {
		deactivateBuffers2();
	}
};



function addBuffers2(x) {
	
	var bufferPosition = bufferList2.indexOf(x); // gets either demo1Button, demo2Button, parcel1Button, parcel2Button
	//var bufferCross = bufferListCross[bufferPosition]; 
	
	var i;
	for (i=0; i < currentStationList2.length; i++) {
		var position = stationList2.indexOf(currentStationList2[i]);
		
		if (position == 0) {
			if (bufferPosition == 0) {
				console.log('add demo 1km kohl');
			} else if (bufferPosition == 1) {
				console.log('add demo 2km kohl');
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km kohl');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km kohl');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				console.log('add demo 1km monona');
			} else if (bufferPosition == 1) {
				console.log('add demo 2km monona');
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km monona');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km monona');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				console.log('add demo 1km yahara');
			} else if (bufferPosition == 1) {
				console.log('add demo 2km yahara');
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km yahara');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km yahara');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				console.log('add demo 1km msn');
			} else if (bufferPosition == 1) {
				console.log('add demo 2km msn');
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km msn');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km msn');
			}
		}
	}
};

function removeBuffers2(x) {
	var bufferPosition = bufferList2.indexOf(x); // gets either demo1Button, demo2Button, parcel1Button, parcel2Button
	//var bufferCross = bufferListCross[bufferPosition]; 
	
	var i;
	for (i=0; i < currentStationList2.length; i++) {
		var position = stationList2.indexOf(currentStationList2[i]);
		
		if (position == 0) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km kohl');
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km kohl');
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km kohl');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km kohl');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km monona');
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km monona');
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km monona');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km monona');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km yahara');
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km yahara');
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km yahara');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km yahara');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km msn');
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km msn');
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km msn');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km msn');
			}
		}
	}
};


















		



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
	
	map02.addSource('circmerged1km', {
		'type': 'geojson',
		'data': '/madison/data/circmerged1km.geojson'
	});
	
	map02.addSource('circmerged2km', {
		'type': 'geojson',
		'data': '/madison/data/circmerged2km.geojson'
	});
});


function addStation2(x) {
	currentStationList2.push(x);
	//x = button id
	//get button id, add layer - filter
	var stationPosition = stationList2.indexOf(x);
	var stationCross = stationListCross[stationPosition];
	
	var circlePosition = stationPosition + 1;
	
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
	
	var buffer1kmName = x + "1km2";
	// add 1km buffer circle
	map02.addLayer({
		'id': buffer1kmName,
		'type': 'fill',
		'source': 'circmerged1km',
		'layout': {},
		'paint': {
			'fill-color': 'black',
			'fill-opacity': 0.25
		},
		'filter': ['==', 'GID', circlePosition]
	});
	trackCircleLayers2.push(buffer1kmName);
	
	
	var buffer2kmName = x + "2km2";
	// add 2km buffer circle
	map02.addLayer({
		'id': buffer2kmName,
		'type': 'fill',
		'source': 'circmerged2km',
		'layout': {},
		'paint': {
			'fill-color': 'orange',
			'fill-opacity': 0.25
		},
		'filter': ['==', 'GID', circlePosition]
	});
	trackCircleLayers2.push(buffer2kmName);
};

function removeStation2(x) {
	var remove = currentStationList2.indexOf(x);
	currentStationList2.splice(remove, 1);
	
	var circRemove1km = x + "1km2";
	var circRemove2km = x + "2km2";
	map02.removeLayer(circRemove1km);
	map02.removeLayer(circRemove2km);
	
	var remove1km = trackCircleLayers2.indexOf(circRemove1km);
	var remove2km = trackCircleLayers2.indexOf(circRemove2km);
	trackCircleLayers2.splice(remove1km, 1);
	trackCircleLayers2.splice(remove2km, 1);
	
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
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 1) {
				console.log('add demo 2km kohl');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km kohl');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km kohl');
				// trackBufferLayers2.push('id');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				console.log('add demo 1km monona');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 1) {
				console.log('add demo 2km monona');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km monona');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km monona');
				// trackBufferLayers2.push('id');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				console.log('add demo 1km yahara');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 1) {
				console.log('add demo 2km yahara');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km yahara');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km yahara');
				// trackBufferLayers2.push('id');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				console.log('add demo 1km msn');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 1) {
				console.log('add demo 2km msn');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km msn');
				// trackBufferLayers2.push('id');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km msn');
				// trackBufferLayers2.push('id');
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
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km kohl');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km kohl');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km kohl');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km monona');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km monona');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km monona');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km monona');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km yahara');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km yahara');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km yahara');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km yahara');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km msn');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km msn');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km msn');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km msn');
				// var spot = trackBufferLayers2.indexOf('id');
				// trackBufferLayers2.splice(spot, 1);
				// map02.removeLayer('id');
			}
		}
	}
};


















		

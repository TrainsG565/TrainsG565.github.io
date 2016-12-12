

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
	/*
	map02.setPaintProperty('taxparcels', 'fill-extrude-height', {
		'property': 'height',
		'type': 'identity'
	});
	*/
	
	//map02.setPaintProperty('taxparcels', 'fill-extrude-base', 0);
	//map02.setPaintProperty('taxparcels', 'fill-opacity', 0.5);
	
	//map02.setLayoutProperty('busstops', 'visibility', 'none');
	//map02.setLayoutProperty('bikeshare', 'visibility', 'none');
	map02.setLayoutProperty('busroute', 'visibility', 'none');
	map02.setLayoutProperty('bikepath', 'visibility', 'none');
	
	// demo1km is style layer
	// and demo2km
	/*
	map02.setPaintProperty('demo1km2km', 'circle-color', {
		property: 'type',
		type: 'categorical',
		stops: [
			['2', '#fbb03b'],
			['6', 'black'],
			['3', '#223b53'],
			['4', 'brown'],
			['5', '#3bb2d0']
		]
	});
	*/
	
	map02.addSource('madisonStations', {
		'type': 'geojson',
		'data': '/madison/data/stations_v2.geojson'
	});
	
	map02.addSource('circmerged1km', {
		'type': 'geojson',
		'data': '/madison/data/circmerged1km.geojson'
	});
	
	map02.addSource('circmerged2km', {
		'type': 'geojson',
		'data': '/madison/data/circmerged2km.geojson'
	});
	
	map02.addSource('parcels1km2km', {
		'type': 'geojson',
		'data': '/madison/data/parcels1km2km.geojson'
	});
	
	
});

// Create a popup, but don't add it to the map yet.
var popup2 = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map02.on('mousemove', function(e) {
    var features = map02.queryRenderedFeatures(e.point, { layers: trackBufferLayers2 });
    // Change the cursor style as a UI indicator.
    map02.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup2.remove();
        return;
    }

    var feature = features[0];
    
    if (feature.layer.id == 'parcelKohl1km' || feature.layer.id == 'parcelKohl2km' || feature.layer.id == 'parcelMonona1km' || feature.layer.id == 'parcelMonona2km' ||
    feature.layer.id == 'parcelYahara1km' || feature.layer.id == 'parcelYahara2km' || feature.layer.id == 'parcelMSN1km' || feature.layer.id == 'parcelMSN2km') {
    	var setHTML = "<b>Property Type: </b>" + feature.properties.PropertyCl + "<br>" + "<b>Property Description: </b>" + feature.properties.PropertyUs + "<br>" +
    		"<b>Net Taxes: </b>" + feature.properties.NetTaxes + "<br>" + "<b>Click for 3D view</b>";
    	popup2.setLngLat(map02.unproject(e.point))
        	.setHTML(setHTML)
        	.addTo(map02);
    } else {
    	return;
    }
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
				map02.setLayoutProperty('demo1km2km', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 1]);
				
				map02.setFilter('demo1km2km', ['==', 'GID', 1]);
				/*
				map02.addLayer({
					'id': 'demoKohl1km',
					'type': 'circle',
					'source': 'demo1km2km',
					'source-layer': 'demo1km2kmgeojson',
					'layout': {},
					'paint': {
						'circle-color': 'black',
						'circle-radius': 1
					},
					'filter': ['==', 'GID', 1]
				});
				*/
			} else if (bufferPosition == 1) {
				console.log('add demo 2km kohl');
				// 'demo2km' works, but zoom = 13
				map02.setLayoutProperty('demo1km2km', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 5]);
				map02.setFilter('demo1km2km', ['==', 'GID', 5]);
				/*
				map02.addLayer({
					'id': 'demoKohl2km',
					'type': 'circle',
					'source': 'demo1km2km',
					'layout': {},
					'paint': {
						'circle-color': 'black',
						'circle-radius': 1
					},
					'filter': ['==', 'GID', 5]
				});
				*/
				
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km kohl');
				map02.addLayer({
					'id': 'parcelKohl1km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': 'black',
						'fill-opacity': 0.75
					},
					'filter': ['==', 'GID', 1]
				});
				trackBufferLayers2.push('parcelKohl1km');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km kohl');
				map02.addLayer({
					'id': 'parcelKohl2km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': 'black',
						'fill-opacity': 0.75
					},
					'filter': ['==', 'GID', 5]
				});
				trackBufferLayers2.push('parcelKohl2km');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				console.log('add demo 1km monona');
				map02.setLayoutProperty('demo1km2km', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 2]);
				map02.setFilter('demo1km2km', ['==', 'GID', 2]);
				/*
				map02.addLayer({
					'id': 'demoMonona1km',
					'type': 'circle',
					'source': 'demo1km2km',
					'layout': {},
					'paint': {
						'circle-color': 'black',
						'circle-radius': 1
					},
					'filter': ['==', 'GID', 2]
				});
				*/
				
			} else if (bufferPosition == 1) {
				console.log('add demo 2km monona');
				map02.setLayoutProperty('demo1km2km', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 6]);
				map02.setFilter('demo1km2km', ['==', 'GID', 6]);
				/*
				map02.addLayer({
					'id': 'demoMonona2km',
					'type': 'circle',
					'source': 'demo1km2km',
					'layout': {},
					'paint': {
						'circle-color': 'black',
						'circle-radius': 1
					},
					'filter': ['==', 'GID', 6]
				});
				*/
			
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km monona');
				map02.addLayer({
					'id': 'parcelMonona1km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': 'black',
						'fill-opacity': 0.75
					},
					'filter': ['==', 'GID', 2]
				});
				trackBufferLayers2.push('parcelMonona1km');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km monona');
				map02.addLayer({
					'id': 'parcelMonona2km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': 'black',
						'fill-opacity': 0.75
					},
					'filter': ['==', 'GID', 6]
				});
				trackBufferLayers2.push('parcelMonona2km');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				console.log('add demo 1km yahara');
				map02.setLayoutProperty('demo1km2km', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 3]);
				map02.setFilter('demo1km2km', ['==', 'GID', 3]);
				/*
				map02.addLayer({
					'id': 'demoYahara1km',
					'type': 'circle',
					'source': 'demo1km2km',
					'layout': {},
					'paint': {
						'circle-color': 'black',
						'circle-radius': 1
					},
					'filter': ['==', 'GID', 3]
				});
				*/
	
			} else if (bufferPosition == 1) {
				console.log('add demo 2km yahara');
				map02.setLayoutProperty('demo1km2km', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 7]);
				map02.setFilter('demo1km2km', ['==', 'GID', 7]);
				/*
				map02.addLayer({
					'id': 'demoYahara2km',
					'type': 'circle',
					'source': 'demo1km2km',
					'layout': {},
					'paint': {
						'circle-color': 'black',
						'circle-radius': 1
					},
					'filter': ['==', 'GID', 7]
				});
				*/
				
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km yahara');
				map02.addLayer({
					'id': 'parcelYahara1km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': 'black',
						'fill-opacity': 0.75
					},
					'filter': ['==', 'GID', 3]
				});
				trackBufferLayers2.push('parcelYahara1km');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km yahara');
				map02.addLayer({
					'id': 'parcelYahara2km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': 'black',
						'fill-opacity': 0.75
					},
					'filter': ['==', 'GID', 7]
				});
				trackBufferLayers2.push('parcelYahara2km');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				console.log('add demo 1km msn');
				map02.setLayoutProperty('demo1km2km', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 4]);
				map02.setFilter('demo1km2km', ['==', 'GID', 4]);
				/*
				map02.addLayer({
					'id': 'demoMSN1km',
					'type': 'circle',
					'source': 'demo1km2km',
					'layout': {},
					'paint': {
						'circle-color': 'black',
						'circle-radius': 1
					},
					'filter': ['==', 'GID', 4]
				});
				*/
				
			} else if (bufferPosition == 1) {
				console.log('add demo 2km msn');
				map02.setLayoutProperty('demo1km2km', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 8]);
				map02.setFilter('demo1km2km', ['==', 'GID', 8]);
				/*
				map02.addLayer({
					'id': 'demoMSN2km',
					'type': 'circle',
					'source': 'demo1km2km',
					'layout': {},
					'paint': {
						'circle-color': 'black',
						'circle-radius': 1
					},
					'filter': ['==', 'GID', 8]
				});
				*/
				
			} else if (bufferPosition == 2) {
				console.log('add parcel 1km msn');
				map02.addLayer({
					'id': 'parcelMSN1km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': 'black',
						'fill-opacity': 0.75
					},
					'filter': ['==', 'GID', 4]
				});
				trackBufferLayers2.push('parcelMSN1km');
			} else if (bufferPosition == 3) {
				console.log('add parcel 2km msn');
				map02.addLayer({
					'id': 'parcelMSN2km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': 'black',
						'fill-opacity': 0.75
					},
					'filter': ['==', 'GID', 8]
				});
				trackBufferLayers2.push('parcelMSN2km');
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
				map02.setLayoutProperty('demo1km', 'visibility', 'none');
				map02.setFilter('demo1km', ['==', 'GID', '']);
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 1]);
				trackDemoBufferLayers2.splice(spot, 1);
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km kohl');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 5]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('demo2km', 'visibility', 'none');
				map02.setFilter('demo2km', ['==', 'GID', '']);
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km kohl');
				var spot = trackBufferLayers2.indexOf('parcelKohl1km');
				trackBufferLayers2.splice(spot, 1);
				map02.removeLayer('parcelKohl1km');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km kohl');
				var spot = trackBufferLayers2.indexOf('parcelKohl2km');
				trackBufferLayers2.splice(spot, 1);
				map02.removeLayer('parcelKohl2km');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km monona');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 2]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('demo1km2km', 'visibility', 'none');
				map02.setFilter('demo1km2km', ['==', 'GID', '']);
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km monona');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 6]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('demo1km2km', 'visibility', 'none');
				map02.setFilter('demo1km2km', ['==', 'GID', '']);
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km monona');
				var spot = trackBufferLayers2.indexOf('parcelMonona1km');
				trackBufferLayers2.splice(spot, 1);
				map02.removeLayer('parcelMonona1km');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km monona');
				var spot = trackBufferLayers2.indexOf('parcelMonona2km');
				trackBufferLayers2.splice(spot, 1);
				map02.removeLayer('parcelMonona2km');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km yahara');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 3]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('demo1km2km', 'visibility', 'none');
				map02.setFilter('demo1km2km', ['==', 'GID', '']);
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km yahara');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 7]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('demo1km2km', 'visibility', 'none');
				map02.setFilter('demo1km2km', ['==', 'GID', '']);
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km yahara');
				var spot = trackBufferLayers2.indexOf('parcelYahara1km');
				trackBufferLayers2.splice(spot, 1);
				map02.removeLayer('parcelYahara1km');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km yahara');
				var spot = trackBufferLayers2.indexOf('parcelYahara2km');
				trackBufferLayers2.splice(spot, 1);
				map02.removeLayer('parcelYahara2km');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				console.log('remove demo 1km msn');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 4]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('demo1km2km', 'visibility', 'none');
				map02.setFilter('demo1km2km', ['==', 'GID', '']);
			} else if (bufferPosition == 1) {
				console.log('remove demo 2km msn');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 8]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('demo1km2km', 'visibility', 'none');
				map02.setFilter('demo1km2km', ['==', 'GID', '']);
			} else if (bufferPosition == 2) {
				console.log('remove parcel 1km msn');
				var spot = trackBufferLayers2.indexOf('parcelMSN1km');
				trackBufferLayers2.splice(spot, 1);
				map02.removeLayer('parcelMSN1km');
			} else if (bufferPosition == 3) {
				console.log('remove parcel 2km msn');
				var spot = trackBufferLayers2.indexOf('parcelMSN2km');
				trackBufferLayers2.splice(spot, 1);
				map02.removeLayer('parcelMSN2km');
			}
		}
	}
};


















		

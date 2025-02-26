// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';

// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/skywilliams/ciuxinskg00f92io46tlqruc3',
    center: [-89.396691603682072, 43.068686375866029],
    zoom: 11,
    pitch: 0.1,
    attributionControl: true
});

map01.addControl(new mapboxgl.NavigationControl());

map01.on('style.load', function () {
	/*
	map01.setPaintProperty('taxparcels', 'fill-extrude-height', {
		'property': 'height',
		'type': 'identity'
	});
	*/
	
	//map01.setPaintProperty('taxparcels', 'fill-extrude-base', 0);
	//map01.setPaintProperty('taxparcels', 'fill-opacity', 0.5);
	
	//map01.setLayoutProperty('busstops', 'visibility', 'none');
	//map01.setLayoutProperty('bikeshare', 'visibility', 'none');
	map01.setLayoutProperty('busroute', 'visibility', 'none');
	map01.setLayoutProperty('bikepath', 'visibility', 'none');
	
	map01.addSource('madisonStations', {
		'type': 'geojson',
		'data': '/madison/data/stations_v2.geojson'
	});
	
	map01.addSource('bbmerged1km', {
		'type': 'geojson',
		'data': '/madison/data/bbmerged1km.geojson'
	});
	
	map01.addSource('bbmerged2km', {
		'type': 'geojson',
		'data': '/madison/data/bbmerged2km.geojson'
	});
	
	map01.addSource('circmerged1km', {
		'type': 'geojson',
		'data': '/madison/data/circmerged1km.geojson'
	});
	
	map01.addSource('circmerged2km', {
		'type': 'geojson',
		'data': '/madison/data/circmerged2km.geojson'
	});
	
});

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

// Create a popup, but don't add it to the map yet.
var popupClick = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
});

var testArr = [];
var testFilterArr = [
	'any'
];

map01.on('mousemove', function(e) {
    var features = map01.queryRenderedFeatures(e.point, { layers: trackBufferLayers });
    map01.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        //map01.setLayoutProperty('busroute', 'visibility', 'none');
        map01.setLayoutProperty('bikepath', 'visibility', 'none');
        return;
        
    }
    

    var feature = features[0];
    
    if (feature.layer.id == 'busKohl1km' || feature.layer.id == 'busKohl2km' || feature.layer.id == 'busMonona1km' || feature.layer.id == 'busMonona2km' ||
    feature.layer.id == 'busYahara1km' || feature.layer.id == 'busYahara2km' || feature.layer.id == 'busMSN1km' || feature.layer.id == 'busMSN2km') {
    	//map01.setLayoutProperty('busroute', 'visibility', 'visible');
    	var setHTML = "<b>Stop Name: </b>" + feature.properties.stop_name + "<br>" + "<b>Stop Description: </b>" + feature.properties.stop_desc + "<br>" + "<b>Direction: </b>" + feature.properties.direction +
    		"<br>" + "<b>Route: </b>" + feature.properties.Route + "<br>" + "<b>Click to display route</b>";
    	popup.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map01);
    } else if (feature.layer.id == 'bikeKohl1km' || feature.layer.id == 'bikeKohl2km' || feature.layer.id == 'bikeMonona1km' || feature.layer.id == 'bikeMonona2km' ||
    feature.layer.id == 'bikeYahara1km' || feature.layer.id == 'bikeYahara2km' || feature.layer.id == 'bikeMSN1km' || feature.layer.id == 'bikeMSN2km') {
    	map01.setLayoutProperty('bikepath', 'visibility', 'visible');
    } else if (feature.layer.id == 'kohlButton') {
    	// add popup for option to click for info and buffers
    	var setHTML = "<b>Click for Kohl buffer info</b>";
    	popup.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map01);
    } else if (feature.layer.id == 'mononaButton') {
    	// add popup for option to click for info and buffers
    	var setHTML = "<b>Click for Monona buffer info</b>";
    	popup.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map01);
    } else if (feature.layer.id == 'yaharaButton') {
    	// add popup for option to click for info and buffers
    	var setHTML = "<b>Click for Yahara buffer info</b>";
    	popup.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map01);
    } else if (feature.layer.id == 'msnButton') {
    	// add popup for option to click for info and buffer
    	var setHTML = "<b>Click for MSN buffer info</b>";
    	popup.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map01);
    }
    	
});

map01.on('click', function(e) {
    var features = map01.queryRenderedFeatures(e.point, { layers: trackBufferLayers });
    map01.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popupClick.remove();
        return;
    }
    

    var feature = features[0];
    
    if (feature.layer.id == 'busKohl1km' || feature.layer.id == 'busKohl2km' || feature.layer.id == 'busMonona1km' || feature.layer.id == 'busMonona2km' ||
    feature.layer.id == 'busYahara1km' || feature.layer.id == 'busYahara2km' || feature.layer.id == 'busMSN1km' || feature.layer.id == 'busMSN2km') {
    	
        testFilterArr.length = 0;
        testArr.length = 0;
        
    	testArr.push(feature.properties.Route);
    	var energy = testArr.join();
    	var prime = energy.split(", ");
    	
    	testFilterArr = [
    		'any'
    	];
    	
    	
    	for (var x=0; x < prime.length; x++) {
    		testFilterArr.push(['==', 'route_shor', parseInt(prime[x])]);
    	}
    	console.log(testFilterArr);
    	console.log(testArr);
    	
    	
    	map01.setLayoutProperty('busroute', 'visibility', 'visible');
    	map01.setFilter('busroute', testFilterArr);
    	
    } else if (feature.layer.id == 'bikeKohl1km' || feature.layer.id == 'bikeKohl2km' || feature.layer.id == 'bikeMonona1km' || feature.layer.id == 'bikeMonona2km' ||
    feature.layer.id == 'bikeYahara1km' || feature.layer.id == 'bikeYahara2km' || feature.layer.id == 'bikeMSN1km' || feature.layer.id == 'bikeMSN2km') {
    	var setHTML = "<b>Name: </b>" + feature.properties.Name;
    	popupClick.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map01);
    } else if (feature.layer.id == 'kohlButton') {
    	var open = popupClick.isOpen();
    	if (open == false) {
    		// add popup for option to click for info and buffers
    		var setHTML = "<b>Kohl Buffer Information</b>" + "<br>" + "Number of Bus Stations 1km: <b>99</b>" + "<br>" + "Number of bicycle shares 1km: <b>9</b>" + "<br>" + 
    			"Number of Bus Stations 2km: <b>224</b>" + "<br>" + "Number of bicycle shares 2km: <b>22</b>";
    		popupClick.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
        } else if (open == true) {
        	popupClick.remove();
        	// add popup for option to click for info and buffers
    		var setHTML = "<b>Kohl Buffer Information</b>" + "<br>" + "Number of Bus Stations 1km: <b>99</b>" + "<br>" + "Number of bicycle shares 1km: <b>9</b>" + "<br>" + 
    			"Number of Bus Stations 2km: <b>224</b>" + "<br>" + "Number of bicycle shares 2km: <b>22</b>";
    		popupClick.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
        }
    } else if (feature.layer.id == 'mononaButton') {
    	var open = popupClick.isOpen();
    	if (open == false) {
    		// add popup for option to click for info and buffers
    		var setHTML = "<b>Monona Buffer Information</b>" + "<br>" + "Number of Bus Stations 1km: <b>59</b>" + "<br>" + "Number of bicycle shares 1km: <b>10</b>" + "<br>" + 
    			"Number of Bus Stations 2km: <b>143</b>" + "<br>" + "Number of bicycle shares 2km: <b>20</b>";
    		popupClick.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
        } else if (open == true) {
        	popupClick.remove();
        	// add popup for option to click for info and buffers
    		var setHTML = "<b>Monona Buffer Information</b>" + "<br>" + "Number of Bus Stations 1km: <b>59</b>" + "<br>" + "Number of bicycle shares 1km: <b>10</b>" + "<br>" + 
    			"Number of Bus Stations 2km: <b>143</b>" + "<br>" + "Number of bicycle shares 2km: <b>20</b>";
    		popupClick.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
        }
    } else if (feature.layer.id == 'yaharaButton') {
    	var open = popupClick.isOpen();
    	if (open == false) {
    		// add popup for option to click for info and buffers
    		var setHTML = "<b>Yahara Buffer Information</b>" + "<br>" + "Number of Bus Stations 1km: <b>67</b>" + "<br>" + "Number of bicycle shares 1km: <b>2</b>" + "<br>" + 
    			"Number of Bus Stations 2km: <b>156</b>" + "<br>" + "Number of bicycle shares 2km: <b>5</b>";
    		popupClick.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
        } else if (open == true) {
        	popupClick.remove();
        	var setHTML = "<b>Yahara Buffer Information</b>" + "<br>" + "Number of Bus Stations 1km: <b>67</b>" + "<br>" + "Number of bicycle shares 1km: <b>2</b>" + "<br>" + 
    			"Number of Bus Stations 2km: <b>156</b>" + "<br>" + "Number of bicycle shares 2km: <b>5</b>";
    		popupClick.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
        }
    } else if (feature.layer.id == 'msnButton') {
    	var open = popupClick.isOpen();
    	if (open == false) {
    		// add popup for option to click for info and buffer
    		var setHTML = "<b>MSN Buffer Information</b>" + "<br>" + "Number of Bus Stations 1km: <b>10</b>" + "<br>" + "Number of bicycle shares 1km: <b>0</b>" + "<br>" + 
    			"Number of Bus Stations 2km: <b>57</b>" + "<br>" + "Number of bicycle shares 2km: <b>0</b>";
    		popupClick.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
        } else if (open == true) {
        	popupClick.remove();
        	// add popup for option to click for info and buffer
    		var setHTML = "<b>MSN Buffer Information</b>" + "<br>" + "Number of Bus Stations 1km: <b>10</b>" + "<br>" + "Number of bicycle shares 1km: <b>0</b>" + "<br>" + 
    			"Number of Bus Stations 2km: <b>57</b>" + "<br>" + "Number of bicycle shares 2km: <b>0</b>";
    		popupClick.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
        }
    }
});



function addStation(x) {
	currentStationList.push(x);
	//x = button id
	//get button id, add layer - filter
	var stationPosition = stationList.indexOf(x);
	var stationCross = stationListCross[stationPosition];
	
	var circlePosition = stationPosition + 1;
	
	trackBufferLayers.push(x);
	
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
	
	
	var buffer1kmName = x + "1km";
	
	// add 1km buffer circle
	
	map01.addLayer({
		'id': buffer1kmName,
		'type': 'fill',
		'source': 'circmerged1km',
		'layout': {},
		'paint': {
			'fill-color': 'black',
			'fill-opacity': 0
		},
		'filter': ['==', 'GID', circlePosition]
	});
	trackCircleLayers.push(buffer1kmName);
	
	
	var buffer2kmName = x + "2km";
	// add 2km buffer circle
	map01.addLayer({
		'id': buffer2kmName,
		'type': 'fill',
		'source': 'circmerged2km',
		'layout': {},
		'paint': {
			'fill-color': 'orange',
			'fill-opacity': 0
		},
		'filter': ['==', 'GID', circlePosition]
	});
	trackCircleLayers.push(buffer2kmName);
	
};

function removeStation(x) {
	var remove = currentStationList.indexOf(x);
	currentStationList.splice(remove, 1);
	
	var removeAgain = trackBufferLayers.indexOf(x);
	trackBufferLayers.splice(removeAgain,1);
	
	var circRemove1km = x + "1km";
	var circRemove2km = x + "2km";
	map01.removeLayer(circRemove1km);
	map01.removeLayer(circRemove2km);
	
	var remove1km = trackCircleLayers.indexOf(circRemove1km);
	var remove2km = trackCircleLayers.indexOf(circRemove2km);
	trackCircleLayers.splice(remove1km, 1);
	trackCircleLayers.splice(remove2km, 1);
	
	
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
				map01.addLayer({
					'id': 'busKohl1km',
					'type': 'circle',
					'source': 'bbmerged1km',
					'layout': {},
					'paint': {
						'circle-color': '#2980B9',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 4]
				});
				trackBufferLayers.push('busKohl1km');
			} else if (bufferPosition == 1) {
				map01.addLayer({
					'id': 'busKohl2km',
					'type': 'circle',
					'source': 'bbmerged2km',
					'layout': {},
					'paint': {
						'circle-color': '#2980B9',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 4]
				});
				trackBufferLayers.push('busKohl2km');
			} else if (bufferPosition == 2) {
				//console.log('add bike 1km kohl');
				map01.addLayer({
					'id': 'bikeKohl1km',
					'type': 'circle',
					'source': 'bbmerged1km',
					'layout': {},
					'paint': {
						'circle-color': '#D35400',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 7]
				});
				trackBufferLayers.push('bikeKohl1km');
			} else if (bufferPosition == 3) {
				//console.log('add bike 2km kohl');
				map01.addLayer({
					'id': 'bikeKohl2km',
					'type': 'circle',
					'source': 'bbmerged2km',
					'layout': {},
					'paint': {
						'circle-color': '#D35400',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 7]
				});
				trackBufferLayers.push('bikeKohl2km');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				//console.log('add bus 1km monona');
				map01.addLayer({
					'id': 'busMonona1km',
					'type': 'circle',
					'source': 'bbmerged1km',
					'layout': {},
					'paint': {
						'circle-color': '#2980B9',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 3]
				});
				trackBufferLayers.push('busMonona1km');
			} else if (bufferPosition == 1) {
				//console.log('add bus 2km monona');
				map01.addLayer({
					'id': 'busMonona2km',
					'type': 'circle',
					'source': 'bbmerged2km',
					'layout': {},
					'paint': {
						'circle-color': '#2980B9',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 3]
				});
				trackBufferLayers.push('busMonona2km');
			} else if (bufferPosition == 2) {
				//console.log('add bike 1km monona');
				map01.addLayer({
					'id': 'bikeMonona1km',
					'type': 'circle',
					'source': 'bbmerged1km',
					'layout': {},
					'paint': {
						'circle-color': '#D35400',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 6]
				});
				trackBufferLayers.push('bikeMonona1km');
			} else if (bufferPosition == 3) {
				//console.log('add bike 2km monona');
				map01.addLayer({
					'id': 'bikeMonona2km',
					'type': 'circle',
					'source': 'bbmerged2km',
					'layout': {},
					'paint': {
						'circle-color': '#D35400',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 6]
				});
				trackBufferLayers.push('bikeMonona2km');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				//console.log('add bus 1km yahara');
				map01.addLayer({
					'id': 'busYahara1km',
					'type': 'circle',
					'source': 'bbmerged1km',
					'layout': {},
					'paint': {
						'circle-color': '#2980B9',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 1]
				});
				trackBufferLayers.push('busYahara1km');
			} else if (bufferPosition == 1) {
				//console.log('add bus 2km yahara');
				map01.addLayer({
					'id': 'busYahara2km',
					'type': 'circle',
					'source': 'bbmerged2km',
					'layout': {},
					'paint': {
						'circle-color': '#2980B9',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 1]
				});
				trackBufferLayers.push('busYahara2km');
			} else if (bufferPosition == 2) {
				//console.log('add bike 1km yahara');
				map01.addLayer({
					'id': 'bikeYahara1km',
					'type': 'circle',
					'source': 'bbmerged1km',
					'layout': {},
					'paint': {
						'circle-color': '#D35400',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 5]
				});
				trackBufferLayers.push('bikeYahara1km');
			} else if (bufferPosition == 3) {
				//console.log('add bike 2km yahara');
				map01.addLayer({
					'id': 'bikeYahara2km',
					'type': 'circle',
					'source': 'bbmerged2km',
					'layout': {},
					'paint': {
						'circle-color': '#D35400',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 5]
				});
				trackBufferLayers.push('bikeYahara2km');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				//console.log('add bus 1km msn');
				map01.addLayer({
					'id': 'busMSN1km',
					'type': 'circle',
					'source': 'bbmerged1km',
					'layout': {},
					'paint': {
						'circle-color': '#2980B9',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 2]
				});
				trackBufferLayers.push('busMSN1km');
			} else if (bufferPosition == 1) {
				//console.log('add bus 2km msn');
				map01.addLayer({
					'id': 'busMSN2km',
					'type': 'circle',
					'source': 'bbmerged2km',
					'layout': {},
					'paint': {
						'circle-color': '#2980B9',
						'circle-radius': 4
					},
					'filter': ['==', 'GID', 2]
				});
				trackBufferLayers.push('busMSN2km');
			} else if (bufferPosition == 2) {
				//console.log('add bike 1km msn');
			} else if (bufferPosition == 3) {
				//console.log('add bike 2km msn');
			}
		}
	}
};

function removeBuffers(x) {
	var bufferPosition = bufferList.indexOf(x); // gets either bus1Button, bus2Button, bike1Button, bike2Button
	//var bufferCross = bufferListCross[bufferPosition]; 
	
	var i;
	for (i=0; i < currentStationList.length; i++) {
		var position = stationList.indexOf(currentStationList[i]);
		
		if (position == 0) {
			if (bufferPosition == 0) {
				//console.log('remove bus 1km kohl');
				var spot = trackBufferLayers.indexOf('busKohl1km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('busKohl1km');
				
				testFilterArr.length = 0;
        		testArr.length = 0;
			} else if (bufferPosition == 1) {
				//console.log('remove bus 2km kohl');
				var spot = trackBufferLayers.indexOf('busKohl2km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('busKohl2km');
				testFilterArr.length = 0;
        		testArr.length = 0;
			} else if (bufferPosition == 2) {
				//console.log('remove bike 1km kohl');
				var spot = trackBufferLayers.indexOf('bikeKohl1km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('bikeKohl1km');
			} else if (bufferPosition == 3) {
				//console.log('remove bike 2km kohl');
				var spot = trackBufferLayers.indexOf('bikeKohl2km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('bikeKohl2km');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				//console.log('remove bus 1km monona');
				var spot = trackBufferLayers.indexOf('busMonona1km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('busMonona1km');
				testFilterArr.length = 0;
        		testArr.length = 0;
			} else if (bufferPosition == 1) {
				//console.log('remove bus 2km monona');
				var spot = trackBufferLayers.indexOf('busMonona2km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('busMonona2km');
				testFilterArr.length = 0;
        		testArr.length = 0;
			} else if (bufferPosition == 2) {
				//console.log('remove bike 1km monona');
				var spot = trackBufferLayers.indexOf('bikeMonona1km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('bikeMonona1km');
			} else if (bufferPosition == 3) {
				//console.log('remove bike 2km monona');
				var spot = trackBufferLayers.indexOf('bikeMonona2km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('bikeMonona2km');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				//console.log('remove bus 1km yahara');
				var spot = trackBufferLayers.indexOf('busYahara1km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('busYahara1km');
				testFilterArr.length = 0;
        		testArr.length = 0;
			} else if (bufferPosition == 1) {
				//console.log('remove bus 2km yahara');
				var spot = trackBufferLayers.indexOf('busYahara2km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('busYahara2km');
				testFilterArr.length = 0;
        		testArr.length = 0;
			} else if (bufferPosition == 2) {
				//console.log('remove bike 1km yahara');
				var spot = trackBufferLayers.indexOf('bikeYahara1km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('bikeYahara1km');
			} else if (bufferPosition == 3) {
				//console.log('remove bike 2km yahara');
				var spot = trackBufferLayers.indexOf('bikeYahara2km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('bikeYahara2km');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				//console.log('remove bus 1km msn');
				var spot = trackBufferLayers.indexOf('busMSN1km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('busMSN1km');
				testFilterArr.length = 0;
        		testArr.length = 0;
			} else if (bufferPosition == 1) {
				//console.log('remove bus 2km msn');
				var spot = trackBufferLayers.indexOf('busMSN2km');
				trackBufferLayers.splice(spot, 1);
				map01.removeLayer('busMSN2km');
				testFilterArr.length = 0;
        		testArr.length = 0;
			} else if (bufferPosition == 2) {
				//console.log('remove bike 1km msn');
			} else if (bufferPosition == 3) {
				//console.log('remove bike 2km msn');
			}
		}
	}
	
};


















		

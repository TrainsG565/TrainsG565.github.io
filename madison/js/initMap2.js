

// Initialize the map
var map02 = new mapboxgl.Map({
    container: 'map02',
    style: 'mapbox://styles/skywilliams/ciuxinskg00f92io46tlqruc3',
    center: [-89.396691603682072, 43.068686375866029],
    zoom: 11,
    pitch: 0.1,
    attributionControl: true
});

map02.addControl(new mapboxgl.NavigationControl());

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
	
	map02.setPaintProperty('dots1km2kmgeojson', 'circle-color', {
        property: 'type',
        type: 'categorical',
        stops: [
            [2, '#fbb03b'],
            [3, '#223b53'],
            [4, '#ccc'],
            [5, '#3bb2d0'],
            [6, '#b7b7b7'],
            [7, '#e55e5e']]
    });
	
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

var specialParcelControl = false;

// Create a popup, but don't add it to the map yet.
var popup2 = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

// Create a popup, but don't add it to the map yet.
var popupClick2 = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
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
    	if (specialParcelControl == false) {
    		var setHTML = "<b>Property Type: </b>" + feature.properties.PropertyCl + "<br>" + "<b>Property Description: </b>" + feature.properties.PropertyUs + "<br>" +
    			"<b>Net Taxes: </b>" + feature.properties.NetTaxes + "<br>" + "<b>Click for 3D view</b>";
    		popup2.setLngLat(map02.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map02);
        } else if (specialParcelControl == true) {
        	var setHTML = "<b>Property Type: </b>" + feature.properties.PropertyCl + "<br>" + "<b>Property Description: </b>" + feature.properties.PropertyUs + "<br>" +
    			"<b>Net Taxes: </b>" + feature.properties.NetTaxes + "<br>" + "<b>Click to reset regular view</b>";
    		popup2.setLngLat(map02.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map02);
        }
    } else if (feature.layer.id == 'kohlButton2') {
    	// add popup for option to click for info and buffers
    	var setHTML = "<b>Click for Kohl buffer info</b>";
    	popup2.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map02);
    } else if (feature.layer.id == 'mononaButton2') {
    	// add popup for option to click for info and buffers
    	var setHTML = "<b>Click for Monona buffer info</b>";
    	popup2.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map02);
    } else if (feature.layer.id == 'yaharaButton2') {
    	// add popup for option to click for info and buffers
    	var setHTML = "<b>Click for Yahara buffer info</b>";
    	popup2.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map02);
    } else if (feature.layer.id == 'msnButton2') {
    	// add popup for option to click for info and buffer
    	var setHTML = "<b>Click for MSN buffer info</b>";
    	popup2.setLngLat(feature.geometry.coordinates)
        	.setHTML(setHTML)
        	.addTo(map02);
    }
});

map02.on('click', function(e) {
    var features = map02.queryRenderedFeatures(e.point, { layers: trackBufferLayers2 });
    map02.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popupClick2.remove();
        return;
    }
    

    var feature = features[0];
    
    if (feature.layer.id == 'parcelKohl1km' || feature.layer.id == 'parcelKohl2km' || feature.layer.id == 'parcelMonona1km' || feature.layer.id == 'parcelMonona2km' ||
    feature.layer.id == 'parcelYahara1km' || feature.layer.id == 'parcelYahara2km' || feature.layer.id == 'parcelMSN1km' || feature.layer.id == 'parcelMSN2km') {
    	
    	if (specialParcelControl == false) {
    		var timer = setInterval(myTimer, 50);
			
			var m = 0;
			function myTimer() {
    			m += 1;
    			if (m >= 55) {
    				clearInterval(timer);
    			} else if (m < 55) {
    				map02.setPitch(m);
    			}
			}
			
    		var g; 
    		for (g=0; g < trackBufferLayers2.length; g++) {
    			if (trackBufferLayers2[g] == 'parcelKohl1km' || trackBufferLayers2[g] == 'parcelKohl1km' || trackBufferLayers2[g] == 'parcelMonona1km' || trackBufferLayers2[g] == 'parcelMonona2km' ||
    			trackBufferLayers2[g] == 'parcelYahara1km' || trackBufferLayers2[g] == 'parcelYahara2km' || trackBufferLayers2[g] == 'parcelMSN1km' || trackBufferLayers2[g] == 'parcelMSN2km') {
    				map02.setPaintProperty(trackBufferLayers2[g], 'fill-extrude-height', {
    					'property': 'height2', // maybe change
    					'type': 'identity'
    				});
    			
    				map02.setPaintProperty(trackBufferLayers2[g], 'fill-extrude-base', 0);
    				map02.setPaintProperty(trackBufferLayers2[g], 'fill-opacity', 0.5);
    			}
    		specialParcelControl = true;
    		}
    	} else if (specialParcelControl == true) {
    		map02.setPitch(0.1);
    		for (g=0; g < trackBufferLayers2.length; g++) {
    			if (trackBufferLayers2[g] == 'parcelKohl1km' || trackBufferLayers2[g] == 'parcelKohl1km' || trackBufferLayers2[g] == 'parcelMonona1km' || trackBufferLayers2[g] == 'parcelMonona2km' ||
    			trackBufferLayers2[g] == 'parcelYahara1km' || trackBufferLayers2[g] == 'parcelYahara2km' || trackBufferLayers2[g] == 'parcelMSN1km' || trackBufferLayers2[g] == 'parcelMSN2km') {
    				console.log(trackBufferLayers2[g]);
    				map02.setPaintProperty(trackBufferLayers2[g], 'fill-extrude-height', 0);
    			
    				map02.setPaintProperty(trackBufferLayers2[g], 'fill-extrude-base', 0);
    				map02.setPaintProperty(trackBufferLayers2[g], 'fill-opacity', 1);
    			}
    		}
    		specialParcelControl = false;
    	}
    
    	
    } else if (feature.layer.id == 'dots1km2kmgeojson') {
    	// test click demographics
    	//console.log(feature.properties.type);
    } else if (feature.layer.id == 'kohlButton2') {
    	var open = popupClick2.isOpen();
    	if (open == false) {
    		// add popup for option to click for info and buffers
    		var setHTML = "<b>Kohl Buffer Information</b>" + "<br>" + "Property Types 1km: <b>1,019 Commercial and 2,565 Residential</b>" + "<br>" + "Average Net Taxes 1km: <b>10,523</b>" + "<br>" + "Demographics 1km: <b>20,803 White, 713 Black, 1,111 Hispanic, 2,513 Asian, 90 Other</b>" + "<br>" +
    			"Property Types 2km: <b>1,710 Commercial, 3 Industrial, and 6,049 Residential</b>" + "<br>" + "Average Net Taxes 2km: <b>10,088</b>" + "<br>" + "Demographics 2km: <b>33,992 White, 1,613 Black, 1,682 Hispanic, 3,281 Asian, 156 Other</b>";
    		popupClick2.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map02);
        } else if (open == true) {
        	popupClick2.remove();
        	// add popup for option to click for info and buffers
    		var setHTML = "<b>Kohl Buffer Information</b>" + "<br>" + "Property Types 1km: <b>1,019 Commercial and 2,565 Residential</b>" + "<br>" + "Average Net Taxes 1km: <b>10,523</b>" + "<br>" + "Demographics 1km: <b>20,803 White, 713 Black, 1,111 Hispanic, 2,513 Asian, 90 Other</b>" + "<br>" +
    			"Property Types 2km: <b>1,710 Commercial, 3 Industrial, and 6,049 Residential</b>" + "<br>" + "Average Net Taxes 2km: <b>10,088</b>" + "<br>" + "Demographics 2km: <b>33,992 White, 1,613 Black, 1,682 Hispanic, 3,281 Asian, 156 Other</b>";
    		popupClick2.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map02);
        }
    } else if (feature.layer.id == 'mononaButton2') {
    	var open = popupClick2.isOpen();
    	if (open == false) {
    		// add popup for option to click for info and buffers
    		var setHTML = "<b>Monona Buffer Information</b>" + "<br>" + "Property Types 1km: <b>985 Commercial and 3,301 Residential</b>" + "<br>" + "Average Net Taxes 1km: <b>7,243</b>" + "<br>" + "Demographics 1km: <b>9,171 White, 785 Black, 463 Hispanic, 462 Asian, 37 Other</b>" + "<br>" +
    			"Property Types 2km: <b>1,639 Commercial, 3 Industrial, and 5,770 Residential</b>" + "<br>" + "Average Net Taxes 2km: <b>9,312</b>" + "<br>" + "Demographics 2km: <b>26,608 White, 1,511 Black, 1,358 Hispanic, 2354 Asian, 123 Other</b>";
    		popupClick2.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map02);
        } else if (open == true) {
        	popupClick2.remove();
        	// add popup for option to click for info and buffers
    		var setHTML = "<b>Monona Buffer Information</b>" + "<br>" + "Property Types 1km: <b>985 Commercial and 3,301 Residential</b>" + "<br>" + "Average Net Taxes 1km: <b>7,243</b>" + "<br>" + "Demographics 1km: <b>9,171 White, 785 Black, 463 Hispanic, 462 Asian, 37 Other</b>" + "<br>" +
    			"Property Types 2km: <b>1,639 Commercial, 3 Industrial, and 5,770 Residential</b>" + "<br>" + "Average Net Taxes 2km: <b>9,312</b>" + "<br>" + "Demographics 2km: <b>26,608 White, 1,511 Black, 1,358 Hispanic, 2354 Asian, 123 Other</b>";
    		popupClick2.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map02);
        }
    } else if (feature.layer.id == 'yaharaButton2') {
    	var open = popupClick2.isOpen();
    	if (open == false) {
    		// add popup for option to click for info and buffers
    		var setHTML = "<b>Yahara Buffer Information</b>" + "<br>" + "Property Types 1km: <b>255 Commercial, 9 Industrial, and 2,118 Residential</b>" + "<br>" + "Average Net Taxes 1km: <b>6,087</b>" + "<br>" + "Demographics 1km: <b>7,879 White, 523 Black, 488 Hispanic, 277 Asian, 55 Other</b>" + "<br>" +
    			"Property Types 2km: <b>591 Commercial, 28 Industrial, and 5,492 Residential</b>" + "<br>" + "Average Net Taxes 2km: <b>6,304</b>" + "<br>" + "Demographics 2km: <b>17,310 White, 944 Black, 868 Hispanic, 458 Asian, 93 Other</b>";
    		popupClick2.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map02);
        } else if (open == true) {
        	popupClick2.remove();
        	// add popup for option to click for info and buffers
    		var setHTML = "<b>Yahara Buffer Information</b>" + "<br>" + "Property Types 1km: <b>255 Commercial, 9 Industrial, and 2,118 Residential</b>" + "<br>" + "Average Net Taxes 1km: <b>6,087</b>" + "<br>" + "Demographics 1km: <b>7,879 White, 523 Black, 488 Hispanic, 277 Asian, 55 Other</b>" + "<br>" +
    			"Property Types 2km: <b>591 Commercial, 28 Industrial, and 5,492 Residential</b>" + "<br>" + "Average Net Taxes 2km: <b>6,304</b>" + "<br>" + "Demographics 2km: <b>17,310 White, 944 Black, 868 Hispanic, 458 Asian, 93 Other</b>";
    		popupClick2.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map02);
        }
    } else if (feature.layer.id == 'msnButton2') {
    	var open = popupClick2.isOpen();
    	if (open == false) {
    		// add popup for option to click for info and buffer
    		var setHTML = "<b>MSN Buffer Information</b>" + "<br>" + "Property Types 1km: <b>1 Agricultural, 46 Commercial, 1 Industrial, and 143 Residential</b>" + "<br>" + "Average Net Taxes 1km: <b>7,892</b>" + "<br>" + "Demographics 1km: <b>1,150 White, 142 Black, 137 Hispanic, 70 Asian, 9 Other</b>" + "<br>" +
    			"Property Types 2km: <b>3 Agricultural, 166 Commercial, 5 Industrial, and 2,647 Residential</b>" + "<br>" + "Average Net Taxes 2km: <b>4,177</b>" + "<br>" + "Demographics 2km: <b>5,779 White, 1,118 Black, 730 Hispanic, 463 Asian, 49 Other</b>";
    		popupClick2.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map02);
        } else if (open == true) {
        	popupClick2.remove();
        	// add popup for option to click for info and buffer
    		var setHTML = "<b>MSN Buffer Information</b>" + "<br>" + "Property Types 1km: <b>1 Agricultural, 46 Commercial, 1 Industrial, and 143 Residential</b>" + "<br>" + "Average Net Taxes 1km: <b>7,892</b>" + "<br>" + "Demographics 1km: <b>1,150 White, 142 Black, 137 Hispanic, 70 Asian, 9 Other</b>" + "<br>" +
    			"Property Types 2km: <b>3 Agricultural, 166 Commercial, 5 Industrial, and 2,647 Residential</b>" + "<br>" + "Average Net Taxes 2km: <b>4,177</b>" + "<br>" + "Demographics 2km: <b>5,779 White, 1,118 Black, 730 Hispanic, 463 Asian, 49 Other</b>";
    		popupClick2.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map02);
        }
    }
});


function addStation2(x) {
	currentStationList2.push(x);
	//x = button id
	//get button id, add layer - filter
	var stationPosition = stationList2.indexOf(x);
	var stationCross = stationListCross[stationPosition];
	
	var circlePosition = stationPosition + 1;
	
	trackBufferLayers2.push(x);
	
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
			'fill-opacity': 0
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
			'fill-opacity': 0
		},
		'filter': ['==', 'GID', circlePosition]
	});
	trackCircleLayers2.push(buffer2kmName);
};

function removeStation2(x) {
	var remove = currentStationList2.indexOf(x);
	currentStationList2.splice(remove, 1);
	
	var removeAgain = trackBufferLayers2.indexOf(x);
	trackBufferLayers2.splice(removeAgain,1);
	
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
				//console.log('add demo 1km kohl');
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'visible');
				
				//trackBufferLayers2.push('dots1km2kmgeojson');
				
				
				
				trackDemoBufferLayers2.push(['==', 'GID', 1]);
				
				
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', 1]);
				/*
				map02.setPaintProperty('dots1km2kmgeojson', 'circle-color', {
                	property: 'type',
                	type: 'categorical',
                	stops: [
                    	[2, '#2980B9'],
                    	[3, '#E74C3C'],
                    	[4, '#A569BD'],
                    	[5, '#28B463'],
                    	[6, '#9B59B6'],
                    	[7, '#F7DC6F']]
            	});
            	*/
				
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
				//console.log('add demo 2km kohl');
				// 'demo2km' works, but zoom = 13
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 5]);
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', 5]);
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
				//console.log('add parcel 1km kohl');
				map02.addLayer({
					'id': 'parcelKohl1km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': {
							property: 'NetTaxes',
							type: 'interval',
							stops: [
								[500, '#EAF2F8'],
								[5000, '#D4E6F1'],
								[10000, '#A9CCE3'],
								[15000, '#7FB3D5'],
								[20000, '#5499C7'],
								[50000, '#2980B9'],
								[75000, '#2471A3'],
								[100000, '#1F618D'],
								[150000, '#1A5276'],
								[1925391, '#154360']
							]
						},
						'fill-opacity': 1
					},
					'filter': ['==', 'GID', 1]
				});
				trackBufferLayers2.push('parcelKohl1km');
				
				
			} else if (bufferPosition == 3) {
				//console.log('add parcel 2km kohl');
				map02.addLayer({
					'id': 'parcelKohl2km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': {
							property: 'NetTaxes',
							type: 'interval',
							stops: [
								[500, '#EAF2F8'],
								[5000, '#D4E6F1'],
								[10000, '#A9CCE3'],
								[15000, '#7FB3D5'],
								[20000, '#5499C7'],
								[50000, '#2980B9'],
								[75000, '#2471A3'],
								[100000, '#1F618D'],
								[150000, '#1A5276'],
								[1925391, '#154360']
							]
						},
						'fill-opacity': 1
					},
					'filter': ['==', 'GID', 5]
				});
				trackBufferLayers2.push('parcelKohl2km');
				
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				//console.log('add demo 1km monona');
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 2]);
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', 2]);
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
				//console.log('add demo 2km monona');
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 6]);
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', 6]);
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
				//console.log('add parcel 1km monona');
				map02.addLayer({
					'id': 'parcelMonona1km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': {
							property: 'NetTaxes',
							type: 'interval',
							stops: [
								[500, '#EAF2F8'],
								[5000, '#D4E6F1'],
								[10000, '#A9CCE3'],
								[15000, '#7FB3D5'],
								[20000, '#5499C7'],
								[50000, '#2980B9'],
								[75000, '#2471A3'],
								[100000, '#1F618D'],
								[150000, '#1A5276'],
								[1925391, '#154360']
							]
						},
						'fill-opacity': 1
					},
					'filter': ['==', 'GID', 2]
				});
				trackBufferLayers2.push('parcelMonona1km');
				
				
			} else if (bufferPosition == 3) {
				//console.log('add parcel 2km monona');
				map02.addLayer({
					'id': 'parcelMonona2km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': {
							property: 'NetTaxes',
							type: 'interval',
							stops: [
								[500, '#EAF2F8'],
								[5000, '#D4E6F1'],
								[10000, '#A9CCE3'],
								[15000, '#7FB3D5'],
								[20000, '#5499C7'],
								[50000, '#2980B9'],
								[75000, '#2471A3'],
								[100000, '#1F618D'],
								[150000, '#1A5276'],
								[1925391, '#154360']
							]
						},
						'fill-opacity': 1
					},
					'filter': ['==', 'GID', 6]
				});
				trackBufferLayers2.push('parcelMonona2km');
				
				
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				//console.log('add demo 1km yahara');
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 3]);
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', 3]);
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
				//console.log('add demo 2km yahara');
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 7]);
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', 7]);
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
				//console.log('add parcel 1km yahara');
				map02.addLayer({
					'id': 'parcelYahara1km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': {
							property: 'NetTaxes',
							type: 'interval',
							stops: [
								[500, '#EAF2F8'],
								[5000, '#D4E6F1'],
								[10000, '#A9CCE3'],
								[15000, '#7FB3D5'],
								[20000, '#5499C7'],
								[50000, '#2980B9'],
								[75000, '#2471A3'],
								[100000, '#1F618D'],
								[150000, '#1A5276'],
								[1925391, '#154360']
							]
						},
						'fill-opacity': 1
					},
					'filter': ['==', 'GID', 3]
				});
				trackBufferLayers2.push('parcelYahara1km');
				
				
			} else if (bufferPosition == 3) {
				//console.log('add parcel 2km yahara');
				map02.addLayer({
					'id': 'parcelYahara2km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': {
							property: 'NetTaxes',
							type: 'interval',
							stops: [
								[500, '#EAF2F8'],
								[5000, '#D4E6F1'],
								[10000, '#A9CCE3'],
								[15000, '#7FB3D5'],
								[20000, '#5499C7'],
								[50000, '#2980B9'],
								[75000, '#2471A3'],
								[100000, '#1F618D'],
								[150000, '#1A5276'],
								[1925391, '#154360']
							]
						},
						'fill-opacity': 1
					},
					'filter': ['==', 'GID', 7]
				});
				trackBufferLayers2.push('parcelYahara2km');
				
				
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				//console.log('add demo 1km msn');
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 4]);
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', 4]);
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
				//console.log('add demo 2km msn');
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'visible');
				trackDemoBufferLayers2.push(['==', 'GID', 8]);
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', 8]);
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
				//console.log('add parcel 1km msn');
				map02.addLayer({
					'id': 'parcelMSN1km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': {
							property: 'NetTaxes',
							type: 'interval',
							stops: [
								[500, '#EAF2F8'],
								[5000, '#D4E6F1'],
								[10000, '#A9CCE3'],
								[15000, '#7FB3D5'],
								[20000, '#5499C7'],
								[50000, '#2980B9'],
								[75000, '#2471A3'],
								[100000, '#1F618D'],
								[150000, '#1A5276'],
								[1925391, '#154360']
							]
						},
						'fill-opacity': 1
					},
					'filter': ['==', 'GID', 4]
				});
				trackBufferLayers2.push('parcelMSN1km');
				
				
			} else if (bufferPosition == 3) {
				//console.log('add parcel 2km msn');
				map02.addLayer({
					'id': 'parcelMSN2km',
					'type': 'fill',
					'source': 'parcels1km2km',
					'layout': {},
					'paint': {
						'fill-color': {
							property: 'NetTaxes',
							type: 'interval',
							stops: [
								[500, '#EAF2F8'],
								[5000, '#D4E6F1'],
								[10000, '#A9CCE3'],
								[15000, '#7FB3D5'],
								[20000, '#5499C7'],
								[50000, '#2980B9'],
								[75000, '#2471A3'],
								[100000, '#1F618D'],
								[150000, '#1A5276'],
								[1925391, '#154360']
							]
						},
						'fill-opacity': 1
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
				//console.log('remove demo 1km kohl');
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'none');
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', '']);
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 1]);
				trackDemoBufferLayers2.splice(spot, 1);
			} else if (bufferPosition == 1) {
				//console.log('remove demo 2km kohl');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 5]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'none');
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', '']);
			} else if (bufferPosition == 2) {
				//console.log('remove parcel 1km kohl');
				var spot = trackBufferLayers2.indexOf('parcelKohl1km');
				trackBufferLayers2.splice(spot, 1);
				
				map02.removeLayer('parcelKohl1km');
			} else if (bufferPosition == 3) {
				//console.log('remove parcel 2km kohl');
				var spot = trackBufferLayers2.indexOf('parcelKohl2km');
				trackBufferLayers2.splice(spot, 1);
				
				map02.removeLayer('parcelKohl2km');
			}
		} else if (position == 1) {
			if (bufferPosition == 0) {
				//console.log('remove demo 1km monona');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 2]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'none');
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', '']);
			} else if (bufferPosition == 1) {
				//console.log('remove demo 2km monona');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 6]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'none');
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', '']);
			} else if (bufferPosition == 2) {
				//console.log('remove parcel 1km monona');
				var spot = trackBufferLayers2.indexOf('parcelMonona1km');
				trackBufferLayers2.splice(spot, 1);
				
				map02.removeLayer('parcelMonona1km');
			} else if (bufferPosition == 3) {
				//console.log('remove parcel 2km monona');
				var spot = trackBufferLayers2.indexOf('parcelMonona2km');
				trackBufferLayers2.splice(spot, 1);
				
				map02.removeLayer('parcelMonona2km');
			}
		} else if (position == 2) {
			if (bufferPosition == 0) {
				//console.log('remove demo 1km yahara');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 3]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'none');
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', '']);
			} else if (bufferPosition == 1) {
				//console.log('remove demo 2km yahara');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 7]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'none');
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', '']);
			} else if (bufferPosition == 2) {
				//console.log('remove parcel 1km yahara');
				var spot = trackBufferLayers2.indexOf('parcelYahara1km');
				trackBufferLayers2.splice(spot, 1);
				
				map02.removeLayer('parcelYahara1km');
			} else if (bufferPosition == 3) {
				//console.log('remove parcel 2km yahara');
				var spot = trackBufferLayers2.indexOf('parcelYahara2km');
				trackBufferLayers2.splice(spot, 1);
				
				map02.removeLayer('parcelYahara2km');
			}
		} else if (position == 3) {
			if (bufferPosition == 0) {
				//console.log('remove demo 1km msn');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 4]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'none');
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', '']);
			} else if (bufferPosition == 1) {
				//console.log('remove demo 2km msn');
				var spot = trackDemoBufferLayers2.indexOf(['==', 'GID', 8]);
				trackDemoBufferLayers2.splice(spot, 1);
				map02.setLayoutProperty('dots1km2kmgeojson', 'visibility', 'none');
				map02.setFilter('dots1km2kmgeojson', ['==', 'GID', '']);
			} else if (bufferPosition == 2) {
				//console.log('remove parcel 1km msn');
				var spot = trackBufferLayers2.indexOf('parcelMSN1km');
				trackBufferLayers2.splice(spot, 1);
				
				map02.removeLayer('parcelMSN1km');
			} else if (bufferPosition == 3) {
				//console.log('remove parcel 2km msn');
				var spot = trackBufferLayers2.indexOf('parcelMSN2km');
				trackBufferLayers2.splice(spot, 1);
				
				map02.removeLayer('parcelMSN2km');
			}
		}
	}
};


















		

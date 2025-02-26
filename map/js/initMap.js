// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';

// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/skywilliams/ciwl0xx9000162pplymb6we97',
    center: [-89.4, 45],
    zoom: 5.75,
    pitch: 0.1,
    attributionControl: true
});

map01.addControl(new mapboxgl.NavigationControl());

// disable map rotation using right click + drag
map01.dragRotate.disable();

// disable map rotation using touch rotation gesture
map01.touchZoomRotate.disableRotation();


var hoverLayers = [
	'amtrak',
	'cityPolys',
	'msnRails',
	'allRailWI',
	'amtrakAreasWI',
	'amtrakCitiesIL', // do we need this?
	'amtrakCitiesMN', // do we need this?
	'kohlRail',
	'unclustered-points-wi'
];



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
	
	map01.addSource('wisconsinStops', {
		'type': 'geojson',
		'data': '/map/data/wisconsinStops.geojson',
		'cluster': true,
		'clusterMaxZoom': 14,
		'clusterRadius': 50
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
	
	/*
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
	*/
	
	
    
    
	
	map01.addLayer({
		'id': 'allRailWI',
		'type': 'line',
		'source': 'allRailWI',
		'layout': {},
		'paint': {
			'line-color': '#2471A3',
			'line-width': 1
		}
	});
	
	map01.addLayer({
		'id': 'amtrakAreasWI',
		'type': 'fill',
		'source': 'amtrakAreasWI',
		'layout': {},
		'paint': {
			'fill-color': '#EC7063',
			'fill-opacity': 0.75
		}
	});
	
	map01.addLayer({
		'id': 'amtrakCitiesIL',
		'type': 'circle',
		'source': 'amtrakCitiesIL',
		'layout': {},
		'paint': {
			'circle-color': '#EC7063',
			'circle-radius': 5
		}
	});
	
	map01.addLayer({
		'id': 'amtrakCitiesMN',
		'type': 'circle',
		'source': 'amtrakCitiesMN',
		'layout': {},
		'paint': {
			'circle-color': '#EC7063',
			'circle-radius': 5
		}
	});
	
	map01.addLayer({
		'id': 'kohlRail',
		'type': 'line',
		'source': 'kohlRail',
		'layout': {},
		'paint': {
			'line-color': '#2471A3',
			'line-width': 2.5
		}
	});
	
	map01.addLayer({
        "id": "unclustered-points-wi",
        "type": "symbol",
        "source": "wisconsinStops",
        "filter": ["!has", "point_count"],
        "layout": {
            "icon-image": "marker-15"
        }
    });
    
    var layers = [
        [150, '#f28cb1'],
        [20, '#f1f075'],
        [0, '#51bbd6']
    ];
    
    layers.forEach(function (layer, i) {
        map01.addLayer({
            "id": "cluster-" + i,
            "type": "circle",
            "source": "wisconsinStops",
            "paint": {
                "circle-color": layer[1],
                "circle-radius": 18
            },
            "filter": i === 0 ?
                [">=", "point_count", layer[0]] :
                ["all",
                    [">=", "point_count", layer[0]],
                    ["<", "point_count", layers[i - 1][0]]]
        });
    });
    
    // Add a layer for the clusters' count labels
    map01.addLayer({
        "id": "cluster-count",
        "type": "symbol",
        "source": "wisconsinStops",
        "layout": {
            "text-field": "{point_count}",
            "text-font": [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Bold"
            ],
            "text-size": 12
        }
    });
	
	// Create a popup, but don't add it to the map yet.
	var popup = new mapboxgl.Popup({
    	closeButton: false,
    	closeOnClick: false
	});
	
	var popupClick = new mapboxgl.Popup({
		closeButton: true,
		closeOnClick: true
	});
	
	map01.on('mousemove', function(e) {
    	var features = map01.queryRenderedFeatures(e.point, { layers: hoverLayers });
    	// Change the cursor style as a UI indicator.
    	map01.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    	if (!features.length) {
       		popup.remove();
     		return;
    	}

    	var feature = features[0];
    	
    	if (feature.layer.id == 'amtrak') {
    		var setHTML = "<b>Amtrak Layer</b>";
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map01);
    	} else if (feature.layer.id == 'cityPolys') {
    		var setHTML = "<b>City Polygons</b>" + "<br>" + "<b>Name: </b>" + feature.properties.name;
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map01);
    	} else if (feature.layer.id == 'msnRails') {
    		var setHTML = "<b>msnRails</b>";
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map01);
    	} else if (feature.layer.id == 'unclustered-points-wi') {
    		var setHTML = "<b>Wisconsin Accessibility</b>" + "<br>" + "Address: <b>" + feature.properties.ADDRESS + "</b><br>" + "City: <b>" + feature.properties.CITY + "</b><br>" + 
    			"Facility Name: <b>" + feature.properties.FACILITY_NAME + "</b><br>" + "Metro Area: <b>" + feature.properties.METRO_AREA + "</b>" + "<br>" + "<b>Click for more info</b>";
    		popup.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
    	} else if (feature.layer.id == 'allRailWI') {
    		var setHTML = "All Rail WI";
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map01);
    	} else if (feature.layer.id == 'amtrakAreasWI') {
    		var setHTML = "<b>Amtrak Areas Wisconsin</b>" + "<br>" + "<b>Name: </b>" + feature.properties.name;
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map01);
    	} else if (feature.layer.id == 'amtrakCitiesIL') {
    		var setHTML = "<b>Amtrak Cities IL</b>" + "<br>" + "<b>Name: </b>" + feature.properties.name;
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map01);
    	} else if (feature.layer.id == 'amtrakCitiesMN') {
    		var setHTML = "<b>Amtrak Cities MN</b>" + "<br>" + "<b>Name: </b>" + feature.properties.name;
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map01);
    	} else if (feature.layer.id == 'kohlRail') {
    		var setHTML = "<b>kohlRail</b>";
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML(setHTML)
        		.addTo(map01);
    	}
	});
	
	map01.on('click', function(e) {
    	var features = map01.queryRenderedFeatures(e.point, { layers: hoverLayers });
    	// Change the cursor style as a UI indicator.
    	map01.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    	if (!features.length) {
       		popup.remove();
     		return;
    	}

    	var feature = features[0];
    	
    	
    	
    	
    	
    	if (feature.layer.id == 'unclustered-points-wi') {
    		/*
    		var setHTML = "Facility Type: <b>" + feature.properties.FACILITY_TYPE + "</b><br>" + "Bus Transit: <b>" + feature.properties.BUS_TRANSIT + "</b><br>" + "Bus Intercity: <b>" + feature.properties.BUS_INTERCITY + "</b><br>" + 
    			"Rail Intercity: <b>" + feature.properties.RAIL_INTERCITY + "</b><br>" + "Rail Commuter: <b>" + feature.properties.RAIL_COMMUTER + "</b></br>" + "Rail Heavy: <b>" + feature.properties.RAIL_HEAVY + "</b></br>" +
    			"Rail Light: <b>" + feature.properties.RAIL_LIGHT + "</b><br>" + "Air Service: <b>" + feature.properties.AIR_SERVICE + "</b><br>" + "Bike Share: <b>" + feature.properties.BIKE_SHARE + "</b><br>" +
    			"Notes: <b>" + feature.properties.NOTES + "</b><br>"
    		*/
    		var setHTML = "<b>0 meaning no service available</b>" + "<br>" + "<b>1 meaning service available</b>" + "<br>" + "Facility Type: <b>" + feature.properties.FACILITY_TYPE + "</b><br>" + "Intercity Service: <b>" + feature.properties.INTERCITY_SERVICE + "</b><br>" + "Mode Bus: <b>" + feature.properties.MODE_BUS + "</b><br>" + 
    			"Mode Air: <b>" + feature.properties.MODE_AIR + "</b><br>" + "Mode Rail: <b>" + feature.properties.MODE_RAIL + "</b></br>" + "Mode Ferry: <b>" + feature.properties.MODE_FERRY + "</b></br>" +
    			"Mode Bike: <b>" + feature.properties.MODE_BIKE + "</b><br>" + "Notes: <b>" + feature.properties.NOTES + "</b>";
    		popupClick.setLngLat(feature.geometry.coordinates)
        		.setHTML(setHTML)
        		.addTo(map01);
        } else {
        	return;
        }
	});
	
	
	var toggleableLayerIds = [
		'amtrak',
		'cityPolys',
		'msnRails',
		'allRailWI',
		'amtrakAreasWI',
		'amtrakCitiesIL',
		'amtrakCitiesMN',
		'kohlRail',
	];
	
	var toggleCross = [
		'National Amtrak',
		'City Polygons',
		'Madison Rail',
		'State-wide Rail',
		'Amtrak Areas WI',
		'Amtrak Cities IL',
		'Amtrak Cities MN',
		'Madison Connection',
	];

	for (var i = 0; i < toggleableLayerIds.length; i++) {
    	var id = toggleableLayerIds[i];

    	var link = document.createElement('a');
    	link.href = '#';
    	link.className = 'active';
    	
    	var spot = toggleableLayerIds.indexOf(id);
    	link.textContent = toggleCross[spot];

    	link.onclick = function (e) {
    		var spotLayer = toggleCross.indexOf(this.textContent);
        	var clickedLayer = toggleableLayerIds[spotLayer];
        	
        	e.preventDefault();
        	e.stopPropagation();
        	

        	var visibility = map01.getLayoutProperty(clickedLayer, 'visibility');
        	

        	if (this.classList.contains('active') == true) {
            	map01.setLayoutProperty(clickedLayer, 'visibility', 'none');
            	this.classList.remove('active');
            	
        	} else if (this.classList.contains('active') == false) {
            	this.classList.add('active');
            	map01.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        	}
    	};

    	var layers = document.getElementById('menu');
    	layers.appendChild(link);
	}
});











		

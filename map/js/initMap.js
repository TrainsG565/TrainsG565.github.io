// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';
		
// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/skywilliams/ciwl0xx9000162pplymb6we97',
    center: [-89.4, 45],
    zoom: 5.75,
    pitch: 0.1,
    attributionControl: false
});



var hoverLayers = [
	'amtrak',
	'cityPolys',
	'msnRails',
	'parking', // do we need this in the state-wide map?
	'wisconsinStops', // convert to clusters of points instead of individual dots
	'allRailWI',
	'amtrakAreasWI',
	'amtrakCitiesIL', // do we need this?
	'amtrakCitiesMN', // do we need this?
	'kohlRail'	
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
			'circle-radius': 4
		}
	});
	
	map01.addLayer({
		'id': 'amtrakCitiesMN',
		'type': 'circle',
		'source': 'amtrakCitiesMN',
		'layout': {},
		'paint': {
			'circle-color': '#EC7063',
			'circle-radius': 4
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
	
	
	// Create a popup, but don't add it to the map yet.
	var popup = new mapboxgl.Popup({
    	closeButton: false,
    	closeOnClick: false
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
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML('amtrak layer')
        		.addTo(map01);
    	} else if (feature.layer.id == 'cityPolys') {
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML('cityPolys layer')
        		.addTo(map01);
    	} else if (feature.layer.id == 'msnRails') {
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML('msnRails layer')
        		.addTo(map01);
    	} else if (feature.layer.id == 'parking') {
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML('parking layer')
        		.addTo(map01);
    	} else if (feature.layer.id == 'wisconsinStops') {
    		popup.setLngLat(feature.geometry.coordinates)
        		.setHTML('wisconsinStops layer')
        		.addTo(map01);
    	} else if (feature.layer.id == 'allRailWI') {
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML('allRailWI layer')
        		.addTo(map01);
    	} else if (feature.layer.id == 'amtrakAreasWI') {
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML('amtrakAreasWI layer')
        		.addTo(map01);
    	} else if (feature.layer.id == 'amtrakCitiesIL') {
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML('amtrakCitiesIL layer')
        		.addTo(map01);
    	} else if (feature.layer.id == 'amtrakCitiesMN') {
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML('amtrakCitiesMN layer')
        		.addTo(map01);
    	} else if (feature.layer.id == 'kohlRail') {
    		popup.setLngLat(map01.unproject(e.point))
        		.setHTML('kohlRail layer')
        		.addTo(map01);
    	}
	});
	
	
	var toggleableLayerIds = [
		'amtrak',
		'cityPolys',
		'msnRails',
		'parking',
		'wisconsinStops',
		'allRailWI',
		'amtrakAreasWI',
		'amtrakCitiesIL',
		'amtrakCitiesMN',
		'kohlRail'
	];

	for (var i = 0; i < toggleableLayerIds.length; i++) {
    	var id = toggleableLayerIds[i];

    	var link = document.createElement('a');
    	link.href = '#';
    	link.className = 'active';
    	link.textContent = id;

    	link.onclick = function (e) {
    		console.log('clicked');
        	var clickedLayer = this.textContent;
        	
        	e.preventDefault();
        	e.stopPropagation();

        	var visibility = map01.getLayoutProperty(clickedLayer, 'visibility');

        	if (visibility === 'visible') {
            	map01.setLayoutProperty(clickedLayer, 'visibility', 'none');
            	this.className = '';
        	} else {
            	this.className = 'active';
            	map01.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        	}
    	};

    	var layers = document.getElementById('menu');
    	layers.appendChild(link);
	}
});











		

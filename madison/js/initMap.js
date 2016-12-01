// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';
		
		
		

// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/skywilliams/ciuxinskg00f92io46tlqruc3',
    center: [-89.348880892901192, 43.1363520479551],
    zoom: 14,
    //pitch: 65,
    //bearing: 35,
    attributionControl: false
});



var msnStation = {
	'type': 'Feature',
	'properties': {
		'name': 'msnStation'
	},
	'geometry': {
		'type': 'Point',
		'coordinates': [-89.348880892901192, 43.1363520479551]
	}
};

var yaharaStation = {
	'type': 'Feature',
	'properties': {
		'name': 'yaharaStation'
	},
	'geometry': {
		'type': 'Point',
		'coordinates': [-89.362177213480578, 43.091980975189387]
	}
};

var mononaStation = {
	'type': 'Feature',
	'properties': {
		'name': 'mononaStation'
	},
	'geometry': {
		'type': 'Point',
		'coordinates': [-89.379911038854871, 43.071471917909811]
	}
};

var kohlStation = {
	'type': 'Feature',
	'properties': {
		'name': 'kohlStation'
	},
	'geometry': {
		'type': 'Point',
		'coordinates': [-89.396691603682072, 43.068686375866029]
	}
};


var radius = 1;
var steps = 30;
var units = 'kilometers';

var msnCircle = turf.circle(msnStation, radius, steps, units);
var yaharaCircle = turf.circle(yaharaStation, radius, steps, units);
var mononaCircle = turf.circle(mononaStation, radius, steps, units);
var kohlCircle = turf.circle(kohlStation, radius, steps, units);

var msnResult = {
	'type': 'FeatureCollection',
	'features': [msnStation, msnCircle]
};
var yaharaResult = {
	'type': 'FeatureCollection',
	'features': [yaharaStation, yaharaCircle]
};
var mononaResult = {
	'type': 'FeatureCollection',
	'features': [mononaStation, mononaCircle]
};
var kohlResult = {
	'type': 'FeatureCollection',
	'features': [kohlStation, kohlCircle]
};



map01.on('style.load', function () {
	map01.setPaintProperty('taxparcels', 'fill-extrude-height', {
		'property': 'height',
		'type': 'identity'
	});
	
	map01.setPaintProperty('taxparcels', 'fill-extrude-base', 0);
	
	map01.setPaintProperty('taxparcels', 'fill-opacity', 0.5);
	
	map01.addSource('msnResult', {
		'type': 'geojson',
		'data': msnResult
	});
	
	map01.addSource('mononaResult', {
		'type': 'geojson',
		'data': mononaResult
	});
	
	map01.addSource('yaharaResult', {
		'type': 'geojson',
		'data': yaharaResult
	});
	
	map01.addSource('kohlResult', {
		'type': 'geojson',
		'data': kohlResult
	});
	
	

	
	map01.addLayer({
		'id': 'msn-circle',
		'type': 'fill',
		'source': 'msnResult',
		'layout': {},
		'paint': {
			'fill-color': 'orange',
			'fill-opacity': 0.3
		},
		"filter": ["==", "$type", "Polygon"]
	});
	
	map01.addLayer({
		'id': 'msn-dot',
		'type': 'circle',
		'source': 'msnResult',
		'layout': {},
		'paint': {
			'circle-color': 'black',
			'circle-radius': 10
		},
		"filter": ["==", "$type", "Point"]
	});
	
	map01.addLayer({
		'id': 'yahara-circle',
		'type': 'fill',
		'source': 'yaharaResult',
		'layout': {},
		'paint': {
			'fill-color': 'orange',
			'fill-opacity': 0.3
		},
		"filter": ["==", "$type", "Polygon"]
	});
	
	map01.addLayer({
		'id': 'yahara-dot',
		'type': 'circle',
		'source': 'yaharaResult',
		'layout': {},
		'paint': {
			'circle-color': 'black',
			'circle-radius': 10
		},
		"filter": ["==", "$type", "Point"]
	});
	
	map01.addLayer({
		'id': 'monona-circle',
		'type': 'fill',
		'source': 'mononaResult',
		'layout': {},
		'paint': {
			'fill-color': 'orange',
			'fill-opacity': 0.3
		},
		"filter": ["==", "$type", "Polygon"]
	});
	
	map01.addLayer({
		'id': 'monona-dot',
		'type': 'circle',
		'source': 'mononaResult',
		'layout': {},
		'paint': {
			'circle-color': 'black',
			'circle-radius': 10
		},
		"filter": ["==", "$type", "Point"]
	});
	
	map01.addLayer({
		'id': 'kohl-circle',
		'type': 'fill',
		'source': 'kohlResult',
		'layout': {},
		'paint': {
			'fill-color': 'orange',
			'fill-opacity': 0.3
		},
		"filter": ["==", "$type", "Polygon"]
	});
	
	map01.addLayer({
		'id': 'kohl-dot',
		'type': 'circle',
		'source': 'kohlResult',
		'layout': {},
		'paint': {
			'circle-color': 'black',
			'circle-radius': 10
		},
		"filter": ["==", "$type", "Point"]
	});
	
	
	
	var features = map01.queryRenderedFeatures({ layers: ['dotdemo'] });
	
	console.log(features);
	
	//dotdemov3-ankksr
     
	
	
	
	
	
	
	
});















var map02 = new mapboxgl.Map({
	container: 'map02',
	style: 'mapbox://styles/mapbox/light-v8',
	center: [-89.4, 43.06],
	zoom: 12,
	attributionControl: false
});
		

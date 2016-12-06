// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';

var incrementID;
var pointArr = [];
var pointArr2 = [];
var pointArr3 = [];
var pointArr4 = [];
var pointArr5 = [];
var pointArr6 = [];
var pointArr7 = [];
var pointArr8 = [];

var inside1;
var inside2;
var inside3;
var inside4;
var inside5;
var inside6;
var inside7;
var inside8;
		
		
		

// Initialize the map
var map01 = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/skywilliams/ciuxinskg00f92io46tlqruc3',
    center: [-89.348880892901192, 43.1363520479551],
    zoom: 11,
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
	
	
	
	setTimeout(function(){
		var features = map01.queryRenderedFeatures({ layers: ['dotdemo'] });
		var i;
		for (i=0; i < features.length; i++) {
			var feature = features[i];
			var box = turf.bbox(feature);
			var x_min = box[0];
			var y_max = box[1];
			var x_max = box[2];
			var y_min = box[3];
			var y;
			for (y=0; y < feature.properties.H7X001; y++) {
				randomPoint(x_min, y_max, x_max, y_min, feature, 1);		
			}
		}
		
		/*
		H7X001:      Total
        H7X002:      White alone
        H7X003:      Black or African American alone
        H7X004:      American Indian and Alaska Native alone
        H7X005:      Asian alone
        H7X006:      Native Hawaiian and Other Pacific Islander alone
        H7X007:      Some Other Race alone
        H7X008:      Two or More Races
        */

			
		
		
		var result1 = {
			"type": "FeatureCollection",
			"features": pointArr
		};
		
		
		map01.addSource('point01', {
			'type':'geojson',
			'data': result1
		});
		
		map01.addLayer({
			'id': 'point01',
			'type': 'circle',
			'source': 'point01',
			'layout': {},
			'paint': {
				'circle-color': 'black',
				'circle-radius': 2
			}
		});
		
		
		
	 }, 3000);
	
	

	
	//dotdemov3-ankksr
	
});



function randomPoint(xmin, ymax, xmax, ymin, feature, z) {
	var lat = ymin + (Math.random() * (ymax - ymin));
	var lng = xmin + (Math.random() * (xmax - xmin));
				
	var point2  = turf.point([lng, lat]);
				
	var inside1 = turf.inside(point2, feature);
	
	if (inside1 == true) {
		pointArr.push(point2);
		return;
	} else if (inside1 == false) {
		randomPoint(xmin, ymax, xmax, ymin, feature, z);
	}
};















var map02 = new mapboxgl.Map({
	container: 'map02',
	style: 'mapbox://styles/mapbox/light-v8',
	center: [-89.4, 43.06],
	zoom: 12,
	attributionControl: false
});
		

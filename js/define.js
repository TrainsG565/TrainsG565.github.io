

// A simple line from origin to destination.
var route = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                origin,
                destination
            ]
        }
    }]
};

// A single point that animates along the route.
// Coordinates are initially set to origin.
var point = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": origin
        }
    }]
};

// start point
var origin = [-122.414, 37.776];
// end point
var destination = [-77.032, 38.913];

// Used to increment the value of the point measurement against the route.
var counter = 0;


// function for adding map sources
addMapSources() {
	map.addSource('route', {
    	"type": "geojson",
        "data": route
    });
    
    map.addSource('point', {
        "type": "geojson",
        "data": point
    });
};

// function for adding map layers
addMapLayers() {
	map.addLayer({
        "id": "route",
        "source": "route",
        "type": "line",
        "paint": {
            "line-width": 2,
            "line-color": "#007cbf"
        }
    });
    
    map.addLayer({
        "id": "point",
        "source": "point",
        "type": "symbol",
        "layout": {
            "icon-image": "airport-15",
            "icon-rotate": 90
        }
    });
};
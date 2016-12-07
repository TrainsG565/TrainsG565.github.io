// Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5d2lsbGlhbXMiLCJhIjoibUI4TlByNCJ9.9UuhBU3ElNiesrd-BcTdPQ';
		
// Initialize the map
var map = new mapboxgl.Map({
    container: 'map01',
    style: 'mapbox://styles/mapbox/light-v8',
    center: [-89.7372, 43.4316],
    zoom: 12,
    attributionControl: false,
    interactive:false
});
		
//map.addControl(new mapboxgl.Navigation());
		
map.on('style.load', function () {


var chapters = {
    'scrollBox1': {
        bearing: 27,
        center: [-89.7372, 43.4316],
        zoom: 12,
        pitch: 20,
        speed: 2
    },
    'scrollBox2': {
        //duration: 6000,
        center: [-89.7372, 43.4316],
        bearing: 150,
        zoom: 14,
        pitch: 0,
        speed: 2
    },
    'scrollBox3': {
        bearing: 90,
        center: [-89.7372, 43.4316],
        zoom: 13,
        speed: 2,
        pitch: 40
    },
    'scrollBox4': {
        bearing: 90,
        center: [-89.7372, 43.4316],
        zoom: 12.3,
        speed: 2
    },
    'scrollBox5': {
        bearing: 45,
        center: [-89.7372, 43.4316],
        zoom: 15.3,
        pitch: 20,
        speed: 2
    }
};

var mapScrollControl = false;
// get window Y offset - on scroll function update the variable and check
// On every scroll event, check which element is on screen - fix to not check after certain height
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'scrollBox1';

function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
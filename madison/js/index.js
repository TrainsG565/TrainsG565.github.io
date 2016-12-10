

var menuControl1 = false;

var headerHeight = $('header').height();
//var toolHeight = $('#tool').height();
var aboutHeight = $('#about').height();

var mapAffixHeight = headerHeight + aboutHeight;


$('#affixTest').affix({
	offset: {
		top: mapAffixHeight
	}
});









// Lazy load
$(function() {
	$("img.lazy").lazyload({
		effect : "fadeIn"
	});
});
// lazy load










$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	
	/*
	var placeHolder = document.getElementById('testScroll');
	var opacityC = scroll / 1000
	
	if (scroll >= 0 && scroll <= 150) {
		placeHolder.style.backgroundColor = "rgb(0,0,0)";
		placeHolder.style.opacity = .35;
	} else if (scroll > 150 && scroll <= 1200) {
		placeHolder.style.backgroundColor = "rgb(255,255,255)";
		placeHolder.style.opacity = opacityC;
	}
	*/
		
	
	if (scroll > 200 && scroll <= 225) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.4)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 50 && scroll <= 75) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.3)";
	} else if (scroll > 75 && scroll <= 150) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.35)";
	} else if (scroll > 150 && scroll <= 200) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.37)";
	}
	else if (scroll > 225 && scroll <= 250) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.42)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 250 && scroll <= 275) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.45)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 275 && scroll <= 300) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.47)";
		document.getElementById('headerMenus').style.visibility = "visible";
		//document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 300 && scroll <= 350) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.5)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 350 && scroll <= 375) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.55)";
		document.getElementById('headerMenus').style.visibility = "visible";
		//document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 375 && scroll <= 400) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.6)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 400 && scroll <= 425) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.65)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 425 && scroll <= 450) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.7)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 450 && scroll <= 475) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.75)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 475 && scroll <= 500) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.8)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 500 && scroll <= 525) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.85)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 525 && scroll <= 550) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.9)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 550 && scroll <= 575) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.95)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 575 && scroll <= 600) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 600 && scroll <= 625) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 0 && scroll <= 50) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.25)";
	}
	
	
	
	/*
	var a = $('header').height() * .7;
	var pos = $(window).scrollTop();
	
	if(pos > a) {
		$('#menuButton').css({
			transform: 'translate(0%)'
		});
	} else {
		$('#menuButton').css({
			transform: 'translate(150%)'
		});
	}
	*/
});




function testFunction() {
	if (menuControl1 == false) {
		document.getElementById("slideNav").style.transform = "translate(0%)";
		menuControl1 = true;
		stopScrolling(menuControl1);
	} else if (menuControl1 == true) {
		document.getElementById("slideNav").style.transform = "translate(100%)";
		menuControl1 = false;
		stopScrolling(menuControl1);
	}
};


function stopScrolling(x) {
	if (x == true) {
		document.getElementById("myBody").style.overflow = "hidden";
	} else if (x == false) {
		document.getElementById("myBody").style.overflow = "";
	}
};








var stationList = [
	'kohlButton',
	'mononaButton',
	'yaharaButton',
	'msnButton'
];

var stationList2 = [
	'kohlButton2',
	'mononaButton2',
	'yaharaButton2',
	'msnButton2'
];

var stationListCross = [
	'Kohl_station',
	'Monona_station',
	'Yahara_station',
	'MSN_station'
];

var bufferList = [
	'bus1Button',
	'bus2Button',
	'bike1Button',
	'bike2Button'
];

var bufferList2 = [
	'demo1Button',
	'demo2Button',
	'parcel1Button',
	'parcel2Button'
];

var bufferListCross = [	
];

var bus1List = [
];
var bike1List = [
];
var bus2List = [
];
var bike2List = [
];

var demo1List = [];
var demo2List = [];
var parcel1List = [];
var parcel2List = [];




var currentStationList = [];
var currentStationList2 = [];







var kohlButtonControl = false;
function kohlButton(source) {
	var button = document.getElementById(source);
	
	if (kohlButtonControl == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		kohlButtonControl = false;
		
		removeStation(source);
	} else if (kohlButtonControl == false) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		kohlButtonControl = true;
		
		addStation(source);
		activateBuffers();
	}
};

var mononaButtonControl = false;
function mononaButton(source) {
	var button = document.getElementById(source);
	
	if (mononaButtonControl == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		mononaButtonControl = false;
		
		removeStation(source);
	} else if (mononaButtonControl == false) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		mononaButtonControl = true;
		
		addStation(source);
		activateBuffers();
	}
};

var yaharaButtonControl = false;
function yaharaButton(source) {
	var button = document.getElementById(source);
	
	if (yaharaButtonControl == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		yaharaButtonControl = false;
		
		removeStation(source);
	} else if (yaharaButtonControl == false) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		yaharaButtonControl = true;
		
		addStation(source);
		activateBuffers();
	}
};

var msnButtonControl = false;
function msnButton(source) {
	var button = document.getElementById(source);
	
	if (msnButtonControl == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		msnButtonControl = false;
		
		removeStation(source);
	} else if (msnButtonControl == false) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		msnButtonControl = true;
		
		addStation(source);
		activateBuffers();
	}
};







var bus1ButtonControl = false;
function bus1Button(source) {
	var button = document.getElementById(source);
	
	if (bus1ButtonControl == true && buffer1Control == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		bus1ButtonControl = false;
		
		// remove bus 1km buffers, defined from source (parameter)
		removeBuffers(source);
	} else if (bus1ButtonControl == false && buffer1Control == true) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		bus1ButtonControl = true;
		
		// add bus 1km buffers, defined from source (parameter)
		addBuffers(source);
	}

};

var bus2ButtonControl = false;
function bus2Button(source) {
	var button = document.getElementById(source);
	
	if (bus2ButtonControl == true && buffer1Control == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		bus2ButtonControl = false;
		
		// remove bus 1km buffers, defined from source (parameter)
		removeBuffers(source);
	} else if (bus2ButtonControl == false && buffer1Control == true) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		bus2ButtonControl = true;
		
		// add bus 1km buffers, defined from source (parameter)
		addBuffers(source);
	}
};

var bike1ButtonControl = false;
function bike1Button(source) {
	var button = document.getElementById(source);
	
	if (bike1ButtonControl == true && buffer1Control == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		bike1ButtonControl = false;
		
		// remove bus 1km buffers, defined from source (parameter)
		removeBuffers(source);
	} else if (bike1ButtonControl == false && buffer1Control == true) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		bike1ButtonControl = true;
		
		// add bus 1km buffers, defined from source (parameter)
		addBuffers(source);
	}
};

var bike2ButtonControl = false;
function bike2Button(source) {
	var button = document.getElementById(source);
	
	if (bike2ButtonControl == true && buffer1Control == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		bike2ButtonControl = false;
		
		// remove bus 1km buffers, defined from source (parameter)
		removeBuffers(source);
	} else if (bike2ButtonControl == false && buffer1Control == true) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		bike2ButtonControl = true;
		
		// add bus 1km buffers, defined from source (parameter)
		addBuffers(source);
	}
};


var buffer1Control = false;
function activateBuffers() {
	if (buffer1Control == true) {
		buffer1Control = true;
	} else if (buffer1Control == false) {
		buffer1Control = true;
		document.getElementById('bus1Button').style.background = '#566573';
		document.getElementById('bus2Button').style.background = '#566573';
		document.getElementById('bike1Button').style.background = '#566573';
		document.getElementById('bike2Button').style.background = '#566573';
	
		document.getElementById('bus1Button').style.color = '#fff';
		document.getElementById('bus2Button').style.color = '#fff';
		document.getElementById('bike1Button').style.color = '#fff';
		document.getElementById('bike2Button').style.color = '#fff';
	
		document.getElementById('bus1Button').style.cursor = 'pointer';
		document.getElementById('bus2Button').style.cursor = 'pointer';
		document.getElementById('bike1Button').style.cursor = 'pointer';
		document.getElementById('bike2Button').style.cursor = 'pointer';
	}
};

function deactivateBuffers() {
	buffer1Control = false;
	
	bus1ButtonControl = false;
	bus2ButtonControl = false;
	bike1ButtonControl = false;
	bike2ButtonControl = false;
	
	document.getElementById('bus1Button').style.background = '#E5E7E9';
	document.getElementById('bus2Button').style.background = '#E5E7E9';
	document.getElementById('bike1Button').style.background = '#E5E7E9';
	document.getElementById('bike2Button').style.background = '#E5E7E9';
	
	document.getElementById('bus1Button').style.color = 'black';
	document.getElementById('bus2Button').style.color = 'black';
	document.getElementById('bike1Button').style.color = 'black';
	document.getElementById('bike2Button').style.color = 'black';
	
	document.getElementById('bus1Button').style.cursor = 'not-allowed';
	document.getElementById('bus2Button').style.cursor = 'not-allowed';
	document.getElementById('bike1Button').style.cursor = 'not-allowed';
	document.getElementById('bike2Button').style.cursor = 'not-allowed';
};




































var kohlButtonControl2 = false;
function kohlButton2(source) {
	var button = document.getElementById(source);
	
	if (kohlButtonControl2 == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		kohlButtonControl2 = false;
		
		removeStation2(source);
	} else if (kohlButtonControl2 == false) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		kohlButtonControl2 = true;
		
		addStation2(source);
		activateBuffers2();
	}
};

var mononaButtonControl2 = false;
function mononaButton2(source) {
	var button = document.getElementById(source);
	
	if (mononaButtonControl2 == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		mononaButtonControl2 = false;
		
		removeStation2(source);
	} else if (mononaButtonControl2 == false) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		mononaButtonControl2 = true;
		
		addStation2(source);
		activateBuffers2();
	}
};

var yaharaButtonControl2 = false;
function yaharaButton2(source) {
	var button = document.getElementById(source);
	
	if (yaharaButtonControl2 == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		yaharaButtonControl2 = false;
		
		removeStation2(source);
	} else if (yaharaButtonControl2 == false) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		yaharaButtonControl2 = true;
		
		addStation2(source);
		activateBuffers2();
	}
};

var msnButtonControl2 = false;
function msnButton2(source) {
	var button = document.getElementById(source);
	
	if (msnButtonControl2 == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		msnButtonControl2 = false;
		
		removeStation2(source);
	} else if (msnButtonControl2 == false) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		msnButtonControl2 = true;
		
		addStation2(source);
		activateBuffers2();
	}
};








var demo1ButtonControl = false;
function demo1Button(source) {
	var button = document.getElementById(source);
	
	if (demo1ButtonControl == true && buffer2Control == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		demo1ButtonControl = false;
		
		// remove bus 1km buffers, defined from source (parameter)
		removeBuffers2(source);
	} else if (demo1ButtonControl == false && buffer2Control == true) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		demo1ButtonControl = true;
		
		// add bus 1km buffers, defined from source (parameter)
		addBuffers2(source);
	}

};

var demo2ButtonControl = false;
function demo2Button(source) {
	var button = document.getElementById(source);
	
	if (demo2ButtonControl == true && buffer2Control == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		demo2ButtonControl = false;
		
		// remove bus 1km buffers, defined from source (parameter)
		removeBuffers2(source);
	} else if (demo2ButtonControl == false && buffer2Control == true) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		demo2ButtonControl = true;
		
		// add bus 1km buffers, defined from source (parameter)
		addBuffers2(source);
	}
};

var parcel1ButtonControl = false;
function parcel1Button(source) {
	var button = document.getElementById(source);
	
	if (parcel1ButtonControl == true && buffer2Control == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		parcel1ButtonControl = false;
		
		// remove bus 1km buffers, defined from source (parameter)
		removeBuffers2(source);
	} else if (parcel1ButtonControl == false && buffer2Control == true) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		parcel1ButtonControl = true;
		
		// add bus 1km buffers, defined from source (parameter)
		addBuffers2(source);
	}
};

var parcel2ButtonControl = false;
function parcel2Button(source) {
	var button = document.getElementById(source);
	
	if (parcel2ButtonControl == true && buffer2Control == true) {
		button.style.background = '#566573';
		button.style.color = 'white';
		parcel2ButtonControl = false;
		
		// remove bus 1km buffers, defined from source (parameter)
		removeBuffers2(source);
	} else if (parcel2ButtonControl == false && buffer2Control == true) {
		button.style.background = '#2980B9';
		button.style.color = '#fff';
		parcel2ButtonControl = true;
		
		// add bus 1km buffers, defined from source (parameter)
		addBuffers2(source);
	}
};




var buffer2Control = false;
function activateBuffers2() {
	if (buffer2Control == true) {
		buffer2Control = true;
	} else if (buffer2Control == false) {
		buffer2Control = true;
		document.getElementById('demo1Button').style.background = '#566573';
		document.getElementById('demo2Button').style.background = '#566573';
		document.getElementById('parcel1Button').style.background = '#566573';
		document.getElementById('parcel2Button').style.background = '#566573';
	
		document.getElementById('demo1Button').style.color = '#fff';
		document.getElementById('demo2Button').style.color = '#fff';
		document.getElementById('parcel1Button').style.color = '#fff';
		document.getElementById('parcel2Button').style.color = '#fff';
	
		document.getElementById('demo1Button').style.cursor = 'pointer';
		document.getElementById('demo2Button').style.cursor = 'pointer';
		document.getElementById('parcel1Button').style.cursor = 'pointer';
		document.getElementById('parcel2Button').style.cursor = 'pointer';
	}
};


function deactivateBuffers2() {
	buffer2Control = false;
	
	demo1ButtonControl = false;
	demo2ButtonControl = false;
	parcel1ButtonControl = false;
	parcel2ButtonControl = false;
	
	document.getElementById('demo1Button').style.background = '#E5E7E9';
	document.getElementById('demo2Button').style.background = '#E5E7E9';
	document.getElementById('parcel1Button').style.background = '#E5E7E9';
	document.getElementById('parcel2Button').style.background = '#E5E7E9';
	
	document.getElementById('demo1Button').style.color = 'black';
	document.getElementById('demo2Button').style.color = 'black';
	document.getElementById('parcel1Button').style.color = 'black';
	document.getElementById('parcel2Button').style.color = 'black';
	
	document.getElementById('demo1Button').style.cursor = 'not-allowed';
	document.getElementById('demo2Button').style.cursor = 'not-allowed';
	document.getElementById('parcel1Button').style.cursor = 'not-allowed';
	document.getElementById('parcel2Button').style.cursor = 'not-allowed';
};






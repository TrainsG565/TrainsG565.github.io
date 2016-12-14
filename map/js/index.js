

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

function exploreMap() {
	var placeholder = document.getElementById('intro');
	
	placeholder.style.opacity = 0;
	
	setTimeout(function(){ placeholder.style.visibility = 'hidden'; }, 50);
	
	
}










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
}


function stopScrolling(x) {
	if (x == true) {
		document.getElementById("myBody").style.overflow = "hidden";
	} else if (x == false) {
		document.getElementById("myBody").style.overflow = "";
	}
}

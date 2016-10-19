

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
		
	
	if (scroll > 100 && scroll <= 150) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.25)";
	}
	else if (scroll > 150 && scroll <= 200) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.3)";
	} else if (scroll > 200 && scroll <= 250) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.35)";
	} else if (scroll > 250 && scroll <= 300) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.40)";
	} else if (scroll > 300 && scroll <= 350) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.45)";
	} else if (scroll > 350 && scroll <= 400) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.50)";
		document.getElementById('headerMenus').style.visibility = "visible";
	} else if (scroll > 400 && scroll <= 450) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.55)";
	} else if (scroll > 450 && scroll <= 500) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.60)";
	} else if (scroll > 500 && scroll <= 550) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.65)";
	} else if (scroll > 600 && scroll <= 650) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.70)";
	} else if (scroll > 650 && scroll <= 700) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.75)";
	} else if (scroll > 700 && scroll <= 750) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.80)";
	} else if (scroll > 750 && scroll <= 800) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.85)";
	} else if (scroll > 800 && scroll <= 850) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.90)";
	} else if (scroll > 850 && scroll <= 900) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.95)";
	} else if (scroll > 900 && scroll <= 950) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,1)";
	} else if (scroll > 0 && scroll <= 100) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(0,0,0,0.35)";
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

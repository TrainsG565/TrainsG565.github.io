

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
	
	if (scroll > 150 && scroll <= 200) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.25)"
	}
	else if (scroll > 200 && scroll <= 400) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.5)"
	} else if (scroll > 400 && scroll <= 600) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(255,255,255,0.7)"
	} else if (scroll > 0 && scroll < 150) {
		document.getElementById('testScroll').style.backgroundColor = "rgba(0,0,0,0.35)"
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

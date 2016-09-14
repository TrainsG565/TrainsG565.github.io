function determineClick(feature) {
	clickedCountyName = feature.properties.COUNTY_NAM;	
};



function takeScreenshot() {
	//window.open(window.location.href, '_blank');
	var data1 = map.getCanvas().toDataURL("image/png");
	/*var canvas = map.getCanvas();
	var dataURL = canvas.toDataURL("image/png");
	*/
	//console.log(data);
	//window.location.href = data;
	window.open(data1);
};



var storyModeControl = 0;
var storyTextHeader = document.getElementById("storyNavigationHeader");
var storySubTextHeader = document.getElementById("storySubContextHeader");
var storySubTextBody = document.getElementById("storySubContextBody");
function MoveStoryModeForward() {
	if (storyModeControl == 0) {
		storyModeControl = 1;
		map.flyTo({
			center: [-91.872, 46.25538],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Chippewa Flowage";
		storySubTextHeader.innerHTML = "Chippewa Flowage";
		storySubTextBody.innerHTML = "Chippewa Flowage";
		document.getElementById("storySubContext").style.visibility = "visible";
	} else if (storyModeControl == 1) {
		storyModeControl = 2;
		map.flyTo({
			center: [-90.6785, 46.3181],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "River at White City";
		storySubTextHeader.innerHTML = "River at White City";
		storySubTextBody.innerHTML = "River at White City";
		document.getElementById("leftArrow").style.visibility = "visible";
	} else if (storyModeControl == 2) {
		storyModeControl = 3;
		map.flyTo({
			center: [-90.8785, 46.115569],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Ashland County";
		storySubTextHeader.innerHTML = "Lakes in Ashland County";
		storySubTextBody.innerHTML = "Lakes in Ashland County";
	} else if (storyModeControl == 3) {
		storyModeControl = 4;
		map.flyTo({
			center: [-90.23016, 46.3976],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Gile Flowage";
		storySubTextHeader.innerHTML = "Gile Flowage";
		storySubTextBody.innerHTML = "Gile Flowage";
	} else if (storyModeControl == 4) {
		storyModeControl = 5;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes Door County";
		storySubTextHeader.innerHTML = "Lakes Door County";
		storySubTextBody.innerHTML = "Lakes Door County";
	} else if (storyModeControl == 5) {
		storyModeControl = 6;
		map.flyTo({
			center: [-88.01247, 44.51006],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Green Bay";
		storySubTextHeader.innerHTML = "Green Bay";
		storySubTextBody.innerHTML = "Green Bay";
		document.getElementById("rightArrow").style.visibility = "hidden";
	} else {
	
	}
};


function MoveStoryModeBackward() {
	if (storyModeControl == 6) {
		storyModeControl = 5;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes Door County";
		storySubTextHeader.innerHTML = "Lakes Door County";
		storySubTextBody.innerHTML = "Lakes Door County";
		document.getElementById("rightArrow").style.visibility = "visible";
	} else if (storyModeControl == 5) {
		storyModeControl = 4;
		map.flyTo({
			center: [-90.23016, 46.3976],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Gile Flowage";
		storySubTextHeader.innerHTML = "Gile Flowage";
		storySubTextBody.innerHTML = "Gile Flowage";
	} else if (storyModeControl == 4) {
		storyModeControl = 3;
		map.flyTo({
			center: [-90.8785, 46.115569],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Ashland County";
		storySubTextHeader.innerHTML = "Lakes in Ashland County";
		storySubTextBody.innerHTML = "Lakes in Ashland County";
	} else if (storyModeControl == 3) {
		storyModeControl = 2;
		map.flyTo({
			center: [-90.6785, 46.3181],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "River at White City";
		storySubTextHeader.innerHTML = "River at White City";
		storySubTextBody.innerHTML = "River at White City";
	} else if (storyModeControl == 2) {
		storyModeControl = 1;
		map.flyTo({
			center: [-91.872, 46.25538],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Chippewa Flowage";
		storySubTextHeader.innerHTML = "Chippewa Flowage";
		storySubTextBody.innerHTML = "Chippewa Flowage";
		document.getElementById("leftArrow").style.visibility = "hidden";
	} else if (storyModeControl == 1) {
	
	} else if (storyModeControl == 0) {
	
	}
};














function changeLegendAndMap(){
	map.setPaintProperty('Wetlands', 'fill-color', {
		property: 'Cov1',
		type: 'categorical',
		stops: [
			['A3', '#fbb03b'],
			['A4', '#223b53'],
			['B4', '#e55e5e'],
			['C4', '#3bb2d0'],
			['C4b', '#ccc']]
	});
				
	var c;
	for(c=0; c < mainLegend.length; c++){
		var placeholder = mainLegend[c][0];
		var remove = document.getElementById(placeholder);
					
		var p1 = document.getElementById("legendv2").lastElementChild;
		var p2 = p1.childNodes[0];
		var p3 = p2.childNodes[0];
		p2.removeChild(p3);
	}
				
	var backHolder = document.createElement('DIV');
	var textBackHolder = document.createTextNode("Back");
	backHolder.setAttribute("class", "legendSquarev2");
	backHolder.setAttribute("onclick", "clickLegendBack()");
	var m1 = document.getElementById("legendv2").lastElementChild;
	var m2 = m1.childNodes[0];
	backHolder.appendChild(textBackHolder);
	m2.appendChild(backHolder);
				
	var v;
	for(v=0; v < wetlandsLayers.length; v++){
		var placeholder = document.createElement('DIV');
		var placeholder2 = document.createElement('DIV');
		var idHold = wetlandsLayers[v][0];
		var colorHold = "background:" + wetlandsLayers[v][1];
		var textholder = document.createTextNode(idHold);
					
					
		placeholder.setAttribute("class", "legendSquare");
		placeholder2.setAttribute("class", "circleLegend");
		placeholder2.setAttribute("id", idHold);
		placeholder2.setAttribute("style", colorHold);
					
		var placeholder3 = document.getElementById("legendv2").lastElementChild;
		var placeholder4 = placeholder3.childNodes[0];
		placeholder4.appendChild(placeholder);
		placeholder.appendChild(placeholder2);
		placeholder2.appendChild(textholder);
	}
};
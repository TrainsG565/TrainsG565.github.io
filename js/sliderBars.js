var sliderValue = 0;

$("#slider").roundSlider({
    min: 0,
    max: 100,
    step: 1,
    value: sliderValue,
    radius: 105,
    width: 16,
    handleSize: 0,
    startAngle: 315,
    endAngle: "+360",
    animation: true,
    showTooltip: true,
    editableTooltip: false,
    readOnly: false,
    disabled: false,
    keyboardAction: true,
    mouseScrollAction: false,
    sliderType: "min-range",
    circleShape: "pie",
    handleShape: "square",
    lineCap: "square",

    // events
    beforeCreate: null,
    create: null,
    start: null,
    drag: null,
    change: null,
    stop: null,
    tooltipFormat: "changeTooltip"
});

function changeTooltip(e) {
	var val = e.value, speed;
	if (val < 20) speed = "Slow";
	else if (val < 40) speed = "Normal";
	else if (val < 70) speed = "Fast";
	else speed = "Very Fast";
	
	return val + " km/h" + "<div>" + speed + "<div>";
};
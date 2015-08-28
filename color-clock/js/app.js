var today, hours, minutes, seconds, red, green, blue , hex;

$(document).ready(function() {
	time();
});

function time() {
	today = new Date();
	hours = today.getHours();
	minutes = today.getMinutes();
	seconds = today.getSeconds();
	
	hours = formatTime(hours);
	minutes = formatTime(minutes);
	seconds = formatTime(seconds);
	hex = color(hours, minutes, seconds);
	
	$("#current-hour").text(hours + " :");
	$("#current-minute").text(minutes + " :");
	$("#current-second").text(seconds);
	$("body").css("background-color", "#" + hex);
	$(".color").text(hex);
	
	setTimeout(function(){time()}, 500);
}

function formatTime(x) {
	if (x < 10) {
		x = "0" + x;
	}
	return x;
}

function color(hours, minutes, seconds) {
	red = Math.round(255 * (hours / 23)).toString(16);
	green = Math.round(255 * (minutes / 59)).toString(16);
	blue = Math.round(255 * (seconds / 59)).toString(16);
	return (red + green + blue).toUpperCase();
}
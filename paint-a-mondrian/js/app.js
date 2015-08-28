$(document).ready(function() {
	
	var colorChoice;

	$(".title").fadeIn(1500, function() {
		$(".app").fadeIn(1500);
	});

	$("#red").click(function() {
		return colorChoice = "red";
	});
	
	$("#yellow").click(function() {
		return colorChoice = "yellow";
	});

	$("#blue").click(function() {
		return colorChoice = "blue";
	});

	$("#white").click(function() {
		return colorChoice = "white";
	});
	
	$(".picture").click(function() {
	$(this).removeClass();
	$(this).addClass(colorChoice);
	});
	
});


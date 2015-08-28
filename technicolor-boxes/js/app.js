$(document).ready(function() {
	$(".box").mouseenter(function() {
		$(this).css("background-color", '#' + Math.floor(Math.random()*16777215).toString(16));
		$(this).addClass("hover");
	});
	
	$(".box").mouseleave(function() {
		$(this).removeClass("hover");
	});
});
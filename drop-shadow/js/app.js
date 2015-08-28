$(document).ready(function() {

	//$('.box-shadow').on('click', function () {

	//	var current = $(this).css('box-shadow');
	//	var x = current.split('px');
	//	var spread = x[x.length-2];
	//	var increaseSpread = parseInt(spread) + 3;
	//	console.log(increaseSpread);
	//	
	//	$(this).css('box-shadow', '0px 0px 60px ' + increaseSpread + 'px');

	//});
	
	var x = 0;
	var y = 0;
	
	$('.box-shadow').on('click', function () {
		x += 3;
		y += 3;
		//console.log(x);
		$(this).css('box-shadow', '0px 0px ' + y + 'px ' + x + 'px');
	});

	
});
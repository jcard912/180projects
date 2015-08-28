$(document).ready(function() {
	var d = new Date().getDay();
	var day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	var text = ["It's Sunday! Relax a little.",
				"It's Monday. Back to work.",
				"It's Tuesday. Have a little fun today.",
				"It's Wednesday. Happy Hump Day!",
				"It's Thursday. #TBT!",
				"It's finally Friday!! Ready for the weekend!",
				"It's Saturday! Stop looking at this day tracker and go do something fun today!"];
	var today = day[d];
	var msg = text[d];

	$('.day').hide();
	$('#' + today).show();
	$('.day-descriptor').html("<h4>" + msg + "</h4>");
	
	
});


var level;
var levelResponse = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var bounce = 9;
$(document).ready(function() {
	newGame();
});

function newGame() {
	level = 1;
	$(".announce").remove();
	showMessage();
}

function showMessage() {
	if(level < 10) {
		$(".ball").fadeOut(100, function() {
			$(".response").html("<p class='announce'>" + "Level " + levelResponse[level] + "</p>").fadeIn(2000, function() {
				$(".announce").fadeOut(2000, function() {
					$(".ball").fadeIn(300);
				});
			});
		});
	} else {
		$(".ball").fadeOut(100, function() {
			$(".response").html("<p class='announce'>Congratulations! </br>You Win!</p>");
		});
	}
}

$(".ball").click(function() {
	level++;
	bounce -= 1;
	$(".ball").css('animation', 'bounce ' + bounce + 's infinite');
	showMessage();
});
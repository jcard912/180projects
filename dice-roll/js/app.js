var die1, die2, rollSum;
var dieFace = ["","<img src='images/die1.png'>", "<img src='images/die2.png'>", "<img src='images/die3.png'>", "<img src='images/die4.png'>", "<img src='images/die5.png'>", "<img src='images/die6.png'>"];

$(document).ready(function() {
	newGame();
});

function newGame() {
	$(".announce").html("<h2>Hi there! Why don't you give us a roll?</h2>");
}

$("#roll-btn").click(function() {
	$(".announce").addClass("shake");
	$(".announce").html("<h2>Shake Shake Shake</h2>");
	setTimeout(function() {
        $(".announce").removeClass("shake");
    }, 1500)
	die1 = Math.floor(Math.random() * 6) + 1;
	die2 = Math.floor(Math.random() * 6) + 1;
	console.log(die1, die2);
	rollSum = die1 + die2;
	$("#die1").html(dieFace[die1]);
	$("#die2").html(dieFace[die2]);
	//$(".announce").html(rollSum);
});


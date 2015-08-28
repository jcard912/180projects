var choices = ["rock", "paper", "scissors"];
var userChoice, comChoice;

$(document).ready(function() {
	$(".col-mid").html("<h4>Choose your weapon</h4>");
	
	$("button").on("click", begin);
});

function begin() {
	//$("button").off("click");
	userChoice = this.id;
	$(".hand").siblings('img').hide();
	comChoice = choices[Math.floor(Math.random() * 3)];
	$(".hand").show();
	countdown();
}

function countdown() {
	var i = 3;
	count();
	
		function count() {
		$(".hand").addClass("bounce");
		if(i == 0) {
			showHands();
		} else {
			$(".col-mid").html("<h4>" + i + "</h4>");
			i-=1;
			setTimeout(count, 1250);
		}
	}
}

function showHands() {
	$(".hand").removeClass("bounce");
	$(".left .hand").hide();
	$(".right .hand").hide();
	$(".left ." + userChoice + "-left").show();
	$(".right ." + comChoice + "-right").show();
	
	announceWin();
}

function announceWin() {	
	if (userChoice == comChoice) {
		$(".col-mid").html("<h4>Tie</h4>");
	} else if (userChoice == "rock" && comChoice == "scissors" || userChoice == "paper" && comChoice == "rock" || userChoice == "scissors" && comChoice == "paper") {
		$(".col-mid").html("<h4>You Win!</h4>");
	} else {
		$(".col-mid").html("<h4>Sorry You Lose.</h4>");
	}
}
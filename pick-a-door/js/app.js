	var correctDoorNumber, userDoor, selectedDoorNumber, removeDoorNumber, userClick = true, doors = ["door1", "door2", "door3"];

$(document).ready(function() {

	newGame();
	
	$(".door").click(function() {
		if(userClick) {
			userDoor = $(this).attr('id');
			selectedDoorNumber = doors.indexOf(userDoor);
			removeDoor();
			$(".announce").remove();
			$(".response").html("<h5 class='announce'>I have now removed a door that is not the correct door. I will now give you another chance to select a door.</h5>").fadeIn(2000);
			return userClick = false;
		} else {
			userDoor = $(this).attr('id');
			selectedDoorNumber = doors.indexOf(userDoor);
			$(".announce").remove();
			if(selectedDoorNumber == correctDoorNumber) {
				$(".response").html("<h5 class='announce'>Congratulations! You guessed the right door!</h5>");
				$("#" + doors[correctDoorNumber]).addClass("win");
			} else {
				$(".response").html("<h5 class='announce'>Sorry.. you lost. Please refresh the page and try again.</h5>");
				$("#" + doors[selectedDoorNumber]).fadeOut(2000);
				$("#" + doors[correctDoorNumber]).addClass("win");
			}
		}
	});
});

function newGame() {
	correctDoorNumber = Math.floor(Math.random() * 3);
	$(".response").html("<h5 class='announce'>Please select a door...</h5>").fadeIn(2000);
}

function removeDoor() {
	do {
		removeDoorNumber = Math.floor(Math.random() * 3);
	} while (removeDoorNumber == correctDoorNumber || removeDoorNumber == selectedDoorNumber);
	$("#" + doors[removeDoorNumber]).fadeOut(2000);
}
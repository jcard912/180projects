var animations = ["bounce", "rubberBand", "flash", "swing", "jello", "wobble", "shake"];
var ran;

$(document).ready(function() {
	$(".tile").click(function() {
		var tile = this;
		ran = Math.floor(Math.random() * 7);
		var animate = animations[ran];
		$(this).addClass(animate);
		
		setTimeout(function () {
			$(tile).removeClass(animate); }, 2000);
	});
});


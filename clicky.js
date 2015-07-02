//todo

$(document).ready(function() {
	var num = 0;
	$('#clickThis').click(function() {
		num += 1;
		$('#number').html(function(i, val) {
			return +val+1
		});
	})
});

//TIMER 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var time = 10,
        display = $('#time');
    startTimer(time, display);
});

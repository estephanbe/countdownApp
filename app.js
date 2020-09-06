var countdown_time_area, n, original_s, s, interval;
var isPaused = false;
jQuery(document).ready(function($) {

	countdown_time_area = $('#countdown_time');
	const start = $('#start');
	const reset = $('#reset');
	const pause = $('#pause');
	reset.hide();
	pause.hide();
	
	start.click(function() {
		reset.show();
		pause.show();
		reset.attr('disabled', false);
		s = parseInt($('#timeInSec').val());
		n = parseInt($('#NumOfTime').val());
		original_s = s;

		start.attr('disabled', true);
		start.hide();
		interval = setInterval(countdownTimer, 1000);	

	});

	reset.click(function() {
		n = 0;
		s = 0;
		$('#timeInSec').val('');
		$('#NumOfTime').val('');
		clearInterval(interval);
		countdown_time_area.text('Fill the values and press start!');
		$(this).hide();
		$(this).attr('disabled', true);
		pause.hide();
		start.show();
	});

	$('#input_container input').change(function() {
		if ($('#timeInSec').val() && $('#NumOfTime').val()) {
			start.attr('disabled', false);
		}
	});

	pause.click(function() {
		if (!isPaused) {
			isPaused = true;
			$(this).text('Resume');
		} else {
			isPaused = false;
			$(this).text('Pause');
		}
	});

	


});


function countdownTimer(){
	if (!isPaused) {
		if (s == 0 || n == 0) {
			if (n == 0) {
				clearInterval(interval);
			} else {
				doTheMath();
			}
			
		} else {
			countdown_time_area.text(s);
			s--;
		}
	}
}

function doTheMath(){
	s = original_s;
	n--;

	if (n == 0) {
		countdown_time_area.text('Done!');
	} else {
		countdown_time_area.text('Again!');
	}
}
  

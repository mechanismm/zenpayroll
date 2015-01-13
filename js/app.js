// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
	/* Array of disabled public US holidays */
	var disabledDays = [
		"1-1-2014",
		"1-20-2014",
		"2-17-2014",
		"5-26-2014",
		"7-4-2014",
		"9-1-2014",
		"10-13-2014",
		"11-11-2014",
		"11-27-2014",
		"12-25-2014"
	];

	/* utility function */
	function nationalDays(date) {
		var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
		console.log('Checking (raw): ' + m + '-' + d + '-' + y);
		for (i = 0; i < disabledDays.length; i++) {
			if($.inArray((m+1) + '-' + d + '-' + y,disabledDays) != -1) {
				console.log('bad:  ' + (m+1) + '-' + d + '-' + y + ' / ' + disabledDays[i]);
				return [false];
			}
		}
		console.log('good:  ' + (m+1) + '-' + d + '-' + y);
		return [true];
	}
	function noWeekendsOrHolidays(date) {
		var noWeekend = jQuery.datepicker.noWeekends(date);
		return noWeekend[0] ? nationalDays(date) : noWeekend;
	}

  $("#datepicker-control").datepicker({ 
  	minDate: new Date(2014, 0, 1), 
  	maxDate: new Date(2014, 11, 31),
  	dateFormat: "mm-dd-yy",
		constrainInput: true,
		beforeShowDay: noWeekendsOrHolidays,
		onSelect: function showDate(date) {					
			$('.save-date-button').removeClass('disabled');			
			if ($('.save-date-button').hasClass('disabled')) { 
				$('#choose-date').val("");
			} 
			else { 
				$('.save-date-button').click(function() { 
					$('.save-date-button').addClass('close-reveal-modal');
					$('#choose-date').val(date);
				});
			}
		}
  });	    
});





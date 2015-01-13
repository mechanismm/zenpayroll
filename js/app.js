// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function() {
	$(function() {
		// Array of disabled US public holidays
		// format: specialDays.year.month.day
		var specialDays = {
			'2015': {
				'1': {
					'1': {tooltip: "New Year's Day", className: "holiday"},
					'20': {tooltip: "Martin Luther King’s Birthday ", className: "holiday"}
				},
				'2': { 
					'17': {tooltip: "George Washington’s Birthday", className: "holiday"}
				},
				'5': {
					'26': {tooltip: "Memorial Day", className: "holiday"}
				},
				'7': {
					'4': {tooltip: "Independence Day", className: "holiday"}
				},
				'9': {
					'1': {tooltip: "Labor Day", className: "holiday"}
				},
				'10': {
					'13': {tooltip: "Columbus Day", className: "holiday"}
				},
				'11': {
					'11': {tooltip: "Veterans Day", className: "holiday"},
					'27': {tooltip: "Thanksgiving Day", className: "holiday"}					
				},	
				'12': {
					'25': {tooltip: "Christmas Day", className: "holiday"}
				}						
			}
		}; 

		function noHolidays(date) {
			var d = date.getDate(), m = date.getMonth()+1, y = date.getFullYear();
			console.log('Checking (raw): ' + m + '-' + d + '-' + y);
			if (specialDays[y] && specialDays[y][m] && specialDays[y][m][d]) {
				var s = specialDays[y][m][d];
				return [false, s.className, s.tooltip]; // non-selectable
			}
			return [true,'']; // selectable
		}

		function noWeekendsOrHolidays(date) {
			var noWeekend = jQuery.datepicker.noWeekends(date);
			return noWeekend[0] ? noHolidays(date) : noWeekend;
		}

		$('#datepicker-control').datepicker({
	  	minDate: new Date(2015, 0, 1), 
	  	maxDate: new Date(2015, 11, 31),
	  	dateFormat: "mm-dd-yy",
			constrainInput: true,
			beforeShowDay: noWeekendsOrHolidays,
			defaultDate: null,
			beforeShow: function(input, inst) {       
			 document.setTimeout(function(){
			     $(inst.dpDiv).find('.ui-state-highlight.ui-state-hover').removeClass('ui-state-highlight ui-state-hover')      
			 },0)     
			},			
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

	/* tooltip*/
	$(".ui-datepicker-calendar tbody").tooltip({
		show: { duration: 50 },
    position: {
      my: "center bottom-20",
      at: "center bottom",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
          .addClass( "arrow" )
          .addClass( feedback.vertical )
          .addClass( feedback.horizontal )
          .appendTo( this );
      }
    }		
	});

});
// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {

	$(function() {

		/* Array of disabled public US holidays */
		// var disabledDays = [
		// 	"1-1-2014",
		// 	"1-20-2014",
		// 	"2-17-2014",
		// 	"5-26-2014",
		// 	"7-4-2014",
		// 	"9-1-2014",
		// 	"10-13-2014",
		// 	"11-11-2014",
		// 	"11-27-2014",
		// 	"12-25-2014"
		// ];

		/* utility function */
		function nationalDays(date) {

			var specialDays = {
				'2014': {
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
					},								
				}
			};

			var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
			console.log('Checking (raw): ' + m + '-' + d + '-' + y);
			for (i = 0; i < specialDays.length; i++) {
				console.log(specialDays.length);
				if($.inArray((m+1) + '-' + d + '-' + y,specialDays) != -1) {
					var s = specialDays[y][m][d];
					console.log('bad:  ' + (m+1) + '-' + d + '-' + y + ' / ' + specialDays[i]);
					return [false,s.className, s.tooltip];
				}
			}
			console.log('good:  ' + (m+1) + '-' + d + '-' + y);
			return [true, ''];

			// if (specialDays[y] && specialDays[y][m] && specialDays[y][m][d]) {
			// 	var s = specialDays[y][m][d];
			// 	return [false, s.className, s.tooltip]; // non-selectable
			// }
			// return [true,'']; // selectable

		}



		function noWeekendsOrHolidays(date) {
			var noWeekend = jQuery.datepicker.noWeekends(date);
			return noWeekend[0] ? nationalDays(date) : noWeekend;
		}



	  $("#datepicker-control").datepicker({ 
			// beforeShowDay:function(date) {
			// 	var d = date.getDate(), m = date.getMonth()+1, y = date.getFullYear();
			// 	if (specialDays[y] && specialDays[y][m] && specialDays[y][m][d]) {
			// 		var s = specialDays[y][m][d];
			// 		return [false, s.className, s.tooltip]; // non-selectable
			// 	}
			// 	return [true,'']; // selectable
			// },
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

	/* tooltip*/
	$(".ui-datepicker-calendar tbody").tooltip();
	    
});





	// $(function() {
	// 	// Array of disabled US public holidays
	// 	// format: specialDays.year.month.day
	// 	var specialDays = {
	// 		'2014': {
	// 			'1': {
	// 				'1': {tooltip: "New Year's Day", className: "holiday"},
	// 				'20': {tooltip: "Martin Luther King’s Birthday ", className: "holiday"}
	// 			},
	// 			'2': { 
	// 				'17': {tooltip: "George Washington’s Birthday", className: "holiday"}
	// 			},
	// 			'5': {
	// 				'26': {tooltip: "Memorial Day", className: "holiday"}
	// 			},
	// 			'7': {
	// 				'4': {tooltip: "Independence Day", className: "holiday"}
	// 			},
	// 			'9': {
	// 				'1': {tooltip: "Labor Day", className: "holiday"}
	// 			},
	// 			'10': {
	// 				'13': {tooltip: "Columbus Day", className: "holiday"}
	// 			},
	// 			'11': {
	// 				'11': {tooltip: "Veterans Day", className: "holiday"},
	// 				'27': {tooltip: "Thanksgiving Day", className: "holiday"}					
	// 			},	
	// 			'12': {
	// 				'25': {tooltip: "Christmas Day", className: "holiday"}
	// 			},								
	// 		}
	// 	}; 
		
	// 	$('#datepicker-control').datepicker({beforeShowDay: function(date) {
	// 		var d = date.getDate(), m = date.getMonth()+1, y = date.getFullYear();
	// 		console.log('Checking (raw): ' + m + '-' + d + '-' + y);

	// 		if (specialDays[y] && specialDays[y][m] && specialDays[y][m][d]) {
	// 			var s = specialDays[y][m][d];
	// 			return [false, s.className, s.tooltip]; // non-selectable
	// 		}
	// 		return [true,'']; // selectable
	// 	}});
	// });
		
	/* tooltip*/
	// $(".ui-datepicker-calendar tbody").tooltip();



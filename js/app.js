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

		$('#datepicker-control').datepicker({beforeShowDay: function(date) {
			var d = date.getDate(), m = date.getMonth()+1, y = date.getFullYear();
			console.log('Checking (raw): ' + m + '-' + d + '-' + y);

			if (specialDays[y] && specialDays[y][m] && specialDays[y][m][d]) {
				var s = specialDays[y][m][d];
				return [false, s.className, s.tooltip]; // non-selectable
			}
			return [true,'']; // selectable
		}});
		
	});

	/* tooltip*/
	$(".ui-datepicker-calendar tbody").tooltip();

});


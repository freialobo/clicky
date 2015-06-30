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
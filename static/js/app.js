$(document).ready(function () {
	$('.stars').each(function () {
		const val = $(this).data('value');
		for (var i = 0; i < val; i++) {
			$(this).append('<i class="fa fa-star" aria-hidden="true"></i>');
		}

		for (var i = val; i < 5; i++) {
			$(this).append('<i class="fa fa-star-o" aria-hidden="true"></i>');
		}
	});
});
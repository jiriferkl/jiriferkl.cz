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

	$('.experience-years').text(function () {
		return (new Date()).getFullYear() - 2015;
	});

	$('.age').text(function () {
		return Math.floor(((new Date()) - (new Date('1996-10-24'))) / (365.25 * 24 * 3600 * 1000));
	});
});
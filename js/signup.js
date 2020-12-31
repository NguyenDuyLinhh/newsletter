
	$(document).ready(function() {
		$(".a-click").click(function() {
			$(this).parents('.container').toggleClass('active');
			return false;
		});
	});
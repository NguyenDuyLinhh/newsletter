$(document).ready(function(){
	var height = $(".header-top").height();
	$(window).scroll(function() {
		if($(this).scrollTop() > height) {
			$(".header-bottom").addClass('fixed');
		}
		else {
			$(".header-bottom").removeClass('fixed');
		}
		height = $(window).scrollTop();
	});
	// $("nav button").click(function(){
	// 	$("ul.sub-menu").slideToggle();
	// 	$("ul.main-menu li ul.sub-menu").css('display','none');
	// });
	// $("ul.main-menu li").click(function(){
	// 	$("ul.main-menu li ul.sub-menu").slideUp();
	// 	$(this).find('ul').slideToggle();
	// });
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$("#topBtn").fadeIn();
		}
		else {
			$("#topBtn").fadeOut();
		}
	});
	$("#topBtn").click(function(){
		$("html, body").animate({
			scrollTop: 0
		},800);
	});
});

$(document).ready(function() {
	// $('[data-toggle="tooltip"]').tooltip();

	$(window).scroll(function(){

		var offset = $(this).scrollTop();

		if(offset < 300) {
			$('.page_background').css('filter', 'brightness('+(1 - (offset / 300))+')');
		}

	});

});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-109602534-1');
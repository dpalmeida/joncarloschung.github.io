(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1750, 'easeInOutExpo');
        event.preventDefault();
		return false;
    });

    // Highlight the top nav as scrolling occurs
    // $('body').scrollspy({
        // target: '.navbar-fixed-top',
        // offset: 51
    // });
	





})(jQuery); // End of use strict

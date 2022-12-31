
(function($) {
    "use strict"; 
    
    var imageSliderThree = new Swiper('.image-slider-3', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
		},
        loop: true,
        spaceBetween: 0,
        slidesPerView: 5,
		breakpoints: {
            // when window is <= 580px
            580: {
                slidesPerView: 1,
            },
            // when window is <= 768px
            768: {
                slidesPerView: 2,
            },
            850: {
                slidesPerView: 2,
            },
            1000:{
                slidesPerView: 3,
            },
            // when window is <= 1200px
            1200: {
                slidesPerView: 4,
            },

        }
    });
})(jQuery);


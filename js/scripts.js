/* Template: Corso - Free Training Course Landing Page Template
   Author: Inovatik
   Created: Nov 2019
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
	/* Preloader */

    /* Image Slider - Swiper */
    
    var imageSliderThree = new Swiper('.image-slider-3', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
		},
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        pagination: {
            el: '.swiper-pagination',
                  clickable: true,
              renderBullet: function (index, className) {
                return '<div class="' + className + '"></div>';
              },
          },
		breakpoints: {
            // when window is <= 580px
            580: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window is <= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            850: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            
            // when window is <= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },

        }
    });
    var imageSliderThree = new Swiper('.image-slider-4', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        pagination: {
            el: '.swiper-pagination-1',
                  clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              },
          },
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
    });


   

    
})(jQuery);


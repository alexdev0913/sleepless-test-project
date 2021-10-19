"use strict";

// Class definition
var App = function () {    
    var initSwiper = function() {
      var swiper = new Swiper(".slide-container", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next"
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.5": {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 30,
          }
        }
      });
    }

    var initDrawer = function() {
      $('.drawer').drawer({
        class: {
          nav: 'drawer-nav',
          toggle: 'drawer-toggle',
          overlay: 'drawer-overlay',
          open: 'drawer-open',
          close: 'drawer-close',
          dropdown: 'drawer-dropdown'
        },
        iscroll: {
          // Configuring the iScroll
          // https://github.com/cubiq/iscroll#configuring-the-iscroll
          mouseWheel: true,
          preventDefault: false
        },
        showOverlay: true
      });
    }

    return {
        init: function () {
          initSwiper();
          initDrawer();
        },
    }
}();

// On window load
window.addEventListener("load", function () {
    App.init();
});

// Webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = App;
}
(function($){
    "use strict"
    var LORA = {};
LORA.ActivateParallax = function(){
  $('.parallax-section').enllax({
    type: 'background',  // another value for type is 'foreground'.

    ratio: 0.5,  // multiplier for scrolling speed. Less is slower. Default: '0'.

    direction: 'vertical' // another value for direction is 'horizontal'.
  });
}
LORA.headerMenu = function(){
$(document).on('click', '.navbar-collapse.in', function (e) {
  if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
      $(this).collapse('hide');
  }
});	
// Init meanmenu
$('.mainmenu').meanmenu(
{
    'meanScreenWidth': '991',
    'meanMenuContainer': '.toggle-menu',
    'meanDisplay': 'inline-block',
    'meanMenuCloseSize': '32px'
});
}
LORA.Preloader = function() {
    if($('.preloader').length){
        $('.preloader').delay(300).fadeOut(500);
    }
}
LORA.FixedonScroll = function() {
    // Fixed header on scroll
	let navbar = $(".main-header");
	$(window).on('scroll', function() {
	    var scroll = $(window).scrollTop();
	    if (scroll < 500) {
	        navbar.removeClass('fixed-header flipInX');
	    } else {
	        if (window.innerWidth >= 168) {
	            navbar.addClass('fixed-header animated flipInX' );
	        }
	    }
	});
}
LORA.wowLoad = function() {
    if($('.wow').length){
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
	}
}
LORA.NavScroll = function(){
// Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 50)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });
}
LORA.innerScroll = function(){
$('a.scrollto[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
}

LORA.CounterText = function(){
$('.counter').counterUp({
    delay: 100,
    time: 2000
});
}

// Magnific Popup js
LORA.PortfolioPopup = function(){
  $('.overlay-icon').magnificPopup({ 
    delegate: 'a',
    removalDelay: 300,
    type: 'image',
    gallery: {
       enabled: true
    },
    callbacks: {
    beforeOpen: function() {
       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
    }
  },
  });
}

LORA.GalleryFilter = function(){
if($('.portfolio-gallery').length){
var winDowLoad = $(window);
      // Setup variables
      var $container=$('.portfolio-gallery .portfolio-grid');
      var $filter=$('.sorting-lists');
      $container.isotope({
        filter:'*',
         masonry: {
          columnWidth : 0
         },
        animationOptions:{
          easing:'linear',
          duration:400
          
        }
      });
      // Isotope Filter settings
      $filter.find('li').click(function(){
        var selector = $(this).attr('data-filter');

        try {
          $container.isotope({
            filter  : selector,
            animationOptions: {
              duration: 500,
              easing  : 'linear',
              queue : false
            }
          });
        } catch(err) {

        }
        return false;
      });

      // Window on
      winDowLoad.on('resize', function(){
        var selector = $filter.find('li.active').attr('data-filter');

        $container.isotope({
          filter  : selector,
          animationOptions: {
            duration: 500,
            easing  : 'linear',
            queue : false
          }
        });
      });

      // Filter active class
      var activeFilter = $('.sorting-lists li');

      activeFilter.on('click', function(){
        var $this = $(this);
        if ( !$this.hasClass('active')) {
          activeFilter.removeClass('active');
          $this.addClass('active');
        }
      });
    }
    }

 //Scroll Top scripts
 LORA.ScrollTOp = function(){
$('.scroll-top').on('click', function () {
    $('html,body').animate({
        scrollTop: 0
    }, 900);
});
$(window).scroll(function () {
//Scroll to top Hide > Show
if ($(window).scrollTop() >= 500) {
    $('.scroll-top').slideDown(450);
} else {
    $('.scroll-top').slideUp(450);
}
});
}

 LORA.reviewsSlider = function(){
$('.reviews-slider').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:false,
    dots:true
});
}
  /* ========================
  ***** Skillbox line progress *****
  =========================*/
 LORA.skills_progress = function(){

  $('.progress-line > span' ).each(function (){var $this=$(this); var width=$(this).data('percent');
   $this.css({'transition': 'width 4s'});
   setTimeout(function (){$this.appear(function (){$this.css('width', width + '%');});}, 600);});
}

 	// Window on Load
 	$(window).on("scroll", function(){
        LORA.FixedonScroll();
        
    });
    $(window).on("load", function(){
      LORA.Preloader();
    });
    $(document).on("ready", function(){
        LORA.headerMenu(),
        LORA.wowLoad(),
        LORA.NavScroll(),
        LORA.innerScroll(),
        LORA.CounterText(),
        LORA.PortfolioPopup();
        LORA.ScrollTOp(),
        LORA.ActivateParallax(),
        LORA.reviewsSlider(),
        LORA.skills_progress(),
        LORA.GalleryFilter();
    });
})(jQuery);
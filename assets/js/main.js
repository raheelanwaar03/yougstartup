// ==================================================
// * Project Name   :  Dexfolio - Portfolio & Agency Template
// * File           :  JS Base
// * Version        :  1.0.0
// * Last change    :  11 April 2022
// ==================================================

(function($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // Back To Top - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.header_section').addClass("sticky")
    } else {
      $('.header_section').removeClass("sticky")
    }
  });
  // Sticky Header - End
  // --------------------------------------------------

  // Background Color - Start
  // --------------------------------------------------
  $("[data-text-color]").each(function () {
    $(this).css("color", $(this).attr("data-text-color"))
  });
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"))
  });
  // Background Color - End
  // --------------------------------------------------

  // Off Canvas - Start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.offcanvas_close_btn, .offcanvas_overlay').on('click', function () {
      $('.offcanvas_sidebar').removeClass('active');
      $('.offcanvas_overlay').removeClass('active');
    });

    $('.offcanvas_btn').on('click', function () {
      $('.offcanvas_sidebar').addClass('active');
      $('.offcanvas_overlay').addClass('active');
    });
  });
  // Off Canvas - End
  // --------------------------------------------------

  // Select Option - Start
  // --------------------------------------------------
  $('select').niceSelect();
  // Select Option - End
  // --------------------------------------------------

  // Parallax - Start
  // --------------------------------------------------
  $('.parallaxie').parallaxie({
    offset: 0,
    speed: 0.5,
  });
  // Parallax - End
  // --------------------------------------------------

  // Popup Images & Videos - Start
  // --------------------------------------------------
  $('.popup_video').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
  // Popup Images & Videos - End
  // --------------------------------------------------

  // Masoney Grid Layout - Start
  // --------------------------------------------------
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    }); 
  });
  // Masoney Grid Layout - End
  // --------------------------------------------------

  // Filter Portfolio - Start
  // --------------------------------------------------
  var $element_grid = $(".element_grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows"
  });
  var filterFns = {
    numberGreaterThan50: function() {
      var number = $(this)
      .find(".number")
      .text();
      return parseInt(number, 10) > 50;
    },
    ium: function() {
      var name = $(this)
      .find(".name")
      .text();
      return name.match(/ium$/);
    }
  };
  $(".filter-btns-group").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    filterValue = filterFns[filterValue] || filterValue;
    $element_grid.isotope({ filter: filterValue });
  });
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".active").removeClass("active");
      $(this).addClass("active");
    });
  });

  function portfolioMasonry() {
    var portfolio = $(".masonry_portfolio");
    if (portfolio.length) {
      portfolio.imagesLoaded(function () {
        portfolio.isotope({
          itemSelector: ".element-item",
          layoutMode: 'masonry',
          filter: "*",
          animationOptions: {
            duration: 1000
          },
          transitionDuration: '0.5s',
          masonry: {

          }
        });

        $(".filter-btns-group button").on('click', function () {
          $(".filter-btns-group button").removeClass("active");
          $(this).addClass("active");

          var selector = $(this).attr("data-filter");
          portfolio.isotope({
            filter: selector,
            animationOptions: {
              animationDuration: 750,
              easing: 'linear',
              queue: false
            }
          })
          return false;
        })
      });
    }
  }
  portfolioMasonry();
  // Filter Portfolio - End
  // --------------------------------------------------

  // Mouse Wheel - Start
  // --------------------------------------------------
  const slider = $(".mouse_wheel_slider");
  slider.slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    prevArrow: ".mws_left_arrow",
    nextArrow: ".mws_right_arrow",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }
    ]
  });

  slider.on("wheel", function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY > 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  });
  // Mouse Wheel - End
  // --------------------------------------------------

  // Common Carousel - Start
  // --------------------------------------------------
  $('.common_carousel_1col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".cc1c_left_arrow",
    nextArrow: ".cc1c_right_arrow"
  });

  $('.common_carousel_2col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".cc2c_left_arrow",
    nextArrow: ".cc2c_right_arrow",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  // Common Carousel - End
  // --------------------------------------------------

  // Price Range - Start
  // --------------------------------------------------
  if($("#slider-range").length){
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 0, 4000.00 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  }

  $('.ar_top').on('click', function () {
    var getID = $(this).next().attr('id');
    var result = document.getElementById(getID);
    var qty = result.value;
    $('.proceed_to_checkout .update-cart').removeAttr('disabled');
    if( !isNaN( qty ) ) {
      result.value++;
    }else{
      return false;
    }
  });
  // Price Range - End
  // --------------------------------------------------

  // Quantity - Start
  // --------------------------------------------------
  (function() {
    window.inputNumber = function(el) {
      var min = el.attr("min") || false;
      var max = el.attr("max") || false;

      var els = {};

      els.dec = el.prev();
      els.inc = el.next();

      el.each(function() {
        init($(this));
      });

      function init(el) {
        els.dec.on("click", decrement);
        els.inc.on("click", increment);

        function decrement() {
          var value = el[0].value;
          value--;
          if (!min || value >= min) {
            el[0].value = value;
          }
        }

        function increment() {
          var value = el[0].value;
          value++;
          if (!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    };
  })();
  inputNumber($(".input_number"));
  // Quantity - End
  // --------------------------------------------------

  // Wow Js - Start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // Wow Js - End
  // --------------------------------------------------

})(jQuery);
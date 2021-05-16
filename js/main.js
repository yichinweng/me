$(function () {
  if (isMobileDevice()) {
    $('header#top').css({'height': window.innerHeight});
  }

  //  blur bg
  var bg = new Image(),
    bgSrc =  $('header#top').data('bg');
    bg.src = bgSrc;
  bg.onload = function() {
    $('header#top').css({'background-image': 'url(' + bgSrc + ')'});
    $('#bg-small').addClass('loaded');
  }

  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };
  
  /* scrollDepth */
  $.scrollDepth();

  /* text-fit */
  setTimeout(function () {
    $('#title').css({'visibility': 'visible'}).fitText(1, { minFontSize: '20px', maxFontSize: '90px' });
  }, 100);

  /* smooth scrolling */
  //scroll smooth : https://css-tricks.com/snippets/jquery/smooth-scrolling
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /* scroll-watch*/
  $('.scrollwatch').scrollWatch(function (focus) {
    $('#navbar > a').removeClass('active');
    $('#navbar > a[href=#' + focus.section.id + ']').addClass('active');
    if (focus.section.id == 'hide-menu') {
      $('#navbar').hide("normal");
    }
    else if (focus.section.id != 'hide-menu' && focus.section.id != 'scroll-top') {
      $('#navbar').addClass('bgblack');
      $('#navbar').show("normal");
    }
    else if (focus.section.id == 'scroll-top') {
      $('#navbar').show("normal");
      $('#navbar').removeClass('bgblack');
      $('#navbar > a[href=#top]').addClass('active');
    }
  }, {
      resolutionMode: 'focus-line',
      debugFocusLine: 0,
      focusRatio: 0,
      focusOffset: 0
    });

  /* skill bar animate */
  $(window).scroll(function () {
    var nowTop = $(this).scrollTop(),
        offsetTop = 700,
        topHeight = $('#top').height() - 300;
    
    if (nowTop <= topHeight) {
      $('header .container').css({
        'margin-top': nowTop,
        'opacity': 1 - nowTop/topHeight,
      });
    }

    if (nowTop + offsetTop > $('#skill').offset().top) {
      $(".toeic").addClass('ani-toeic');
    }
  });

  /*nivo slider stop*/
  $(window).load(function () {
    $('#slider-elite-cloud').nivoSlider();
    $('#slider-elite-cloud').data('nivoslider').stop();

    $('#slider-elite-tutor').nivoSlider();
    $('#slider-elite-tutor').data('nivoslider').stop();

    $('#slider-elite-voca').nivoSlider();
    $('#slider-elite-voca').data('nivoslider').stop();

    $('#slider-csquare').nivoSlider();
    $('#slider-csquare').data('nivoslider').stop();

    $('#slider-kaoture').nivoSlider();
    $('#slider-kaoture').data('nivoslider').stop();

    $('#slider-linemart').nivoSlider();
    $('#slider-linemart').data('nivoslider').stop();

    $('#slider-Hacc').nivoSlider();
    $('#slider-Hacc').data('nivoslider').stop();

  });

  /* magnific popup */
  $('.portfolio-link').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
  $('#portfolio-slide-kaoture').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    callbacks: {
      open: function () {
        $('#slider-kaoture').data('nivoslider').start();

      },
      close: function () {
        $('#slider-kaoture').data('nivoslider').stop();
      }
    }
  });
  $('#portfolio-slide-linemart').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    callbacks: {
      open: function () {
        $('#slider-linemart').data('nivoslider').start();

      },
      close: function () {
        $('#slider-linemart').data('nivoslider').stop();
      }
    }
  });
  $('#portfolio-slide-Hacc').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    callbacks: {
      open: function () {
        $('#slider-Hacc').data('nivoslider').start();

      },
      close: function () {
        $('#slider-Hacc').data('nivoslider').stop();
      }
    }
  });

  // GA
  (function (b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l; b[l] || (b[l] =
        function () { (b[l].q = b[l].q || []).push(arguments) }); b[l].l = +new Date;
        e = o.createElement(i); r = o.getElementsByTagName(i)[0];
        e.src = 'https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e, r)
    }(window, document, 'script', 'ga'));
  ga('create', 'UA-65425974-1', 'auto'); ga('send', 'pageview');

});
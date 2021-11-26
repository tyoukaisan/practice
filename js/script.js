/* =================================================
   drawer
  ==================================================== */
  // smooth

  $(function () {
    $('a[href^="#"]').click(function () {
      let header = jQuery('.header').innerHeight();
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top - header;

	  if (jQuery('.comments')){
		let position = target.offset().top - (header + 100);
		let speed = 500;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	  }

      let speed = 500;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });

	// google form
	let $form = $( 'js-form' );
    $form.submit(function(e){
      $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function(){
            //送信に成功した時の処理
            /* $form.slideUp()
          $( '#js-success' ).slideDown(); */
         },
          200: function(){
            //送信に失敗した時の処理
            /* $form.slideUp()
            $( '#js-error' ).slideDown(); */
       }
      }
    });

    return false;
  });


});

// 途中から出力

jQuery(window).on("scroll", function($) {
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.totop').show();
	} else {
		jQuery('.totop').hide();
	}
});

jQuery('.totop').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
});

/* $(".button-circle").click(function(){
	$(":checked").parent().css("border","3px solid red");
}); */

// qa

jQuery('.qa-box__q').on('click', function(){
	jQuery(this).next().slideToggle();
	/* jQuery(this).next().sideDown(1000); */
	jQuery(this).css('border-radius','4px 4px 0px 0px');
	jQuery(this).children('.qa-box__icon').toggleClass('is-active');
    /* jQuery(this).children('.qa-box__icon').addClass('is-active'); */
	jQuery(".qa-box__a").css('border-radius','0 0 4px 4px');
	if (!jQuery(".qa-box__icon").hasClass('is-active')) {
		setTimeout(function () {
			jQuery('.qa-box__q').css('border-radius', '4px 4px 4px 4px');
		}, 400);
	}

	/* if (!jQuery(".qa-box__icon").hasClass('is-active')){
		jQuery('.qa-box__q').delay(3000).css('border-radius','4px 4px 4px 4px');
	} */
});

$(document).on('ready', function() {
	$(".full-screen").slick({
	  centerMode: true,
	  centerPadding: '5%',
	  dots: true,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  speed: 1000,
	  infinite: true,
	});
});

// .qa-box__q1

jQuery('.qa-box__q1').on('click', function(){
	jQuery(this).next().slideToggle();
	/* jQuery(this).next().sideDown(1000); */
	jQuery(this).css('border-radius','4px 4px 0px 0px');
	jQuery(this).children('.qa-box__icon').toggleClass('is-active');
    /* jQuery(this).children('.qa-box__icon').addClass('is-active'); */
	jQuery(".qa-box__a1").css('border-radius','0 0 4px 4px');
	if (!jQuery(".qa-box__icon").hasClass('is-active')) {
		setTimeout(function () {
			jQuery('.qa-box__q1').css('border-radius', '4px 4px 4px 4px');
		}, 400);
	}

	/* if (!jQuery(".qa-box__icon").hasClass('is-active')){
		jQuery('.qa-box__q').delay(3000).css('border-radius','4px 4px 4px 4px');
	} */
});

$(document).on('ready', function() {
	$(".full-screen").slick({
	  centerMode: true,
	  centerPadding: '5%',
	  dots: true,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  speed: 1000,
	  infinite: true,
	});
});

jQuery('.qa-box__q2').on('click', function(){
	jQuery(this).next().slideToggle();
	/* jQuery(this).next().sideDown(1000); */
	jQuery(this).css('border-radius','4px 4px 0px 0px');
	jQuery(this).children('.qa-box__icon').toggleClass('is-active');
    /* jQuery(this).children('.qa-box__icon').addClass('is-active'); */
	jQuery(".qa-box__a2").css('border-radius','0 0 4px 4px');
	if (!jQuery(".qa-box__icon").hasClass('is-active')) {
		setTimeout(function () {
			jQuery('.qa-box__q2').css('border-radius', '4px 4px 4px 4px');
		}, 400);
	}

	/* if (!jQuery(".qa-box__icon").hasClass('is-active')){
		jQuery('.qa-box__q').delay(3000).css('border-radius','4px 4px 4px 4px');
	} */
});

$(document).on('ready', function() {
	$(".full-screen").slick({
	  centerMode: true,
	  centerPadding: '5%',
	  dots: true,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  speed: 1000,
	  infinite: true,
	});
});


/* ====================================================
TokyoFreelance
======================================================= */
$('.slider').slick({
	autoplay: false,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	// 横幅がバラバラなスライドにするか [初期値:false]
	variableWidth: true,
	// スライドをループさせるか [初期値:true]
	infinite: true,
});

  /* -----------------------------------
   drawer
  -------------------------------------- */

  jQuery('.drawer-icon').on('click',function(e){
    e.preventDefault();

	jQuery('.drawer-icon').toggleClass('is-active');
	jQuery('.drawer-content').toggleClass('is-active');
	jQuery('.drawer-background').toggleClass('is-active');
	jQuery('.header-sp__title').toggleClass('is-active');

	return false;

  });

  jQuery('.drawer-content__item a').on('click',function(e){
    e.preventDefault();

	/* alert('ononon'); */

    jQuery('.drawer-icon').toggleClass('is-active');

	/* jQuery('.drawer-content__item a').css('background','#fff'); */

	/* if (jQuery('.result')){
		let position = target.offset().top - (header);
		let speed = 500;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	  } */

    jQuery('.drawer-content').removeClass('is-active');
	jQuery('.drawer-background').removeClass('is-active');

    return false;

  });

  new WOW().init();

  
	
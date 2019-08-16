

$(function() {
    FastClick.attach(document.body);
});

$(function() {
	var fix_header = 1;
	$('#menuBtn').click(function() {
		// $('body').toggleClass('active');
		$('nav').toggleClass('show');
		$('#menuBtn').toggleClass('active');
		$('body').toggleClass('scroll-hidden');
		

		fix_header++;
		header_animate( fix_header % 2 == 0 )
		console.log('fix_header= ' + (fix_header % 2 == 0) );
		// $(window).toggle();
		// $('header').toggleClass('fix-header');
	});

	$('.association .plus').click(function() {
		$('.association-link-all').addClass('show');
		$('body').addClass('scroll-hidden');
	});
	$('.association-link-closeBtn, .association-link-cancelBtn').click(function() {
		$('.association-link-all').removeClass('show');
		$('body').removeClass('scroll-hidden');
	});
	

	// (function(){

		var winTop = $(window).scrollTop(),
			temp = $(window).scrollTop();
			menu_move = 0,
			header_move = 0;

		$(window).scroll(function() {
			winTop = $(window).scrollTop();

			header_animate( fix_header % 2 == 0 );


			// if( winTop <= 0 ) {
			// 	$('header').css(
			// 		'position', 'relative'
			// 	)
			// 	$('.menu').css(
			// 		'z-index', '5'
			// 	)
			// 	$('main').css(
			// 		'margin-top', '35px'
			// 	)
			// }else {
			// 	$('header').css(
			// 		'position', 'fixed'
			// 	)
			// 	$('.menu').css(
			// 		'z-index', '-1'
			// 	)
			// 	$('main').css(
			// 		'margin-top', '80px'
			// 	)
			// }
		});	

		function header_animate(stop) {
			if(winTop >60) {
				if(stop == true) {
					// console.log(stop);
					return
				}else {
					if( ( winTop - temp ) >= 60 ){
						$('header').css(
							'transform', 'translateY(-90px)'
						)
						temp = winTop;
					} else if( ( winTop - temp ) <= -60 ){
						$('header').css(
							'transform', 'translateY(0)'
						)
						temp = winTop;
					}
					// console.log(stop);
				}
			}else {
				$('header').css(
					'transform', 'translateY(0)'
				)
			}
			
		}

		$("#accordion .panel .panel-heading").click(function() {

			$("#accordion .panel.open").removeClass('open');

    		if($(this).parent('.panel').hasClass('open')) {
    			$(this).parents('.panel').removeClass('open');
    		} else{
	    		$(this).parents('.panel').addClass('open');
    		}

    	});

    	$('.rank-menu li').click(function() {
    		$('.rank-menu li.selected').removeClass();
    		$(this).addClass('selected');
    	});
    	$('.rank-tag .swiper-slide').click(function() {
    		$('.rank-tag  .swiper-slide').removeClass('selected');
    		$(this).addClass('selected');
    	});

    	$("#owl-menu .item").click(function() {
    		var text = $(this).text();
    		$('header .subpage').css(
    			'display', 'inline-block'
    		);
    		$('header .subpage span').text(text);

    		$("#owl-menu .item.active").removeClass('active');
    		$(this).addClass('active');
    	});

    	var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    slidesPerView: 'auto',
		    centeredSlides: false,
		    paginationClickable: true,
		    spaceBetween: 30
		});

		var owl = $("#owl-menu");
 
		owl.owlCarousel({

			navigation : false,

			itemsCustom : [
				[0, 3],
				[450, 4],
				[600, 5],
				[700, 5],
				[800, 6],
				[1000, 8],
				[1200, 9],
				[1400, 10]
			]

		});
	// })();
});
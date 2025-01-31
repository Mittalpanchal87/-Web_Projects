$(document).ready(function () {
	new WOW().init();


	$('#banner_slider').owlCarousel({
		margin: 0,
		loop: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		autoplay: true,
		nav: false,
		pagination: false, dots: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			700: {
				items: 1
			},
			1000: {
				items: 1
			},
			1100: {
				items: 1
			}
		}
	});



	$('#slider_section').owlCarousel({
		margin: 0,
		loop: false,
		slideSpeed: 300,
		paginationSpeed: 400,
		autoplay: true,
		nav: false,
		pagination: false, dots: false,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			700: {
				items: 3
			},
			1000: {
				items: 6
			},
			1100: {
				items: 6
			}
		}
	});


	$('#viedo_carousel').owlCarousel({
		margin: 30,
		loop: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		autoplay: true,
		nav: true,
		pagination: false, dots: false,
		center:true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			700: {
				items: 1
			},
			1000: {
				items: 2
			},
			1100: {
				items: 2
			}
		}
	});


	$('#resources_carousel').owlCarousel({
		margin: 30,
		loop: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		autoplay: false,
		nav: true,
		pagination: false, dots: false,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			700: {
				items: 1
			},
			1000: {
				items: 4
			},
			1100: {
				items: 4
			}
		}
	});

});

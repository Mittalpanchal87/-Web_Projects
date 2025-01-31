$(document).ready(function(){
	new WOW().init();
   
   
	$('#viedo_carousel').owlCarousel({
	     margin:36,
	     loop:true,
		 slideSpeed : 300,
		paginationSpeed : 400,
		autoplay: true,
		nav:false,
		pagination:false,  dots: false,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:1
	        },
	        700:{
	            items:1
	        },
	        1000:{
	            items:2
	        },
	        1100:{
	            items:3
	        }
	    }
	}); 
	 
});

$(document).ready(function(){

	$(".js-input").focus(function(){
			$(this).parent().find(".icon-search").addClass(
				"is-active");
		})
		$(".js-input").blur(function(){
			if($(this).val().length==0){
				$(this).parent().find(".icon-search").removeClass("is-active");
			}
			
	})

	$(function() {
    $(".flexslider").flexslider();
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:16,
	    nav:true,
	    navText:[],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        320:{
	            items:2
	        },
	        768:{
	            items:5
	        },
	        1600:{
	            items:5
	        }
	    }
	})

	/* wait for images to load */
    $(window).load( function() {
        $('.sp-wrap').smoothproducts();
    });

	
		
	
   
})
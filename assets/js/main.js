(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".sliders").owlCarousel({
        	items:1,
        	dots:true,
        	loop:true,
        	autplay:false,
        	nav:false,
        	smartSpeed:1000,
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	

 
 
 /******************************************************************


	------------------------
	-- TABLE OF CONTENTS --
	------------------------
	
	--  1. Work
	--  2. Process
	--  3. Team

 
 
 ******************************************************************/




/** 1. WORK
*******************************************************************/

$( document ).ready(function() {
     "use strict";



	// WORK GRID ( Cube Plugin )
    $(".work-grid").cubeportfolio({
        filters: "#js-filters-masonry",
        layoutMode: "grid",
        defaultFilter: "*",
        animationType: "quicksand",
        gapHorizontal: 50,
        gapVertical: 50,
		auto: true,
		sortToPreventGaps: true,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        plugins: {
            loadMore: {
                element: '#work-loadmore',
                action: 'click',
            }
        },                          
        caption: "revealTop",
        displayType: "default",
        displayTypeSpeed: 70,
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: false,
        lightboxTitleSrc: "data-title",
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: false,
		singlePageAnimation: "fade",
        singlePageStickyNavigation: false,
        singlePageCallback: function(url, element) {
            let t = this;
            $.ajax({
                    url: url,
                    type: "GET",
                    dataType: "html",
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage("AJAX Error! Please refresh the page!");
                });
        },
		
    });



/** 2. PROCESS
*******************************************************************/
	 
	 
	 
	 // PROCESS SLIDER ( Cube Plugin )
	 $(".slider-process").cubeportfolio({
        layoutMode: "slider",
        drag: true,
        auto: false,
        showNavigation: false,
        showPagination: true,
        rewindNav: false,
        scrollByPage: false,
		singlePageDelegate: null,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 700,
        caption: "opacity",
        displayType: "fadeIn",
        displayTypeSpeed: 100,
    });
	
	
	function animateProcess() {
		
		let isDown = false;
		
		$(".slider-process .cbp-wrapper").mousedown(function(){
         
			$(".slider-process .cbp-wrapper .process-info-box").removeClass("active");
			isDown = true;
			
		});
		
		$(document).mouseup(function(){
			
			if(isDown){
				
				setTimeout(function(){
					
					$(".slider-process .cbp-wrapper .process-info-box").addClass("active");
					isDown = false;
					
				}, 500);
				
			}
			
		}); 
	
	
	} animateProcess();



/** 3. TEAM
*******************************************************************/ 
	 
	 
	 
	// TEAM SLIDER ( Cube Plugin )
    $(".slider-team").cubeportfolio({
		
        layoutMode: "slider",
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: true,
        rewindNav: true,
        scrollByPage: true,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 50,
        caption: "revealTop",
        displayType: "fadeIn",
        displayTypeSpeed: 400,
		
		singlePageInlineDelegate: ".cbp-singlePageInline",
        singlePageInlinePosition: "bottom",
		singlePageDelegate: null,
        singlePageInlineInFocus: false,
        singlePageInlineCallback: function(url, element) {
            let t = this;
            $.ajax({
                    url: url,
                    type: "GET",
                    dataType: "html",
                    timeout: 10000
                })
                .done(function(result) {

                    t.updateSinglePageInline(result);

                })
                .fail(function() {
                    t.updateSinglePageInline("AJAX Error! Please refresh the page!");
                });
        },	
		
    });	
});
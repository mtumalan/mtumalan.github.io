
 
 /******************************************************************


	------------------------
	-- TABLE OF CONTENTS --
	------------------------
	
	--  1. ReadMe
	--  2. Main Config
	--  3. Hero Config
	
		--  3.1 Hero Config [ Image Background ]
		--  3.2 Hero Config [ Slider Background ]
		--  3.3 Hero Config [ Kenburns Background ]
		--  3.4 Hero Config [ Youtube Background ]
		--  3.5 Hero Config [ Color Background ]
		--  3.6 Hero Config [ Gradient Background ]
		--  3.7 Hero Config [ Sphere Background ]
		--  3.8 Hero Config [ Waves Background ]
		--  3.9 Hero Config [ Mesh Background ]
		--  3.10 Hero Config [ Space Background ]
		--  3.11 Hero Config [ Abstract Background ]
        --  3.12 Hero Config [ Glitch Background ]
		--  3.13 Hero Config [ Custom Background ]
		
	--  4. Google Analytics
 
 
 ******************************************************************/




/** 1. README
*******************************************************************/
	  
	  
	  
	  // !!! 1. DO NOT REMOVE QUOTATION MARKS WHEN GIVEN !!!
	  // !!! 2. SAVE THE FILE AND REFRESH YOUR BROWSER TO SEE CHANGES !!!
	  
	  
	  
/** 2. MAIN CONFIG
*******************************************************************/



		// NAVIGATION MODE OPTIONS - [ "fixed" : "sticky" : "popup" ]
		
		// "fixed" = FIXED NAVIGATION TOP
		// "sticky" = STICKY NAVIGATION
		// "popup" = POPUP NAVIGATION
		
		let option_navigation_mode = "sticky";
		
		
		
		// ANIMATE CONTENT ON SCROLL - [ "on" : "off" ]
		
		// "on" = OPTION ACTIVATED
		// "off" = OPTION DEACTIVATED
		
		let option_animate_content_on_scroll = "on";
		
		
		
		// PARALLAX SCROLLING - [ "on" : "off" ]
		
		// "on" = OPTION ACTIVATED
		// "off" = OPTION DEACTIVATED
		
		let option_parallax_scrolling = "on";



        // GOOGLE MAPS API KEY
        let option_google_maps_api_key = "AIzaSyBibXe8KqGeC6orbxHN_32X2drJUN8WokWXE";



        // GOOGLE MAPS COORDINATE
        let option_google_maps_coordinates = [40.761418, -73.977622];



/** 3. HERO CONFIG
*******************************************************************/



		// ANIMATE HERO CONTENT ON SCROLL - [ "on" : "off" ]
		
		// "on" = OPTION ACTIVATED
		// "off" = OPTION DEACTIVATED
		
		let option_hero_animate_content_on_scroll = "on";
		
		
		
		// HERO 3D HOVER EFFECT - [ "on" : "off" ]
		
		// "on" = OPTION ACTIVATED
		// "off" = OPTION DEACTIVATED
		
		let option_hero_3d_hover_effect = "on";
		
		
		
		// HERO PARALLAX HOVER EFFECT - [ "on" : "off" ]
		
		// "on" = OPTION ACTIVATED
		// "off" = OPTION DEACTIVATED
		let option_hero_parallax_hover_effect = "on";
		
		
		
		// GRAVITY BACKGROUND EFFECT - [ "on" : "off" ]
		
		// "on" = OPTION ACTIVATED
		// "off" = OPTION DEACTIVATED
		
		let option_hero_gravity_effect = "on";
		
		
		
		// BACKGROUND MODE [ SEE OPTIONS BELOW ]
				
		// "image" = IMAGE BACKGROUND
		// "slider" = SLIDER BACKGROUND
		// "kenburns" = KEN BURNS SLIDER BACKGROUND
		// "youtube" = YOUTUBE VIDEO BACKGORUND - IMAGE BACKGROUND FALLBACK FOR MOBILE
		// "color" = SOLID COLOR BACKGROUND
		// "gradient" = ANIMATED GRADIENT BACKGROUND
		// "waves" = SPHERE BACKGROUND
		// "sphere" = WAVES BACKGROUND
		// "mesh" = MESH BACKGROUND
		// "space" = SPACE BACKGROUND
		// "abstract" = ABSTRACT BACKGROUND
        // "glitch" = GLITCH BACKGROUND
		// "custom" = CUSTOM BACKGROUND
		
		let option_hero_background_mode = "youtube";



		/** 3.1 HERO CONFIG [ IMAGE BACKGROUND ]
		*******************************************************************/
				
				
				
				// IMAGE PATH / URL
				let option_hero_background_image_path = [{src:'assets/images/1.jpg'}];
		
		
		
		/** 3.2 HERO CONFIG [ SLIDER BACKGROUND ]
		*******************************************************************/
		

					
				// IMAGES PATH / URL
				let option_hero_background_slider_path = [{src:"assets/images/1.jpg"},{src: "assets/images/2.jpg"},{src: "assets/images/3.jpg"}];
				
				
				
				// SLIDE DELAY / TIMEOUT IN MS
				let option_hero_background_slider_delay = 6000;
				
				
				
				//TRANSITION OPTIONS - [ http://vegas.jaysalvat.com/documentation/transitions/ ]
		
				// fade = FADE TRANSITION
				// fade2 = FADE 2 TRANSITION
				
				// slideLeft = SLIDE LEFT TRANSITION
				// slideLeft2 = SLIDE LEFT 2 TRANSITION
				// slideRight = SLIDE RIGHT TRANSITION
				// slideRight2 = SLIDE RIGHT 2 TRANSITION
				// slideUp = SLIDE UP TRANSITION
				// slideUp2 = SLIDE UP 2 TRANSITION
				// slideDown = SLIDE DOWN TRANSITION
				// slideDown2 = SLIDE DOWN 2 TRANSITION
				
				// zoomIn = ZOOM IN TRANSITION
				// zoomIn2 = ZOOM IN 2 TRANSITION
				// zoomOut = ZOOM OUT TRANSITION
				// zoomOut2 = ZOOM OUT 2 TRANSITION
				
				// swirlLeft = SWIRL LEFT TRANSITION
				// swirlLeft2 = SWIRL LEFT 2 TRANSITION
				// swirlRight = SWIRL RIGHT TRANSITION
				// swirlRight2 = SWIRL RIGHT 2 TRANSITION
				
				// burn = BURN TRANSITION
				// burn2 = BURN 2 TRANSITION
				
				// blur = BLUR TRANSITION
				// blur2 = BLUR 2 TRANSITION
				
				// flash = FLASH TRANSITION
				// flash2 = FLASH 2 TRANSITION
				
				let option_hero_background_slider_transition = "slideDown";
				
				
				
				// TRANSITION DURATION IN MS
				let option_hero_background_slider_transitionDuration = 800;



		/** 3.3 HERO CONFIG [ KENBURNS BACKGROUND ]
		*******************************************************************/
				
				
				
				// IMAGES PATH / URL
				let option_hero_background_kenburns_path = [{src:"assets/images/1.jpg"},{src: "assets/images/2.jpg"},{src: "assets/images/3.jpg"}];
				
				
				
				// SLIDE DELAY / TIMEOUT IN MS
				let option_hero_background_kenburns_delay = 6000;
				
				
				
				//TRANSITION OPTIONS - [ http://vegas.jaysalvat.com/documentation/transitions/ ]
		
				// fade = FADE TRANSITION
				// fade2 = FADE 2 TRANSITION
				
				// slideLeft = SLIDE LEFT TRANSITION
				// slideLeft2 = SLIDE LEFT 2 TRANSITION
				// slideRight = SLIDE RIGHT TRANSITION
				// slideRight2 = SLIDE RIGHT 2 TRANSITION
				// slideUp = SLIDE UP TRANSITION
				// slideUp2 = SLIDE UP 2 TRANSITION
				// slideDown = SLIDE DOWN TRANSITION
				// slideDown2 = SLIDE DOWN 2 TRANSITION
				
				// zoomIn = ZOOM IN TRANSITION
				// zoomIn2 = ZOOM IN 2 TRANSITION
				// zoomOut = ZOOM OUT TRANSITION
				// zoomOut2 = ZOOM OUT 2 TRANSITION
				
				// swirlLeft = SWIRL LEFT TRANSITION
				// swirlLeft2 = SWIRL LEFT 2 TRANSITION
				// swirlRight = SWIRL RIGHT TRANSITION
				// swirlRight2 = SWIRL RIGHT 2 TRANSITION
				
				// burn = BURN TRANSITION
				// burn2 = BURN 2 TRANSITION
				
				// blur = BLUR TRANSITION
				// blur2 = BLUR 2 TRANSITION
				
				// flash = FLASH TRANSITION
				// flash2 = FLASH 2 TRANSITION
				
				let option_hero_background_kenburns_transition = "slideDown";
				
				
				
				// TRANSITION DURATION IN MS
				let option_hero_background_kenburns_transitionDuration = 800;
		
		
		
		/** 3.4 HERO CONFIG [ YOUTUBE BACKGROUND ]
		*******************************************************************/
				
				
				
				// YOUTUBE URL
				let option_hero_background_youtube_url = "https://youtu.be/GpxzIBI74hU";
				
				
				
				// START POINT IN SECONDS
				let option_hero_background_youtube_startPoint = 3;
				
				
				
				// END POINT IN SECONDS
				let option_hero_background_youtube_endPoint = 90;
				
				
				
				// MUTE VIDEO - [ "on" : "off" ]
				
				// "on" = VIDEO IS MUTED
				// "off" = VIDEO IS NOT MUTED
				
				let option_hero_background_youtube_mute = "off"



				// ENDLESS REPLAY LOOP - [ "on" : "off" ]
				
				// "on" = ENDLESS REPLAY LOOP
				// "off" = NO ENDLESS REPLAY LOOP
				
				let option_hero_background_youtube_loop = "on";


				// SHOW CONTROLS - [ "on" : "off" ]
				
				// "on" = SHOW VIDEO CONTROLS
				// "off" = HIDE VIDEO CONTROLS
				
				let option_hero_background_youtube_controls = "on";



                // PAUSE VIDEO WHEN OUT OF VIEWPORT - [ "on" : "off" ]
				
				// "on" = VIDEO WILL BE PAUSED WHEN OUT OF VIEWPORT
				// "off" = VIDEO WILL NOT BE PAUSED WHEN OUT OF VIEWPORT
				
				let option_hero_background_youtube_smart_pause = "on"; 
				
				
				
				// !!! NOTICE IMAGE BACKGROUND WILL BE YOUR FALLBACK FOR MOBILE  !!!
		
		
		
		/** 3.5 HERO CONFIG [ COLOR BACKGROUND ]
		*******************************************************************/
				
				
				
				// CUSTOM COLOR ( FORMAT: ALL CSS FORMATS FOR COLORS )
				let option_hero_background_color_custom_color = "#6e00ff";
				
				
		
		/** 3.6 HERO CONFIG [ GRADIENT BACKGROUND ]
		*******************************************************************/
		
		
		
				// COLOR ARRAY ( FORMAT: RGB )
				let option_hero_background_gradient_colorArray = new Array( [62,35,255], [60,255,60], [255,35,98], [45,175,230], [255,0,255], [255,128,0] );
				
				
				
				// TRANSITION SPEED
				let option_hero_background_gradient_stransitionSpeed = 8;
		
		
		
		/** 3.7 HERO CONFIG [ SPHERE BACKGROUND ]
		*******************************************************************/
		
		
		
				// OBJECT DISTANCE
				let option_hero_background_sphere_distance = 300;
				
				
				
				// OBJECT ROTATION SPEED
				let option_hero_background_sphere_rotation_speed = 0.2;



				// SPHERE LINE COLOR
				let option_hero_background_sphere_line_color = "#ffffff";



				// SPHERE DOT COLOR
				let option_hero_background_sphere_dot_color = "#ffffff";



				// BACKGROUND COLOR
				let option_hero_background_sphere_background_color = "#000000";
		
						
		
		/** 3.8 HERO CONFIG [ WAVES BACKGROUND ]
		*******************************************************************/
		
		
		
				// OBJECT DISTANCE
				let option_hero_background_waves_distance = 1500;
				
				
				
				// DOT SPACING
				let option_hero_background_waves_dotSpacing = 120;
				
				
				
				// DOT AMOUNT ON X AXIS
				let option_hero_background_waves_dotAmountX = 20;
				
				
				
				// DOT AMOUNT ON Y AXIS
				let option_hero_background_waves_dotAmountY = 60;



				// DOT COLOR
				let option_hero_background_waves_dot_color = "#ffffff";



				// BACKGROUND COLOR
				let option_hero_background_waves_background_color = "#000000";
				
				
				
		/** 3.9 HERO CONFIG [ MESH BACKGROUND ]
		*******************************************************************/
		
		
		
				// MESH COLOR
				let option_hero_background_mesh_color = "#ffffff";



				// BACKGROUND COLOR
				let option_hero_background_mesh_background_color = "#111111";
				
				
				
				// MESH SPOTLIGHT SIZE
				let option_hero_background_mesh_spotlight_size = 600;
		
		
		
		/** 3.10 HERO CONFIG [ SPACE BACKGROUND ]
		*******************************************************************/
		
		
		
				// STAR AMOUNT
				let option_hero_background_space_star_amount = 512;
				
				
				
				// STAR MINIMUM SPEED
				let option_hero_background_space_star_speed = 2.5;



				// STAR COLOR
				let option_hero_background_star_star_color = "#ffffff";


				// BACKGROUND COLOR
				let option_hero_background_star_background_color = "#000000";



		/** 3.11 HERO CONFIG [ ABSTRACT BACKGROUND ]
		*******************************************************************/
		


				// BACKGROUND COLOR
				let option_hero_background_abstract_bg_color = "#d1c395";



				// MOVEMENT SPEED
				let option_hero_background_move_speed = 10;



				// BLACK MASS CORE WIDTH IN % (  MAX: 100 )
				let option_hero_background_width = 75;



				// BLACK MASS EXPANSION
				let option_hero_background_width_expansion = 0.8;



        /** 3.12 HERO CONFIG [ GLITCH BACKGROUND ]
		*******************************************************************/
		


				// GLITCH IMAGE
				let option_hero_background_glitch_image = "assets/images/4.jpg";



		/** 3.13 HERO CONFIG [ CUSTOM BACKGROUND ]
		*******************************************************************/
		
		

				// CUSTOM BACKGROUND FUNCTION
				function customBackground() {
					
					// EXAMPLE CODE
					$("#canvas").css("background","#00AB39");
					
					
				}



/**	4. GOOGLE ANALYTICS
*******************************************************************/


		
		// GOOGLE ANALYTICS - [ "on" : "off" ]
		
		// "on" = GOOGLE ANALYTICS ON
		// "off" = GOOGLE ANALYTICS OFF
		
		let option_analytics_tracking = "off";



		// TRACKING ID
		let option_analytics_tracking_id = "UA-XXXXXXXX-X";



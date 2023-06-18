
 
 /******************************************************************


	------------------------
	-- TABLE OF CONTENTS --
	------------------------
	
	--  1. Foundation
	--  2. Background
	--  3. Effects
    --  4. Cycle
	--  5. Slider Revolution
 
 
 ******************************************************************/




/** 1. FOUNDATION
*******************************************************************/

jQuery(document).ready(function() {
     "use strict";
		
		
	// ANIMATE FRONT CONTENT ON SCROLL
	if (option_hero_animate_content_on_scroll == "on") {	
	
		let windowHeight = $(window).height();
		
		$(window).scroll(function() {
		
			let scrollOffset = $(window).scrollTop(),
				calculatedOpacity = 1 - (scrollOffset / windowHeight)*2.8;
			
			if (scrollOffset < windowHeight) {
			
				$(".front-content").css("margin-top", scrollOffset);
				$(".front-content").css("opacity", calculatedOpacity);
				
			}
		
		});
	
	}



/** 2. BACKGROUND
*******************************************************************/
	 
	 
	 
	
	
	
	
	
	
	
	
	
	
	
	// YOUTUBE BACKGROUND FUNCTION
	function youtubeBackground() {
		
		// CONVERT OPTION MUTE
		if ( option_hero_background_youtube_controls === "on" ) {
			$(".hero .front-content").append('<div class="controls"><i class="volume-button fa fa-volume-up"></i><i class="pause-button ti-control-pause"></i></div>');
		}
			
		// CONVERT OPTION
		if  (option_hero_background_youtube_mute === "on" ) {
			
			option_hero_background_youtube_mute = true;
			$(".volume-button").removeClass("fa-volume-up").addClass("fa-volume-off");
			
		}
		
		// CONVERT OPTION MUTE
		if ( option_hero_background_youtube_mute === "off" ) {
			option_hero_background_youtube_mute = false;
		}
		
		// CONVERT OPTION LOOP
		if ( option_hero_background_youtube_loop === "off" ) {
			option_hero_background_youtube_loop = false;
		} else {
			option_hero_background_youtube_loop = true;
		}
		
		// INIT YOUTUBE BACKGROUND VIDEO PLUGIN
		$(".hero .bg-video").append('<div id="bg-youtube" class="player showOn-video-bg"></div>');
		$(".hero #bg-youtube").attr('data-property', '{videoURL:option_hero_background_youtube_url,containment:".bg-video",autoPlay:true,mute:option_hero_background_youtube_mute,startAt: option_hero_background_youtube_startPoint,stopAt: option_hero_background_youtube_endPoint,loop: option_hero_background_youtube_loop,opacity:1,stopMovieOnBlur:false,showControls:false}');
	
		// INIT YOUTUBE BACKGROUND VIDEO PLUGIN
		$(".player").mb_YTPlayer();
		
		// SHOW PLAYER CONTROLS
		$(".hero .controls").addClass("show");
		
		// PLAYER SOUND CONTROLLER
		$(".volume-button").click(function() {
			
			if($("#bg-youtube").hasClass("isMuted")) {
				
				$("#bg-youtube").YTPUnmute(); 
				$( ".volume-button" ).removeClass("fa-volume-off").addClass("fa-volume-up");
				
			} else {
				
				$("#bg-youtube").YTPMute();
				$(".volume-button").removeClass("fa-volume-up").addClass("fa-volume-off");
				
			}
		
		});
		
		let stBtnCheck = true;
		
		// DO SOMETHING WHEN PLAYER IS PAUSED
		$("#bg-youtube").on("YTPPause",function(){
			stBtnCheck = false;
		});
		
		// DO SOMETHING WHEN PLAYER IS PLAYING
		$("#bg-youtube").on("YTPPlay",function(){
			stBtnCheck = true;
		});
		
		// PAUSE PLAYER ON CLICK
		$( ".pause-button" ).click(function() {
			
			if (stBtnCheck == true) {
				
				$("#bg-youtube").YTPPause();
				$( ".pause-button" ).removeClass("ti-control-pause").addClass("ti-control-play");
				
			} else {
				
				$("#bg-youtube").YTPPlay();
				$( ".pause-button" ).removeClass("ti-control-play").addClass("ti-control-pause");
				
			}
		
		});
        
        // Smart Pause System
        if( option_hero_background_youtube_smart_pause == "on" ) {
            
            jQuery( window ).load(function() {
        
                let wasPlayerPaused = false,
                    wasPlayerMuted;

                $("#bg-youtube").on("YTPPlay", function(){
                    wasPlayerPaused = false;
                });

                $("#bg-youtube").on("YTPPause", function(){
                    wasPlayerPaused = true;
                });
                
                $("#bg-youtube").on("YTPUnmuted", function(){
                    wasPlayerMuted = false;
                });

                $("#bg-youtube").on("YTPMuted", function(){
                    wasPlayerMuted = true;
                });
                
                if(option_hero_background_youtube_mute) {
                    wasPlayerMuted = true;
                }

                if( $(window).scrollTop() > $(".hero").height() ) {

                    $("#bg-youtube").YTPPause();
                    $( ".pause-button" ).removeClass("ti-control-pause").addClass("ti-control-play");
                    
                    setTimeout(function(){
                        wasPlayerPaused = false; 
                    },250);

                }

                $(window).scroll(function() {

                    let scrollOffset = $(window).scrollTop(),
                        windowHeight = $(".hero").height(),
                        precentageStage = 100 - scrollOffset / ( windowHeight / 100 );

                    if( !wasPlayerPaused ) {

                        if ( scrollOffset > windowHeight ) {

                            $("#bg-youtube").YTPPause();
                            $( ".pause-button" ).removeClass("ti-control-pause").addClass("ti-control-play");
                            
                            setTimeout(function(){
                                wasPlayerPaused = false; 
                            },20);

                        } else if ( scrollOffset < windowHeight ) {

                            $("#bg-youtube").YTPPlay();
                            $( ".pause-button" ).removeClass("ti-control-play").addClass("ti-control-pause");
                            
                            if(!wasPlayerMuted) {
                                $("#bg-youtube").YTPSetVolume(precentageStage);
                            }
                        }

                    }

                });
                
            });
            
        }
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// CANVAS WAVES BACKGROUND FUNCTION
	function canvasWavesBackground() {
		
		// Z-INDEX CORRECTION BACKGROUND OVERLAY 
		$(".hero .background-content .bg-overlay").css("z-index","2");
	
		// THREE.JS BASED
		let SEPARATION = option_hero_background_waves_dotSpacing, AMOUNTX = option_hero_background_waves_dotAmountX, AMOUNTY = option_hero_background_waves_dotAmountY;

			let SCREEN_WIDTH = $(".hero .level-1").width(),
				SCREEN_HEIGHT = $(".hero .level-1").height();
				
			let container;
			let camera, scene, renderer;

			let particles, particle, count = 0;

			let mouseX = 0, mouseY = 0;

			let windowHalfX = SCREEN_WIDTH / 2;
			let windowHalfY = SCREEN_HEIGHT / 2;

			init();
			animate();

			function init() {

				container = document.createElement("div");
				document.getElementById("canvas").appendChild(container);

				camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
				camera.position.z = option_hero_background_waves_distance;

				scene = new THREE.Scene();

				particles = new Array();

				let PI2 = Math.PI * 2;
				let material = new THREE.SpriteCanvasMaterial( {

					color: option_hero_background_waves_dot_color,
					program: function ( context ) {

						context.beginPath();
						context.arc( 0, 0, 0.5, 0, PI2, true );
						context.fill();

					}

				} );

				let i = 0;

				for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

					for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

						particle = particles[ i ++ ] = new THREE.Sprite( material );
						particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
						particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
						scene.add( particle );

					}

				}

				renderer = new THREE.CanvasRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
				container.appendChild( renderer.domElement );
				renderer.setClearColor( option_hero_background_waves_background_color );

				document.addEventListener( "mousemove", onDocumentMouseMove, false );
				//document.addEventListener( "touchstart", onDocumentTouchStart, false );
				//document.addEventListener( "touchmove", onDocumentTouchMove, false );

				window.addEventListener( "resize", onWindowResize, false );

			}

			function onWindowResize() {
				
				let SCREEN_WIDTH = $(".hero .level-1").width(),
					SCREEN_HEIGHT = $(".hero .level-1").height();
				
				windowHalfX = SCREEN_WIDTH / 2;
				windowHalfY = SCREEN_HEIGHT / 2;

				camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
				camera.updateProjectionMatrix();

				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

			}

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}


			function animate() {
					
				requestAnimationFrame( animate );
				
				render();


			}

			function render() {
				
				if (lem) {
					
					camera.position.x += ( mouseX - camera.position.x ) * 0.05;
					camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
					camera.lookAt( scene.position );
	
					let i = 0;
	
					for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
	
						for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
	
							particle = particles[ i++ ];
							particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
								( Math.sin( ( iy + count ) * 0.5 ) * 50 );
							particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 4 +
								( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
	
						}
	
					}
	
					renderer.render( scene, camera );
	
					count += 0.1;
					
					
				
				}


			}
			
			// PAUSE WHEN NOT IN VIEWPORT
			let lem = true;
			
			$( document ).scroll(function() {
			
				if ( $(this).scrollTop() > $(window).height() ){  
					lem = false;  
				} else {
					lem = true; 
				}
			
			});

	
	}
	
	
	
	// CANVAS MESH BACKGROUND FUNCTION
	function meshBackground() {
		
		let c,
			ctx,
			w,
			h,
			spacing,
			spread,
			basePoint,
			rightPoint,
			botPoint,
			mouse,
			mouseMoved,
			cols,
			rows,
			points,
			tick;
		
		function Point( opt ) {
			
			this.x = opt.x;
			this.y = opt.y;
			this.xBase = this.x;
			this.yBase = this.y;
			this.offset = rand( 0, 1000 );
			this.duration = rand( 20, 60 );
			this.range = rand( 5, 5 );
			this.dir = rand( 0, 1 ) > 0.5 ? 1 : -1;
			this.rad = rand( 2, 4 );
			
		}
		
		Point.prototype.step = function() {
			
			this.x = this.xBase + this.dir * Math.sin( ( tick + this.offset ) / this.duration ) * this.range;
			this.y = this.yBase + this.dir * Math.cos( ( tick + this.offset ) / this.duration ) * this.range;
			
			let angle = angleTo( this, mouse );
			 
			this.x = this.x + Math.cos( angle )	* 100;
			this.y = this.y + Math.sin( angle )	* 100;
			
		};
		
		function rand( min, max ) {
			return Math.random() * ( max - min ) + min;
		}
		
		function dist( p1, p2 ) {
			
			let dx = p1.x - p2.x,
				dy = p1.y - p2.y;
				
			return Math.sqrt( dx * dx + dy * dy );
			
		}
		
		function angleTo( p1, p2 ) {
			
			let dx = p1.x - p2.x,
				dy = p1.y - p2.y;
				
			return Math.atan2( dy, dx );
			
		}
		
		function init() {
			
			c = document.createElement( 'canvas' );
			ctx = c.getContext( '2d' );
			mouse = { x: 0, y: 0 };
			points = [];
			spacing = 180;
			spread = spacing * 0.25;
			document.getElementById("canvas").appendChild( c );
			reset();
			loop();
				
		}
		
		function reset() {
			
			w = $(".hero .level-1").width();
			h = $(".hero .level-1").height();
			c.width = w;
			c.height = h;
			mouse.x = w / 2;
			mouse.y = h / 2;
			mouseMoved = false;
			cols = 0;
			rows = 0;
			points.length = 0;
			tick = 0;
			create();
			
			ctx.strokeStyle = option_hero_background_mesh_color;
			ctx.lineWidth = 2;
			
		}
		
		function create() {
			
			for( let x = -spacing / 2; x < w + spacing; x += spacing ) {
				
				cols++;
				
				for( let y = -spacing / 2; y < h + spacing; y += spacing ) {
					
					if( x == -spacing / 2 ) {
						rows++;
					}
					
					points.push( new Point({
						
						x: ~~( x + rand( -spread, spread ) ),
						y: ~~( y + rand( -spread, spread ) )
						
					}));
					
				}
				
			}
			
		}
		
		function step() {
			
			if( !mouseMoved ) {
				
				mouse.x = w / 2 + Math.cos( tick / 40 ) * 90;
				mouse.y = h / 2 + Math.sin( tick / 40 ) * 90;
				
			}
			
			points.forEach( function( point ) {
				point.step();
			});
			
			tick++;
			
		}
		
		function draw() {
			
			ctx.clearRect( 0, 0, w, h );
			ctx.beginPath();
			
			for( let x = 0; x < cols; x++ ) {
				
				for( let y = 0; y < rows; y++ ) {
					
					basePoint = points[ x * rows + y ];
					rightPoint = x === cols - 1 ? null : points[ ( x + 1 ) * rows + y ];
					botPoint = y === rows - 1 ? null : points[ x * rows + y + 1 ];
					
					if( rightPoint ) {
						
						ctx.moveTo( basePoint.x, basePoint.y );
						ctx.lineTo( rightPoint.x, rightPoint.y );
						
					}
					
					if( botPoint ) {
						
						ctx.moveTo( basePoint.x, basePoint.y );
						ctx.lineTo( botPoint.x, botPoint.y );
						
					}
					
				}
				
			}
			
			ctx.stroke();
			
			ctx.fillStyle = '#000';
			points.forEach( function( point ) {
				
				ctx.save();
				ctx.beginPath();
				ctx.translate( point.x, point.y );
				ctx.rotate( Math.PI / 4 );
				ctx.rect(  0, 0 , 0, 0 );
				ctx.fill();
				ctx.stroke();
				ctx.restore();
				
			});
			
			let grad = ctx.createRadialGradient( mouse.x, mouse.y, 0, mouse.x, mouse.y, option_hero_background_mesh_spotlight_size );
			
			grad.addColorStop( 0, 'hsla(0, 0%, 0%, 0)' );
			grad.addColorStop( 1, 'hsla(0, 0%, 0%, 0.93)' );
			
			ctx.fillStyle = grad;
			ctx.fillRect( 0, 0, w, h );
			
		}
		
		function loop() {
			
			requestAnimationFrame( loop );
			step();
			draw();
			
		}
		
		function mousemove( e ) {
			
			mouseMoved = true;
			mouse.x = e.pageX;
			mouse.y = e.pageY;
			
		}
		
		window.addEventListener( 'resize', reset );
		window.addEventListener( 'mousemove', mousemove );
		
		init();
		
		$(".hero .background-content #canvas canvas").css("background-color",option_hero_background_mesh_background_color);
		
	} 
	
	
	
	// CANVAS SPACE BACKGROUND FUNCTION
	function spaceBackground() {
		
		/**
		 * A jQuery plugin that generates an interactive starfield inside a canvas element.
		 *
		 * Based on Chiptune's starfield.js:
		 * https://github.com/chiptune/js/blob/master/starfield.html
		 */
        
		(function($, window, document, undefined) {
            
		  // Plugin constructor
		  let Starfield = function(el, options) {
              
			this.el = el;
			this.$el = $(el);
			this.options = options;
		
			that = this;
              
		  };
		
		  let isPlaying;
		  let isInited = false;
		  let canCanvas = false;
		  let animId;
		  let that;
		
		  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
		  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
		
		  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
		
		  // MIT license
		
		  (function() {
              
			let lastTime = 0;
			let vendors = ['ms', 'moz', 'webkit', 'o'];
			for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			  window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
			  window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
				window[vendors[x] + 'CancelRequestAnimationFrame'];
			}
		
			if (!window.requestAnimationFrame)
			  window.requestAnimationFrame = function(callback, element) {
				let currTime = new Date().getTime();
				let timeToCall = Math.max(0, 16 - (currTime - lastTime));
				let id = window.setTimeout(function() {
					callback(currTime + timeToCall);
				  },
				  timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			  };
		
			if (!window.cancelAnimationFrame)
			  window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			  };
              
		  }());
            
		  Starfield.prototype = {
              
			defaults: {
			  starColor: option_hero_background_star_star_color,
			  bgColor: option_hero_background_star_background_color,
			  mouseMove: true,
			  mouseColor: "rgba(0,0,0,0.2)",
			  mouseSpeed: 15,
			  speed: option_hero_background_space_star_speed,
			  quantity: option_hero_background_space_star_amount,
			  ratio: option_hero_background_space_star_amount / 2,
			  divclass: "starfield"
                
			},
		
            resizer: function() {
                
                let oldStar				= this.star;
                let initW				= this.context.canvas.width;
                let initH				= this.context.canvas.height;

                this.w					= this.$el.width();
                this.h					= this.$el.height();
                this.x					= Math.round(this.w / 2);
                this.y					= Math.round(this.h / 2);
                
                let ratX 				= this.w / initW;
                let ratY				= this.h / initH;

                this.context.canvas.width	= this.w;
                this.context.canvas.height	= this.h;
                
                for(let i = 0; i < this.n; i++) {
                    
                    this.star[i][0]	= oldStar[i][0] * ratX;
                    this.star[i][1]	= oldStar[i][1] * ratY;

                    this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) * this.star_ratio;
                    this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) * this.star_ratio;
                    
                }

                that.context.fillStyle		= that.settings.bgColor;
                this.context.strokeStyle	= this.settings.starColor;
                
            },
		
			init: function() {
                
			  this.settings = $.extend({}, this.defaults, this.options);
                
			  let url = document.location.href;
			  this.n = parseInt(
                  
				(url.indexOf('n=') != -1) ? url.substring(url.indexOf('n=') + 2, (
					(url.substring(
					  url.indexOf('n=') + 2,
					  url.length)).indexOf('&') != -1) ? url.indexOf('n=') + 2 + (url.substring(
					url.indexOf('n=') + 2,
					url.length)).indexOf('&') :
				  url.length) :
				this.settings.quantity
                  
			  );
		
			  this.flag = true;
			  this.test = true;
			  this.w = 0;
			  this.h = 0;
			  this.x = 0;
			  this.y = 0;
			  this.z = 0;
			  this.star_color_ratio = 0;
			  this.star_x_save = 0;
			  this.star_y_save = 0;
			  this.star_ratio = this.settings.ratio;
			  this.star_speed = this.settings.speed;
			  this.star_speed_save = 0;
			  this.star = new Array(this.n);
			  this.color = this.settings.starColor;
			  this.opacity = 0.1;
		
			  this.cursor_x = 0;
			  this.cursor_y = 0;
			  this.mouse_x = 0;
			  this.mouse_y = 0;
		
			  this.canvas_x = 0;
			  this.canvas_y = 0;
			  this.canvas_w = 0;
			  this.canvas_h = 0;
		
			  this.fps = this.settings.fps;
                
			  this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/);
			  this.orientationSupport = window.DeviceOrientationEvent !== undefined;
			  this.portrait = null;
                
			  let canvasInit = function() {
				that.w = that.$el.width();
				that.h = that.$el.height();
		
				that.initW = that.w;
				that.initH = that.h;
		
				that.portrait = that.w < that.h;
		
				that.wrapper = $('<canvas />')
				  .addClass(that.settings.divclass);
		
				that.wrapper.appendTo(that.el);
		
				that.starz = $('canvas', that.el);
		
				if (that.starz[0].getContext) { 
				  that.context = that.starz[0].getContext('2d');
				  canCanvas = true;
				}
		
				that.context.canvas.width = that.w;
				that.context.canvas.height = that.h;
			  }
			  canvasInit();
                
			  let starInit = function() {
                  
				if (canCanvas) { 
                    
				  that.x = Math.round(that.w / 2);
				  that.y = Math.round(that.h / 2);
				  that.z = (that.w + that.h) / 2;
				  that.star_color_ratio = 1 / that.z;
				  that.cursor_x = that.x;
				  that.cursor_y = that.y;
                    
				  for (let i = 0; i < that.n; i++) {
                      
					that.star[i] = new Array(5);
		
					that.star[i][0] = Math.random() * that.w * 2 - that.x * 2;
					that.star[i][1] = Math.random() * that.h * 2 - that.y * 2;
					that.star[i][2] = Math.round(Math.random() * that.z);
					that.star[i][3] = 0;
					that.star[i][4] = 0;
                      
				  }
                    
				  that.context.fillStyle = that.settings.bgColor;
				  that.context.strokeStyle = that.settings.starColor;
                    
				} else {
				  return;
				}
			  }
			  starInit();
		
			  isInited = true;
			},
              
			anim: function() {
			  this.mouse_x = this.cursor_x - this.x;
			  this.mouse_y = this.cursor_y - this.y;
			  this.context.fillRect(0, 0, this.w, this.h);
		
			  for (let i = 0; i < this.n; i++) {
				this.test = true;
				this.star_x_save = this.star[i][3];
				this.star_y_save = this.star[i][4];
				this.star[i][0] += this.mouse_x >> 4;
		
				// X coords
				if (this.star[i][0] > this.x << 1) {
				  this.star[i][0] -= this.w << 1;
				  this.test = false;
				}
				if (this.star[i][0] < -this.x << 1) {
				  this.star[i][0] += this.w << 1;
				  this.test = false;
				}
                  
				this.star[i][1] += this.mouse_y >> 4;
				if (this.star[i][1] > this.y << 1) {
                    
				  this.star[i][1] -= this.h << 1;
				  this.test = false;
                    
				}
				if (this.star[i][1] < -this.y << 1) {
                    
				  this.star[i][1] += this.h << 1;
				  this.test = false;
                    
				}
		
				// Z coords
				this.star[i][2] -= this.star_speed;
				if (this.star[i][2] > this.z) {
                    
				  this.star[i][2] -= this.z;
				  this.test = false;
                    
				}
				if (this.star[i][2] < 0) {
                    
				  this.star[i][2] += this.z;
				  this.test = false;
                    
				}
		
				this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) * this.star_ratio;
				this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) * this.star_ratio;
		
				if (this.star_x_save > 0 &&
				  this.star_x_save < this.w &&
				  this.star_y_save > 0 &&
				  this.star_y_save < this.h &&
				  this.test) {
				  this.context.lineWidth = (1 - this.star_color_ratio * this.star[i][2]) * 2;
				  this.context.beginPath();
				  this.context.moveTo(this.star_x_save, this.star_y_save);
				  this.context.lineTo(this.star[i][3], this.star[i][4]);
				  this.context.stroke();
				  this.context.closePath();
				}
			  }
			},
		
			loop: function() {
                
			  this.anim();
		
			  animId = window.requestAnimationFrame(function() {
				that.loop()
			  });
                
			},
		
			move: function() {
                
			  let doc = document.documentElement;
		
			  if (this.orientationSupport && !this.desktop) {
				window.addEventListener('deviceorientation', handleOrientation, false);
			  } else {
				window.addEventListener('mousemove', handleMousemove, false);

			  }
		
			  function handleOrientation(event) {
                  
				if (event.beta !== null && event.gamma !== null) {
                    
				  let x = event.gamma,
					y = event.beta;
		
				  if (!that.portrait) {
					x = event.beta * -1;
					y = event.gamma;
				  }
		
				  that.cursor_x = (that.w / 2) + (x * 5);
				  that.cursor_y = (that.h / 2) + (y * 5);
		
				}
                  
			  }
		
			  function handleMousemove(event) {
                  
				that.cursor_x = event.pageX || event.clientX + doc.scrollLeft - doc.clientLeft;
				that.cursor_y = event.pageY || event.clientY + doc.scrollTop - doc.clientTop;
                  
			  }
                
			},
		
			stop: function() {
			  window.cancelAnimationFrame(animId);
		
			  isPlaying = false;
			},
              
			start: function() {

			  if (!isInited) {
				isInited = true;
				this.init();
			  }
                
			  if (!isPlaying) {
				isPlaying = true;
				this.loop();
			  }
		
			  window.addEventListener('resize', function() {
				that.resizer()
			  }, false);
		
			  window.addEventListener('orientationchange', function() {
				that.resizer()
			  }, false);
                
			  if (this.settings.mouseMove) {
				this.move();
			  }
		
			  return this;
			}
		  }
		
		  Starfield.defaults = Starfield.prototype.defaults;
		
		  // Finally, the actual plugin code
		  $.fn.starfield = function(options) {
			return this.each(function() {
			  new Starfield(this, options).start();
			});
		  }
		
		  window.Starfield = Starfield;
		})(jQuery, window, document);
		
		$('#canvas').starfield();
			
	}
	
	
	
	// ABSTRACT BACKGROUND FUNCTION
	function abstractBackground() {
	
		$(".hero .bg-pattern").remove();
		$(".hero .bg-overlay").remove();
		
		let bgInterval = setInterval(function(){
			
			if( $(".hero .level-1 #canvas").offset().top <= 0 ) {
				
				$(".hero .level-1 #canvas").css({ WebkitTransition: "all .4s" ,transition: "all .4s" });
				$(".hero .level-1 #canvas").css("background",option_hero_background_abstract_bg_color);
				
				clearInterval(bgInterval);
				
			}
			
		}, 50);
		
		let MESH = {
			width: option_hero_background_width / 100,
			height: 1.8,
			depth: 60,
			segments: 9,
			slices: 8,
			xRange: option_hero_background_width_expansion,
			yRange: 0.1,
			zRange: 1.0,
			ambient: '#666666',
			diffuse: '#fff',
			speed: option_hero_background_move_speed / 10000
		};
		
		let LIGHT = {
			count: 2,
			xyScalar: 1,
			zOffset: 100,
			ambient: '#fff',
			diffuse: '#b3b3b3',
			speed: 0.0002,
			gravity: 500,
			dampening: 0.95,
			minLimit: 10,
			maxLimit: null,
			minDistance: 20,
			maxDistance: 400,
			autopilot: true,
			draw: false,
			bounds: FSS.Vector3.create(),
			step: FSS.Vector3.create(
			  Math.randomInRange(0.2, 1.0),
			  Math.randomInRange(0.2, 1.0),
			  Math.randomInRange(0.2, 1.0)
			)
		};
		
		let RENDER = {
			renderer: 'canvas'
		};
		
		let now, start = Date.now();
		let center = FSS.Vector3.create();
		let attractor = FSS.Vector3.create();
		let container = document.getElementById('canvas');
		let output = document.getElementById('canvas');
		let renderer, scene, mesh, geometry, material;
		let canvasRenderer;
		let gui, autopilotController;
		
		function initialise() {
            
			createRenderer();
			createScene();
			createMesh();
			createLights();
			addEventListeners();
			resize(container.offsetWidth, container.offsetHeight);
			animate();
            
		}

		function createRenderer() {
			
			canvasRenderer = new FSS.CanvasRenderer();
			setRenderer(RENDER.renderer);
			
		}

		function setRenderer(index) {
			
			if (renderer) {
			  output.removeChild(renderer.element);
			}

			renderer = canvasRenderer;

			renderer.setSize(container.offsetWidth, container.offsetHeight);
			output.appendChild(renderer.element);
			
		}

		function createScene() {
			scene = new FSS.Scene();
		}

		function createMesh() {
			
			scene.remove(mesh);
			renderer.clear();
			geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);
			material = new FSS.Material(MESH.ambient, MESH.diffuse);
			mesh = new FSS.Mesh(geometry, material);
			scene.add(mesh);

			// Augment vertices for animation
			let v, vertex;
			for (v = geometry.vertices.length - 1; v >= 0; v--) {
				
				vertex = geometry.vertices[v];
				vertex.anchor = FSS.Vector3.clone(vertex.position);
				vertex.step = FSS.Vector3.create(
					Math.randomInRange(0.2, 1.0),
					Math.randomInRange(0.2, 1.0),
					Math.randomInRange(0.2, 1.0)
				);
				vertex.time = Math.randomInRange(0, Math.PIM2);
				
			}
			
		}

		function createLights() {
			
			let l, light;
			for (l = scene.lights.length - 1; l >= 0; l--) {
                
				light = scene.lights[l];
				scene.remove(light);
                
			}
			
			renderer.clear();
			
			for (l = 0; l < LIGHT.count; l++) {
				
				light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
				light.ambientHex = light.ambient.format();
				light.diffuseHex = light.diffuse.format();
				scene.add(light);

				// Augment light for animation
				light.mass = Math.randomInRange(0.5, 1);
				light.velocity = FSS.Vector3.create();
				light.acceleration = FSS.Vector3.create();
				light.force = FSS.Vector3.create();

				// Ring SVG Circle
				light.ring = document.createElementNS(FSS.SVGNS, 'circle');
				light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
				light.ring.setAttributeNS(null, 'stroke-width', '0.5');
				light.ring.setAttributeNS(null, 'fill', 'none');
				light.ring.setAttributeNS(null, 'r', '10');

				// Core SVG Circle
				light.core = document.createElementNS(FSS.SVGNS, 'circle');
				light.core.setAttributeNS(null, 'fill', light.diffuseHex);
				light.core.setAttributeNS(null, 'r', '4');
				
			}
			
		}

		function resize(width, height) {
			
			renderer.setSize(width, height);
			FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);
			createMesh();
			
		}

		function animate() {
			
			now = Date.now() - start;
			update();
			render();
			requestAnimationFrame(animate);
			
		}

		function update() {
			
			let ox, oy, oz, l, light, v, vertex, offset = MESH.depth/2;

			// Update Bounds
			FSS.Vector3.copy(LIGHT.bounds, center);
			FSS.Vector3.multiplyScalar(LIGHT.bounds, LIGHT.xyScalar);

			// Update Attractor
			FSS.Vector3.setZ(attractor, LIGHT.zOffset);

			// Overwrite the Attractor position
			if (LIGHT.autopilot) {
			  ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
			  oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
			  FSS.Vector3.set(attractor,
				LIGHT.bounds[0]*ox,
				LIGHT.bounds[1]*oy,
				LIGHT.zOffset);
			}

			// Animate Lights
			for (l = scene.lights.length - 1; l >= 0; l--) {
				
			  light = scene.lights[l];

			  // Reset the z position of the light
			  FSS.Vector3.setZ(light.position, LIGHT.zOffset);

			  // Calculate the force Luke!
			  let D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);
			  let F = LIGHT.gravity * light.mass / D;
			  FSS.Vector3.subtractVectors(light.force, attractor, light.position);
			  FSS.Vector3.normalise(light.force);
			  FSS.Vector3.multiplyScalar(light.force, F);

			  // Update the light position
			  FSS.Vector3.set(light.acceleration);
			  FSS.Vector3.add(light.acceleration, light.force);
			  FSS.Vector3.add(light.velocity, light.acceleration);
			  FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
			  FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
			  FSS.Vector3.add(light.position, light.velocity);
				
			}

			// Animate Vertices
			for (v = geometry.vertices.length - 1; v >= 0; v--) {
				
			  vertex = geometry.vertices[v];
			  ox = Math.sin(vertex.time + vertex.step[0] * now * MESH.speed);
			  oy = Math.cos(vertex.time + vertex.step[1] * now * MESH.speed);
			  oz = Math.sin(vertex.time + vertex.step[2] * now * MESH.speed);
			  FSS.Vector3.set(vertex.position,
				MESH.xRange*geometry.segmentWidth*ox,
				MESH.yRange*geometry.sliceHeight*oy,
				MESH.zRange*offset*oz - offset);
			  FSS.Vector3.add(vertex.position, vertex.anchor);
				
			}

			// Set the Geometry to dirty
			geometry.dirty = true;
			
		}

		function render() {
			renderer.render(scene);

			// Draw Lights
			if (LIGHT.draw) {

			  let l, lx, ly, light;
			  for (l = scene.lights.length - 1; l >= 0; l--) {
				  
				light = scene.lights[l];
				lx = light.position[0];
				ly = light.position[1];
				renderer.context.lineWidth = 0.5;
				renderer.context.beginPath();
				renderer.context.arc(lx, ly, 10, 0, Math.PIM2);
				renderer.context.strokeStyle = light.ambientHex;
				renderer.context.stroke();
				renderer.context.beginPath();
				renderer.context.arc(lx, ly, 4, 0, Math.PIM2);
				renderer.context.fillStyle = light.diffuseHex;
				renderer.context.fill();

			  }

			}
		}

		function addEventListeners() {
			window.addEventListener('resize', onWindowResize);
		}

		function onMouseMove(event) {
			FSS.Vector3.set(attractor, event.x, renderer.height - event.y);
			FSS.Vector3.subtract(attractor, center);
		}

		function onWindowResize(event) {
			resize(container.offsetWidth, container.offsetHeight);
			render();
		}
		
		initialise();


		if (canvas.getContext) {
			
			let ctx = canvas.getContext('2d');
			let left = true;

			canvas.height = screen.height - 60;
			canvas.width = screen.width + 20;

			initialize();
			initialize();

			let timer = setInterval(function () {

				for (let i = 1; i <= 1000; i++) {
					
					ctx.beginPath();
					if (left) {
						ctx.moveTo(0, randomize(canvas.height + 10));
						left = false;
					} else {
						ctx.moveTo(randomize(canvas.width+ 10), 0);
						left = true;
					}
					ctx.lineTo(randomize(canvas.width + 50), randomize(canvas.height  + 50));
					ctx.lineTo(randomize(canvas.width + 50), randomize(canvas.height + 50));
					ctx.fillStyle = getRndColor();
					ctx.fill();
					
				}
				
			}, 5000);
			
		}
	
	}
	
	
	
	
	
	
	
	// CHECK FOR ACTIVE EFFECTS
	function checkforBackgroundEffects() {
		
		if ( option_hero_gravity_effect === "on" ) {
			
			gravityBackgroundEffect();
			
		}
	
	}

	
	
	// BACKGROUND CONTROLLER
	switch(option_hero_background_mode) {
		
		case "image":
		
			imageBackground();
			checkforBackgroundEffects();
		
		break;
		case "slider":
		
			sliderBackground();
			checkforBackgroundEffects();
		
		break;
		case "kenburns":
			
			kenburnsBackground();
			checkforBackgroundEffects();
		
		break;
		case "youtube":
		
		    if ( jQuery.browser.mobile ) {
				
				imageBackground();
			
			} else {
				
				youtubeBackground();
				
			}
			
			checkforBackgroundEffects();
		
		break;
		case "color":
		
			colorBackground();
			checkforBackgroundEffects();
		
		break;
		case "gradient":
		
			gradientBackground();
			checkforBackgroundEffects();
		
		break;
		case "sphere":
			
			loadScript("assets/js/plugins/three.min.js", function() {
				canvasSphereBackground();
			});		
		
		break;
		case "waves":
			
			loadScript("assets/js/plugins/three.min.js", function() {
				canvasWavesBackground();
			});
		
		break;
		case "mesh":
				
			meshBackground();
		
		break;
		case "space":
				
			spaceBackground();
		
		break;
		case "abstract":
			
			loadScript("assets/js/plugins/fss.min.js", function() {	
				abstractBackground();
			});
		
		break;
		case "glitch":
			
			glitchBackground();
			checkforBackgroundEffects();
		
		break;
		case "custom":
		
			customBackground();
			checkforBackgroundEffects();
		
		break;
		default:
			
			alert( "Error! No background is set or something went wrong" );
			console.log("Error! No background is set or something went wrong");
		
		break;	
	
	}




/** 3. EFFECT
*******************************************************************/
	
	// 2D HOVER EFFECT
	if ( option_hero_parallax_hover_effect == "on") {
		
		// PARALLAX HOVER EFFECT
		let $scene = $(".hero").parallax({
		
			scalarX: 24,
			scalarY: 15,
			frictionX: 0.1,
			frictionY: 0.1,
		
		});
		
		// DISABLE OR ENABLE PARALLAX ON MOUSEENTER MOUSELEAVE
		$( ".hero" ).hover(
			
			function() {
			
				$scene.parallax("enable");
			
			}, function() {
			
				$scene.parallax("disable");
			
			}
		
		);
	
	}
    
    // 3D HOVER EFFECT
	if ( option_hero_3d_hover_effect == "on") { 
	
		let dimenson = $(".3d-hover");
		let level = 8;
		
		$(".hero").on("mousemove",function(e) { 
		
			let inheight = $(window).innerWidth();
			let inwidth = $(window).innerHeight();
			
			let force = inheight/level;
			
			let ax = -(inheight/2- e.pageX)/force;
			let ay = -(inwidth/2- e.pageY)/force*0;
			
			dimenson.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
		
		});
	
	}


	// GRAVITY BACKGROUND EFFECT
	function gravityBackgroundEffect() {
			
			function Constellation (canvas, options) {
				
				let screenpointSplitt = 14000,
					movingSpeed = 0.2,
					viewportWidth = $(".hero .level-1").width(),
					viewportHeight = $(".hero .level-1").height(),
					nbCalculated = Math.round(viewportHeight*viewportWidth/screenpointSplitt),
					$canvas = $(canvas),
					context = canvas.getContext("2d"),
					defaults = {
						star: {color: "rgba(255, 255, 255, .65)",width: 1},
						line: {color: "rgba(255, 255, 255, .65)",width: 0.2},
						position: {x: 0,y: 0},
						width: viewportWidth,
						height: viewportHeight,
						velocity: movingSpeed,
						length: nbCalculated,
						distance: 120,
						radius: 200,
						stars: []
					},
					
					config = $.extend(true, {}, defaults, options);
		
				function Star () {
					
					this.x = Math.random() * canvas.width;
					this.y = Math.random() * canvas.height;
		
					this.vx = (config.velocity - (Math.random() * 0.5));
					this.vy = (config.velocity - (Math.random() * 0.5));
		
					this.radius = Math.random() * config.star.width;
					
				}
		
				Star.prototype = {
				
					create: function(){
						
						context.beginPath();
						context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
						context.fill();
						
					},
		
					animate: function(){
						
						let i;
						for (i = 0; i < config.length; i++) {
		
							let star = config.stars[i];
		
							if (star.y < 0 || star.y > canvas.height) {
								
								star.vx = star.vx;
								star.vy = - star.vy;
								
							} else if (star.x < 0 || star.x > canvas.width) {
								
								star.vx = - star.vx;
								star.vy = star.vy;
								
							}
		
							star.x += star.vx;
							star.y += star.vy;
						}
						
					},
		
					line: function(){
						
						let length = config.length,
							iStar,
							jStar,
							i,
							j;
		
						for (i = 0; i < length; i++) {
							
							for (j = 0; j < length; j++) {
								
								iStar = config.stars[i];
								jStar = config.stars[j];
		
								if (
								
									(iStar.x - jStar.x) < config.distance &&
									(iStar.y - jStar.y) < config.distance &&
									(iStar.x - jStar.x) > - config.distance &&
									(iStar.y - jStar.y) > - config.distance
									
								) {
									if (
									
										(iStar.x - config.position.x) < config.radius &&
										(iStar.y - config.position.y) < config.radius &&
										(iStar.x - config.position.x) > - config.radius &&
										(iStar.y - config.position.y) > - config.radius
										
									) {
										
										context.beginPath();
										context.moveTo(iStar.x, iStar.y);
										context.lineTo(jStar.x, jStar.y);
										context.stroke();
										context.closePath();
										
									}
									
								}
								
							}
							
						}
						
					}
					
				};
	
				this.createStars = function () {
					
					let length = config.length,
						star,
						i;
					
					context.clearRect(0, 0, canvas.width, canvas.height);
		
					for (i = 0; i < length; i++) {
						
						config.stars.push(new Star());
						star = config.stars[i];
		
						star.create();
						
					}
					
					star.line();
					star.animate();
					config.stars.splice(length, length);
					
				};
		
				this.setCanvas = function () {
					
					canvas.width = config.width;
					canvas.height = config.height;
					
					context.fillStyle = config.star.color;
					context.strokeStyle = config.line.color;
					context.lineWidth = config.line.width;
					
					if (!options || !options.hasOwnProperty("position")) {
						
						config.position = {
							
							x: canvas.width * 0.5,
							y: canvas.height * 0.5
							
						};
						
					}
					
				};
		
				this.loop = function (callback) {
					
					callback();
		
					window.requestAnimationFrame(function () {
	  			
						this.loop(callback);
						
					}.bind(this));
					
				};
		
				this.bind = function () {
					
					$(window).on("mousemove", function(e){
						
						config.position.x = e.pageX - $canvas.offset().left;
						config.position.y = e.pageY - $canvas.offset().top;
						
					});
					
				};
		
				this.init = function () {
					
					this.setCanvas();
					this.loop(this.createStars);
					this.bind();
				};
				
			}
		
			$.fn.constellation = function (options) {
				
				return this.each(function () {
					
					let c = new Constellation(this, options);
					c.init();
					
				});
				
			};
		
		
			$("#canvas canvas").constellation({});
		
	  
		
		let waitForFinalEvent = (function () {
			
		  let timers = {};
		  
		  return function (callback, ms, uniqueId) {
			  
			if (!uniqueId) {
			  uniqueId = "Don't call this twice without a uniqueId";
			}
			
			if (timers[uniqueId]) {
			  clearTimeout (timers[uniqueId]);
			}
			
			timers[uniqueId] = setTimeout(callback, ms);
			
		  };
		  
		})();
		
		$(window).resize(function () {
			
			waitForFinalEvent(function(){
					$("#canvas canvas").constellation({});
			}, 500, "some unique string");
			
		});
		
		
		
	} 	




/**	4. CYCLE
 *****************************************************/
	
	// letIBABLES
	let cycleDuration = 800;
	let cycleDelay = 6000;
	
	
	
	// ADAPT DELAY TO SLIDER
	if (option_hero_background_mode === "slider") {
		
		cycleDuration = option_hero_background_slider_transitionDuration;
		cycleDelay = option_hero_background_slider_delay;	
		
	}
	
	
	
	// ADAPT DELAY TO KENBURNS SLIDER
	if (option_hero_background_mode === "kenburns") {
		
		cycleDuration = option_hero_background_kenburns_transitionDuration;
		cycleDelay = option_hero_background_kenburns_delay;	
		
	}
	
	
	 
	 // CYCLE SLIDESHOW
	 $("#cycle").cycle({
         
		fx : "scrollVert",
		timeout: cycleDelay,
		delay: 0,
		autoHeight: "container",
		speed: cycleDuration, 
		slides: ".slide",
         pager: ".cycle-pagination",
		log: false
         
	});


	
});




/** 5. SLIDER REVOLUTION
*******************************************************************/
function sliderRevolution() {
     "use strict";
	 	
	    // CHECK IF HERO IS SLIDER REVOLUTION READY TO PREVENT ERRORS
		if ($(".hero").hasClass("slider-revolution")) {
			
			jQuery("#slider1").revolution({
					sliderType: "standard",
					sliderLayout: "fullscreen",
					spinner: "off",
					parallax:{
					   type: "scroll+mouse",
					   levels: [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
					   origo: "enterpoint",
					   speed: 100,
					   bgparallax: "on",
					   disable_onmobile: "off"
					},
					navigation: {
						mouseScrollNavigation: "off", 
						onHoverStop: "off",
						arrows: { enable: false },
						touch:{
						 touchenabled:"on",
						 swipe_treshold : 75,
						 swipe_min_touches : 1,
						 drag_block_vertical:false,
						 swipe_direction:"horizontal"
						},
						bullets: {
						  enable:true,
						  hide_onmobile:false,
						  style:"uranus",
						  hide_onleave:false,
						  direction:"vertical",
						  h_align:"right",
						  v_align:"center",
						  h_offset:30,
						  v_offset:0,
						  space:12,
						  tmp:'<span class="tp-bullet-inner"></span>'
					  },
					},
			});
		
		}
	
	

}
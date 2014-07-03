			$(function() {
	<!-- candidate1 popover script -->
				$('#p1').popover({
					html: true,
					title: '<div class="titleReplacement"></div>',
					trigger: 'manual',
					placement: 'right',
					content: function () {
						return $('#p1Content').html();
					}
				})
				.mouseenter(function () {
					var t = this;
					var popover = $(this);    
					if (popover.is(":hover")) {
						popover.popover('show');
						popover.siblings(".popover").on("mouseleave", function () {
							$(t).popover('hide');
						});
					}
					$( this ).css("padding", "0px 4px 0px 0px");
					$( ' .titleReplacement ' ).load( './popoverTitle.html .candidate1Title' );
				})
				.mouseleave(function () {
					var t = this;
					if (popover.siblings(".popover").length && !popover.siblings(".popover").is(":hover")) {
						$(t).popover("hide");
					}
				});
				
	<!-- candidate2 popover script -->
				$('#p2').popover({
					html: true,
					title: '<div class="titleReplacement"></div>',
					trigger: 'manual',
					placement: 'right',
					content: function () {
						return $('#p2Content').html();
					}
				})
				.mouseenter(function () {
					var t = this;
					var popover = $(this);    
					if (popover.is(":hover")) {
						popover.popover('show');
						popover.siblings(".popover").on("mouseleave", function () {
							$(t).popover('hide');
						});
					}
					$( this ).css("padding", "0px 4px 0px 0px");
					$(' .titleReplacement' ).load( './popoverTitle.html .candidate2Title' );
				})
				.mouseleave(function () {
					var t = this;
					if (popover.siblings(".popover").length && !popover.siblings(".popover").is(":hover")) {
						$(t).popover("hide");
					}
				});
				
	<!-- candidate3 popover script -->
				$('#p3').popover({
					html: true,
					title: '<div class="titleReplacement"></div>',
					trigger: 'manual',
					placement: 'right',
					content: function () {
						return $('#p3Content').html();
					}
				})
				.mouseenter(function () {
					var t = this;
					var popover = $(this);    
					if (popover.is(":hover")) {
						popover.popover('show');
						popover.siblings(".popover").on("mouseleave", function () {
							$(t).popover('hide');
						});
					}
					$( this ).css("padding", "0px 4px 0px 0px ");
					$(' .titleReplacement' ).load( './popoverTitle.html .candidate3Title' );
				})
				.mouseleave(function () {
					var t = this;
					if (popover.siblings(".popover").length && !popover.siblings(".popover").is(":hover")) {
						$(t).popover("hide");
					}
				});
				
	<!-- candidate4 popover script -->
				$('#p4').popover({
					html: true,
					title: '<div class="titleReplacement"></div>',
					trigger: 'manual',
					placement: 'left',
					content: function () {
						return $('#p4Content').html();
					}
				})
				.mouseenter(function () {
					var t = this;
					var popover = $(this);    
					if (popover.is(":hover")) {
						popover.popover('show');
						popover.siblings(".popover").on("mouseleave", function () {
							$(t).popover('hide');
						});
					}
					$(' .titleReplacement' ).load( './popoverTitle.html .candidate4Title' );
				})
				.mouseleave(function () {
					var t = this;
					if (popover.siblings(".popover").length && !popover.siblings(".popover").is(":hover")) {
						$(t).popover("hide");
					}
				});
			});


<!-- scroller bar -->
			$(function() {
				$( "#eq > span" ).each(function() {
					// read initial values from markup and remove that
					var value = parseInt( $( this ).text(), 10 );
					var newColor1 = "#ffffff";
					$( this ).empty().slider({
						range: "min",
						value: value,
						max: 100,
						animate: true,
						orientation: "horizontal"
					})
					.each(function() {				
						for (var i = 0; i < 35; i++) {
							if (i < 9) {
								$( ".ui-state-default" ).eq(i).css("background-color", '#5e1e80');
							}
							else if (i >= 9 && i < 18) {
								$( ".ui-state-default" ).eq(i).css("background-color", '#2e1e80');
							}
							else if (i >= 18 && i < 27) {
								$( ".ui-state-default" ).eq(i).css("background-color", '#801e33');
							}
							else if (i >= 27) {
								$( ".ui-state-default" ).eq(i).css("background-color", '#471e80');
							}
						}
					})
					.each(function(){
						var max =  $(this).slider("option", "max");    
						var spacing =  50;
						var numTicks = (max / spacing) + 1;

						$(this).find('.ui-slider-tick-mark').remove();
						for (var i = 0; i < numTicks ; i++) {
							$('<span class="ui-slider-tick-mark"></span>').css('left', (spacing * i) +  '%').appendTo(this); 
						}
					});
				});
			});
			
<!-- nav tab spacing -->
			$(function() {
				var $li_w = 0;
				var $ul_w = $(".nav").innerWidth();
				
				$( ".nav .nav-tabs" ).each(function( index ) {
					$li_w += $(this).innerWidth();
				});

				var li_margin = Math.floor(($ul_w-$li_w)/5.09);
				$(".nav li").css("margin-left", "2px");
				$(".nav li").not("#first").css("margin-left", li_margin);
				
			});
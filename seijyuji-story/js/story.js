/*
	ARCHIVO story.js
*/

// Setting up
// The breakpoints
var breakpoints = new Array();

// The CSS of each breakpoint

// The function
function update() {
	var pos = $window.scrollTop();
	var vary = 0;
	var max, min;
	
	// 1. Between top and #section-story-intro
	max = $('#section-story-intro').offset().top;
	min = 0;
	console.log(max + "," + min);
	if (pos<=max) {

		vary = (pos - min) / (max - min);
		console.log(vary);
		// The background fades out
		$('#section-story-title-back').fadeTo(0, 1-vary);
		
		// A glow appears around the title text
		$('#section-story-title').css('text-shadow', 'rgba(255, 123, 0, ' + vary +') 0px 0px 8px');
		
		// The paragraphs appear smoothly
		$('#section-story-intro p:eq(0)').fadeTo(0, vary);
		$('#section-story-intro p:eq(1)').fadeTo(0, (vary - 0.2)/0.8);
		$('#section-story-intro p:eq(2)').fadeTo(0, (vary - 0.4)/0.6);
		$('#section-story-gateclose').fadeTo(0, (vary - 0.4)/0.6);
	} else {
		$('#section-story-title-back').fadeTo(0, 0);
		$('#section-story-intro p:eq(0)').fadeTo(0, 1);
		$('#section-story-intro p:eq(1)').fadeTo(0, 1);
		$('#section-story-intro p:eq(2)').fadeTo(0, 1);
		$('#section-story-gateclose').fadeTo(0, 1);
	}

	
}

// BEGIN
var $window = $(window);
$window.bind('scroll', update);
$(document).ready(function(e) {
   update(); 
});
/**
 * jquery.processing.js v2.0.0
 * (C) 2012 shin <s2pch.luck at gmail.com>
 * MIT License
 */
(function($) {

	"use strict";

	// events in processing
	var EVENTS = ["setup", "draw",
				  "mouseClicked", "mouseDragged", "mouseMoved",
				  "mouseOut", "mouseOver", "mousePressed", "mouseReleased",
				  "keyPressed", "keyReleased"];
	
	/**
	 * Simple extension for processing.js
	 * @example
	 * $("canvas.target").processing({
	 *     setup: function(p) { ... },
	 *     draw: function(p) { ... },
	 *     ...
	 * });
	 */
	$.fn.processing = function(sketch) {
		return this.each(function() {
			// "this" is <canvas>
			$(this).data("jquery-processing",
				new Processing(this, function(p) {
					$.each(EVENTS, function(k, v) {
						if (sketch[v])
							p[v] = function() { sketch[v](p); };
					});
				})
			);
		});
	}
	
	/**
	 * Simple extension with scene management system
	 * @example
	 * $("canvas.target").processing_ex({
	 *     entry: { setup: function(p) { return "main"; } },
	 *     main: { update: function(p) { p.background(0); } }
	 * }, {
	 *     start: "entry",
	 *     eventMapping: { draw: "update" }
	 * });
	 */
	$.fn.processing_ex = function(scenes, config) {
		// make configuration
		var config = $.extend(true, {
			// starting event
			start: "start",
			// mapping of event function name
			eventMapping: (function() {
				var r = {}
				for (var i = 0; i < EVENTS.length; ++i)
					r[EVENTS[i]] = EVENTS[i];
				return r; // { setup: "setup", draw: "draw", ... }
			})()
		}, config);
		
		// create scene driven sketch
		var sketch = {};
		var current = config.start;
		var eventMapping = config.eventMapping;
		
		$.each(EVENTS, function(k, v) {
			sketch[v] = function(p) {
				var currentSketch, eventFunc, nextSketch, setupFunc;
				var next, next2;
				currentSketch = scenes[current];
				eventFunc = currentSketch[eventMapping[v]]
				if (eventFunc) {
					next = eventFunc.call(currentSketch, p);
					if (next) {
						do {
							next2 = null;
							nextSketch = scenes[next];
							setupFunc = nextSketch[eventMapping["setup"]];
							if (setupFunc) {
								next2 = setupFunc.call(nextSketch, p);
								if (next2)
									next = next2;
							}
						} while (next2);
						current = next;
					}
				}
			}
		});
		
		// register with $.fn.processing
		return this.processing(sketch);
	}


})(jQuery);



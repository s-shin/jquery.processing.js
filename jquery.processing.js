/**
 * jquery.processing.js v1.1.0
 * (C) 2012 shin <s2pch.luck at gmail.com>
 * MIT License
 */
(function($) {

	var EVENTS = ["setup", "draw",
				  "mouseClicked", "mouseDragged", "mouseMoved",
				  "mouseOut", "mouseOver", "mousePressed", "mouseReleased",
				  "keyPressed", "keyReleased"];

	$.fn.processing = function(sketch) {
		this.each(function() {
			new Processing(this, function(p) {
				for (var k in sketch)
					p[k] = (function(k) {
						return function() { sketch[k](p); }
					})(k);
			});
		});
	}

	$.fn.processing_ex = function(scenes) {
		var sketch = {};
		var scene = "start";
		$.each(EVENTS, function(k, v) {
			sketch[v] = function(p) {
				if (scenes[scene][v]) {
					var s = scenes[scene][v](p);
					if (s != undefined) {
						if (scenes[s].setup)
							scenes[s].setup(p);
						scene = s;
					}
				}
			}
		});
		this.processing(sketch);
	}


})(jQuery);



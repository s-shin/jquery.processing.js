/**
 * jquery.processing.js v1.0.0
 * (C) 2012 shin <s2pch.luck at gmail.com>
 * MIT License
 */
(function($) {

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

})(jQuery);



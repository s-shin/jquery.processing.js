
$(function() {

	var looped = true;

	$("canvas").processing({
		setup: function(p) {
			p.size(200, 200);
			p.frameRate(30);
			p.background(0);
		},
		draw: function(p) {
			p.background(p.frameCount * 2 % 255);
		},
		mouseClicked: function(p) {
			if (looped)
				p.noLoop();
			else
				p.loop();
			looped = !looped;
		}
	});

});


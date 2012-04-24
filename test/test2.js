
$(function() {

	var font = null;

	var scenes = {
		start: {
			setup: function(p) {
				p.size(200, 200);
				p.frameRate(30);
				font = p.loadFont("Arial");
				return "foo";
			}
		},
		foo: {
			setup: function(p) {
				// `this' can be used as a local object of this scene
				this.i = 0;
				p.textFont(font, 40);
				p.textAlign(p.CENTER, p.CENTER);
			},
			draw: function(p) {
				p.background(0);
				p.text("foo", 0, 0, p.width, p.height);
				if (p.frameCount % 10 == 0) {
					p.println(this.i);
					this.increment();
				}
			},
			increment: function() {
				this.i++;
			},
			mouseClicked: function(p) {
				return "bar";
			}
		},
		bar: {
			setup: function(p) {
				p.background(0);
				p.text("bar", 0, 0, p.width, p.height);
				p.noLoop();
			}
		}
	};

	$("canvas").processing_ex(scenes);

});


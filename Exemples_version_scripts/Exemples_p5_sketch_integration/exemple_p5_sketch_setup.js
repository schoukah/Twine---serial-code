// include this section in story Javascript
// everything taken from this Twine forum question:
// http://twinery.org/questions/25343/how-to-load-external-files-into-storys-javascript-sugarcube
// updated CDN urls
setup.mySketch = function (sketch) {

	sketch.setup = function() {
		var canvas = sketch.createCanvas(200, 200);
		canvas.mousePressed(onClick);
	};

	sketch.draw = function() {
		sketch.background(100 + sketch.sin(sketch.millis() * 0.005) * 60);
	};

	function onClick() {
		sketch.remove();
		Engine.play("entrance");
	};
};

setup.p5promise = importScripts([
"https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js",
"https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/addons/p5.sound.js",
"https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/addons/p5.sound.min.js"]);

// Include this in the passage you want to have the sketch in
<div id="p5sketch"></div>
<div id="link"></div>

<<script>>
	$(document).on(':passageend', function () {
		setup.p5promise.then(function () {
			new p5(setup.mySketch, 'p5sketch');
		});
	});
<</script>>
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.money_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(11).p("AAAxpMAAAAjT");
	this.shape.setTransform(226.5,189.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(11).p("AAAxpMAAAAjT");
	this.shape_1.setTransform(158,189.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AoTMIQjFgbhygrIBbiqQCDAuCfAaQCyAfCxAAQEOAACehLQCZhIAAh4QAAhsh6hIQh3hFkbg9QlmhHizhlQjGhvAAifQAAi5D3h2QD8h5GRgBQDFABCrAXQCNAUBqAhIhkCkQjzhKkdABQkFAAiPBMQh4BBAABdQAABpCGBEQB3A/EsBBQFtBQCnBkQCyBvAACnQABDBjxB6QkJCHnVgBQjFAAjKgdg");
	this.shape_2.setTransform(198.8,192.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ArtbtQlZiSkLkKQkKkLiSlZQiXlmAAmHQAAmHCXllQCSlaEKkKQELkLFZiSQFmiXGHAAQGIAAFlCXQFaCSEKELQELEKCRFaQCYFlAAGHQAAGHiYFmQiRFZkLELQkKEKlaCSQllCYmIAAQmHAAlmiYgAq26NQlMCJkAEBQkBECiKFLQiJFLAAFrQAAFrCJFMQCKFLEBEBQEAEBFMCJQFLCKFrAAQFsAAFLiKQFLiJEBkBQEBkBCKlLQCJlMAAlrQAAlriJlLQiKlLkBkCQkAkBlMiJQlLiJlsAAQlrAAlLCJg");
	this.shape_3.setTransform(192.5,192.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArtbuQlZiSkLkLQkKkKiSlaQiXllAAmIQAAmHCXllQCSlaEKkKQELkLFZiSQFniXGGAAQGIAAFlCXQFaCSEKELQELEKCRFaQCYFlAAGHQAAGIiYFlQiRFakLEKQkKELlaCSQllCXmIAAQmHAAlmiXg");
	this.shape_4.setTransform(192.5,192.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_1, new cjs.Rectangle(0,0,385,385.1), null);


// stage content:
(lib.money = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Layer 1
	this.instance = new lib.money_1();
	this.instance.parent = this;
	this.instance.setTransform(952.6,541.4,1,1,0,0,0,192.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:192.6,rotation:37.5},9).to({regX:192.7,regY:192.4,rotation:67.5,x:952.7,y:541.5},10).to({regY:192.3,rotation:112.5,y:541.4},10).to({regX:192.6,rotation:157.5},10).to({rotation:202.5,x:952.8},10).to({regX:192.5,rotation:262.5,y:541.6},10).to({rotation:307.5,y:541.5},10).to({regX:192.6,regY:192.4,rotation:360.2,x:952.9,y:541.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1720.1,860.9,385,385);
// library properties:
lib.properties = {
	id: '3D411B2F126A854A83E3A0934E2CB1EC',
	width: 1920,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3D411B2F126A854A83E3A0934E2CB1EC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
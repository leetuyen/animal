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


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8).p("Al0BpIA2g/QBIhEBSgiQEHhvEUEU");
	this.shape.setTransform(144.9,-1.3,2.169,2.169);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(8).p("Al0BpIA2g/QBIhEBSgiQEGhvEVEU");
	this.shape_1.setTransform(-145.3,-1.3,2.169,2.169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.2,-25.4,460.5,50.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAdIjIg5AAQgLAAgIgIQgHgIAAgKIAAwRQAAgLAHgIQAIgHALAAIA5AAQAKAAAIAHQAIAIAAALIAAQRQAAAKgIAIQgIAIgKAAg");
	this.shape.setTransform(0,0,2.024,1.409);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEB5C").s().p("AgdIjQgKAAgIgIQgHgIAAgLIAAwQQAAgLAHgHQAIgIAKAAIA6AAQALAAAHAIQAIAHAAALIAAQQQAAALgIAIQgHAIgLAAg");
	this.shape_1.setTransform(0,0,2.024,1.409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-79.2,26.1,158.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjDDEQhRhRAAhzQAAhxBRhSQBShRBxAAQBzAABRBRQBRBSAABxQAABzhRBRQhRBRhzAAQhxAAhShRg");
	this.shape.setTransform(421.6,56,2.024,2.024);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjCDEQhShRABhzQgBhxBShSQBRhRBxAAQBzAABQBRQBRBSAABxQAABzhRBRQhQBRhzAAQhxAAhRhRg");
	this.shape_1.setTransform(55.9,56,2.024,2.024);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,477.5,111.9), null);


// stage content:
(lib.pig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(993.8,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:100.8},9).to({y:172.2},10).to({y:206.5},6).to({alpha:0},7).wait(16));

	// Layer_3
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(995.2,352.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(14));

	// Layer_2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(982.7,381.5,1,1,0,0,0,238.8,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},34).wait(14));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdC/QgKAAgIgHQgHgIAAgLIAAlJQAAgLAHgHQAIgIAKAAIA6AAQALAAAHAIQAIAHAAALIAAFJQAAALgIAIQgHAHgLAAg");
	this.shape.setTransform(993.8,244.8,2.024,2.024);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AD1AAQAAGlhIErQhIEqhlAAQhkAAhIkqQhIkqAAmmQAAmlBIkqQBIkqBkAAQBlAABIEqQBIErAAGkg");
	this.shape_1.setTransform(1060.7,627.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AisLQQhIkqAAmmQAAmlBIkqQBIkqBkAAQBlAABIEqQBIErAAGkQAAGlhIErQhIEqhlAAQhkAAhIkqg");
	this.shape_2.setTransform(1060.7,627.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AD1AAQAAGlhIErQhIEqhlAAQhkAAhIkqQhIkqAAmmQAAmlBIkqQBIkqBkAAQBlAABIEqQBIErAAGkg");
	this.shape_3.setTransform(906.2,627.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AisLQQhIkqAAmmQAAmlBIkqQBIkqBkAAQBlAABIEqQBIErAAGkQAAGlhIErQhIEqhlAAQhkAAhIkqg");
	this.shape_4.setTransform(906.2,627.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmjPjQjBhSiWiVQiViWhSjCQhWjIAAjcQAAjaBWjJQBSjCCViVQCWiWDBhSQDJhVDaAAQDcAADJBVQDBBSCWCWQCUCVBTDCQBUDJAADaQAADchUDIQhTDCiUCWQiWCVjBBSQjJBVjcAAQjaAAjJhVg");
	this.shape_5.setTransform(982.6,635.9,2.024,2.024);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AqcYyQk1iDjujuQjujuiDk1QiHlAAAleQAAldCHlAQCDk0DujvQDujuE1iDQE/iHFdAAQFeAAFACHQE0CDDvDuQDuDvCCE0QCHFAAAFdQAAFeiHFAQiCE1juDuQjvDuk0CDQlACHleAAQldAAk/iHg");
	this.shape_6.setTransform(982.6,556.4,2.024,2.024);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("An9BcQEcnJFOiJQBpgrBhgGQAxgDAcAHIArA/QAvBVATBwQA+FjjtHkg");
	this.shape_7.setTransform(1190.8,248.1,2.024,2.024);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AqgBNQFko3G2ieQCJgxCBgDQBBgBAlAJIARAUQAWAbAVAjQBDBvAfCOQBkHHklJbg");
	this.shape_8.setTransform(1187,247.1,2.024,2.024);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AnwkgQAThvAvhWQAYgqATgVIBNgDQBhAFBpAsQFOCIEcHKIs+HMQjunkA+lkg");
	this.shape_9.setTransform(782.6,238,2.024,2.024);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AqHllQAfiOBDhvQAhg3AbgbIAbgEQAjgFAoABQCBADCJAxQG2CeFkI3IxnJwQkkpbBjnHg");
	this.shape_10.setTransform(786.4,237,2.024,2.024);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1594.4,513.6,696.4,903.1);
// library properties:
lib.properties = {
	id: 'C33C3F57F4948D40BA1276AA0042F723',
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
an.compositions['C33C3F57F4948D40BA1276AA0042F723'] = {
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
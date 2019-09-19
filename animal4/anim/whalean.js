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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/KRQgOgSAdg5QAVgpBFhrQBBhjAdgyQBKh+A9j8IAujnIAAgEIAEAAQCUgJB9ibQA+hOAhhPIAHgRIADATIAGBLQAFBbgCBcQgGElhNC8QhTDMjdCxQizCRiSArQgWAGgNAAQgRAAgHgKgAD+nHQhzB/iGAKQgTB8gfB8Qg7DuhHB6QghA4g9BeQg+BegVAnQgjA/AMAPQAJAMAngMQCRgrCyiOQDaiwBSjJQBFipALkAQAHiWgMiOQgwBihFBLg");
	this.shape.setTransform(0,0,2.112,2.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("Al/J/QgDgWAgg7QByivA8hnQBLiAA9j9IAtjlQCYgJB+ieQA+hPAhhOIAGBJQAFBagBBcQgGElhOC+QhSDMjcCwQiyCOiRArQgUAGgNAAQgWAAgDgQg");
	this.shape_1.setTransform(0,1.5,2.112,2.112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-140.9,164.1,281.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjZEEQgNgKgBgUIACgTIABgBQBEh5AZh6QAIgnADgjQACgYgBgDIAAgFIAFAAQA/gDCQg9QBJgeA+geIAIgEIgBAIQgIBrhpCtQghA3goA4IgkAyIgBABQiIBVg8AAQgSAAgLgIgABJi5Qh9Ayg9AFQAAAxgQBEQgbBzg/BxQgCAHAAAJQABAOAJAHQAQAMAogLQA6gQBig+QA3hHA0hXQBlilALhnQhEAihPAgg");
	this.shape.setTransform(55.1,63.8,2.379,2.379);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("AjSEBQgPgIgBgUIACgSQBGh7AZh8QAHgnADgjIABgaQBAgECTg9QBJgeA9geQgJBrhrCvQg2BZg0BDQiHBVg5AAQgNAAgKgFg");
	this.shape_1.setTransform(55.1,64.3,2.379,2.379);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleY:2.379,y:64.3}},{t:this.shape,p:{scaleY:2.379,y:63.8}}]}).to({state:[{t:this.shape_1,p:{scaleY:2.187,y:59.4}},{t:this.shape,p:{scaleY:2.187,y:59}}]},7).to({state:[{t:this.shape_1,p:{scaleY:1.995,y:54.6}},{t:this.shape,p:{scaleY:1.995,y:54.2}}]},7).to({state:[{t:this.shape_1,p:{scaleY:1.88,y:51.7}},{t:this.shape,p:{scaleY:1.88,y:51.4}}]},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.3,127.7);


(lib.NC1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5A4A4").s().p("ADOCWQhpj0j1BEQhBgKgygjQhihEBQh+QAwhKBTgmQBQglBXAGQDMARA6DNQAyCygfDiQgQBygaBOQgDiJgzh7g");
	this.shape.setTransform(31.4,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.NC1, new cjs.Rectangle(0,0,62.8,82), null);


(lib.VAY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(82.1,140.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:31.9,regY:-131.8,scaleY:0.93,x:114,y:9.1},0).wait(3).to({scaleY:0.87},0).wait(4).to({regX:32,scaleY:0.82,rotation:5.5,x:114.1,y:9},0).wait(3).to({scaleY:0.79,y:8.9},0).wait(3).to({regX:32.1,regY:-131.7,scaleY:0.74,rotation:11.2,y:9},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.2,281.8);


(lib.NC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.NC1();
	this.instance.parent = this;
	this.instance.setTransform(31.4,154.2,1,1,0,0,0,31.4,41);
	this.instance.alpha = 0;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5A4A4").s().p("ABhBHQgxhzh0AgQgfgFgXgQQgvghAmg7QAXgjAngSQAmgSApADQBgAIAcBhQAYBUgPBrQgIA2gMAlQgBhBgZg6g");
	this.shape.setTransform(31.4,154.1,2.112,2.112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(17));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5A4A4").s().p("AifBXQAGhsAnhOQAthaBfALQAqAEAiAZQAjAZAQAnQAaBBg0AXQgRAHgWACIgTABQhrg1hGBoQgWAhgQAtQgIAWgDAQQgFgmADg3g");
	this.shape_1.setTransform(117.6,124.3,2.112,2.112);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5).to({_off:false},0).wait(15));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5A4A4").s().p("ABiBHQgyhzhzAgQgfgEgYgRQgvghAmg7QAXgjAngSQAngSAoADQBhAIAbBhQAYBUgPBrQgHA2gMAlQgChBgYg6g");
	this.shape_2.setTransform(43.7,41,2.112,2.112);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,113.2,62.8,81.9);


// stage content:
(lib.whalean = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.VAY();
	this.instance.parent = this;
	this.instance.setTransform(1472.3,647.4,0.815,0.815,0,0,0,82.1,141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// Layer_2
	this.instance_1 = new lib.NC();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1582.3,256.7,0.815,0.815,0,0,0,75.9,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJASQgHgEgDgIQgCgIAEgHQAEgIAIgCQAHgCAIAEQAHAEADAIQACAHgEAIQgEAHgIADIgGABQgEAAgFgDg");
	this.shape.setTransform(1561.2,475.6,1.722,1.722);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAIQgDgCgBgEQgBgCACgDQACgEADgBQADgBADACQAEACABAEQACAHgIADIgDAAIgEgBg");
	this.shape_1.setTransform(1562.6,470.5,1.722,1.722);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA4QgXgNgIgZQgHgYAMgXQANgXAZgIQAYgHAXAMQAXANAIAZQAHAYgMAYQgNAXgZAHQgKADgIAAQgPAAgOgIg");
	this.shape_2.setTransform(1566.9,475.7,1.722,1.722);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("As5IWQETgLFIizQD5iJEIjeQDBikC6jFQBdhjA4hEIAHAHQg3BDheBjQi5DGjDCkQkIDfj7CJQlKC1kVALg");
	this.shape_3.setTransform(1532.6,529,1.722,1.722);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AuzJkQGThQGMjbQEsinETjrQDLitCujEQBYhiAwhBIAIAGQgwBBhYBjQivDEjLCuQkWDrksCoQmNDcmUBQg");
	this.shape_4.setTransform(1544.5,532.8,1.722,1.722);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AwlKfIAAgKQFfAOGmjYQFAikFUkdQD6jQDwkAQB4iABIhYIAIAGQhIBZh5CAQjwEAj7DRQlJEUk4CjQmaDWlZAAg");
	this.shape_5.setTransform(1559.9,530.9,1.722,1.722);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AvQMfQIlilGzksQFKjjD1kgQCzjUB4jjQA8hyAZhJIAKADQgZBKg9ByQh4Dli0DUQj1EhlNDkQm0EtomClg");
	this.shape_6.setTransform(1673.3,520.9,1.722,1.722);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AxvMmQJdh4H1kkQF7jeEnkxQDYjgCaj6QBNh9AjhSIAJADQgiBThOB+QicD7jZDhQkwE8mJDjQnqEYpWB3g");
	this.shape_7.setTransform(1628.4,524.9,1.722,1.722);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AzxMZQKPhZIpkYQGkjWFPk1QD1jiC1kEQBbiCAqhXIAJAFQgrBXhbCCQi1EFj3DkQlcFCmxDXQoeEOqFBXg");
	this.shape_8.setTransform(1589,527.6,1.722,1.722);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AyxLWQILgxH5j8QF/i/FbkkQD+jXDYj8QBth9A6hVIAIAFQg6BVhtB/QjYD8kADYQlcElmADAQn6D7oNAyg");
	this.shape_9.setTransform(1572.2,531.5,1.722,1.722);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("A1zM0QgbgEgPgEIgZgHIAZgDQAcgFAngfQBOg/A6iIIABgCIACAAIHjiyIABAAQATAAAcgHQA2gOA0ghQClhoBZkCIAEgLQAHgLAMgEQAigMBBA4QgJglACgmQADg5AbguQBIh2DagbQAHAAAbgeQBPhWBXgtQCfhRDnAGQAUgLBNgkQDUhiCcg3QDhhPBDAdIAGAEQAIAGADALQASA3hMCOQhuDNkkFkQiUCij5C1QnzFpoQBzQh5AOidAMQk2AZjEAAQhzAAhHgJgAk6guQgJADgFAJIgDAIQhYECilBrQhZA6hJAAIngCwQgvBvg9A/QgpArgpAQIAWAEQCeAWGigdQDRgPC2gTQIOhzHxloQD4i1CTigQEnloBtjOQBGiFgPgxQgCgIgFgFQgDgDgCAAQhCgcjtBWQiXA2jGBbQhgAtgCACIgBABIgBAAQjmgGiaBOQhWAshPBXIgXAYQgLAJgHAAQjVAbhFBxQghA3AEBHQADAkAJAYIAHAUIgPgPQg9g2ggAAQgGAAgEABg");
	this.shape_10.setTransform(1602.2,523.7,1.722,1.722);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A19MuQgbgEgOgEQAcgDAoggQBPg/A7iLIHjiyIAsgGQA2gMA1ggQCphoBbkJIAEgKQAGgKALgDQAjgLBHBBQgahFAYhOQAyiaEAgfQAJgBAlgoQAvgzAvghQCqh3EZAHIBhgvQDMheCag3QDohSBCAcIAGADQAGAFADAJQAKAfgWA/QhJDLl2HJQiOCdj5C2QnyFroVB0QiyAUjSAOQjuARibAAQh2AAhFgKg");
	this.shape_11.setTransform(1604.1,523.8,1.722,1.722);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjqRBQkuh8ktjUQkljNj7kAQjVjZhQiLQhoi2jBgvQhlgZhUAPQiuBfi7gWQiOgQiNhTQhng8hehaIhKhPIAIgHQBPBSDUALQBxAGBqgNQBYhjC2gwQBmgcBegEQADh7AehJQAJgYALgPIALgMIABgBQC9g4CGiOQBDhHAeg+IAFgKIAEAKQBKCxgPCmQgMB+g+BvQgpBJg8A+QgjAlgiAaQBRBECJBJQD2CGE6BSQDJA1CIgJQBngGA8gpQAigYARgiQAIgQACgNIABgHIAGADQCpBcF2AdQC9APCfgEQCmgXFajNQCthnCPhlIABgBQGAigFzgWQEZgQD/BBQCzAtCbBSQBUAtAwAmQAOABAHAJQALAQgLAlQAUBGi9EPQg8BVhLBhIhGBZQkfFgmCDsQkmCzlKBkQjyBKjyAbQhNAJhCADIg2ABQhiAMhkAAQlpAAmFifgA9ekTQCLA+BSCQQBPCKDVDZQD6D+EkDNQFYDyFXB+QHCClGYg0IA1gBQBDgDBMgJQDxgbDyhKQFIhkEliyQGAjrEeleIBBhSQBLhhA8hWQDBkTgVhBIgBgCIABgBQAEgKABgMQACgQgFgHQgFgGgJAAIgCAAIgCgBQgqgihPgrQiehWi5gvQj9hAkYAQQlxAWl9CgQiYBpitBmQlWDLinAXQidAEi8gPQl1gcishbQgLAyg0AlQg9AqhpAHQiLAJjLg1QlQhYkCiSQhRgug/guIgxgmIgFgEIAGgEQAZgSAighQBDhDAthQQA9hsAMh6QAQighGirQgqBNhMBJQiBB9itAzQgRASgOAmQgbBIgCBzIAAAFIgEAAQhSAEhhAXQjDAwhbBoIgBABIgCAAQhXALhigCQjBgEhjg8QBrBxB+BKQCKBRCMAQQC5AVCrheIABAAIATgDQAXgCAZAAQBuAABgArg");
	this.shape_12.setTransform(1326.1,454.7,1.722,1.722);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#282828").s().p("AhrRnQlph9lukBQkojPj8kDQjRjWhOiIQhsi9jJgtQg/gOhAACIg0AFQk0CplMjCQhng9hehaIhIhNQBUBWDgAJQBwAFBggNQBchpDFgwQBjgYBQgDQACh8AfhKQAJgXALgQIAJgKQDAg5CHiQQBDhIAdg9QCEE5iTEHQhJCDhkBEIAuAlQA+AuBRAtQEBCSFTBZQFTBZCThTQBKgpAGg7QCrBdF6AdQC9AOCbgEQCpgXFcjPQCvhoCMhjQKskfJbCZQC9AwCdBWQBPArApAiQAYgBgBAeQAAAOgGAPQAWBDjDEWQg9BWhLBiIg/BQQoBJzsODuQj0BLjyAbQhLAIhDADIgzABQhjANhkAAQktAAlChxg");
	this.shape_13.setTransform(1326,455.4,1.722,1.722);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(48));

	// Layer_4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1630,635.3,0.815,0.815,0,0,0,55.1,63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1757.2,751.9,1057.8,522.3);
// library properties:
lib.properties = {
	id: '65D969F80839814B920756F5DB2C0585',
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
an.compositions['65D969F80839814B920756F5DB2C0585'] = {
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
var xoff = 0.0;
var yoff = 0.0;
var zoff = 0.0;
var pixels = [];
var space = 8;
var temp = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  for(var i = 0; i < width; i += space) {
    temp = [];
    for(var j = 0; j < height; j += space) {
      temp.push(new pixel(i,j,space));
    }
    pixels.push(temp);
  }
}

function draw() {
  background(255);
  for(var i = 0; i < pixels.length; i++) {
    for(var j = 0; j < height / space; j++) {
      pixels[i][j].update();
    }
  }
}

function pixel(xdex,ydex) {
  this.scale = 0.01;
  this.xoff = this.scale * xdex;
  this.yoff = this.scale * ydex;
  this.zoff = this.scale;
  this.xdex = xdex;
  this.ydex = ydex;
}

pixel.prototype.update = function() {
  this.xoff += this.scale;
  this.yoff += this.scale;
  this.zoff += this.scale;
  strokeWeight(5);
  stroke(0);
  point(map(noise(this.xoff,this.yoff,this.zoff),0,1,this.xdex * space - space * 10, this.xdex * space + space*10),
  map(noise(this.yoff,this.zoff,this.xoff),0,1,this.ydex * space - space * 10, this.ydex * space + space*10));
}

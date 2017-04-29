var xyspeed = 10;
var herd = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  generate();
}

function draw() {
  background(0);
  herd.map(function(curr) {
    curr.update();
    curr.show();
  })
}

function generate() {
  for (var i = 0; i < 250; i++) {
    herd.push(new object(random(width),random(height),random(-xyspeed,xyspeed),random(-xyspeed,xyspeed)));
  }
}

function object(x,y,xspeed,yspeed) {
  this.neighborhood = [];
  this.viewField = 10;
  this.x = x;
  this.y = y;
  this.xspeed = xspeed;
  this.yspeed = yspeed;
}

object.prototype.calculateXspeed = function() {
  var a = 0
  for (var i = 0; i < this.neighborhood.length; i++) {
    a += this.neighborhood[i].xspeed;
  }
  this.xspeed =  a / this.neighborhood.length;
}

object.prototype.calculateYspeed = function() {
  var a = 0
  for (var i = 0; i < this.neighborhood.length; i++) {
    a += this.neighborhood[i].yspeed;
  }
  this.yspeed =  a / this.neighborhood.length;
}

object.prototype.calculateNeighbors = function() {
  this.neighborhood = [];
  for (var i = 0; i < herd.length; i++) {
    if (dist(herd[i].x,herd[i].y,this.x,this.y) < this.viewField) {
      this.neighborhood.push(new object(herd[i].x,herd[i].y,herd[i].xspeed,herd[i].yspeed));
    }
  }
}

object.prototype.update = function() {
  this.calculateNeighbors();
  this.calculateYspeed();
  this.calculateXspeed();
  this.x += this.xspeed;
  this.y += this.yspeed;

  if (this.x < 0) {
    this.x = width;
  } else if (this.x > width) {
    this.x = 0;
  }
  if (this.y < 0) {
    this.y = height;
  } else if (this.y > height) {
    this.y = 0;
  }
}

object.prototype.show = function() {
  strokeWeight(5);
  stroke(this.neighborhood.length * 10,0,0);
  point(this.x,this.y);
}

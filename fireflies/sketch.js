var points = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  for (var i = 0; i < 1000; i++) {
    points.push(new Particle);
  }
}

function draw() {
  background(0,0,0,25)
  for (var i = 0; i < points.length; i++) {
    points[i].update();
    points[i].show();
  }
}

function Particle() {
  this.x = random(0,width);
  this.y = random(0,height);
  this.scale = random(10,20);

  this.update = function() {
    this.x += random(-1,1);
    this.y += random(-1,1);
  };

  this.show = function() {
    fill(250,255,145,5);
    noStroke();
    ellipse(this.x,this.y,this.scale,this.scale);
    stroke(248,255,137);
    point(this.x,this.y);
  };
}

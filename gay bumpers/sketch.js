var bumpers = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    bumpers.push(new bumper(mouseX,mouseY));
  }
  for(var i=0; i<bumpers.length; i++) {
    bumpers[i].run();
  }
}

function bumper(x,y) {
  this.x = x;
  this.y = y;
  this.size = 10;
  this.speed = 5;
  this.xspeed = random(-this.speed,this.speed);
  this.yspeed = random(-this.speed,this.speed);
  this.friction = 0.01;
}

bumper.prototype.run = function() {
  this.update();
  this.show();
}

bumper.prototype.show = function() {
  fill(this.x % 355, 255, 255);
  ellipse(this.x, this.y, this.size, this.size);
}

bumper.prototype.update = function() {
  for(var i=0; i<bumpers.length; i++) {
    if (this.x + this.xspeed > width || this.x + this.xspeed < 0) {
      this.xspeed *= -1;
    }
    if (this.y + this.yspeed > height || this.y + this.yspeed < 0) {
      this.yspeed *= -1;
    }
  }
  this.x += this.xspeed;
  this.y += this.yspeed;

  if (this.xspeed < 0) {
    this.yspeed += this.friction;
  } else {
    this.xspeed -= this.friction;
  }

  if (this.yspeed < 0) {
    this.yspeed += this.friction;
  } else {
    this.yspeed -= this.friction;
  }
}

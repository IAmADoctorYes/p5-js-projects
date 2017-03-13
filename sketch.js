var live = [];
var dead = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  for(var i = 0; i < 100; i++) {
    live.push(new particle(random(width),random(height),1));
  }
  dead.push(new particle(width/2,height/2,0))
}

function draw() {
  background(255);
  if (live.length > 0) {
    for(var i = 0; i < live.length; i++) {
      live[i].update(i);
      live[i].show();
    }
  }
  for(var i = 0; i < dead.length ; i++) {
    dead[i].show();
  }
}

function particle(x,y,l) {
  this.x = x;
  this.y = y;
  this.l = l;
  this.speed = 5;
  this.c = 200;
  this.s =50;
}

particle.prototype.update = function(dex) {
  this.speed *= this.l;
  this.x += random(-this.speed, this.speed)
  this.y += random(-this.speed, this.speed)
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
  for (var i = 0; i < dead.length; i++) {
    if (dist(dead[i].x,dead[i].y,this.x,this.y) < this.s && dist(dead[i].x,dead[i].y,this.x,this.y) > 0) {
        dead.push(new particle(this.x,this.y,0));
        live.splice(dex,1);
    }
  }
}

particle.prototype.show = function() {
  this.c *= this.l;
  strokeWeight(this.s);
  stroke(this.c);
  point(this.x,this.y);
}

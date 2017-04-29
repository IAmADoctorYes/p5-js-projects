var rain = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 1000; i++) {
    rain.push(new droplet);
  }
}

function draw() {
  background(0,50);
  rain.map(function(curr,i) {
    curr.update(i);
  })
}

function droplet() {
  this.x = random(width);
  this.z = random(10,100);
  this.height = this.z * 0.5;
  this.width = this.z * 0.1;
  this.y = -this.height;
  this.speed = this.z * 0.1
}

droplet.prototype.update = function(index) {
  if (this.y >= height) {
    rain.splice(index,1);
    rain.push(new droplet);
  } else {
    this.y += this.speed;
    noStroke()
    fill(118,184,245);
    rect(this.x,this.y,this.width,this.height);
  }
}

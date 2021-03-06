var times = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
}

function draw() {
  background(255);
  drawCircle(width/2,height/2,width,width);
  times = 0;
}

function drawCircle(x,y,radius) {
  fill(times % 355,90,75)
  noStroke();
  ellipse(x,y,radius,radius);
  if (radius > 25) {
    drawCircle(x-radius/2,y,radius/2,radius/2);
    drawCircle(x+radius/2,y,radius/2,radius/2);
    drawCircle(x,y-radius/2,radius/2,radius/2);
    drawCircle(x,y+radius/2,radius/2,radius/2);
    times += 355 / frameCount;
  }
}

var xoff=0.0;
var yoff=0.0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(frameCount/2 % 355,100,100)
  fill(frameCount % 355,100,100)
  beginShape();
  xoff=0;
  vertex(0,0);
  for(var x=0; x<width; x+=1) {
    vertex(x,noise(xoff,yoff)*height);
    xoff += 0.001;
  }
  yoff += 0.001;
  vertex(width,0);
  endShape(CLOSE);
}

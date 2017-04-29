function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  stroke(255,5);
  line(frameCount%width,height,frameCount%width,map(noise(frameCount*0.1,frameCount*0.001),0,1,height,0));
}

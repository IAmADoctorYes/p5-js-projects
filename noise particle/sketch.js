var osc1;
var osc2;

var playing = true;

function setup() {
  createCanvas(1600,900);
  background(0)
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc1.setType('sine');
  osc2.setType('sine');
  osc1.freq(240);
  osc2.freq(240);
  osc1.amp(0.5, 0.05);
  osc2.amp(0.5, 0.05);
  osc1.start();
  osc2.start();
}

var xoff = 0.0;
var yoff = 0.0;

function draw() {
  background(0,0,0,25)
  fill(255)
  beginShape()
  for (var i = 0; i<width; i+=20) {
    stroke(255)
    vertex(noise(xoff,yoff)*mouseX,noise(yoff,xoff)*mouseY)
    xoff+=0.00005
  }
  osc1.freq(noise(xoff,yoff)*mouseX)
  osc2.freq(noise(yoff,xoff)*mouseY)
  yoff+=0.0005
  endShape(CLOSE)
}
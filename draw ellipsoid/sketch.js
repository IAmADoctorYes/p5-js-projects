var radius;
var angle;
var resolution;
var weight = 1;
var xoff = 0.0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  angle = 0;
  resolution = 0.01
}

/*
resolution = 11 = square
resolution = 21 = triangle
*/

function draw() {
  radius = map(noise(xoff),0,1,0,height/2-weight)
  stroke(255,5)
  strokeWeight(weight)
  line(cos(angle)*radius+(width/2),sin(angle)*radius+(height/2),width/2,height/2);
  angle += resolution
  xoff += resolution
}

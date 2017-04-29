var maxdistance;
var size;

function setup() {
  createCanvas(1600,900)
  background(0)
  noStroke()
  maxdistance = dist(0,0,width,height)
}

function draw() {
  background(0)
  for(var x = 0; x <= width+3; x+=30) {
    for(var y = 0; y <= height+3; y+=30) {
      size = sqrt((mouseX-x)*(mouseX-x)+(mouseY-y)*(mouseY-y))/maxdistance * 500;
      fill(map(dist(x,y,mouseX,mouseY),0,maxdistance,100,255),255,map(dist(x,y,mouseX,mouseY),0,maxdistance,100,255))
      ellipse(x,y,size,size)
    }
  }
}
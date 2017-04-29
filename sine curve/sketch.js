function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
}
var ts=5;
var res=0.01
function draw() {
  background(0,0,0,5)
  stroke(255,0,0,100)
  line((sin(frameCount*res)*sin(frameCount*res))*width,
  (sin(frameCount)*sin(frameCount))*height,
  (sin((frameCount+ts/5)*res)*sin(frameCount+ts/5)*res)*width,
  (sin(frameCount+ts/5)*sin(frameCount+ts/5))*height)

  stroke(0,255,0,100)
  line((cos(frameCount*res)*cos(frameCount*res))*width,
  (cos(frameCount)*cos(frameCount))*height,
  (cos((frameCount+ts)*res)*cos(frameCount+ts)*res)*width,
  (cos(frameCount+ts)*cos(frameCount+ts))*height)

  stroke(0,0,255,100)
  line((tan(frameCount*res)*tan(frameCount*res))*width,
  (tan(frameCount)*tan(frameCount))*900,
  (tan((frameCount+ts)*res)*tan(frameCount+ts)*res)*width,
  (tan(frameCount+ts)*tan(frameCount+ts))*900)
}

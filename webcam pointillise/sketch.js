function setup() {
  var img = createCapture(VIDEO);
  createCanvas(720, 400);
  background(255);
  img.hide();
}

function draw() {
  img.loadPixels();
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, 20, 20);
}

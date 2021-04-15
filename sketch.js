var c1, c2, c3;

function setup() {
  createCanvas(displayWidth, displayHeight);
  c1 = color(201, 147, 237);
  c2 = color(147, 183, 237);
  
  setGradient(c1, c2);
}

function draw() {
 stroke(mouseX-200,140,250);
 ellipse(mouseX, mouseY, 40, 40);
  
}





function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  r=map(mouseX, 0,800,  0,255)
  b=map(mouseY, 0,400,  0,255)
  background(r,0,b)
  
}
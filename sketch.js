console.log("I believe I can do this!");

function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(20);
  fill(mouseX, mouseY, 150);
  circle(mouseX, mouseY, 20);
}

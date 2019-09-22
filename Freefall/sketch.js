let ball;

function setup() {
  createCanvas(400, 400);
  ball = new Ball();
}

function draw() {
  translate(width / 2, 0);
  background(220);
  ball.display();
  ball.update();
}
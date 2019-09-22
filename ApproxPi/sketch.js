let inCircle = 0;
let total = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 0; i <= 100; i++) {

    const x = random(- width / 2, width / 2);
    const y = random(- width / 2, height / 2);
    total++;
    if (dist(x, y, 0, 0) < width / 2) {
      stroke(0, 255, 0);
      inCircle++;
    } else {
      stroke(0, 0, 255);
    }

    point(x, y);
  }

  console.log(4 * (inCircle / total));
}
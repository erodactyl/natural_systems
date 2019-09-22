let walkers = [];

function setup() {
  createCanvas(400, 400);
  walkers = Array(1000).fill(null).map(() => new Walker);
}

function draw() {
  background(220);
  walkers.forEach(walker => walk(walker));
}

function walk(w) {
  w.step();
  w.show();
}
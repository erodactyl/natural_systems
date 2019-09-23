let movers;

function setup() {
  createCanvas(400, 400);
  movers = new Array(10).fill(null).map(() => {
    return new Mover(random(width), random(height));
  });
}

function draw() {
  background(220);
  movers.forEach(m => m.display());
  movers.forEach(m => m.update());
}
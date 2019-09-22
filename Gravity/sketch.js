let planets;

function setup() {
  createCanvas(400, 400, WEBGL);
  planets = new Array(5).fill(null).map((_, idx) => new Planet(idx + 1));
}

function draw() {
  background(220);
  planets.forEach(p => p.display());
  planets.forEach((p, idx) => {
    planets.forEach((_p, _idx) => {
      if (idx !== _idx) {
        p.interact(_p);
      }
    });
  });
  planets.forEach(p => p.update());
}
class Planet {
  constructor(mass) {
    this.pos = createVector(
      Math.random() * width - width / 2,
      Math.random() * height - height / 2,
      Math.random() * 200,
    );
    this.vel = createVector(0, 0, 0);
    this.acc = createVector(0, 0, 0);
    this.mass = mass;
    this.r = mass * 10;
  }

  interact(_planet) {
    const force = p5.Vector.sub(_planet.pos, this.pos);
    let dist = force.mag();
    if (dist < this.r + _planet.r) {
      dist = this.r + _planet.r;
    }
    force.normalize();
    const strength = this.mass * _planet.mass * 10 / (pow(dist, 2));
    force.mult(strength);
    this.applyForce(force);
  }

  applyForce(f) {
    let accChange = p5.Vector.div(f, this.mass);
    this.acc.add(accChange);
  }

  update() {
    this.vel = this.vel.add(this.acc);
    this.pos = this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(this.mass * 10);
    pop();
  }
}

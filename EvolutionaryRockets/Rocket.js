const crossover = (rocket1, rocket2) => {
  const thrusters = [];
  for (let i = 0; i <= rocket1.thrusters.length; i++) {
    const shouldMutate = random() < mutationCoefficient;
    if (shouldMutate) {
      thrusters.push(createVector(random(-0.1, 0.1), random(-0.1, 0.1)));
      console.warn('mutating')
    } else if (Math.random() < 0.5) {
      thrusters.push(rocket1.thrusters[i]);
    } else {
      thrusters.push(rocket2.thrusters[i]);
    }
  }
  return new Rocket(thrusters);
}

class Rocket {
  constructor(thrusters) {
    this.loc = createVector(width / 2, height);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.thrusters = thrusters;
  }

  applyThruster(index) {
    this.acc.add(this.thrusters[index]);
  }

  finalDistance() {
    return this.loc.sub(pointPos).mag();
  }

  update(index) {
    this.applyThruster(index);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    circle(this.loc.x, this.loc.y, 5);
  }
}

const createRandomRocket = () => {
  const thrusters = new Array(numberOfThrusts).fill(null)
    .map(() => {
      return createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    });
  return new Rocket(thrusters);
}
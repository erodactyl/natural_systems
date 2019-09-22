class Walker {
  constructor(r = 10, stepSize = 5) {
    this.x = width / 2;
    this.y = height / 2;
    this.r = r;
    this.stepSize = stepSize;
  }

  show() {
    circle(this.x, this.y, this.r);
  }

  step() {
    this.x = this.x + getRandomStep();
    this.y = this.y + getRandomStep();
  }
}

const getRandomStep = () => {
  return Math.floor(3 * Math.random()) - 1;
}
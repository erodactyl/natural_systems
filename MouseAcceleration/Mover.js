class Mover {
  constructor(x, y) {
    this.location = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }
  
  update() {
    this.accelerate();
    this.velocity.add(this.acceleration).limit(4);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
  
  accelerate() {
    const mouseLocation = createVector(mouseX, mouseY);
    const acceleration = mouseLocation.sub(this.location);
    acceleration.setMag(0.1);
    this.acceleration.add(acceleration);
  }
  
  display() {
    circle(this.location.x, this.location.y, 15);
  }
}
class Ball {
  constructor(){
    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.2);
  }
  
  update() {
    this.vel = this.vel.add(this.acc);
    this.pos = this.pos.add(this.vel);
    this.checkCollision();
  }
  
  checkCollision() {
    if (this.pos.y + 15 > height) {
      this.vel.y = - this.vel.y * 0.9;
      this.pos.y = (height - 15);
    }
  }
  
  display() {
    circle(this.pos.x, this.pos.y, 30);
  }
}
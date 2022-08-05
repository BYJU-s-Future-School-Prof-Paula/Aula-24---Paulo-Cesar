class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);

    this.tragetory = [];
  }

  shoot() {
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }

  display() 
  { 
    var pos = this.body.position;

    if(this.body.velocity.x > 0){
      var position = [pos.x, pos.y];
      this.tragetory.push(position);
    }


    push();
    imageMode(CENTER);

    for(var i=0; i<this.tragetory.length; i++){
      image(this.image, this.tragetory[i][0], this.tragetory[i][1], 5, 5);
    }

    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}

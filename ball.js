class Ball {
    constructor(x,y,r) {
      var options = {
          
          'frictionAir':0.005,
          'density':1
      }
      this.body = Bodies.circle(x, y, r , options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      stroke ("white")
      strokeWeight(4)
      fill("red");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
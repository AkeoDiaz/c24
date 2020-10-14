class Pig {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 30, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke(0,100,0);
      strokeWeight(10);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
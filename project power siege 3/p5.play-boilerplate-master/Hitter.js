class Hitter {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
        
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.color = color(random(0,255),random(0,255),random(0,255));
    //this.Visiblity=255;
    World.add(world, this.body);
  }
  display(){
  
    var pos =this.body.position;
    rectMode(CENTER);
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
  }
}

class Ball {
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.2
        }
        this.radius = radius
        this.body = Bodies.circle(x, y,radius , options);
        this.image=loadImage("sprites/paper.png")
        World.add(world, this.body);
      }
     display(){
        var pos =this.body.position;
      
        
        
        
        imageMode(CENTER);
        fill("red");
        image(this.image,pos.x,pos.y, this.radius, this.radius);
        
          };
    }



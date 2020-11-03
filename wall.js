class Wall {
constructor(x,y,width,height){
    
    var options = {
        isStatic: true
    }

this.wallthickness=20
    this.bottom=Bodies.rectangle(x,y,width,this.wallthickness,options)
    this.left=Bodies.rectangle(x-width/2,y-height/2+20,this.wallthickness,height,options)
    this.right=Bodies.rectangle(x+width/2,y-height/2+20,this.wallthickness,height,options)
    this.height=height
    this.width=width

    this.image=loadImage("sprites/dustbingreen.png")

    World.add(world,this.bottom)
    World.add(world,this.left)
    World.add(world,this.right)

}
display(){
    var pos =this.bottom.position;
    var pos1 =this.left.position;
    var pos2 =this.right.position;
    
    rectMode(CENTER);
    fill("white");
    rect(pos1.x, pos1.y,this.wallthickness, this.height);
    rectMode(CENTER);
    rect(pos2.x, pos2.y, this.wallthickness, this.height);
    imageMode(CENTER)
    image(this.image,pos.x,pos.y-80,this.width,this.height)
}


}
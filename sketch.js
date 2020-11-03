
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  //ballImage=loadImage("sprites/peper.png")
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground1 = new Ground(390,390,2000,20)
  wall1 = new Wall(1200,350,180,200)
  

  ball1 = new Ball(200,350,21)
	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
 
  ball1.display();
 ground1.display();
  wall1.display();
  
  
  //drawSprites();
 
}




function keyPressed(){	
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:103,y:-90})
	}
	
}


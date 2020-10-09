var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5, roof;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,600,50);
	bobObj1 = new Bob(100,600,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObj1.display();
  drawSprites();
 
}




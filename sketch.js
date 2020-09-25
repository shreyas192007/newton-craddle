
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);



	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;

	roof1=new Roof(width/2,height/4,width/7,20);
	
	rope1=new Rope(bob1.body,roof1.body,-bobDiameter*2,0);

	bob1=new Bob(width/2-bobDiameter*2,height/4+500,bobDiameter);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 roof1.display();
 rope1.display();
 bob1.display();

  drawSprites();

  
 
}




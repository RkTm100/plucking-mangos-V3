
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var boy, boyImage,ground1,tree1;

function preload()
{
	boyImage=loadImage("image/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	boy=createSprite(100,500,20,20)
boy.addImage("boy",boyImage)
	boy.scale=0.15;

   ground1=new Ground(width/2,60,width,20)
   tree1=new tree(100,200,30,40)

	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  ground1.display();
 drawSprites();
}




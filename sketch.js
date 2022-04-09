
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, left, right;

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(20,30,40,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,670,width,20);	
  
}


function draw() {
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,40);
  
  ground.display();
}




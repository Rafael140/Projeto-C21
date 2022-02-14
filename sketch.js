
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ball, leftSide, rightSide, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {	
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200,50,20,ball_options);
	World.add(world, ball)

	ground = new Ground( width/2, 750, width, 20)
	leftSide = new Ground(750, 700, 20, 120);
	rightSide = new Ground(900, 700,20, 120);

	Engine.run(engine);
  
}


function draw() {
  
  background(155);
  
  ground.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x, ball.position.y, 20, 20)

  
}

function keyPressed() {

	if(keyCode === UP_ARROW){

		Body.applyForce(ball, ball.position,{x:50, y:-100 } )


	}
}
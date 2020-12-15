var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bottomLine,side1,side2;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 bottomLine=createSprite(400,650,200,20);
	bottomLine.shapeColor=color(255,0,0);
	World.add(world,bottomLine);

	side1=createSprite(300,610,20,100);
	side1.shapeColor=color(255,0,0);
	World.add(world,side1);
	
	side2=createSprite(500,610,20,100);
	side2.shapeColor=color(255,0,0);
	World.add(world, side2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	console.log(keyCode);
	 
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
  }
}




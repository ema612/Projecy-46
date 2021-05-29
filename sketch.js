const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trackImage;
var gameState = "play";
var obstaclesGroup;
var score = 0;

function preload()
{
hurdle = loadImage("hurdle.png");
trackImage = loadImage("track.jpg");
bobImage = loadAnimation("bob2.png","Horse.png")
robImage = loadAnimation("Horse 1.png","Horse 2.png");
}

function setup() {
	createCanvas(displayWidth,displayHeight);
	
	ground = createSprite(200,180,2400,20);
	ground.addImage("ground",trackImage);
	ground.x = ground.width /2;
	ground.scale = 4.5;
	ground.velocityX = -2

	bob = createSprite(200,550,50,50);
  bob.addAnimation("running", bobImage);
  //bob.addAnimation("collided",bob_collided);
 bob.scale = 0.5;

 rob = createSprite(200,400,50,50);
 rob.addAnimation("running", robImage);
 //rob.addAnimation("collided",rob_collided);
rob.scale = 0.5;

 invisibleGround = createSprite(200,560,400,10);
 invisibleGround.visible = false;

 invisibleGround1 = createSprite(200,410,400,10);
 invisibleGround1.visible = false;

//rob = new Bob(200,500,50,50,);
//rob = new Rob(200,350,50,50);
	//Engine.run(engine);
obstaclesGroup = new Group();
}

function draw() {
  background(180);
  

  if(gameState==="play"){
	score = score + Math.round(getFrameRate()/60);
    if(keyDown("space")) {
      bob.velocityY = -10;
    }

    bob.velocityY = bob.velocityY + 0.8

	if (ground.x < 0){
		ground.x = ground.width/2;
	  }
	 
	  obstacles();
	//   if(obstaclesGroup.isTouching(bob)){
	// 	  gameState === "end";
	//   }
  }
  else{

  }
  
bob.collide(invisibleGround);
rob.collide(invisibleGround1);
  drawSprites(); 

  text("Score: "+ score, 500,50);

 // bob.display(); 
 // rob.display();
}

function obstacles() {
if(frameCount%200===0){
	var obstacle = createSprite(1100,520,50,50);
	obstacle.addImage("hurdle",hurdle);
	obstacle.y = Math.round(random(350,550));
	obstacle.velocityX = -2 
	obstacle.lifetime = 200;
	obstacle.scale = 1;
	obstaclesGroup.add(obstacle);
}
}




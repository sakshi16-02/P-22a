const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var fairy;

function preload()
{
   back=loadImage("images/starnight.png");
   //fairyImg=loadAnimation("images/fairy1.png");
   fairyAn=loadAnimation("images/fairy1.png","images/fairy2.png");
   starImg=loadImage("images/star.png");
   fairyVoice=loadSound("sound/JoyMusic.mp3");

}

function setup() {
  createCanvas(800, 750);
  
  fairy=createSprite(100,500,20,20);
  fairy.addAnimation("f",fairyAn);
  fairy.scale=0.2;

  star=createSprite(650,30,20,20);
  star.addImage(starImg);
  star.scale=0.2;

  engine=Engine.create();
  world=engine.world;

  var options={
    restitution:0.5,
    isStatic:true
  }

  starBody=Bodies.circle(650,30,5,options);
  World.add(world,starBody);


}


function draw() {
  background(back);

  Engine.update(engine);

  fairyVoice.play();

  star.x=starBody.position.x;
  star.y=starBody.position.y;
  
  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x + 20;
}

 if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x - 20;
}

if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(starBody,false); 
}
}

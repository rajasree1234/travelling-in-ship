var ship,shipImage,sea,seaImage,edges;

function preload(){
  seaImage=loadImage("sea.png")

shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);

  sea=createSprite(620,270,100,20);
  sea.addImage("sea",seaImage);
sea.scale=0.38;

  ship=createSprite(200,270,5,5);
  ship.addAnimation("floating",shipImage);
 ship.scale=0.2;

 edges=createEdgeSprites();

}

function draw() {
  background("white");

  if(sea.x<0){
    sea.x=width/2;
  }
  
  sea.velocityX=-5
  
 drawSprites();
}
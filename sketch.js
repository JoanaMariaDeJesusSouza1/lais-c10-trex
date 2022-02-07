var trex, trexRunning;
var edges;
function preload(){
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png"); 

}

function setup(){
  createCanvas(600,200)
  edges= createEdgeSprites();
  //crie um sprite de trex
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running", trexRunning);
 trex.scale= 0.5;
}

function draw(){
  background("pink");

  if(keyDown("space")){
    trex.velocityY =-10;
  }
  gravity();
  drawSprites();

}
function gravity(){
  trex.velocityY += 0.5;
  trex.collide(edges[3 ]);
}

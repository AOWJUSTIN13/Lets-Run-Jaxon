var path 
var pathImage
var runner
var runnerImage
var left1
var right1
function preload(){
  //pre-load images
  pathImage=loadAnimation("path.png")
  runnerImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,20,20)
  path.addAnimation("path",pathImage)
  path.scale=1.2
path.velocityY=5
runner=createSprite(180,335,20,20)
runner.addAnimation("runner",runnerImage)
runner.scale=0.1
left1=createSprite(20,300,20,1600)
left1.visible=false
right1=createSprite(370,300,20,1600)
right1.visible=false
}


function draw() {
  background(0);
  runner.x=mouseX
  runner.collide(left1)
  runner.collide(right1)
path.velocityY=5
  if(path.y>400)
  {
   path.y=path.height/4
  }
   drawSprites()
   text(mouseX+","+mouseY,mouseX,mouseY)
  }

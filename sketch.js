var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orange, redLeaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
spawnApples()
spawnOrange()
spawnRed()
rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
function spawnOrange (){
  if (frameCount%70===0){
    orange=createSprite(50,20,10,10)
    orange.x=Math.round(random(10,380))
    orange.velocityY=+3
    orange.addImage("leaf",orangeImg)
    orange.scale=0.1
  }
}

function spawnRed (){
  if (frameCount%80===0){
    redLeaf=createSprite(50,20,10,10)
    redLeaf.x=Math.round(random(10,380))
    redLeaf.velocityY=+3
    redLeaf.addImage("leaf",redImg)
    redLeaf.scale=0.1
  }
}
function spawnApples(){
  if(frameCount % 50 === 0){
    apple = createSprite(Math.round(random(20,350)),10,10,10)
    apple.addImage("apples",appleImg);
    apple.velocityY =3;
    apple.scale =0.1
  }
}

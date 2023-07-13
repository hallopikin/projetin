var path,boy, borda1,borda2;
var pathImg,boyImg;
var i;

function preload(){
 pathImg= loadImage ('path.png') 
 boyImg =loadAnimation ('Runner-2.png','Runner-1.png') 
 
}

function setup(){
  
  createCanvas(400,400);
  path=createSprite(200,400)
  path.addImage(pathImg)
 path.velocityY=3
 path.scale=1.2;
boy=createSprite(200,100)
boy.addAnimation('correndo',boyImg)
boy.scale=0.08;
  

borda1=createSprite(0,410,100,800);
borda1.visible=false


borda2=createSprite(410,0,100,800);
borda2.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.y=World.mouseY
  
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
boy.collide(borda1)
boy.collide(borda2)
  
  
  if(path.y > 400 ){
    path.y = height/2;
  }
 
  drawSprites();
}

var bgImg, bg;
var bananaImg, banana, bananasGroup;
var monkey, monkeyImg;
var gameState = "play"

function preload(){

  bananaImg = loadImage("banana.png");
  monkeyImg = loadImage("monkey.png");
  bgImg = loadImage("bg.jpeg");
}

function setup(){
  createCanvas(600,600);
  //spookySound.loop();
  bg = createSprite(300,300);
  bg.addImage("tower",towerImg);
  bg.velocityY = 1;
  
  
  bananasGroup = new Group();

  
  monkey = createSprite(200,200,50,50);
  monkey.scale = 0.3;
  monkey.addImage("monkey", monkeyImg);
}

function draw(){
  background(0);
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      monkey.x = monkey.x - 3;
    }
    
    if(keyDown("right_arrow")){
      monkey.x = monkey.x + 3;
    }
    
    if(keyDown("space")){
      monkey.velocityY = -1;
    }
    
    monkey.velocityY = monkey.velocityY + 0.1
    
    if(bg.y > 400){
      bg.y = 300
    }
    spawnBananas();

    
    
    
    
    drawSprites();
  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }

}

function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var banana = createSprite(200, -50);
    
    
    banana.x = Math.round(random(120,400));
    
    
    banana.addImage(bananaImg);
    
    
    banana.velocityY = 1;
    
    
    monkey.depth = banana.depth;
    monkey.depth +=1;
   
    //assign lifetime to the variable
    banana.lifetime = 800;
   

    
    //add each door to the group
    bananaGroup.add(banana);
 
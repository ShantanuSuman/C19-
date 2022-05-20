var path,mainCar,redCar,blueCar,yellowCar,GameOver
var pathImg,mainCarImg,redCarImg,blueCarImg,yellowCarImg,GameOverImg
var redCarG,mainCarG,yellowCarG


var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadAnimation("RoadImage.png");
  mainCarImg = loadAnimation("mainCar.png");
  redCarImg = loadImage("RedCar.png");
  yellowCarImg = loadImage("yellowCar.png");
  blueCarImg = loadImage("blueCar.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
createCanvas(windowWidth,windowHeight);

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;

if(path.y > height ){
    path.y = height/2;
  }

mainCar = createSprite(width/2,height-20,20,20);
mainCar.addAnimation("mainCar.png",mainCarImg);
mainCar.scale=0.08;

redCar=new Group();
blueCar=new Group();
yellowCar=new Group();


}

function draw() {

  if(gameState===PLAY){
  background(0);
  mainCar.x = World.mouseX;
  
  edges= createEdgeSprites();
  mainCar.collide(edges);
  
  if(path.y > height ){
       path.y = height/2;
     }
  
    createredCar();
    createblueCar();
    createyellowCar();

    if (redCar.isTouching(mainCar)) {
      mainCar.destroy();
      gameState=END
    }
    else if (blueCar.isTouching(mainCar)) {
      mainCar.destroy();
      gameState=END
      
    }else if(yellowCar.isTouching(mainCar)) {
      main.destroy();
      gameState=END;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        mainCar.addImage("mainCar",GameOverImg);
        mainCar.x=width/2;
        mainCar.y=height/2;
        
        
        redCarG.destroyEach();
        blueCarG.destroyEach();
        yellowCarG.destroyEach();
        
        
        redCarG.setVelocityYEach(0);
        blueCarG.setVelocityYEach(0);
        yellowCarG.setVelocityYEach(0);
        
     
    }
  }
  
  drawSprites();
  }

}

function createredCar() {
  if (World.frameCount % 200 == 0) {
  var redCar = createSprite(Math.round(random(50, width-50),40, 10, 10));
  redCar.addImage(redCarImg);
  redCar.scale=0.12;
  redCar.velocityY = 5;
  redCar.lifetime = 200;
  redCarG.add(redCar);
  }
}

function createyellowCar() {
  if (World.frameCount % 320 == 0) {
  var yellowCar = createSprite(Math.round(random(50, width-50),40, 10, 10));
  yellowCar.addImage(yellowCarImg);
  yellowCar.scale=0.12;
  yellowCar.velocityY = 5;
  yellowCar.lifetime = 200;
  yellowCarG.add(yellowCar);
}
}

function createblueCar() {
  if (World.frameCount % 410 == 0) {
  var blueCar = createSprite(Math.round(random(50, width-50),40, 10, 10));
  blueCar.addImage(blueCarImg);
  blueCar.scale=0.12;
  blueCar.velocityY = 5;
  blueCar.lifetime = 200;
  blueCarG.add(blueCar);
  }
}
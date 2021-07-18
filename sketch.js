var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,500);
  ghost.addImage(ghostImg);
  ghost.scale = 0.3;

  doorsGroup = new Group();
  climbersGroup = new Group();
}

function draw() {
  background(200);

  if(keyDown("space")){
    ghost.velocityY = -4;
  }
  ghost.velocityY = ghost.velocityY + 0.4;

  if(keyDown("right")){
    ghost.x = ghost.x +3;
  }

  if(keyDown("left")){
    ghost.x = ghost.x -3;
  }

  if(tower.y > 400){
      tower.y = 300
    }

  if(ghost.isTouching(climbersGroup)){
    ghost.velocityY = 0;
    gameOver();
  }

    spawnDoors();
    drawSprites();
}

function spawnDoors(){
  if(frameCount % 240 === 0){
  door = createSprite(Math.round(random(100,500)),-50);
  door.addImage(doorImg);
  door.velocityY = 1;
  door.lifetime = 600;
  ghost.depth = door.depth +1;
  doorsGroup.add(door);

  climber = createSprite(0,0);
  climber.x = door.x;
  climber.y = climber.y;
  climber.velocityY = door.velocityY;
  climber.addImage(climberImg);
  climber.lifetime = door.lifetime;
  climbersGroup.add(climber);
  }
}

function gameOver(){
  textSize(20);
  fill("red");
  text("Game Over!",300,300);
  console.log("working");
}
var wall;

var bullet;
var deformation;
var thickness;
var gamestate = "start";
function setup() {
  createCanvas(1200,400);
  var back = createSprite(600,200,1200,400);
back.shapeColor = "black";
  wall = createSprite(1100, 200, 60, height/2);
  bullet = createSprite(50, 200, 5, 10);
  var weight = 300;
  var speed= 50;
}

function draw() {

  if(gamestate === "redo"|| gamestate === "start"){
    speed = random(223,321);
    weight = random(30,52);
    speed = round(speed);
    weight = round(weight);
    thickness = random(22,83);

    wall.width = thickness;

    bullet.velocityX = speed;
    bullet.shapeColor = "white";

  }
  if(keyDown("r")&& gamestate === "crashed"){
    gamestate = "redo";
    bullet.x = 50;
  }
  background(255,255,255);  

  if(bullet.x > wall.x){
    deformation = 0.5 * weight *speed*speed/(thickness*thickness*thickness);
    gamestate = "crashed";
    bullet.velocityX = 0;
    if(deformation > 10){
      wall.shapeColor = "red";
      fill(255,255,255);
      text("Ineffective",300,200);
    }
    if(deformation < 10){
      wall.shapeColor = "green";
      fill(255,255,255);
      text("Effective",300,200);
    }
  }
  
  
  
  drawSprites();
  var damage = round(deformation);
  text("Bullet Speed: "+ speed + "   " + "Bullet Weight: " + weight + "   " + "Wall Thickness: " + thickness + "   " +"Damage: " + damage,20,20);
  if(deformation > 10){
    textSize(50);
    fill(255,255,255);
    text("Ineffective Wall",300,200);
  }
  if(deformation < 10){
    textSize(50);
    fill(255,255,255);
    text("Effective Wall",300,200);
  }
}
//Call and wall and speed and weight sprites
var bullet, wall;
var speed, weight, thickness;
var damage;
var wallLeftEdge, bulletRightEdge;

//Setup function
function setup() {
  //Creating the canvas
  createCanvas(1600, 400);

  //Giving values to speed and weight
  speed = random(50,100);
  weight = random(30,52);

  //bullet
  car = createSprite(50, 100, 50, 10);
  car.shapeColor = "white";
  car.velocityX = speed;

  //thickness
  thickness=random(22,83);

  //wall
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  //Boundaries
  var boundary1 = createSprite(0, 50, 4000, 10);
  var boundary2 = createSprite(0, 350, 4000, 10);
  boundary1.shapeColor = "white";
  boundary2.shapeColor = "white";
}



function draw() {
  //Background
  background(0, 0, 0);

   

  //drawsprites();
  drawSprites();
}  

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge= wall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }  
    return false;
}

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness )

 if(damage>10){
  bullet.shapeColor=color(255,0,0);
 }
 if(damage<10){
  bullet.shapeColor=color(0,128,0);
 }
}


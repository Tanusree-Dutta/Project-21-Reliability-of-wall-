//var fixedRect,movingRect;

//creating a variable for bullet
var bullet;

//creating a variable for wall
var wall;

//creating a variable for speed
var speed;

//creating a variable for weight 
var weight;

//creating a variabl for thickness
var thickness;

function setup() {
    //creating a canvas
    createCanvas(1600,400);

    // fixedRect= createSprite(200, 200, 50, 80);
    // movingRect= createSprite(400, 200, 80, 30);

    //creating the bullet
    bullet=createSprite(50,200,90,20);

    //giving a colour to the bullet
    bullet.shapeColor=color(225);

    //creating a wall
    wall=createSprite(1200,200,thickness,height/2);

    //giving a colour to wall
    wall.shapeColor=color(80,80,80);

    //setting the value of speed as random
    speed=random(223,321);

    //setting the value of weight as random
    weight=random(30,52);

    // setting the value of thr thickness as random
    thickness=random(22,83);

}

function draw() {

  //giving a colour to background
  background("black");  

  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;

  //setting the velocity of bullet as random
  bullet.velocityX=speed;

  //to test the reliability of wall
  if(hasCollided(bullet,wall))
  {
  bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10)
    {
    wall.shapeColor=color(255,0,0);
    }

      if(damage<10)
      {
      wall.shapeColor=color(0,225,0);
      }

  }

  //to test the relaibility of the bullet
  /*if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  bullet.velocityX=0;

  var deformation=0.5 * weight * speed * speed/22500;

    if (deformation>180)
    {
    bullet.shapeColor=color(255,0,0);
    }

      if(deformation<180 && deformation>100)
      {
      bullet.shapeColor=color(230,230,0);
      }
 
        if(deformation<100)
        {
        bullet.shapeColor=color(0,225,0);
        }

   }*/
  /*if(is_touching()){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    
  }*/


  //functions to make the sprites visible
  drawSprites();
}

//collided function
function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
  return true
  }
  return false;
}
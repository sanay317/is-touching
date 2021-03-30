//creating the variable
var movingrect ,fixedrect;
function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(200, 200, 50, 80);
 movingrect= createSprite(400, 200, 80, 30);
 //fixing the color
 fixedrect.shapeColor="blue";
 movingrect.shapeColor="blue";
}
//making the algorithim
function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
  && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
  && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2  )
 //changing the colors back to normal
  {
movingrect.shapeColor="red";
fixedrect.shapeColor="red";
  }
else
{
  fixedrect.shapeColor="blue";
  movingrect.shapeColor="blue"; 
}

  drawSprites();
  
}
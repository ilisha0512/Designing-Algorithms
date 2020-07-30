var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite (200,200,50,50);
  fixedrect.shapeColor = ("RoyalBlue");
  movingrect.shapeColor = ("RoyalBlue");
  movingrect.velocityX = 3;
  movingrect.velocityY = 3;
  fixedrect.velocityX = 3;
  fixedrect.velocityY = 3;

}

function draw() {
  background("DeepPink");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
     fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
     movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
     fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2  ) {
    fixedrect.shapeColor = ("Aqua");
    movingrect.shapeColor = ("Lime");
  }

  else {
    movingrect.shapeColor = ("RoyalBlue")
    fixedrect.shapeColor = ("RoyalBlue")
  }

  if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2   ) {
    movingrect.velocityX = movingrect.velocityX * (-1);
    fixedrect.velocityX = fixedrect.velocityX * (-1);
 }

  if ( movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2) {
      movingrect.velocityY = movingrect.velocityY * (-1);
      fixedrect.velocityY = fixedrect.velocityY * (-1);
    }

  drawSprites();
}
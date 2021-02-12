

var movingRect,fixedRect;
function setup() {
  createCanvas(400,400);
 movingRect= createSprite(300, 200, 50, 70);
 movingRect.shapeColor="red";
 movingRect.debug=true;
 fixedRect=createSprite(200,200,50,50);
 fixedRect.shapeColor="red";
 fixedRect.debug=true;
}

function draw() {

  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<(movingRect.width/2+fixedRect.width/2) &&
  fixedRect.x-movingRect.x<(movingRect.width/2+fixedRect.width/2)&&
  fixedRect.y-movingRect.y<(movingRect.height/2+fixedRect.height/2)&&
  movingRect.y-fixedRect.y<(movingRect.height/2+fixedRect.height/2))
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  drawSprites();
}

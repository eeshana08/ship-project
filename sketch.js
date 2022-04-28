var box

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW)){
    box.y-=5
  }
  drawSprites()

}





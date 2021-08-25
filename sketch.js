function preload() {
gymImg=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eatImg=loadAnimation("eat1.png","eat2.png")
bg=loadImage("iss.png")
brushImg=loadAnimation("brush.png")
drinkImg=loadAnimation("drink1.png","drink2.png")
bathImg=loadAnimation("bath1.png","bath2.png")
moveImg=loadAnimation("move.png","move1.png")
sleepImg=loadAnimation("sleep.png")
}
function setup() {
  createCanvas(400, 460);
  astronaut=createSprite(300,230)
  astronaut.addAnimation("sleeping",sleepImg)
  astronaut.scale=0.1
  astronaut.addAnimation("brushing",brushImg)
  astronaut.addAnimation("eating",eatImg)
  astronaut.addAnimation("gymming",gymImg)
  astronaut.addAnimation("bathing",bathImg)
  astronaut.addAnimation("moving",moveImg)
}
function draw() {
background(bg);
  createEdgeSprites();
  if(keyDown("UP_ARROW")){
    //astronaut.addAnimation("brushing",brushImg)
    astronaut.changeAnimation("brushing",brushImg)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
   // astronaut.addAnimation("gymming",gymImg)
    astronaut.changeAnimation("gymming",gymImg)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
  //  astronaut.addAnimation("bathing",bathImg)
    astronaut.changeAnimation("bathing",bathImg)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
  //  astronaut.addAnimation("eating",eatImg)
    astronaut.changeAnimation("eating",eatImg)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("m")){
    console.log("Inside moving")
   // astronaut.addAnimation("moving",moveImg)
    astronaut.changeAnimation("moving",moveImg)
    astronaut.y=300
   astronaut.velocityX=5
    astronaut.velocityY=5
  }
  drawSprites();
  fill(255)
  textSize(20)
  text("Instructions:",10,100)

    fill(255)
  textSize(20)
  text("Up Arrow = Brushing",10,120)

  fill(255)
  textSize(20)
  text("Down Arrow = Gyminng",10,140)

  fill(255)
  textSize(20)
  text("Left Arrow = Eating",10,160)

  fill(255)
  textSize(20)
  text("Right Arrow = Bathing",10,180)

  fill(255)
  textSize(20)
  text("m key = Moving",10,200)
}
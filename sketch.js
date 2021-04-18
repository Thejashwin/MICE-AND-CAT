var cat ,garden;
var background1;

function preload() {
    //load the images here
    catImg = loadImage("cat1.png");   
    catRunningImg = loadAnimation("cat2.png","cat3.png");
    catSadImg = loadImage("cat4.png");
    gardenImg = loadImage("garden.png");
    mouseStandingImg = loadImage("mouse1.png");
    mouseTeasingImg = loadAnimation("mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   background1 = createSprite(500,400,10,50);
   background1.addImage(gardenImg);

  cat1 = createSprite(700,660)
  cat1.addImage(catImg);
  cat1.scale = 0.1;

  mouse1 = createSprite(100,660)
  mouse1.addImage(mouseStandingImg);
  mouse1.scale = 0.1;

}
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if(keyDown("LEFT_ARROW")){

cat1.velocityX = -5;
cat1.addAnimation("catImg",catRunningImg);
cat1.changeAnimation("catImg");

}

if(cat1.isTouching(mouse1)){

    cat1.velocityX = 0;
    mouse1.addAnimation("mouse",mouseTeasingImg);
    mouse1.changeAnimation("mouse");
    cat1.addAnimation("catworryImg",catSadImg);
    cat1.changeAnimation("catworryImg");
}

    drawSprites();
}




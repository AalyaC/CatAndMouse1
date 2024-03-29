
var bgImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");

    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");

    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(850,650);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale=0.2;

    mouse=createSprite(200,650);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2 ){
        cat.velocityX=0;
        mouse.addAnimation("mouseHappy",mouseImg3);
        mouse.changeAnimation("mouseHappy");
        mouse.frameDelay=25;

        cat.addAnimation("catHappy",catImg3);
        cat.changeAnimation("catHappy");
        cat.frameDelay=25;

    }

    keyPressed();
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;
  }

  if(keyCode === RIGHT_ARROW){
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    cat.frameDelay=25;
    cat.velocityX=-2;
    }

}

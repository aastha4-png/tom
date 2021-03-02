/*var bgImg;
var catImg1,catImg2,catImg3;
var mouseImg1,mouseImg2,mouseImg3;
var cat;
var mouse;
var canvas;



function preload() {
bgImg = loadImage("images/garden.png");

catImg1 = loadAnimation("images/cat1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadAnimation("images/cat4.png");


mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadAnimation("images/mouse4.png");


    
}

function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(870,600);
     cat.addAnimation("catSleeping",catImg1);
     cat.scale = 0.2;

     var mouse = createSprite(200,600);
     mouse.addAnimation("mouseStanding",mouseImg1);
     mouse.scale = 0.15;



}

function draw() {

    background(bgImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX = 0;
      cat.addAnimation("catLastImage",catImg3);
      cat.x = 300;
      cat.scale = 0.2;
      cat.changeAnimation("catLastImage");
      mouse.addAnimation("mouseLastImage",mouseImg3);
      mouse.scale = 0.15;
      mouse.changeAnimation("mouseLastImage");
    }
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW) {
  cat.velocityX = -5;
  cat.addAnimation("catRunning",catImg2);
  cat.changeAnimation("catRunning");

  mouse.addAnimation("mouseTeasing",mouseImg2);
  mouse.frameDelay = 25;
  mouse.changeAnimation("mouseTeasing");

}

 

}
*/


var canvas,bg;
//var together;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3= loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}
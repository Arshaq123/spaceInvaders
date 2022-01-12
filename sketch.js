var PLAY = 1;
var END = 0;
var gameState = PLAY;

var Jet ,aliens , lives ; 
var jetImg , aliensImg , livesImg;


var score=0;

var play,playImg,gameOver,gameOverImg;



function preload(){

  jetImg=loadImage("Images/Jet1.png");
  aliensImg=loadImage("Images/invader1.png");
  livesImg=loadImage("Images/Lives.png");
  gameOverImg=loadImage("Images/gameOver.png");
  playImg=loadImage("Images/Play.png");


}

function setup() {
  createCanvas(600, 200);
  
  jet=createSprite(200,200,50,50);
  jet.addImage(jetImg);
  aliens=createSprite(180,180,50,50);
  aliens.addImage(aliensImg);

  
}

function draw() {

  background(255);

  drawSprites();
}
    
  


function reset(){
  
  
}
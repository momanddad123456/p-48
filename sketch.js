var ball,bat;
var ballimage
var batimage;
var bgimage6;
var ballgroup;
var score = 0;

function preload(){
bgimage = loadImage("bgimg.jpg");
ballimage = loadImage("ball.png");
batimage = loadImage("bat.png");

  
}

function setup() {
  
  createCanvas(1024,765);
  
 
  bat = createSprite(950,200,20,70);
 bat.addImage(batimage);
 bat.scale =0.3;
 bat.debug=true;
 ballgroup = new Group();
 bat.setCollider("rectangle",0,0,100,1000);

}
function draw (){
background(bgimage);
textSize(50);
fill("black");
text ("Score = "+score,50,50);
if(keyDown(UP_ARROW)) {
  bat.y = bat.y-10;
  }
 if(keyDown(DOWN_ARROW)) {
   bat.y = bat.y+10;
 }
 
if(score< 5 ){
  
  if (World.frameCount%100 === 0){
    createball();
   }
  
} else {
  if (World.frameCount%60 === 0){
    createball();
   }
  
}
 
if (ballgroup.isTouching(bat)){
ballgroup.destroyEach();
score = score+1;
}
if(score === 10){
  textSize(50);
  fill("black");
  text ("you win ",450,350);

  ballgroup.setLifetimeEach(-1);
  ballgroup.setVelocityXEach(0);
  //ballgroup.visible=false;
  ballgroup.destroyEach();
}
drawSprites();

}
function createball(){

ball = createSprite(100,200,30,30);
ball.y = Math.round(random(50,725));
ball.velocityX = 20;
ball.lifetime = 700;
//ball.debug=true;
  ball.addImage(ballimage);
  ball.scale = 0.03;
  ballgroup.add(ball);

  //ballgroup.debug=true;


}
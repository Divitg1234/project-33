const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var bgImage;
var snowImg;
var fall=[];
var engine,world;
function preload(){
bgImage=loadImage("snow2.jpg");
snowImg=loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
}

function draw() {
  background(bgImage);  
  Engine.update(engine);
  if(frameCount%5===0){
    fall.push(snow=new Snow());
  }
  for(var i=0;i<fall.length;i++){
    fall[i].display();
  }
  drawSprites();
}
var world,engine,object,ground;
var ball


const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

 var ground_option={
   isStatic:true

 }

 var ball_option={
   restitution:2.0
 }
 ball=Bodies.circle(200,100,20,ball_option);
 World.add(world,ball);
 ground = Bodies.rectangle(200,300,400,20,ground_option);
 World.add(world,ground);
 console.log(ground);


}

function draw() {

  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}
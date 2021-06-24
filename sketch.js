const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  //creating engine
  engine=Engine.create();

  //connecting with the world so that it can follow physics rules
  world=engine.world;

  var balloptions={
    restitution:1
  }

  //creating circle body
  ball=Bodies.circle(200,100,50,balloptions);
  //adding body in the world
  World.add(world,ball);

  var groundoptions={
    isStatic:true
  }
  //creating rectangle body
  ground=Bodies.rectangle(200,390,400,20,groundoptions);
  //adding body in the world
  World.add(world,ground);
 
 
}

function draw() {
  //running or updating the engine
  Engine.update(engine);

  background(0);  
  rectMode(CENTER);
  fill("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);

}
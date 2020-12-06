// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  //associate engine with world
  world = engine.world; 


  var object_options ={
    inStatic: false,
  }

  object = Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);


  console.log(object.position.x);
}

function draw() {
  background("black");  
 //updating the engine
  Engine.update(engine);


  rect(object.position.x, object.position.y,50,50);

  drawSprites();
}
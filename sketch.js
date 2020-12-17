const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2, box3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,380,400,20);
    box1 = new Box(180,100,50,100);
    box2 = new Box(200,200,60,40);
    box3 = new Box(210,50,100,20);
}

function draw(){
    background(0);
    Engine.update(engine);

    fill("yellow");
    box1.display();
    fill("cyan");
    box2.display(); 
    fill("brown");
    ground.display();
   fill("green");
    box3.display();
}



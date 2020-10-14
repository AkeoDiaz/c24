const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box1,box2,box3,box4,box5;
var bird,log1,log2,log3,log4;
var pig1,pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320);
    pig1 = new Pig(810,350);
    box2 = new Box(920,320);

    log1 = new Log(810,360, 280, 90);
    
    box3 = new Box(700,240);
    pig2 = new Pig(810,220);
    box4 = new Box(920,240);
    
    log2 = new Log(810,180,300, 90);

    box5 = new Box(810,160);
    log3 = new Log(760,120,150,25);
    log4 = new Log(870,120,150,-25);
 
    bird = new Bird(100,100);

    ground = new Ground(600,390,1200,20);
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();

    
    
    log3.display();
    log4.display();

    
   

    bird.display();
}
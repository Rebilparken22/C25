const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/BG angry_birds.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    block1 = new Block(520,360,80,40);
    block2 = new Block(740,360,80,40);
    block3 = new Block(960,360,80,40);

    box1 = new Box(555,320,90,90);
    box2 = new Box(740,320,90,90);
    box0 = new Box(925,320,90,90);

    block4 = new Block(577,290,45,20);
    block5 = new Block(740,290,45,20);
    block6 = new Block(890,290,45,20);
    // pig1 = new Pig(810, 350)
    // log1 = new Log(810,260,300, PI/2);

    // box3 = new Box(700,240,70,70);
    // box4 = new Box(920,240,70,70);
    // pig3 = new Pig(810, 220);

    // log3 =  new Log(810,180,300, PI/2);

    // box5 = new Box(810,160,70,70);
    // log4 = new Log(760,120,150, PI/7);
    // log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

}

function draw(){
    // rectMode(CENTER);
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    block1.display();
    block2.display();
    block3.display();

    box1.display();
    box2.display();
    box0.display();

    block4.display();
    block5.display();
    block6.display();
    ground.display();
    // pig1.display();
    // log1.display();

    // box3.display();
    // box4.display();
    // pig3.display();
    // log3.display();

    // box5.display();
    // log4.display();
    // log5.display();  

    bird.display();
    platform.display();
}

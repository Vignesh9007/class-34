const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,560,1200,40);
    

    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
   

    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
   
    box5 = new Box(900,100,70,70);
    ball=new Ball(750,500,30)
    
chain=new Chain(ball.body,{x:750,y:100})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  
    box1.display();
    box2.display();
    ground.display();
    
    

    box3.display();
    box4.display();
    
    box5.display();
   

    ball.display()
    chain.display();
    
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:-200,y:-185})
    }

}

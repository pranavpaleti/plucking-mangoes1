
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
const Constraint = Matter.Constraint
var ground;
var boy,boyImage;
var tree,treeImage;
var stone,stoneImage;
var mango1,mango2;
var chain;
function preload(){
    boyImage=loadImage("boy.png");
    treeImage=loadImage("tree.png");
    stoneImage=loadImage("stone.png")
}

function setup(){
    createCanvas(1200,600);


    engine = Engine.create();
    world = engine.world;
     
    ground=new Ground(600,580,1200,10);

    boy=createSprite(200,520,10,100);
    boy.addImage(boyImage);
    boy.scale=0.1;
    
    tree=createSprite(900,330,10,100);
    tree.addImage(treeImage);
    tree.scale=0.4;

     stone=new Stone(140,450,10);
   
     mango1=new Mango(850,350,20)
     mango2=new Mango(880,330,20);
     mango3=new Mango(850,330,20);
     mango5=new Mango(820,300,20);
     mango4=new Mango(780,300,20);
     chain=new SlingShot(stone.body,{x:140,y:450})
    Engine.run(engine);

}


function draw(){
    rectMode(CENTER);
     background(255)
     ground.display();
     stone.display();
     mango1.display();
     mango2.display();
     mango3.display();
     mango4.display();
     mango5.display();
     chain.display();
     detectCollision(stone,mango1);
     detectCollision(stone,mango2);
     detectCollision(stone,mango3);
     detectCollision(stone,mango4);
     detectCollision(stone,mango5);
     drawSprites();

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
chain.fly();
}
function keyPressed(){
    if(keyCode===32){
        chain.attach(stone.body)
    }
}

function detectCollision (Lstone,Lmango){
    mangopos=Lmango.body.position
    stonepos=Lstone.body.position
    var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)
    if(distance<=Lmango.r+Lstone.r){
        Matter.Body.setStatic(Lmango.body,false)
    }
  
}
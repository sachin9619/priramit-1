const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

 var engine,world
var g1,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11
var ball
 function setup(){
     createCanvas(500,500)
     engine=Engine.create()
     world=engine.world

     g1=new ground()
     b1=new block(180,377,"red")
     b2=new block(200,377,"blue")
     b3=new block(220,377,"yellow")
     b4=new block(240,377,"cyan")
     b5=new block(260,377,"indigo")
     b6=new block(200,357,"pink")
     b7=new block(220,357,"green")
     b8=new block(240,357,"black")
     b9=new block(210,337,"lime green")
     b10=new block(230,337,"orange")
     b11=new block(220,317,"purple")
    

 }
 function draw(){
     
     background("blue")
     g1.display()
     b1.display()
     b2.display()
     b3.display()
     b4.display()
     b5.display()
     b6.display()
     b7.display()
     b8.display()
     b9.display()
     b10.display()
     b11.display()


 }

 function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }
var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
  Bodies = Matter.Bodies;

var particle=null;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var count = 0;
var gameState = "PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
 
  fill("white");
  textSize(20);
  text("Score : "+score,20,30);

  text("500",20,550);
  text("500",100,550);
  text("500",175,550);
  text("500",260,550);
  text("100",340,550);
  text("100",420,550);
  text("100",500,550);
  text("200",580,550);
  text("200",660,550);
  text("200",740,550);
  
  ground.display();
 if(gameState === "END"){
   fill("red");
   textSize(100);
   text("Game Over",200,400);
 }

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   
  if(particle!==null)
   {
     particle.display();
   
    if(particle.body.position.y> 760)
    {
      if(particle.body.position.x < 300)
      {
        score = score+500;
        particle = null;
        if(count >= 5) {gameState="END"}
      }
      else if (particle.body.position.x > 301 && particle.body.position.x < 600)
      {
        score = score+100;
        particle = null;
        if(count >= 5) {gameState="END"}
      }
      else if (particle.body.position.x > 601 && particle.body.position.x < 900)
      {
        score = score+100;
        particle = null;
        if(count >= 5) {gameState="END"}
      }
    } 
  }


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState !== "END"){
    count++;
    particle = new Particle(mouseX,50,10,10);
  }
}
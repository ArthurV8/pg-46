var mario;
var cenario;
var goomba;
var play;
var chao;
var equipe;
var pontuacao=0;



function preload(){
mario=loadImage("./img/mario.png");
cenario=loadImage("./img/cenario.png");
goomba=loadImage("./img/goomba.png");
}


function setup() {
  createCanvas(800,400);
  chao=createSprite(400,405,800,40);
  chao.visible=false;
  play=createSprite(50, 325, 50, 50);
  play.addImage(mario);
  play.scale=0.2;
  play.debug=false;
  play.setCollider("rectangle",0,0,250,555);
  equipe=new Group();
}

function draw() {
  background("black"); 
  console.log(play.y);
  image(cenario,0,0,800,400);
  fill("darkblue");
  textSize(25);
  text(pontuacao,700,50);
  if(keyDown("w")&&play.y>=300){
    play.velocityY=-16;
  }
  play.velocityY+=1
  if(play.isTouching(equipe)&&play.y<300){
    play.velocityY=-16;
    pontuacao+=5
  }
  play.collide(chao);
  demon();
  drawSprites();
}

function demon(){
if(frameCount%Math.round(random(85,100))===0){
  var cogumelo=createSprite(850,350,50,50);
  cogumelo.addImage(goomba);
  cogumelo.velocityX=-3;
  cogumelo.scale=0.15;
  cogumelo.debug=false;
  cogumelo.setCollider("circle",0,0,120);
  equipe.add(cogumelo);
}
}
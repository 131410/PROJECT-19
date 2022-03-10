var boy,boyimg
var ground,groundimg
var zombie,zombieimg
var score
var gameState=PLAY
var PLAY=1
var end=0
var invground,rock,rockimg

function preload(){
 boyimg=loadImage("boy.png")
 groundimg=loadImage("ground2.png")
 zombieimg=loadImage("zombie.png")
 rockimg=loadImage("rock.png")
}

function setup(){
  createCanvas(700,300)
  background(200)

  boy=createSprite(80,220)
  boy.addImage("boy",boyimg)
  boy.scale=0.3

  ground=createSprite(300,250,700,10)
  ground.addImage("ground",groundimg)
  
  score=0

  invground=createSprite(300,295,700,10)
  invground.visible=false


}

function draw(){

  text("SCORE:",+score,600,100)

  
  if(gameState===PLAY){
      if(keyDown("space") && boy.y>180){
      boy.velocityY=-7
    }
    boy.velocityY=boy.velocityY+0.2


    score=score+Math.round(getFrameRate()/30)
    

    if(ground.x<0){
      ground.x=ground.width/2
    }

    ground.velocityX=-(3+score/100)

    if(score>0 &&score%100==0 ){
        spawnrock()
    }

    if(boy.isTouching(zombie) || boy.isTouching(rock)){
      gameState=end

    }


    

    

    boy.collide(invground)
  }

  if(gameState==end){
    background("black")
    fill("yellow")
    stroke("silver")
    strokeWeight("10")
    textSize("30")

    text("GAME OVER",350,150)
    
  }


  

  spawnzombie()

 drawSprites()

}

   function spawnzombie(){
      if(frameCount%250==0){
        zombie=createSprite(600,230)
        zombie.addImage("zombie",zombieimg)
        zombie.velocityX=-(3+score/100)
        zombie.scale=0.2
        zombie.lifetime=250
      }

   }
  
   function spawnrock(){
     if(frameCount%100==0){
       rock=createSprite(650,Math.round(random(10,100)))
       rock.addImage("rock",rockimg)
       rock.velocityX=-(3+score/100)
       rock.scale=0.5
       rock.lifetime=40
     }
   }




class Game{
    constructor(){
   

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500,10,10);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500,10,10);
    player2.addImage("player2", player_img);
    players=[player1,player2];
    //console.log(player1.x)
    //console.log(playerCountRef)

   // fruitGroup =  new Group();

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                
                 if(allPlayers !== undefined){ 
                image(back_img, 0, 0, 1000, 800);
                
                 var index =0;
                 var x;
                 var y = 500;
                 drawSprites();
                 for(var plr in allPlayers){
               
                    index++;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     //console.log(allPlayers[plr])
                     players[index-1].x = x
                     players[index-1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);
                     }
                 }
                 
                 } else { 
                     console.log("E")
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruit1 = createSprite(random(100,1000),0,100,100);
                     fruit2 = createSprite(random(100,1000),0,100,100);
                     fruit3 = createSprite(random(100,1000),0,100,100);
                     fruit4 = createSprite(random(100,1000),0,100,100);
                     fruit5 = createSprite(random(100,1000),0,100,100);
                     fruit1.velocityY = -6;
                     fruit2.velocityY = -6;
                     fruit3.velocityY = -6;
                     fruit4.velocityY = -6;
                     fruit5.velocityY = -6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruit1.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruit2.addImage("fruit2", fruit2_img);
                         break;
                         case 3: fruit3.addImage("fruit3", fruit3_img);
                         break;
                         case 4: fruit4.addImage("fruit4", fruit4_img);
                         break;
                         case 5: fruit5.addImage("fruit5", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruit1);
                     fruitGroup.add(fruit2);
                     fruitGroup.add(fruit3);
                     fruitGroup.add(fruit4);
                     fruitGroup.add(fruit5);
                 }
                 
                  if (player.index !== null) {
                    return;
                  }

             

    }

    end(){
       console.log("Game Ended");
    }
}
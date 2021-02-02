var database;
var playerCount=0,gameState=0;
var game,player,form;


function setup(){
  database = firebase.database();
 
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){

  
}

var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

//CHOOSE THE CORRECT IF BLOCK FOR CHECKING COLLISION AND THEN PASTE THE CODE BELOW IN THE CORRECT IF BLOCK

    // if(tom.y - jerry.x < (tom.height - jerry.width)/2)
    // { 
       
    // } 

    // if(tom.x - jerry.y < (tom.width - jerry.y)/2)
    // { 
       
    // } 

    // if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    // { 
       
    // } 

    // if(tom.y - jerry.y < (tom.height - jerry.height)/2)
    // { 
       
    // } 



//PASTE THIS CODE IN THE CORRECT IF BLOCK

    // tom.velocityX=0;
    // tom.addAnimation("tomLastImage", tomImg3);
    // tom.x =300;
    // tom.scale=0.2;
    // tom.changeAnimation("tomLastImage");
    // jerry.addAnimation("jerryLastImage", jerryImg3);
    // jerry.scale=0.15;
    // jerry.changeAnimation("jerryLastImage");

    drawSprites();
}



//CHOOSE ONE AMONGST THESE

// function keyPressed(){

//     if(keyCode === RIGHT_ARROW){
//         jerry.addAnimation("jerryTeasing", jerryImg2)
//         jerry.changeAnimation("jerryTeasing");
//         jerry.frameDelay = 25
//         tom.velocityX = -5; 
//         tom.addAnimation("tomRunning", tomImg2);
//         tom.changeAnimation("tomRunning");
//     }
// }


// function keyPressed(){

//     if(keyCode === LEFT_ARROW){
//         jerry.addAnimation("jerryTeasing", jerryImg2)
//         jerry.changeAnimation("jerryTeasing");
//         jerry.frameDelay = 25
//         tom.velocityX = -5; 
//         tom.addAnimation("tomRunning", tomImg2);
//         tom.changeAnimation("tomRunning");
//     }
// }


// function mousePressed(){

//     if(keyCode === LEFT_ARROW){
//         jerry.addAnimation("jerryTeasing", jerryImg2)
//         jerry.changeAnimation("jerryTeasing");
//         jerry.frameDelay = 25
//         tom.velocityX = -5; 
//         tom.addAnimation("tomRunning", tomImg2);
//         tom.changeAnimation("tomRunning");
//     }
// }


// function draw(){

//     if(keyCode === LEFT_ARROW){
//         jerry.addAnimation("jerryTeasing", jerryImg2)
//         jerry.changeAnimation("jerryTeasing");
//         jerry.frameDelay = 25
//         tom.velocityX = -5; 
//         tom.addAnimation("tomRunning", tomImg2);
//         tom.changeAnimation("tomRunning");
//     }
// }

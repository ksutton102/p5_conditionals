var x = 0;
var speed = 5;
var y = 0;


function setup(){
    createCanvas(600,400);
}

function draw(){
    background(50);
    //I wrote this so background changes to pink when clicked
    if(mouseIsPressed){
          background(0, 0, 0);
    }
    //makes outline white, 6px thick, no color inside shapes
    stroke(255);
    strokeWeight(6);
    fill(244, 65, 184)
    
    if(mouseY<=150){
          fill(155, 66, 244);
    }
    else{
          fill(244, 65, 184);
    }
    
    //a cirlce
    ellipse(x,y,100,100);
    
    //helps the cirlce move across the screen on its own
     if(x>width || x<0){
          console.log("CIRCLE IS OFF THE SCREEN!!!!");
          speed = speed * -1;
    }
    
    x = x + speed;
    console.log(x);
 
    if(y>height || y<0){
          console.log("CIRCLE IS OFF THE SCREEN!!!!!!!!!!!!");
          speed = speed * -1;
    }
    
    y = y + speed;
    console.log(y);
}
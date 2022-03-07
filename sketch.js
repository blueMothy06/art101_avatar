let redBG = 252;
let greenBG = 186;
let blueBG = 3;
let redBod = 255;
let greenBod = 255;
let blueBod = 255;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  
}

function draw() {
  drawBody();  
  drawHead(0.425);
  drawFace();
  for (let timer = 0; timer <10; timer++)
    {
      redBG = redBG - 1;
      greenBG = greenBG - 1;
      blueBG = blueBG -1;
    }
 
}

function drawBody(){
  
  //body
    noStroke();
    fill(redBG, greenBG, blueBG);
    square(0, 0, width*2);
    rectMode(CENTER);
    fill(redBod,greenBod,blueBod);
    
    
    circle(width/2,width * 0.45, width*0.7);
    noStroke();
    ellipse(width/2, width*0.8, width*3/4, width);
    fill(redBod,greenBod,blueBod);
}

function drawHead(wid){
  // head
    push();
      fill(redBG, greenBG, blueBG);
      circle(width*wid,width*wid,width*wid);
      circle(width*0.575,width*wid,width*wid);
      circle(width/2,width*0.45,width*wid);
    pop();
}

function drawFace() {
  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  
  // face details, eyes, 
  circle(width*0.35,width*0.425,width*vol);
  circle(width*0.65,width*0.425,width*vol);
  ellipse(width/2, width*0.55,width*0.075,width*0.125);
  
  //beak
  push();
    fill(redBG, greenBG, blueBG);
    ellipse(width*0.475, width*0.6, width*0.075, width*0.125);
  pop();
}

function mouseMoved() {
    // changes bg to black
    redBG = redBG + 5;
    if (redBG < 255) 
    {
      redBG = 255;
    }
    greenBG = greenBG - 5;
    if (greenBG < 45) 
    {
      greenBG = 45;
    }
    blueBG = blueBG - 5;
    if (blueBG < 0) 
    {
      blueBG = 0;
    }
  
  // change body color
      redBod = redBod - 5;
    if (redBod < 0) 
    {
      redBod = 0;
    }
    greenBod = greenBod - 5;
    if (greenBod < 0) 
    {
      greenBod = 0;
    }
    blueBod = blueBod - 5;
    if (blueBod < 0) 
    {
      blueBod = 0;
    }
}

function mouseClicked()
{
  //resets
  redBG = 252;
  greenBG = 186;
  blueBG = 3;
  redBod = 255;
  greenBod = 255;
  blueBod = 255;
}



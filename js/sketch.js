//define variables: man
let man;
let manImg;
let covidImg;
let backImg;
let covids = []

//define preload to avoid asynchronous loading of exteranal files
//load images
function preload() {
  manImg = loadImage('man.png');
  covidImg = loadImage('covid.png');
  backImg = loadImage('background2.png');
}

//define setup function, create canvas according to background image and setup man function
function setup() {
    createCanvas(800, 450);
    man = new Man();
}
//define "space" key function
function keyPressed() {
  if (key ==' ') {
    man.jump();
  }
}
//define draw, offer random "covid" shots with reduced alternation
function draw() {
  
  if (random(1) <0.003) {
    covids.push(new Covid()); 
  }
  
//draw background and "man"
    background(backImg);
    man.show();
    man.move();
  
  
//define lool for all "covid" shot to come, but when one of them hit "man" to show Game Over on console log
    for (let c of covids) {
      c.move();
      c.show();
      if (man.hits(c)) {
          textSize (70);
          stroke (0);
          strokeWeight (4);
          fill (250);
        text('You are dead!',200,100);
        noLoop();
      }
    }
}
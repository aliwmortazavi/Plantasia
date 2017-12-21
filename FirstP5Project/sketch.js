var canvas;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('robot.mp3');
}

function setup() {
    canvas = createCanvas(window.displayWidth, window.displayHeight);
    print("setup function");
    r = random(255);
    g = random(255);
    b = random(255);
    mySound.setVolume(0.1);
    
}

function draw() {
    background(50, 100, 80);
    stroke(r, g, b, 50);
    strokeWeight(4);
    fill(r, g, b, 100);
    ellipse(width/2, width/2, 150, 150);
    //rect(50,50,20,40);
    //line(25,36,379,250);
    //arc(50, 50, 80, 80, PI/3, PI-.5, OPEN);
    //rotate(PI/2.0);
    //arc(50, 50, 80, 80, PI/3, PI-.5, OPEN);
    console.log("draw funciton");
}

function keyPressed() {
    r = random(255);
    g = random(255);
    b = random(255);
    stroke(r, g, b, 50);
    strokeWeight(4);
    fill(r, g, b, 100);
    ellipse(width/2, height/2, 100, 100);
    mySound.play();
    
}

window.onresize = function() {
  var w = window.displayWidth;
  var h = window.displayHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}



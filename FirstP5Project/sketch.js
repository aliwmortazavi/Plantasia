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
    ellipse(width/2, height/2, 150, 150);
    console.log("draw funciton");
}

function keyPressed() {
    r = random(255);
    g = random(255);
    b = random(255);
    stroke(r, g, b, 50);
    strokeWeight(4);
    fill(r, g, b, 100);
    ellipse(width/2, height/2, 150, 150);
    mySound.play();
    
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}



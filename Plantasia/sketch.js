    var wordCount = 0;
    var words = "";
    var notes = [];
    var roots = [];
    var rootsBool = [];
    var time;
    function preload() {
        soundFormats('m4a'); 
        aSound = loadSound('sounds/A.m4a');
        bSound = loadSound('sounds/B.m4a');
        cSound = loadSound('sounds/C.m4a');
        dSound = loadSound('sounds/D.m4a');
        eSound = loadSound('sounds/E.m4a');
        fSound = loadSound('sounds/F.m4a');
        gSound = loadSound('sounds/G.m4a');
        hSound = loadSound('sounds/H.m4a');
        iSound = loadSound('sounds/I.m4a');
        jSound = loadSound('sounds/J.m4a');
        kSound = loadSound('sounds/K.m4a');
        lSound = loadSound('sounds/L.m4a');
        mSound = loadSound('sounds/M.m4a');
        nSound = loadSound('sounds/N.m4a');
        oSound = loadSound('sounds/O.m4a');
        pSound = loadSound('sounds/P.m4a');
        qSound = loadSound('sounds/Q.m4a');
        rSound = loadSound('sounds/R.m4a');
        sSound = loadSound('sounds/S.m4a');
        tSound = loadSound('sounds/T.m4a');
        uSound = loadSound('sounds/U.m4a');
        vSound = loadSound('sounds/V.m4a');
        wSound = loadSound('sounds/W.m4a');
        xSound = loadSound('sounds/X.m4a');
        ySound = loadSound('sounds/Y.m4a');
        zSound = loadSound('sounds/Z.m4a');
        petalTest = loadImage('petals/A-01.png'); 
        myFont = loadFont('Quicksand_Book.otf');
    }

    function resetBackground(){
        intro.remove();
        canvas =createCanvas(window.innerWidth,window.innerHeight); 
        background(0);
        
    }

    function setup() {
        time = millis();
        intro = createVideo(['photosynth-intro.mov']);
        intro.hide();   
        intro.size(window.displayWidth,window.displayHeight);
        intro.position(0,0); 
        intro.show();
        print("setup function");
        image(intro, 0, 0);
        intro.play();
        setTimeout(resetBackground, 7000);
        textFont(myFont);
        textSize(14);
        textAlign(RIGHT);
        for(var i = 0; i < 26; i++){
            rootsBool[i] = false;
        }
    }

    function draw() {
        time = millis();
        print(time);
        if(time > 8000){
            resetBackground();
            stroke(120);
            fill(255);
            strokeWeight(.5);
            for(var x = -60; x <=60; x+=10){
                line(0,height/2 + x,width,height/2 + x);
            }
            stroke(255);
            for(var i = 0; i < notes.length; i++){
                notes[i].display();
            }
          // if(time < 28000){
                ellipse(width/2, height/2, 10, 10);
                noFill();
                stroke(255);
                for(var j = 0; j < roots.length; j++){
                roots[j].show();
                roots[j].update();
            
               }
          //  }
        }
        fill(255);
        textFont(myFont);
        textAlign(RIGHT);
        text(words, width/2 + 9, height/2 + 80); 
    }

  

    function keyTyped() {
        resetBackground();
        
       
        
      if (key == 'a') {
          aSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(13.5);
        }
          notes[notes.length] = new Note(width/2, height/2 + 60);
          words += "A ";
          if(rootsBool[0] == false){
              roots[roots.length] = new Root("a");
              rootsBool[0] = true;
          }
      } else if (key == 'b') {
          bSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(12.5);
        }
          notes[notes.length] = new Note(width/2, height/2 + 55);
          words += "B ";
           if(rootsBool[1] == false){
              roots[roots.length] = new Root("b");
              rootsBool[1] = true;
          }
      } else if (key == 'c') {
          cSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(15);
        }
          notes[notes.length] = new Note(width/2, height/2 + 50);
          words += "C ";
          if(rootsBool[2] == false){
              roots[roots.length] = new Root("c");
              rootsBool[2] = true;
          }
      } else if(key == 'd') {
          dSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(14);
        }
          notes[notes.length] = new Note(width/2, height/2 + 45);
          words += "D ";
          if(rootsBool[3] == false){
              roots[roots.length] = new Root("d");
              rootsBool[3] = true;
          }
      } else if(key == 'e') {
          eSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(12.5);
        }
          notes[notes.length] = new Note(width/2, height/2 + 40);
          words += "E ";
          if(rootsBool[4] == false){
              roots[roots.length] = new Root("e");
              rootsBool[4] = true;
          }
      } else if(key == 'f') {
          fSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(13);
        }
          notes[notes.length] = new Note(width/2, height/2 + 35);
          words += "F ";
          if(rootsBool[5] == false){
              roots[roots.length] = new Root("f");
              rootsBool[5] = true;
          }
      } else if(key == 'g') {
          gSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(15.5);
        }
          notes[notes.length] = new Note(width/2, height/2 + 30);
          words += "G ";
          if(rootsBool[6] == false){
              roots[roots.length] = new Root("g");
              rootsBool[6] = true;
          }
      } else if(key == 'h') {
          hSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(14);
        }
          notes[notes.length] = new Note(width/2, height/2 + 25);
          words += "H ";
          if(rootsBool[7] == false){
              roots[roots.length] = new Root("h");
              rootsBool[7] = true;
          }
      } else if(key == 'i') {
          iSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(8.5);
        }
          notes[notes.length] = new Note(width/2 + 5, height/2 + 20);
          words += "I ";
          if(rootsBool[8] == false){
              roots[roots.length] = new Root("i");
              rootsBool[8] = true;
          }
      } else if(key == 'j') {
          jSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(12.5);
        }
          notes[notes.length] = new Note(width/2, height/2 + 15);
          words += "J ";
          if(rootsBool[9] == false){
              roots[roots.length] = new Root("j");
              rootsBool[9] = true;
          }
      } else if(key == 'k') {
          kSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(14);
        }
          notes[notes.length] = new Note(width/2, height/2 + 10);
          words += "K ";
          if(rootsBool[10] == false){
              roots[roots.length] = new Root("k");
              rootsBool[10] = true;
          }
      } else if(key == 'l') {
          lSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(13);
        }
          notes[notes.length] = new Note(width/2, height/2 + 5);
          words += "L ";
          if(rootsBool[11] == false){
              roots[roots.length] = new Root("l");
              rootsBool[11] = true;
          }
      } else if(key == 'm') {
          mSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(15.5);
        }
          notes[notes.length] = new Note(width/2, height/2);
          words += "M ";
          if(rootsBool[12] == false){
              roots[roots.length] = new Root("m");
              rootsBool[12] = true;
          }
      } else if(key == 'n') {
          nSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(14.5);
        }
          notes[notes.length] = new Note(width/2, height/2 - 5);
          words += "N ";
          if(rootsBool[13] == false){
              roots[roots.length] = new Root("n");
              rootsBool[13] = true;
          }
      } else if(key == 'o') {
          oSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(16);
        }
          notes[notes.length] = new Note(width/2 -3, height/2 - 10);
          words += "O ";
          if(rootsBool[14] == false){
              roots[roots.length] = new Root("o");
              rootsBool[14] = true;
          }
      } else if(key == 'p') {
          pSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(13.5);
        }
          notes[notes.length] = new Note(width/2 - 3, height/2 -15);
          words += "P ";
          if(rootsBool[15] == false){
              roots[roots.length] = new Root("p");
              rootsBool[15] = true;
          }
      } else if(key == 'q') {
          qSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(15.5);
        }
          notes[notes.length] = new Note(width/2, height/2 - 20);
          words += "Q ";
          if(rootsBool[16] == false){
              roots[roots.length] = new Root("q");
              rootsBool[16] = true;
          }
      } else if(key == 'r') {
          rSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(13);
        }
          notes[notes.length] = new Note(width/2 - 3, height/2 - 25);
          words += "R ";
          if(rootsBool[17] == false){
              roots[roots.length] = new Root("r");
              rootsBool[17] = true;
          }
      } else if(key == 's') {
          sSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(13.7);
        }
          notes[notes.length] = new Note(width/2, height/2 - 30);
          words += "S ";
          if(rootsBool[18] == false){
              roots[roots.length] = new Root("s");
              rootsBool[18] = true;
          }
      } else if(key == 't') {
          tSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(13.5);
        }
          notes[notes.length] = new Note(width/2, height/2 - 35);
          words += "T ";
          if(rootsBool[19] == false){
              roots[roots.length] = new Root("t");
              rootsBool[19] = true;
          }
      } else if(key == 'u') {
          uSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(15.3);
        }
          notes[notes.length] = new Note(width/2, height/2 - 40);
          words += "U ";
          if(rootsBool[20] == false){
              roots[roots.length] = new Root("u");
              rootsBool[20] = true;
          }
      } else if(key == 'v') {
          vSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(14.2);
        }
          notes[notes.length] = new Note(width/2, height/2 - 45);
          words += "V ";
          if(rootsBool[21] == false){
              roots[roots.length] = new Root("v");
              rootsBool[21] = true;
          }
      } else if(key == 'w') {
          wSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(19.5);
        }
          notes[notes.length] = new Note(width/2 - 5, height/2 - 50);
          words += "W ";
          if(rootsBool[22] == false){
              roots[roots.length] = new Root("w");
              rootsBool[22] = true;
          }
      } else if(key == 'x') {
          xSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(14.2);
        }
          notes[notes.length] = new Note(width/2 , height/2 - 55);
          words += "X ";
          if(rootsBool[23] == false){
              roots[roots.length] = new Root("x");
              rootsBool[23] = true;
          }
      } else if(key == 'y') {
          ySound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(13.7);
        }
          notes[notes.length] = new Note(width/2, height/2 - 60);
          words += "Y ";
          if(rootsBool[24] == false){
              roots[roots.length] = new Root("y");
              rootsBool[24] = true;
          }
      } else if(key == 'z') {
          zSound.play();
          for(var i = 0; i < notes.length; i++){
            notes[i].move(14);
        }
          notes[notes.length] = new Note(width/2, height/2 - 65);
          words += "Z ";
          if(rootsBool[25] == false){
              roots[roots.length] = new Root("z");
              rootsBool[25] = true;
          }
      } else if(key == ' '){
          words += "  ";
          for(var i = 0; i < notes.length; i++){
            notes[i].move(8.6);
        }
      }
    }

    function Note(x, y){
        this.x = x;
        this.y = y;
        this.w = 5;
        this.h = 5;
        
        this.display = function(){
            ellipse(this.x, this.y, this.w, this.h);
        }
        this.move = function(p){
            this.x -=p;
        }
    }
    
    function Root(letter){
        this.x = width/2;
        this.y = height/2;
        
      if (letter == "a") {
        this.controlx1 = width/2 - 10;
        this.controly1 = height/2 - 70;
        this.controlx2 = width/2 + 10;
        this.controly2 = height/2 -140;
        this.controlx3 = width/2 - 10;
        this.controly3 = height/2 - 210;
        this.controlx4 = width/2 ;
        this.controly4 = height/2 - 255;
      } else if (letter == 'b') {
        this.controlx1 = width/2 + 15;
        this.controly1 = height/2 -60;
        this.controlx2 = width/2;
        this.controly2 = height/2 - 120;
        this.controlx3 = width/2 + 25;
        this.controly3 = height/2 -190;
        this.controlx4 = width/2 + 40;
        this.controly4 = height/2 - 240;
      } else if (letter == 'c') {
        this.controlx1 = width/2 +10;
        this.controly1 = height/2 -50;
        this.controlx2 = width/2 + 30;
        this.controly2 = height/2 - 120;
        this.controlx3 = width/2 + 40;
        this.controly3 = height/2 -190;
        this.controlx4 = width/2 + 80;
        this.controly4 = height/2 - 230;
      } else if(letter == 'd') {
        this.controlx1 = width/2 +35;
        this.controly1 = height/2 - 45;
        this.controlx2 = width/2 + 45;
        this.controly2 = height/2 - 110;
        this.controlx3 = width/2 + 110;
        this.controly3 = height/2 -180;
        this.controlx4 = width/2 + 130;
        this.controly4 = height/2 - 210;  
      } else if(letter == 'e') {
        this.controlx1 = width/2 +55;
        this.controly1 = height/2 - 70;
        this.controlx2 = width/2 + 90;
        this.controly2 = height/2 - 100;
        this.controlx3 = width/2 + 145;
        this.controly3 = height/2 -110;
        this.controlx4 = width/2 + 190;
        this.controly4 = height/2 - 140;   
      } else if(letter == 'f') {
        this.controlx1 = width/2 +70;
        this.controly1 = height/2 - 40;
        this.controlx2 = width/2 + 115;
        this.controly2 = height/2 - 70;
        this.controlx3 = width/2 + 175;
        this.controly3 = height/2 -90;
        this.controlx4 = width/2 + 220;
        this.controly4 = height/2 - 100;     
      } else if(letter == 'g') {
        this.controlx1 = width/2 +70;
        this.controly1 = height/2 - 15;
        this.controlx2 = width/2 + 140;
        this.controly2 = height/2 - 40;
        this.controlx3 = width/2 + 190;
        this.controly3 = height/2 -20;
        this.controlx4 = width/2 + 240;
        this.controly4 = height/2 - 60;      
      } else if(letter == 'h') {
        this.controlx1 = width/2 +70;
        this.controly1 = height/2 + 15;
        this.controlx2 = width/2 + 140;
        this.controly2 = height/2 - 5;
        this.controlx3 = width/2 + 190;
        this.controly3 = height/2 + 20;
        this.controlx4 = width/2 + 240;
        this.controly4 = height/2 + 50;   
      } else if(letter == 'i') {
        this.controlx1 = width/2 +60;
        this.controly1 = height/2 + 25;
        this.controlx2 = width/2 + 120;
        this.controly2 = height/2 +10;
        this.controlx3 = width/2 + 170;
        this.controly3 = height/2 + 65;
        this.controlx4 = width/2 + 220;
        this.controly4 = height/2 + 80;     
      } else if(letter == 'j') {
        this.controlx1 = width/2 +50;
        this.controly1 = height/2 + 20;
        this.controlx2 = width/2 + 100;
        this.controly2 = height/2 +70;
        this.controlx3 = width/2 + 160;
        this.controly3 = height/2 + 95;
        this.controlx4 = width/2 + 210;
        this.controly4 = height/2 + 130;   
      } else if(letter == 'k') {
        this.controlx1 = width/2 +60;
        this.controly1 = height/2 + 30;
        this.controlx2 = width/2 + 90;
        this.controly2 = height/2 +70;
        this.controlx3 = width/2 + 100;
        this.controly3 = height/2 + 105;
        this.controlx4 = width/2 + 160;
        this.controly4 = height/2 + 170;     
      } else if(letter == 'l') {
        this.controlx1 = width/2 +40;
        this.controly1 = height/2 + 60;
        this.controlx2 = width/2 + 80;
        this.controly2 = height/2 +100;
        this.controlx3 = width/2 + 60;
        this.controly3 = height/2 + 155;
        this.controlx4 = width/2 + 110;
        this.controly4 = height/2 + 210;  
      } else if(letter == 'm') {
        this.controlx1 = width/2 +30;
        this.controly1 = height/2 + 50;
        this.controlx2 = width/2 + 20;
        this.controly2 = height/2 +100;
        this.controlx3 = width/2 + 60;
        this.controly3 = height/2 + 165;
        this.controlx4 = width/2 + 60;
        this.controly4 = height/2 + 240;   
      } else if(letter == 'n') {
        this.controlx1 = width/2 + 10;
        this.controly1 = height/2 + 70;
        this.controlx2 = width/2 - 10;
        this.controly2 = height/2 + 140;
        this.controlx3 = width/2 + 10;
        this.controly3 = height/2 + 210;
        this.controlx4 = width/2 ;
        this.controly4 = height/2 + 255;   
      } else if(letter == 'o') {
        this.controlx1 = width/2 - 15;
        this.controly1 = height/2 + 60;
        this.controlx2 = width/2;
        this.controly2 = height/2 + 120;
        this.controlx3 = width/2 - 25;
        this.controly3 = height/2 + 190;
        this.controlx4 = width/2 - 40;
        this.controly4 = height/2 + 240;  
      } else if(letter == 'p') {
        this.controlx1 = width/2 - 10;
        this.controly1 = height/2 + 50;
        this.controlx2 = width/2 - 30;
        this.controly2 = height/2 + 120;
        this.controlx3 = width/2 - 40;
        this.controly3 = height/2 + 190;
        this.controlx4 = width/2 - 80;
        this.controly4 = height/2 + 230;  
      } else if(letter == 'q') {
        this.controlx1 = width/2 - 35;
        this.controly1 = height/2 + 45;
        this.controlx2 = width/2 - 45;
        this.controly2 = height/2 + 110;
        this.controlx3 = width/2 - 110;
        this.controly3 = height/2 + 180;
        this.controlx4 = width/2 - 130;
        this.controly4 = height/2 + 210;   
      } else if(letter == 'r') {
        this.controlx1 = width/2 - 55;
        this.controly1 = height/2 + 70;
        this.controlx2 = width/2 - 90;
        this.controly2 = height/2 + 100;
        this.controlx3 = width/2 - 145;
        this.controly3 = height/2 + 110;
        this.controlx4 = width/2 - 190;
        this.controly4 = height/2 + 140;  
      } else if(letter == 's') {
        this.controlx1 = width/2 - 70;
        this.controly1 = height/2 + 40;
        this.controlx2 = width/2 - 115;
        this.controly2 = height/2 + 70;
        this.controlx3 = width/2 - 175;
        this.controly3 = height/2 + 90;
        this.controlx4 = width/2 - 220;
        this.controly4 = height/2 + 100;  
      } else if(letter == 't') {
        this.controlx1 = width/2 - 70;
        this.controly1 = height/2 + 15;
        this.controlx2 = width/2 - 140;
        this.controly2 = height/2 + 40;
        this.controlx3 = width/2 - 190;
        this.controly3 = height/2 + 20;
        this.controlx4 = width/2 - 240;
        this.controly4 = height/2 + 60;  
      } else if(letter == 'u') {
        this.controlx1 = width/2 - 70;
        this.controly1 = height/2 - 15;
        this.controlx2 = width/2 - 140;
        this.controly2 = height/2 + 5;
        this.controlx3 = width/2 - 190;
        this.controly3 = height/2 - 20;
        this.controlx4 = width/2 - 240;
        this.controly4 = height/2 - 50;  
      } else if(letter == 'v') {
        this.controlx1 = width/2 - 60;
        this.controly1 = height/2 - 25;
        this.controlx2 = width/2 - 120;
        this.controly2 = height/2 - 10;
        this.controlx3 = width/2 - 170;
        this.controly3 = height/2 - 65;
        this.controlx4 = width/2 - 220;
        this.controly4 = height/2 - 80;  
      } else if(letter == 'w') {
        this.controlx1 = width/2 - 50;
        this.controly1 = height/2 - 20;
        this.controlx2 = width/2 - 100;
        this.controly2 = height/2 - 70;
        this.controlx3 = width/2 - 160;
        this.controly3 = height/2 - 95;
        this.controlx4 = width/2 - 210;
        this.controly4 = height/2 - 130;  
      } else if(letter == 'x') {
        this.controlx1 = width/2 - 60;
        this.controly1 = height/2 - 30;
        this.controlx2 = width/2 - 90;
        this.controly2 = height/2 - 70;
        this.controlx3 = width/2 - 100;
        this.controly3 = height/2 - 105;
        this.controlx4 = width/2 - 160;
        this.controly4 = height/2 - 170;  
      } else if(letter == 'y') {
        this.controlx1 = width/2 - 40;
        this.controly1 = height/2 - 60;
        this.controlx2 = width/2 - 80;
        this.controly2 = height/2 - 100;
        this.controlx3 = width/2 - 60;
        this.controly3 = height/2 - 155;
        this.controlx4 = width/2 - 110;
        this.controly4 = height/2 - 210;  
      } else if(letter == 'z') {
        this.controlx1 = width/2 - 30;
        this.controly1 = height/2 - 50;
        this.controlx2 = width/2 - 20;
        this.controly2 = height/2 - 100;
        this.controlx3 = width/2 - 60;
        this.controly3 = height/2 - 165;
        this.controlx4 = width/2 - 60;
        this.controly4 = height/2 - 240;  
      }
        
        this.show = function(){
            noFill();
            stroke(255);   
            beginShape();
            curveVertex(this.x,this.y);
            curveVertex(this.x,this.y);
            curveVertex(this.controlx1, this.controly1);
            curveVertex(this.controlx2, this.controly2);
            curveVertex(this.controlx3, this.controly3)
            curveVertex(this.controlx4, this.controly4);
            curveVertex(this.controlx4, this.controly4);
            endShape();  
        }
        this.update = function(){
            this.controlx1 += random(-1,1);
            this.controly1 += random(-1,1);
            this.controlx2 += random(-1,1);
            this.controly2 += random(-1,1);
            this.controlx3 += random(-1,1);
            this.controly3 += random(-1,1);
           
        }
    }
    

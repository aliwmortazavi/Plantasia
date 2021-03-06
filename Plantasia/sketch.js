    
    var words = "";
    var notes = [];
    var roots = [];
    var rootsBool = [];
    var notesAfter = [];
    var rootsAfter1 = [];
    var rootsAfter2 = [];
    var rootsAfter3 = [];
    var rootsAfter4 = [];
    var rootsBoolAfter = [];
    var aSound;
    var bSound;
    var cSound;
    var dSound;
    var eSound;
    var fSound;
    var gSound;
    var hSound;
    var iSound;
    var jSound;
    var kSound;
    var lSound;
    var mSound;
    var nSound;
    var oSound;
    var pSound;
    var qSound;
    var rSound;
    var sSound;
    var tSound;
    var uSound;
    var vSound;
    var wSound;
    var xSound;
    var ySound;
    var zSound;
    var myFont;
    var wordsAfter = "";
    var time;
    var fadingFill = 255;
    var firstCircle = 200;
    var ang1;
    var tx;
    var size1 = 75;
    var direction;
    var IMAGES = 26;
    var PATH = 'Full bloom/', FILE = 'letter_', EXT = '.png';
    var imgs = Array(IMAGES);
    var defaultImg = true;
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
        leafTest = loadImage('leaf_test.png'); 
        myFont = loadFont('Quicksand_Book.otf');
         for (var i = 0; i != IMAGES; 
              imgs[i] = loadImage(PATH + FILE + ++i + EXT));
        
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
        //textFont(myFont);
        textSize(14);
        textAlign(RIGHT);
        delay = new p5.Delay();
        for(var i = 0; i < 26; i++){
            rootsBool[i] = false;
            rootsBoolAfter[i] = false;
            rootsAfter1[i] = false;
            rootsAfter2[i] = false;
            rootsAfter3[i] = false;
            rootsAfter4[i] = false;
        }
    }

    function draw() {
        time = millis();
        console.log("wordAfter: ", wordsAfter);
        if(time > 8000 && time < 28000){
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

            ellipse(width/2, height/2, 10, 10);
            noFill();
            stroke(255);
                
            for(var j = 0; j < roots.length; j++){
                roots[j].show();
                roots[j].update();
            }
            fill(255);
            textFont(myFont);
            textAlign(RIGHT);
            text(words, width/2 + 9, height/2 + 80); 
        }
        
        if(time > 28000){
            resetBackground();
            stroke(fadingFill);
             for(var j = 0; j < roots.length; j++){
                 noFill();
                 roots[j].show();
                 fill(fadingFill);
                 notes[j].display();
            }
            textFont(myFont);
            textAlign(RIGHT);
            text(words, width/2 + 9, height/2 + 80);
            fadingFill--;
            
            stroke(120);
            fill(255);

            strokeWeight(.5);
            for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].display();
            }
            for(var x = -60; x <=60; x+=10){
                line(0,height/2 + x,width,height/2 + x);
            }
            fill(255);
            stroke(255);
            ellipse(width/2, height/2, 10, 10);

            text(wordsAfter, width/2 + 9, height/2 + 80); 
            imageMode(CENTER);
            ang1 = TWO_PI * noise(0.005*frameCount + 10);		
	        tx = firstCircle ;
            if(size1 > 20){
	           size1 = 75 - 0.01*frameCount;
            }
            if(firstCircle > 100){
                firstCircle -= 1;
            }
            push();
	       translate(width/2, height/2);
	       for (var i = 0; i < 26; i++) {
		      push();
		      
            rotate(ang1 + TWO_PI * i / 26); 
              
		      translate(tx, 0);
            if(defaultImg == false){
                if(rootsBoolAfter[i] == true){
                    rotate(90);
                    image(leafTest, 0, 0, size1, size1);
                    rotate(-90);
                }
                if(time > 34000){
                    if(rootsAfter1[i] == true){
                        rotate(90);
                        image(leafTest, 40 , 0, 1.2*size1, 1.2*size1); 
                        rotate(-90);
                    }
                    if(time > 39000){
                        if(rootsAfter2[i] == true){
                            rotate(90);
                            image(leafTest, 80, 0, 1.4 *size1, 1.4 *size1);
                            rotate(-90);
                        }
                        if(time > 42000){
                            if(rootsAfter3[i] == true){
                                rotate(90);
                                image(leafTest, 120, 0, 1.6 *size1, 1.6 *size1);
                                rotate(-90);
                                }
                            }
                        }
                    }
            } else { 
                
                                   
                if(rootsBoolAfter[i] == true){
                    rotate(-(ang1 + TWO_PI * i / 26)); 
                    image(imgs[i], 0, 0, size1, size1);
                    rotate(ang1 + TWO_PI * i / 26); 
                }
                if(time > 34000){
                    if(rootsAfter1[i] == true){
                        rotate(-(ang1 + TWO_PI * i / 26)); 
                        image(imgs[i], 40 , 40, 1.2*size1, 1.2*size1);
                        rotate(ang1 + TWO_PI * i / 26); 
                    }
                    if(time > 39000){
                        if(rootsAfter2[i] == true){
                            rotate(-(ang1 + TWO_PI * i / 26)); 
                            image(imgs[i], 80, 80, 1.4 *size1, 1.4 *size1);
                            rotate(ang1 + TWO_PI * i / 26); 
                        }
                        if(time > 42000){
                            if(rootsAfter3[i] == true){
                                rotate(-(ang1 + TWO_PI * i / 26)); 
                                image(imgs[i], 120, 120, 1.6 *size1, 1.6 *size1);
                                rotate(ang1 + TWO_PI * i / 26); 
                                }
                            }
                        }
                    }        
                }
               translate();
		      pop();
            }		
		      pop();
	       }
               
    }

  

    function keyTyped() {
        resetBackground();
        
       
        
      if (key == 'a') {
          aSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(13.5);
            }
              notes[notes.length] = new Note(width/2, height/2 + 60);
              words += "A ";
            if(rootsBool[0] == false){
                roots[roots.length] = new Root("a");
                rootsBool[0] = true;
            }
          } else {
               for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(13.5);
            }
              if(time > 42000 && rootsAfter3[0] == false){
                  rootsAfter3[0] = true;
              } else if(time > 39000 && rootsAfter2[0] == false){
                  rootsAfter2[0] = true;
              } else if(time > 34000 && rootsAfter1[0] == false){
                  rootsAfter1[0] = true;
              } else if(rootsBoolAfter[0] == false){
              rootsBoolAfter[0] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 60);
              wordsAfter += "A ";
          
          }
      } else if (key == 'b') {
          bSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(12.5);
            }
            notes[notes.length] = new Note(width/2, height/2 + 55);
            words += "B ";
            if(rootsBool[1] == false){
              roots[roots.length] = new Root("b");
              rootsBool[1] = true;
            }
          } else {
             for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(12.5);
            }
              if(time > 42000 && rootsAfter3[1] == false){
                  rootsAfter3[1] = true;
              } else if(time > 39000 && rootsAfter2[1] == false){
                  rootsAfter2[1] = true;
              } else if(time > 34000 && rootsAfter1[1] == false){
                  rootsAfter1[1] = true;
              } else if(rootsBoolAfter[1] == false){
              rootsBoolAfter[1] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 55);
              
            wordsAfter += "B ";

          }
      } else if (key == 'c') {
          cSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(15);
            }
            notes[notes.length] = new Note(width/2, height/2 + 50);
            words += "C ";
            if(rootsBool[2] == false){
              roots[roots.length] = new Root("c");
              rootsBool[2] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(15);
            }
              if(time > 42000 && rootsAfter3[2] == false){
                  rootsAfter3[2] = true;
              } else if(time > 39000 && rootsAfter2[2] == false){
                  rootsAfter2[2] = true;
              } else if(time > 34000 && rootsAfter1[2] == false){
                  rootsAfter1[2] = true;
              } else if(rootsBoolAfter[2] == false){
              rootsBoolAfter[2] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 50);

            wordsAfter += "C ";

          }
      } else if(key == 'd') {
          dSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(14);
            }
            notes[notes.length] = new Note(width/2, height/2 + 45);
            words += "D ";
            if(rootsBool[3] == false){
              roots[roots.length] = new Root("d");
              rootsBool[3] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(14);
            }
            if(time > 42000 && rootsAfter3[3] == false){
                  rootsAfter3[3] = true;
              } else if(time > 39000 && rootsAfter2[3] == false){
                  rootsAfter2[3] = true;
              } else if(time > 34000 && rootsAfter1[3] == false){
                  rootsAfter1[3] = true;
              } else if(rootsBoolAfter[3] == false){
              rootsBoolAfter[3] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 45);
              
            wordsAfter += "D ";

          }
      } else if(key == 'e') {
          eSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(12.5);
            }
            notes[notes.length] = new Note(width/2, height/2 + 40);
            words += "E ";
            if(rootsBool[4] == false){
              roots[roots.length] = new Root("e");
              rootsBool[4] = true;
            }
          } else {
            for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(12.5);
            }
            if(time > 42000 && rootsAfter3[4] == false){
                  rootsAfter3[4] = true;
              } else if(time > 39000 && rootsAfter2[4] == false){
                  rootsAfter2[4] = true;
              } else if(time > 34000 && rootsAfter1[4] == false){
                  rootsAfter1[4] = true;
              } else if(rootsBoolAfter[4] == false){
              rootsBoolAfter[4] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 40);
              
            wordsAfter += "E ";

          }
      } else if(key == 'f') {
          fSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(13);
            }
            notes[notes.length] = new Note(width/2, height/2 + 35);
            words += "F ";
            if(rootsBool[5] == false){
              roots[roots.length] = new Root("f");
              rootsBool[5] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(13);
            }
            if(time > 42000 && rootsAfter3[5] == false){
                  rootsAfter3[5] = true;
              } else if(time > 39000 && rootsAfter2[5] == false){
                  rootsAfter2[5] = true;
              } else if(time > 34000 && rootsAfter1[5] == false){
                  rootsAfter1[5] = true;
              } else if(rootsBoolAfter[5] == false){
              rootsBoolAfter[5] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 35);
              
            wordsAfter += "F ";

          }
      } else if(key == 'g') {
          gSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(15.5);
            }
            notes[notes.length] = new Note(width/2, height/2 + 30);
            words += "G ";
            if(rootsBool[6] == false){
              roots[roots.length] = new Root("g");
              rootsBool[6] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(15.5);
            }
            if(time > 42000 && rootsAfter3[6] == false){
                  rootsAfter3[6] = true;
              } else if(time > 39000 && rootsAfter2[6] == false){
                  rootsAfter2[6] = true;
              } else if(time > 34000 && rootsAfter1[6] == false){
                  rootsAfter1[6] = true;
              } else if(rootsBoolAfter[6] == false){
              rootsBoolAfter[6] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 30);
              
            wordsAfter += "G ";

          }
      } else if(key == 'h') {
          hSound.play();
          if(time < 28000){
              for(var i = 0; i < notes.length; i++){
                  notes[i].move(14);
              }
              notes[notes.length] = new Note(width/2, height/2 + 25);
              words += "H ";
            if(rootsBool[7] == false){
                roots[roots.length] = new Root("h");
                rootsBool[7] = true;
            }
          } else {
                for(var i = 0; i < notesAfter.length; i++){
                  notesAfter[i].move(14);
              }
            if(time > 42000 && rootsAfter3[7] == false){
                  rootsAfter3[7] = true;
              } else if(time > 39000 && rootsAfter2[7] == false){
                  rootsAfter2[7] = true;
              } else if(time > 34000 && rootsAfter1[7] == false){
                  rootsAfter1[7] = true;
              } else if(rootsBoolAfter[7] == false){
              rootsBoolAfter[7] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 25);
              
              wordsAfter += "H ";

          }
      } else if(key == 'i') {
          iSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(8.5);
            }
            notes[notes.length] = new Note(width/2 + 5, height/2 + 20);
              words += "I ";
            if(rootsBool[8] == false){
                roots[roots.length] = new Root("i");
                rootsBool[8] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(8.5);
            }
            if(time > 42000 && rootsAfter3[8] == false){
                  rootsAfter3[8] = true;
              } else if(time > 39000 && rootsAfter2[8] == false){
                  rootsAfter2[8] = true;
              } else if(time > 34000 && rootsAfter1[8] == false){
                  rootsAfter1[8] = true;
              } else if(rootsBoolAfter[8] == false){
              rootsBoolAfter[8] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 20);
              
              wordsAfter += "I ";
 
          }
      } else if(key == 'j') {
          jSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(12.5);
            }
            notes[notes.length] = new Note(width/2, height/2 + 15);
            words += "J ";
            if(rootsBool[9] == false){
              roots[roots.length] = new Root("j");
              rootsBool[9] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(12.5);
            }
            if(time > 42000 && rootsAfter3[9] == false){
                  rootsAfter3[9] = true;
              } else if(time > 39000 && rootsAfter2[9] == false){
                  rootsAfter2[9] = true;
              } else if(time > 34000 && rootsAfter1[9] == false){
                  rootsAfter1[9] = true;
              } else if(rootsBoolAfter[9] == false){
              rootsBoolAfter[9] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 15);
              
            wordsAfter += "J ";

          }
      } else if(key == 'k') {
          kSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(14);
            }
              notes[notes.length] = new Note(width/2, height/2 + 10);
            words += "K ";
            if(rootsBool[10] == false){
                roots[roots.length] = new Root("k");
                rootsBool[10] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(14);
            }
            if(time > 42000 && rootsAfter3[10] == false){
                  rootsAfter3[10] = true;
              } else if(time > 39000 && rootsAfter2[10] == false){
                  rootsAfter2[10] = true;
              } else if(time > 34000 && rootsAfter1[10] == false){
                  rootsAfter1[10] = true;
              } else if(rootsBoolAfter[10] == false){
              rootsBoolAfter[10] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 10);
              
            wordsAfter += "K "; 
          }
      } else if(key == 'l') {
          lSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(13);
            }
            notes[notes.length] = new Note(width/2, height/2 + 5);
            words += "L ";
            if(rootsBool[11] == false){
                roots[roots.length] = new Root("l");
                rootsBool[11] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(13);
            }
            if(time > 42000 && rootsAfter3[11] == false){
                  rootsAfter3[11] = true;
              } else if(time > 39000 && rootsAfter2[11] == false){
                  rootsAfter2[11] = true;
              } else if(time > 34000 && rootsAfter1[11] == false){
                  rootsAfter1[11] = true;
              } else if(rootsBoolAfter[11] == false){
              rootsBoolAfter[11] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 + 5);
              
            wordsAfter += "L ";

          }
      } else if(key == 'm') {
          mSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(15.5);
            }
            notes[notes.length] = new Note(width/2, height/2);
            words += "M ";
            if(rootsBool[12] == false){
                roots[roots.length] = new Root("m");
                rootsBool[12] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(15.5);
            }
            if(time > 42000 && rootsAfter3[12] == false){
                  rootsAfter3[12] = true;
              } else if(time > 39000 && rootsAfter2[12] == false){
                  rootsAfter2[12] = true;
              } else if(time > 34000 && rootsAfter1[12] == false){
                  rootsAfter1[12] = true;
              } else if(rootsBoolAfter[12] == false){
              rootsBoolAfter[12] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 );
              
            wordsAfter += "M ";

          }
      } else if(key == 'n') {
          nSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(14.5);
            }
              notes[notes.length] = new Note(width/2, height/2 - 5);
            words += "N ";
            if(rootsBool[13] == false){
                roots[roots.length] = new Root("n");
                rootsBool[13] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(14.5);
            }
            if(time > 42000 && rootsAfter3[13] == false){
                  rootsAfter3[13] = true;
              } else if(time > 39000 && rootsAfter2[13] == false){
                  rootsAfter2[13] = true;
              } else if(time > 34000 && rootsAfter1[13] == false){
                  rootsAfter1[13] = true;
              } else if(rootsBoolAfter[13] == false){
              rootsBoolAfter[13] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 5);
              
            wordsAfter += "N ";

          }
      } else if(key == 'o') {
          oSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(16);
            }
            notes[notes.length] = new Note(width/2 -3, height/2 - 10);
            words += "O ";
            if(rootsBool[14] == false){
                roots[roots.length] = new Root("o");
                rootsBool[14] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(16);
            }
            if(time > 42000 && rootsAfter3[14] == false){
                  rootsAfter3[14] = true;
              } else if(time > 39000 && rootsAfter2[14] == false){
                  rootsAfter2[14] = true;
              } else if(time > 34000 && rootsAfter1[14] == false){
                  rootsAfter1[14] = true;
              } else if(rootsBoolAfter[14] == false){
              rootsBoolAfter[14] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 10);
              
            wordsAfter += "O ";


          }
      } else if(key == 'p') {
          pSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(13.5);
            }
            notes[notes.length] = new Note(width/2 - 3, height/2 -15);
            words += "P ";
            if(rootsBool[15] == false){
                roots[roots.length] = new Root("p");
                rootsBool[15] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(13.5);
            }
            if(time > 42000 && rootsAfter3[15] == false){
                  rootsAfter3[15] = true;
              } else if(time > 39000 && rootsAfter2[15] == false){
                  rootsAfter2[15] = true;
              } else if(time > 34000 && rootsAfter1[15] == false){
                  rootsAfter1[15] = true;
              } else if(rootsBoolAfter[15] == false){
              rootsBoolAfter[15] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 15);
              
            wordsAfter += "P ";

          }
      } else if(key == 'q') {
          qSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(15.5);
            }
            notes[notes.length] = new Note(width/2, height/2 - 20);
            words += "Q ";
            if(rootsBool[16] == false){
                roots[roots.length] = new Root("q");
                rootsBool[16] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(15.5);
            }
            if(time > 42000 && rootsAfter3[16] == false){
                  rootsAfter3[16] = true;
              } else if(time > 39000 && rootsAfter2[16] == false){
                  rootsAfter2[16] = true;
              } else if(time > 34000 && rootsAfter1[16] == false){
                  rootsAfter1[16] = true;
              } else if(rootsBoolAfter[16] == false){
              rootsBoolAfter[16] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 20);
              
            wordsAfter += "Q ";
  
          }
      } else if(key == 'r') {
          rSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(13);
            }
            notes[notes.length] = new Note(width/2 - 3, height/2 - 25);
            words += "R ";
            if(rootsBool[17] == false){
                roots[roots.length] = new Root("r");
                rootsBool[17] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(13);
            }
            if(time > 42000 && rootsAfter3[17] == false){
                  rootsAfter3[17] = true;
              } else if(time > 39000 && rootsAfter2[17] == false){
                  rootsAfter2[17] = true;
              } else if(time > 34000 && rootsAfter1[17] == false){
                  rootsAfter1[17] = true;
              } else if(rootsBoolAfter[17] == false){
              rootsBoolAfter[17] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 25);
              
            wordsAfter += "R ";
          }
      } else if(key == 's') {
          sSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(13.7);
            }   
            notes[notes.length] = new Note(width/2, height/2 - 30);
            words += "S ";
            if(rootsBool[18] == false){
                roots[roots.length] = new Root("s");
                rootsBool[18] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(13.7);
            }   
            if(time > 42000 && rootsAfter3[18] == false){
                  rootsAfter3[18] = true;
              } else if(time > 39000 && rootsAfter2[18] == false){
                  rootsAfter2[18] = true;
              } else if(time > 34000 && rootsAfter1[18] == false){
                  rootsAfter1[18] = true;
              } else if(rootsBoolAfter[18] == false){
              rootsBoolAfter[18] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 30);
              
            wordsAfter += "S ";

          }
      } else if(key == 't') {
          tSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(13.5);
            }
            notes[notes.length] = new Note(width/2, height/2 - 35);
            words += "T ";
            if(rootsBool[19] == false){
                roots[roots.length] = new Root("t");
                rootsBool[19] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(13.5);
            }
            if(time > 42000 && rootsAfter3[19] == false){
                  rootsAfter3[19] = true;
              } else if(time > 39000 && rootsAfter2[19] == false){
                  rootsAfter2[19] = true;
              } else if(time > 34000 && rootsAfter1[19] == false){
                  rootsAfter1[19] = true;
              } else if(rootsBoolAfter[19] == false){
              rootsBoolAfter[19] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 35);
              
            wordsAfter += "T ";

          }
      } else if(key == 'u') {
          uSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(15.3);
            }
            notes[notes.length] = new Note(width/2, height/2 - 40);
            words += "U ";
            if(rootsBool[20] == false){
                roots[roots.length] = new Root("u");
                rootsBool[20] = true;
            }
          } else {
             for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(15.3);
            }
            if(time > 42000 && rootsAfter3[20] == false){
                  rootsAfter3[20] = true;
              } else if(time > 39000 && rootsAfter2[20] == false){
                  rootsAfter2[20] = true;
              } else if(time > 34000 && rootsAfter1[20] == false){
                  rootsAfter1[20] = true;
              } else if(rootsBoolAfter[20] == false){
              rootsBoolAfter[20] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 40);
              
            wordsAfter += "U ";
 
          }
      } else if(key == 'v') {
          vSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(14.2);
            }
            notes[notes.length] = new Note(width/2, height/2 - 45);
            words += "V ";
            if(rootsBool[21] == false){
                roots[roots.length] = new Root("v");
                rootsBool[21] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(14.2);
            }
            if(time > 42000 && rootsAfter3[21] == false){
                  rootsAfter3[21] = true;
              } else if(time > 39000 && rootsAfter2[21] == false){
                  rootsAfter2[21] = true;
              } else if(time > 34000 && rootsAfter1[21] == false){
                  rootsAfter1[21] = true;
              } else if(rootsBoolAfter[21] == false){
              rootsBoolAfter[21] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 45);
              
            wordsAfter += "V ";

          }
      } else if(key == 'w') {
          wSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(19.5);
            }
            notes[notes.length] = new Note(width/2 - 5, height/2 - 50);
            words += "W ";
            if(rootsBool[22] == false){
              roots[roots.length] = new Root("w");
              rootsBool[22] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(19.5);
            }
            if(time > 42000 && rootsAfter3[22] == false){
                  rootsAfter3[22] = true;
              } else if(time > 39000 && rootsAfter2[22] == false){
                  rootsAfter2[22] = true;
              } else if(time > 34000 && rootsAfter1[22] == false){
                  rootsAfter1[22] = true;
              } else if(rootsBoolAfter[22] == false){
              rootsBoolAfter[22] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 50);
              
            wordsAfter += "W ";
            
          }
      } else if(key == 'x') {
          xSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(14.2);
            }
            notes[notes.length] = new Note(width/2 , height/2 - 55);
            words += "X ";
            if(rootsBool[23] == false){
                roots[roots.length] = new Root("x");
                rootsBool[23] = true;
            }
          } else {
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(14.2);
            }
            if(time > 42000 && rootsAfter3[23] == false){
                  rootsAfter3[23] = true;
              } else if(time > 39000 && rootsAfter2[23] == false){
                  rootsAfter2[23] = true;
              } else if(time > 34000 && rootsAfter1[23] == false){
                  rootsAfter1[23] = true;
              } else if(rootsBoolAfter[23] == false){
              rootsBoolAfter[23] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 55);
              
            wordsAfter += "X ";
          }
      } else if(key == 'y') {
          ySound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(13.7);
            }
            notes[notes.length] = new Note(width/2, height/2 - 60);
            words += "Y ";
            if(rootsBool[24] == false){
                roots[roots.length] = new Root("y");
                rootsBool[24] = true;
            }
          } else {
               for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(13.7);
            }
            if(time > 42000 && rootsAfter3[24] == false){
                  rootsAfter3[24] = true;
              } else if(time > 39000 && rootsAfter2[24] == false){
                  rootsAfter2[24] = true;
              } else if(time > 34000 && rootsAfter1[24] == false){
                  rootsAfter1[24] = true;
              } else if(rootsBoolAfter[24] == false){
              rootsBoolAfter[24] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 60);
              
            wordsAfter += "Y ";

          }
      } else if(key == 'z') {
          zSound.play();
          if(time < 28000){
            for(var i = 0; i < notes.length; i++){
                notes[i].move(14);
            }
            notes[notes.length] = new Note(width/2, height/2 - 65);
            words += "Z ";
            if(rootsBool[25] == false){
                roots[roots.length] = new Root("z");
                rootsBool[25] = true;
            }
          } else {
             for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(14);
            }
            if(time > 42000 && rootsAfter3[25] == false){
                  rootsAfter3[25] = true;
              } else if(time > 39000 && rootsAfter2[25] == false){
                  rootsAfter2[25] = true;
              } else if(time > 34000 && rootsAfter1[25] == false){
                  rootsAfter1[25] = true;
              } else if(rootsBoolAfter[25] == false){
              rootsBoolAfter[25] = true;
              }
              notesAfter[notesAfter.length] = new Note(width/2, height/2 - 65);
              
            wordsAfter += "Z ";

          }
      } else if(key == ' '){
          if(time < 28000){
              words += "  ";
            for(var i = 0; i < notes.length; i++){
                notes[i].move(8.6);
            }
          } else {
              wordsAfter += "  ";
              for(var i = 0; i < notesAfter.length; i++){
                notesAfter[i].move(8.6);
            }
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
    
    function show_flower(){
        imageMode(CENTER);
            if(abs(ang1-TWO_PI) < .25){
                direction = direction * -1;
                
            }
            ang1 = TWO_PI * noise(0.005*frameCount + 10);		
	        tx = firstCircle * noise(0.01*frameCount + 50);
	        size1 = 200 * noise(0.01*frameCount + 60);
            firstCircle -= .5;
            push();
	       translate(width/2, height/2);
	       for (var i = 0; i < 26; i++) {
		      push();
		      if(defaultImg == false){
                  rotate(ang1 + TWO_PI * i / 26); 
              }
		      translate(tx, 0);
              if(rootsBoolAfter[i] == true){
                  if(defaultImg == false){
                        image(ericTest, 0, 0, size1, size1);
                  } else { 
                        image(imgs[i], 0, 0, size1, size1);                    
                        
                  }
                }		
		      translate();
		      pop();
	       }
            pop();
    }

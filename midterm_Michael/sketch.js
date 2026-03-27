// These are functions used in scenes 2 and 3
function drawtree(x, y) {
  stroke(0);
  strokeWeight(1);
  fill('brown');
  rect(x, y, 10, 40);
  fill('green');
  triangle(x - 10, y + 10, x + 5, y - 35, x + 20, y + 10);
  triangle(x - 20, y, x + 5, y - 45, x + 30, y);
}
//small trees made for distance
function drawSmallTree(x, y) {
  stroke(0);
  strokeWeight(1);
  fill('brown');
  rect(x, y, 8, 30);
  fill('green');
  triangle(x - 8, y + 8, x + 4, y - 25, x + 16, y + 8);
  triangle(x - 14, y, x + 4, y - 35, x + 22, y);
}

function drawrock(x, y) {
  fill('gray');
  ellipse(x, y, 30, 20);   //gray elipse
}

function drawStar(x, y) {
  strokeWeight(0.0);
  fill(starcolor);               //a small triangle with a variable called starcolor
  triangle(x, y - 10, x - 5, y + 5, x + 5, y + 5);
}

function drawCloud(x,y){
noStroke();
fill(cloudColor);
ellipse(x+100,y+100,90,30);
circle(x+97,y+120,38);
circle(x+127,y+120,38);
circle(x+150,y+100,38);                //white circles manualy place to form the cloud shape
circle(x+130,y+82,38);
circle(x+95,y+89,38);
circle(x+75,y+105,38);
}




let scene = 0;   // Tracks the scene
let skycolor = 'skyblue';
let circleColor = 'orange';   // Used for scenes 2 and 3
let starcolor = 'skyblue';

let cloudX1 = 0 ;           //holds the x of the cloud
let cloudX2 = -200 ;          
let cloudX3 = -400 ;            
let cloudX4 = -600 ;  

let cloudY1 = -50;           //holds the y of the cloud
let cloudY2 = -30;
let cloudY3 = -45;
let cloudY4 =  40;

let drops = [];    // Scene 3 rain variables
let showDrops = false; //holds the switch for visible rain

let scene4Night = false; //scene 4 night switch
let scene4Sky;          
let cloudColor = [255];     
let scene4Rain = false;   // switch for scene 4 rain
let scene4Drops = [];     //holds number of drops





//These are control functions to manage interactions
function mousePressed() {

//Buttons for the scenes

//Scene bottons. This is just saying that if i click in any area within a botton then i will go to the corresponding scene
if (scene == 0){
    if(mouseX >= 150 && mouseX <= 300 && mouseY >= 200  && mouseY <= 250  ){
        scene = 1;
   }else if (mouseX >= 150 && mouseX <= 300 && mouseY >= 270  && mouseY <= 320){
        scene = 2;
      }else if (mouseX >= 150 && mouseX <= 300 && mouseY >= 340  && mouseY <= 390){
        scene = 3;
      }
      else if (mouseX >= 150 && mouseX <= 300 && mouseY >= 410  && mouseY <= 460){
        scene = 4;
      }
}


//Back button. Here i did the same but instead i teleport to the menu
if (scene == 1 || scene == 2 ||  scene == 3 || scene == 4 ){
  if (mouseX >= 10 && mouseX <= 50 && mouseY >= 10  && mouseY <= 40  ){
    scene = 0;
  }
}



  // Scene 3 mouse click interaction rain drops apear randomly on the sky
  if (scene == 3) {
    showDrops = !showDrops;

   // when i click 
    if (showDrops) {
      drops = [];
      for (let i = 0; i < 80; i++) {
        drops.push({
          x: random(width),
          y: random(0, 300), // only sky area
          w: random(6, 12),
          h: random(12, 20)
        });
      }
    }

    // Day/night toggle
    if (skycolor === 'skyblue') {
      skycolor = [8, 21, 37];
      circleColor = [255, 255, 246];
      starcolor = 'yellow';
    } else {
      skycolor = 'skyblue';
      circleColor = 'orange';
      starcolor = 'skyblue';
    }
  }

  //scene 4 mouse interaction
  if (scene == 4) {
  if (scene4Night == false) {
    // daytime sky
    scene4Sky = color(
      random(80, 140),           // I'm creating a range of color for both nigh and day. Day i get a range of light colors and at night i get a range of dark colors
      random(140, 190),
      random(210, 255)
    );

    // daytime clouds: white - light gray
    cloudColor = color(
      random(220, 255),
      random(220, 255),
      random(220, 255)
    );
  } else {
    // nighttime sky
    scene4Sky = color(
      random(5, 20),
      random(15, 35),
      random(35, 70)
    );

    // nighttime clouds: dark gray
    cloudColor = color(
      random(40, 80),
      random(40, 80),
      random(45, 90)
    );
  }
}
}
//These control functions but with keyboard inputs
function keyPressed(){
  //scene 2 sky change interaction
  if (scene == 2 && key == 't'){
    if(skycolor == 'skyblue'){
      skycolor = [8,21,37];                 // Here i'm setting t as a key that if pressed will change the sky to night (dark collor) and the stars also chage to yellow allowing them to be visable
      circleColor = [255,255,246];
      starcolor = 'yellow'
    }else{
      skycolor = 'skyblue';
      circleColor = 'orange';
      starcolor = 'skyblue';
    }

  }

   //scene 4 sky change 
if (scene == 4 && (key == 't' )) {
  scene4Night = !scene4Night;

  if (scene4Night == false) {
    // switch to day colors
    scene4Sky = color(
      random(80, 140),
      random(140, 190),
      random(210, 255)
    );

    cloudColor = color(
      random(220, 255),
      random(220, 255),
      random(220, 255)
    );
    starcolor = 'skyblue'
  } else {
    // switch to night colors
    scene4Sky = color(
      random(5, 20),
      random(15, 35),   // this changes the range of colors for my sky. it goes from light color range to a dark color range.
      random(35, 70)
    );

    cloudColor = color(
      random(40, 80),
      random(40, 80),
      random(45, 90)
    );
starcolor = 'yellow';

  }
}
if (scene == 4 && (key == 'r' )) {
  scene4Rain = !scene4Rain;     // the switch for rain in scene 4.
}
}

//set my different scenes
function setup() {
  createCanvas(500, 500);
 scene4Sky = color(135, 206, 235); // starting scene 4 color skyblue


for (let i = 0; i < 120; i++) {
  scene4Drops.push({
    x: random(width),
    y: random(-500, height),    //creates the rain drops and sets it speed and place
    speed: random(4, 9), 
    len: random(10, 18)
  });
}
}

function draw() {
  background(0);

  // This is what switches scenes
  if (scene == 0) {
    doscene0();
  }
  else if (scene == 1) {
    doscene1();
  }
  else if (scene == 2) {
    doscene2();
  }
  else if (scene == 3) {
    doscene3();
  }
  else if (scene == 4) {
    doscene4();
  }
}






// The menu for the short study
function doscene0() {
  background('skyblue');
  textSize(24);
  fill(255);
  text("Michael Suero", 10, 100);

stroke(0);
strokeWeight(1);

fill('skyblue')                 // the following 3 are my bottons which are just rects
rect(150,200,150,50);
text("Scene 1",180,235);

fill('skyblue')
rect(150,270,150,50);
text("Scene 2",180,305);

fill('skyblue')
rect(150,340,150,50);
text("Scene 3",180,375);

fill('skyblue')
rect(150,410,150,50);
text("Scene 4",180,445);

cloudX1 = cloudX1 + 1      // this continuously moves the clouds to the right 
cloudX2 = cloudX2 + 1
cloudX3 = cloudX3 + 1
cloudX4 = cloudX4 + 1
fill(255);
drawCloud(cloudX1,cloudY1);   // Here im just drawing the clouds 
drawCloud(cloudX2,cloudY2);
drawCloud(cloudX3,cloudY3);
drawCloud(cloudX4,cloudY4);

if (cloudX1 >=600 ){          // If the cloud leave the screen they get teleported back to a negative number (off screen) they then loop
cloudX1 = -150
cloudY1 = random(-60,45)
}

if (cloudX2 >=600 ){
cloudX2 = -150
cloudY2 = random(-60,45)
}

if (cloudX3 >=600 ){
cloudX3 = -150
cloudY3 = random(-60,45)
}

if (cloudX4 >=600 ){
cloudX4 = -150
cloudY4 = random(-60,45)
}

}




function doscene1() {
  background(143, 247, 252);
  textSize(24);
  fill(255);
  text("Michael Suero", 10, 100);

  fill(255, 46, 5);
  circle(485, 25, 100);

  fill('gray');
  rect(0, 400, 500, 100);

  fill('white');   // This is the building and road
  rect(0, 450, 50, 10);
  rect(100, 450, 50, 10);
  rect(200, 450, 50, 10);
  rect(300, 450, 50, 10);
  rect(400, 450, 50, 10);

  fill('green');
  rect(0, 400, 500, 10);

  fill('gray');
  rect(200, 175, 125, 225);

  fill(71, 215, 255);
  rect(220, 200, 20, 30);
  rect(280, 200, 20, 30);
  rect(220, 250, 20, 30);
  rect(280, 250, 20, 30);
  rect(220, 300, 20, 30);
  rect(280, 300, 20, 30);

  fill('black');
  rect(245, 350, 30, 50);

  fill('white');
  circle(270, 375, 10);

  fill('brown');
  rect(20, 310, 10, 100);
  stroke('black');
  strokeWeight(2);
  fill('black');
  square(20, 305, 10);
  fill('brown');
  rect(30, 310, 40, 5);

  fill('brown');
  rect(170, 310, 10, 100);
  fill('black');
  square(170, 305, 10);   // Electrical poles
  fill('brown');
  rect(130, 310, 40, 5);

  fill('brown');
  rect(340, 310, 10, 100);
  fill('black');
  square(340, 305, 10);
  fill('brown');
  rect(350, 310, 40, 5);

  fill('brown');
  rect(490, 310, 10, 100);
  fill('black');
  square(490, 305, 10);
  fill('brown');
  rect(450, 310, 40, 5);

  fill('brown');
  rect(60, 370, 10, 40);
  fill('green');
  triangle(50, 380, 65, 335, 80, 380);
  triangle(40, 370, 65, 325, 90, 370);

  fill('brown');
  rect(130, 370, 10, 40);
  fill('green');   // Trees
  triangle(120, 380, 135, 335, 150, 380);
  triangle(110, 370, 135, 325, 160, 370);

  fill('brown');
  rect(380, 370, 10, 40);
  fill('green');
  triangle(370, 380, 385, 335, 400, 380);
  triangle(360, 370, 385, 325, 410, 370);

  fill('brown');
  rect(450, 370, 10, 40);
  fill('green');
  triangle(440, 380, 455, 335, 470, 380);
  triangle(430, 370, 455, 325, 480, 370);

  fill('red');
  rect(30, 410, 80, 40);
  

  fill('red');
  strokeWeight(1);
  textSize(14);
  text("Back",10,20);
}

function doscene2() {
  background(skycolor);

  textSize(24);
  fill(255);
  text("Michael Suero", 10, 100);

  fill('green');
  rect(0, 300, 500, 200);
  strokeWeight(.5);

  drawtree(220, 430);
  drawtree(330, 300);
  drawtree(430, 320);
  drawtree(100, 310);
  drawtree(180, 390);
  drawtree(120, 420);
  drawtree(180, 305);
  drawtree(250, 350);
  drawtree(130, 340);
  drawtree(370, 350);
  drawtree(460, 380);

  drawrock(50, 450);
  drawrock(110, 480);
  drawrock(85, 400);
  drawrock(50, 340);
  drawrock(300, 450);
  drawrock(350, 420);
  drawrock(330, 370);
  drawrock(300, 330);

  drawStar(150, 60);
  drawStar(220, 140);
  drawStar(305, 90);
  drawStar(410, 200);
  drawStar(360, 75);
  drawStar(180, 250);
  drawStar(260, 295);
  drawStar(440, 120);
  drawStar(390, 280);
  drawStar(130, 180);
  drawStar(275, 55);
  drawStar(460, 285);
  drawStar(340, 160);
  drawStar(210, 95);
  drawStar(370, 220);
  drawStar(290, 260);
  drawStar(420, 40);
  drawStar(155, 290);
  drawStar(245, 175);
  drawStar(400, 135);
  drawStar(330, 60);
  drawStar(470, 210);
  drawStar(195, 265);
  drawStar(360, 145);
  drawStar(280, 30);
  drawStar(410, 260);
  drawStar(170, 110);
  drawStar(300, 200);
  drawStar(450, 80);
  drawStar(230, 240);

  fill('red');
  strokeWeight(1);
  textSize(14);
  text("Back",10,20);

   fill('purple');
   text("Press T to interact",120,200);
  fill(circleColor);
  circle(mouseX, mouseY, 50);
}

function doscene3() {
  background(skycolor);

  textSize(24);
  fill(255);
  text("Michael Suero", 10, 50);
  fill('green');
  rect(0, 300, 500, 200);
  drawtree(10, 350);
  drawtree(330, 300);
  drawtree(430, 320);
  drawtree(100, 310);
  drawtree(180, 390);
  drawtree(120, 420);
  drawtree(180, 305);
  drawtree(250, 350);
  drawtree(130, 340);
  drawtree(370, 350);
  drawtree(460, 380);

  drawrock(50, 450);
  drawrock(110, 480);
  drawrock(85, 400);
  drawrock(50, 340);
  drawrock(300, 450);
  drawrock(350, 420);
  drawrock(330, 370);
  drawrock(300, 330);

  drawStar(150, 60);
  drawStar(220, 140);
  drawStar(305, 90);
  drawStar(410, 200);
  drawStar(360, 75);
  drawStar(180, 250);
  drawStar(260, 295);
  drawStar(440, 120);
  drawStar(390, 280);
  drawStar(130, 180);
  drawStar(275, 55);
  drawStar(460, 285);
  drawStar(340, 160);
  drawStar(210, 95);
  drawStar(370, 220);
  drawStar(290, 260);
  drawStar(420, 40);
  drawStar(155, 290);
  drawStar(245, 175);
  drawStar(400, 135);
  drawStar(330, 60);
  drawStar(470, 210);
  drawStar(195, 265);
  drawStar(360, 145);
  drawStar(280, 30);
  drawStar(410, 260);
  drawStar(170, 110);
  drawStar(300, 200);
  drawStar(450, 80);
  drawStar(230, 240);

  fill('red');
  strokeWeight(1);
  textSize(14);
  text("Back",10,20);
 
  fill('red');
   text("Mouse click to interact",120,200);
  fill(circleColor);
  noStroke();
  circle(mouseX, mouseY, 50);

  // Draw water drops if active
  if (showDrops) {
    stroke(0);
    strokeWeight(1);
    fill(120, 180, 255);
    for (let i = 0; i < drops.length; i++) {
      ellipse(drops[i].x, drops[i].y, drops[i].w, drops[i].h);
    }
  }
}

function doscene4(){

background(scene4Sky); // sky

  textSize(24);
  fill(255);
  text("Michael Suero", 10, 50);
 drawStar(150, 60);
  drawStar(220, 140);
  drawStar(305, 90);
  drawStar(410, 200);
  drawStar(360, 75);
  drawStar(180, 250);
  drawStar(260, 295);
  drawStar(440, 120);
  drawStar(390, 280);
  drawStar(130, 180);
  drawStar(275, 55);
  drawStar(460, 285);
  drawStar(340, 160);
  drawStar(210, 95);
  drawStar(370, 220);
  drawStar(290, 260);
  drawStar(420, 40);
  drawStar(155, 290);
  drawStar(245, 175);
  drawStar(400, 135);
  drawStar(330, 60);
  drawStar(470, 210);
  drawStar(195, 265);
  drawStar(360, 145);
  drawStar(280, 30);
  drawStar(410, 260);
  drawStar(170, 110);
  drawStar(300, 200);
  drawStar(450, 80);
  drawStar(230, 240);
  
 
// top ground 
fill(90, 140, 90);
ellipse(80, 380, 300, 180);
ellipse(250, 360, 340, 200);
ellipse(440, 380, 300, 180);

// bottom ground 
fill(70, 120, 70);
ellipse(60, 520, 300, 220);
ellipse(250, 480, 360, 260);
ellipse(440, 520, 300, 220);


// rocks
drawrock(70, 430);
drawrock(155, 400);
drawrock(245, 455);
drawrock(320, 390);
drawrock(410, 440);
drawrock(60, 340);
drawrock(150, 330);
drawrock(260, 320);
drawrock(340, 330);
drawrock(420, 340);

// back trees
drawSmallTree(20, 310);
drawSmallTree(80, 295);
drawSmallTree(140, 285);
drawSmallTree(220, 275);
drawSmallTree(300, 285);
drawSmallTree(380, 295);
drawSmallTree(450, 310);

// middle trees
drawtree(40, 355);
drawtree(120, 340);
drawtree(190, 330);
drawtree(270, 325);
drawtree(350, 335);
drawtree(430, 350);

// front trees
drawtree(30, 415);
drawtree(100, 425);
drawtree(170, 410);
drawtree(250, 405);
drawtree(330, 410);
drawtree(400, 420);


  
cloudX1 = cloudX1 + 1
cloudX2 = cloudX2 + 1
cloudX3 = cloudX3 + 1
cloudX4 = cloudX4 + 1
drawCloud(cloudX1,cloudY1);
drawCloud(cloudX2,cloudY2);
drawCloud(cloudX3,cloudY3);
drawCloud(cloudX4,cloudY4);

if (cloudX1 >=600 ){
cloudX1 = -150
cloudY1 = random(-60,45)
}

if (cloudX2 >=600 ){
cloudX2 = -150
cloudY2 = random(-60,45)
}

if (cloudX3 >=600 ){
cloudX3 = -150
cloudY3 = random(-60,45)
}

if (cloudX4 >=600 ){
cloudX4 = -150
cloudY4 = random(-60,45)
}

if (scene4Rain) {
  stroke(160, 180, 220);
  strokeWeight(2);

  for (let i = 0; i < scene4Drops.length; i++) {
    let d = scene4Drops[i];

    line(d.x, d.y, d.x, d.y + d.len);
    d.y += d.speed;

    if (d.y > height) {
      d.y = random(-100, 0);
      d.x = random(width);
    }
  }

  noStroke();
}
// semi transprent gray to add fog to night

if (scene4Night) {
  fill(20, 30, 50, 80);
  rect(0, 0, width, height);
}
 // label
  fill('black');
  textSize(18);
  text("Click to change color", 280, 150);
  text("Press T to toggle time", 280, 205);
  text("Press r to toggle rain", 280, 105);
 
// back button
  fill('red');
  textSize(14);
  text("Back", 10, 20);





 
  
}


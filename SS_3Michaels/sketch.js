
//Michael Suero.               Title : Night and Day.               
//This sketch is a landscape of a forest. It is ment to explore the concept of nigth and day.
// Intructions: Click the mouse to change from day to night and vice versa. The circle will change color as well.

function drawtree(x,y){
   fill('brown');
rect(x, y, 10, 40);
fill('green');
triangle(x - 10, y + 10, x + 5, y - 35, x + 20, y + 10);
  triangle(x - 20, y, x + 5, y - 45, x + 30, y);
}
  function drawrock(x,y){
  fill('gray');
  ellipse(x, y, 30, 20);
  }
function drawStar(x,y){
  strokeWeight(0.0);
  fill(starcolor);
  triangle(x, y - 10, x - 5, y + 5, x + 5, y + 5) ;

}
function setup() {
  createCanvas(500, 500);
  
  skycolor = ('skyblue');
  circleColor = ('orange');
  starcolor = ('skyblue');
}

function draw() {
  background(skycolor);

  textSize(24);
fill('green');
  text("Michael Suero", 10,100);

  fill('green')
  rect(0,300,500,200);
strokeWeight(.5);

drawtree(50,350);
drawtree(330,300);
drawtree(430,320);
drawtree(100,310);
drawtree(180,390);
drawtree(120,420);
drawtree(180,305);
drawtree(250,350);
drawtree(130,340);
drawtree(370,350);
drawtree(460,380);

drawrock(50,450);
drawrock(110,480);
drawrock(85,400);
drawrock(50,340);
drawrock(300,450);
drawrock(350,420);
drawrock(330,370);
drawrock(300,330);

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



fill(circleColor);
 circle(mouseX, mouseY, 50);

 keyPressed = function() {
  if (skycolor === 'skyblue') {
    skycolor = [8, 21, 37]; // Using an array to represent RGB values
    circleColor = [255, 255, 246]; // Using an array to represent RGB values
starcolor = 'yellow';
x = random(0, 500);
y = random(0, 500);
  } else {
    skycolor = 'skyblue';
    circleColor = 'orange';
starcolor = 'skyblue';
  }

 }}
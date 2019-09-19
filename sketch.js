let angleLeftWing;
let angleRightWing;
let micLevel;
let angleBeak = 1; //Click the branch underneath the bird
let leaf1;
let leaf2;
let leaf3;
let leaf4;

//let circ = false;
function setup() {
  //console.log(mySymbolicVariableName);
  createCanvas(400, 400);
  angleMode(DEGREES);



  leaf1=new leaf(width * .08, height * .65, -3, .5);
  leaf2=new leaf(width * .5, height * .4, -20, 1);
   leaf3=new leaf(width * .1, height * .35, -30, .5);
  leaf4=new leaf(width * .1, height * .3, 30, 1);

}

function draw() {

  //console.log("mic level " + mic.getLevel());
  //console.log("Mouse Y is:" + mouseX);
  micLevel = mic.getLevel(.9);
  angleLeftwing = map(micLevel, 0, .1, 45, 86); //wiggle
  angleRightwing = map(micLevel, 0, .1, 355, 396); //wiggle

  background(161, 222, 227);

  /*if(circ == true){
  circle(width/2, height/2, 100);
  }*/
  //shapes
  //drawLeaf();
  drawBirdBody();

  //xPos, yPos, Rotation
  drawBranch(width * .3, height * .8, 5);
  drawBranch(width * .7, height * .4, 40);
  drawBranch(width * .8, height * .3, 40);

  drawFeet();

  drawBeak(angleBeak);

  drawLeftWing(angleLeftwing);

  drawRightWing(angleRightwing);

  leaf1.display();
  leaf2.display();
  leaf3.display();
  leaf4.display();

  leaf1.move();
  leaf2.move();
  leaf3.move();
  leaf4.move();

}

function mousePressed() {
  mic = new p5.AudioIn();
  mic.start();
  if (mouseX > width * .3 && mouseX < width * .7 && mouseY > height * .78 && mouseY < height * .86) {
    console.log("mouse beep in here");
    angleBeak = -angleBeak;

  }
  /*else if(mouseX < width * .2 || mouseX > width * .8){
     //circ = true;

  }*/
}

function drawBranch(xPos, yPos, rotation) {
  push();
  //anchor point
  translate(xPos, yPos);
  //rectMode(CENTER);
  rotate(rotation);
  fill(196, 171, 141);
  //(0,0)
  rect(0, 0, 300, 25);
  pop();

}

function drawBirdBody() {
  fill(255);
  noStroke();
  //body ellipse(x, y, w, h, detail)
  ellipse(width * .5, height * .54, 140, 225);
  //tail
  triangle(width * .56, height * .78, width * .43, height * .78, width * .5, height * .9);
  push();
  fill(0);
  //eye

  ellipse(width * .43, height * .37, 15, 15);
  ellipse(width * .56, height * .37, 15, 15);
  mouseMoved();

  pop();
}

function drawFeet() {
  //feet
  push();
  fill(0);
  noStroke();
  triangle(width * .35, height * .86, width * .45, height * .9, width * .43, height * .8);
  triangle(width * .65, height * .86, width * .56, height * .9, width * .56, height * .8);
  pop();
}

function drawBeak(angleBeak) {

  push();
  translate(.5, .4);
  rotate(angleBeak);
  fill(255, 201, 51);
  //triangle(x1, y1, x2, y2, x3, y3) beak
  triangle(width * .53, height * .42, width * .49, height * .53, width * .46, height * .42);
  pop();

}

function drawLeftWing(angleLeftwing) {

  push();
  translate(width * .4, height * .35);
  rotate(angleLeftwing);
  beginShape();
  curveVertex(width * .04, height * .01);
  curveVertex(width * .2, height * .08);
  curveVertex(width * .1, height * .5);
  /*curveVertex(width * .39, height * .25);
  curveVertex(width * .2, height * .7);
  curveVertex(width * .42, height * .5);*/
  endShape(CLOSE);
  pop();
}

function drawRightWing(angleRightwing) {
  push();
  translate(width * .59, height * .35);
  rotate(angleRightwing);
  beginShape();
  curveVertex(width * .05, height * .01);
  curveVertex(width * .2, height * .08);
  curveVertex(width * .12, height * .5);
  endShape(CLOSE);
  pop();
}

function mouseMoved(){
  push();
  fill(255)
  ellipse(width * .43, height * .37, 10, 10);
  ellipse(width * .56, height * .37, 10, 10);
  pop();
}

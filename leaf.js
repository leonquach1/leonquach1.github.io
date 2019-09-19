class leaf {
  constructor(_xPos, _yPos, _rotation, _size){
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }
  display(){
  fill(255, 194, 61);
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  beginShape();
  curveVertex(width * .05, height * .01);
  curveVertex(width * .1, height * .4);
  curveVertex(width * .4, height * .2);
  curveVertex(width * .1, height * .29);
  curveVertex(width * .4, height * .3);
  curveVertex(width * .2, height * .3);
  curveVertex(width * .7, height * .3);
  endShape();
  pop();
    
  
  
  }
  move(){
    
    this.rotation ++;
    if(this.yPos <= height * 1.3){
    
    //this.yPos = this.yPos + 2;
    this.yPos += 2;  
    } else { 
      this.yPos = -height * .3;
    }
  }
}
/*function drawLeaf() {
  push();
  fill(255, 194, 61);
  beginShape();
  curveVertex(width * .05, height * .01);
  curveVertex(width * .1, height * .4);
  curveVertex(width * .4, height * .2);
  curveVertex(width * .1, height * .29);
  curveVertex(width * .4, height * .3);
  curveVertex(width * .2, height * .3);
  curveVertex(width * .7, height * .3);
  endShape();
  pop();
}*/
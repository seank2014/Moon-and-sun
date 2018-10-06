/*Evening background
*/
var star = [];//Created array for stars

class Star { //Created constructor function emcompassing all components for the stars
  constructor(x, y, r) { 
    this.x = x; //Coordinates can be found in loop as glodal variable in sketch.js
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    // stroke(255);
    // strokeWeight(4);
    fill(random(255),random(255),random(255));
    noStroke();
    ellipse(this.x, this.y, this.r)
  }
}





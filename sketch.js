/* 
Sean King
Final Project, I created a code in which a moon
decends into the night and becomes a sun that also
decends into the day.
Completed 10/5/2018
https://tocodeortogetacookie.wordpress.com/2018/10/05/final-project-i-made-it/*/
function setup() { 
  createCanvas(600, 400);

  for (var i = 0; i < 300; i++) {//setting variables for stars location
    var x = random(width);
    var y = random(height);
    var r = random(1, 1);
    star[i] = new Star(x, y, r);
  }


}

function draw() {

  if (moon.x < width && moon.y < height) { //setting condition for moon and it's background
    background(0, 0, 70);
    for (var i = 0; i < star.length; i++) {
      star[i].move();
      star[i].show();
    }


  } else { //setting condition for sun's background

    background(245, 245, 245);
    tree(400,200,150); //declaration of the tree as a function

  }


  noStroke(); //structure of the sun
  fill(sun.r, sun.g, sun.b);
  ellipse(sun.x, sun.y, sun.diam, sun.diam);
  sun.x = sun.x + .6;
  sun.y = sun.y + .4;

  noStroke(); //structure of the moon
  fill(300);
  ellipse(moon.x, moon.y, moon.diam, moon.diam);
  moon.x = moon.x + .6;
  moon.y = moon.y + .4;

  if (moon.x > width && moon.y < height) { //condition that makes loop so moon switches to sun  after it ends the canvass

    sun.x = 20;
    sun.y = 10;

  }
  house(20, 30, 200); //declaration of the house as a function


}

//Creating structure for the  house
function house (x, y, diameter) {
  
//Created house body
fill(204,102,0);
stroke(0);
strokeWeight(2);

//Created roof
triangle(x+120, y+180, x+270, y+50, x+420, y+180);
fill(204,102,0);
noStroke();
rect (x+170,y+170,diameter,diameter);

  
// Created door  
fill(0,0,215);
rect(x+280, y+270,55,100);
  
// Created doorknob
fill(0);
ellipse(350,350,10,10);
    
}

//Creating structure for tree
function tree (x, y, diameter) {
  

// tree trunk  
fill(153,51,0);
rect(x+120, y+50,20,150);
  
  //tree branch
fill(0,153,0);
ellipse(x+120,y+50,diameter,diameter)
  

    
}
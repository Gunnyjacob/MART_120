function setup() {
    createCanvas(500,600);
  }
  
  function draw() {
    background(220);
    
  }
  function draw() {
    background(220);
    //neck
    fill(247,245,188)
    rect(200,225,100);
    
//Hair
  noStroke()
  fill(32, 19, 19);
  arc(250,120,220,180,  QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
    

      //Mouth
  fill(225,102,102);
  arc(100, 325, 49, 35, 0, PI);
    
    //head
    fill(247,245,188);
    circle(250,150,200);
    fill(250,250,250)
    
  
    
     //Ears
    fill(247,245,188)
  arc(157, 157, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(340, 157, 40, 60, 0, PI + HALF_PI, OPEN)
    
    noStroke()
  fill(32, 19, 19);
  arc(300, 55, 55, 75, 50, Math.PI);
  arc(220, 35, 190, 120, 0, 0.75 * Math.PI);
    
    //eyes
    fill(250,250,250)
    ellipse(212,130,25,20);
    ellipse(281,130,25,20);
    fill(86,115,28)
    ellipse(212,130,8,8);
    ellipse(281,130,8,8);
    //nose
    fill(250,250,190)
      triangle(235,175, 248,134, 265,175);
    
  
    
//body
    fill(247,245,188)
    rect(100,300,300);
    
    


    textSize(20);
    fill(0)
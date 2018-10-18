var timer;
var stars = [];
var star;
var ySize = 25;
var grow = true;
function setup()
 {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  noStroke();
  for (var i=0; i<30; i++)
  {
    stars[i] = new Twinkle();
  }
  star = new Twinkle(windowWidth*1.4 - 40, windowHeight*1.4 + 100); //twinkle near mouth
}


function draw() {
  // put drawing code here
 background(199, 0, 57);
 timer = millis()/1000;
 fill(235, 205, 215);
 ellipse(windowWidth/2, windowHeight/2, 300, 300);
 fill(0); //black for eyes
 ellipse((windowWidth/2) - 80, (windowHeight/2) - 30, 25, 25);
 ySize = (23*sin((millis() / 1000)+ PI/2)); //how to make eye blink
 ellipse((windowWidth/2) + 80, (windowHeight/2) - 30, 25, ySize); //draw right eye
 fill(255);
 arc(windowWidth/2, windowHeight/2 + 40, 180, 140, 0, PI, PIE); //open smile


 star.move(); //teeth smile star will move differently
 star.display();


 for (var i=0; i < stars.length; i++)
 { //each of the stars in the array will move
    stars[i].move();
    stars[i].grow();
    stars[i].disappear();
  }
}

function Twinkle(xPos, yPos, coolor)
{
    this.cool = color(255, 195, 0);
    this.alf = random(0, 400); // randomly generated starting point for alpha value
    this.scaler = random(.1, .7); // randomly generated starting point for scale
    this.x = random(windowWidth); //gives the star a random position
    this.y = random(windowHeight); //if the user doesn't specify
    if (xPos)
    {
      this.x = xPos;
    }
    if (yPos){
      this.y = yPos;
    }
    if (coolor)
    {
      this.cool = coolor;
    }
    this.speed = 1;

 this.move = function()
 { //causes stars to "vibrate" in place
   this.x += random(-this.speed, this.speed);
   this.y += random(-this.speed, this.speed);
 };

 this.grow = function()
 {
   scale(sin((millis() / 1000) + this.scaler)); //fluctuate in size using a sine curve
 };

this.disappear = function(side){
    this.cool.setAlpha(this.alf + 128 * sin(millis() / 1000));
    fill(this.cool);
    drawTwinkle(this.x, this.y);
  }

    this.display = function(){ // used to display twinkles without sizing
        this.cool.setAlpha(this.alf + 128 * sin(millis() / 1000));
        fill(this.cool);
        scale(.4);
        drawTwinkle(this.x, this.y);
        scale(2.5);//return scale to 1 (because it multiplies)
    };
  }

function drawTwinkle(a, b){
  beginShape(); //draw and fill in custom pointed star shape
  vertex(a, b);
  vertex(a-10, b-40);
  vertex(a-40, b-50);
  vertex(a-10, b-60);
  vertex(a, b - 100);
  vertex(a + 10, b - 60);
  vertex(a + 40, b - 50);
  vertex(a +10, b - 40);
  endShape(CLOSE);

}

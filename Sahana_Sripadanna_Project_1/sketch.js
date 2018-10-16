var timer;
var stars = [];
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noStroke();
  for (var i=0; i<50; i++) {
    stars[i] = new Twinkle(millis()/1000);
  }
}


function draw() {
  // put drawing code here
//  directionalLight(241, 121, 57, 400, 400, 30)
  background(199, 0, 57);
  timer = millis()/1000;
  for (var i=0; i < stars.length; i++) {
    stars[i].move();
    //stars[i].display();
    stars[i].disappear();
  }
}

function Twinkle(timer){
    this.cool = color(255, 195, 0);
    this.time = timer;
    this.alf = random(0, 400);
    this.scaler = random(.4, .7);

    this.x = random(windowWidth);
    this.y = random(windowHeight);
  //  this.diameter = random(10, 30);
    this.speed = 1;

 this.move = function() {
   this.x += random(-this.speed, this.speed);
   this.y += random(-this.speed, this.speed);
 };

this.disappear = function(){

    if (this.mouseOver){
      this.cool = color(231, 53, 133);
    }
    this.cool.setAlpha(this.alf + 128 * sin(millis() / 1000));
    fill(this.cool);
    drawTwinkle(this.x, this.y);

      };

    this.display = function(){
        fill(this.cool);
        drawTwinkle(this.x, this.y);
        if (this.time > 3){
          this.disappear();
          console.log("dissap");
        }
    };
  }

function drawTwinkle(a, b){
  beginShape();
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

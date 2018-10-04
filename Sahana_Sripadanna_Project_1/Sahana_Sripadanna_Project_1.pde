
void setup(){
  size(600, 600);
  background(162, 27, 16);
  noStroke();
}

void draw(){
  int y = 10;
  //for(int y = 5; y <= 300; y++){
    fill(202, 65, 53, y);
    triangle(50, -10, 220, 250, 50, 300);
    //int y = 5;
    println("hie");    
    if(y == 300){
      y = 5;
    }
  //}
}

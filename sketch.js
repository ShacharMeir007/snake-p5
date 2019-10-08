
var scl = 20;


function setup() {

  createCanvas(400, 400);
  frameRate(10)
  b = new snake();
  f = new food();
  console.log('setup')
}

function draw() {
  background(70);
  b.eat(f)
  b.update();
  if(b.die()) {
    b = new snake();
  }
  b.show();
  f.show();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    b.changeDir(diraction.RIGHT);
  }
  else if(keyCode === UP_ARROW){
    b.changeDir(diraction.UP);
  }
  else if(keyCode === LEFT_ARROW){
    b.changeDir(diraction.LEFT);
  }
  else if(keyCode === DOWN_ARROW){
    b.changeDir(diraction.DOWN);
  }
  else{
    b.changeDir(diraction.SAPCE);
  }

}


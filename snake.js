var diraction = {
  RIGHT: 1,
  LEFT: 2,
  UP: 3,
  DOWN: 4,
  STOP:5
}


function snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.dir = diraction.RIGHT;
  this.tail = [];
  
  
  this.eat = function(f) {
      if(dist(this.x, this.y, f.x, f.y) <= 10) {
        f.eaten()
        console.log('ate')
        this.grow() 
        console.log('grew')
      }
  }
  
  
  this.update = function(){
    
    
    var len = this.tail.length;
      if(this.dir != diraction.STOP){
      for(var i = 0; i<len-1;i++){
        this.tail[i] = this.tail[i+1] 
        //console.log(tail.length)
      }
      this.tail[len-1] = [this.x, this.y] 
    }
    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;
    var x = this.x
    var y = this.y
    this.x = constrain(this.x,0,width-scl)
    this.y = constrain(this.y,0,height-scl)
    
    if(this.x != x || this.y != y) {
      return true
    }
    return false
  }
  this.show = function(){
    fill(110);
    rect(b.x, b.y, scl, scl);
    for(var i =0; i<this.tail.length;i++){
      rect(this.tail[i][0], this.tail[i][1], scl, scl);
    }
  }
  
  this.changeDir = function(dir) {
    
    
    if(dir === diraction.RIGHT && this.dir != diraction.LEFT){
      this.xSpeed = 1;
      this.ySpeed = 0;
      this.dir = diraction.RIGHT;
    }
    else if(dir === diraction.LEFT && this.dir !=diraction.RIGHT){
      this.xSpeed = -1;
      this.ySpeed = 0;
      this.dir = diraction.LEFT;
    }
    else if(dir === diraction.UP && this.dir != diraction.DOWN){
      this.xSpeed = 0;
      this.ySpeed = -1;
      this.dir = diraction.UP;
    }
    else if(dir === diraction.DOWN && this.dir != diraction.UP){
      this.xSpeed = 0;
      this.ySpeed = 1;
      this.dir = diraction.DOWN;
    }
    else if(dir === diraction.SPACE){
      this.xSpeed = 0;
      this.ySpeed = 0;
      this.dir = diraction.STOP;
    }
  }
    
    
    this.grow = function() {
      this.tail[this.tail.length] = [this.x, this.y]
      
    }
    
    this.die = function() {
      var len = this.tail.length;
      
      for(var i = 0; i<len;i++){
        if(this.tail[i][0] === this.x && this.tail[i][1] === this.y){
          console.log('died')
          return true
          
        }
      }
      return false
    }
}
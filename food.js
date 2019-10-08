function food() {
  this.x = floor(random(width/scl))*scl
    this.y = floor(random(height/scl))*scl
  
  
  this.show = function() {
    fill(255, 5, 0)
    rect(this.x, this.y, 20, 20)
  
  }
  
  this.eaten = function(){
    this.x = floor(random(width/scl))*scl
    this.y = floor(random(height/scl))*scl
  }
  
  
}



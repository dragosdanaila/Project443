//constructor function for "covid" to simplify code from sketch.js
//it makes the object and makes it reusable and multiplied


//define the location
class Covid {
    constructor() {
      this.r = 20;
      this.x = width;
      this.y = height - this.r*4.9;
    }
    
  //define movement  
    move() {
      this.x -= 4;
    }
  
  //define where to display and size
    show() {
      image(covidImg, this.x, this.y, this.r, this.r);
    }
  }
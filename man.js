//constructor function for "covid" to simplify code from sketch.js
//it makes the object and makes it reusable and multiplied


//define the location
//define velocity on y scale
//define the gravity
class Man {
    constructor() {
        this.r = 35
        this.x = this.r;
        this.y = height - this.r*6;
        this.vy = 0;
        this.gravity = 1.8;
    }
  
//define jump function
//define to jump only when "man" reach ground level
  jump() {
    if (this.y == height - this.r*6) {
    this.vy = -30;
      }
  }
  
//define collision between man and covid using p5.collide2D library from bmoren (on github). it offers boolean variable if given x,y,width and height of 2 rectangles
  hits(covid) {
    return collideRectRect(this.x, this.y, this.r, this.r*3,covid.x, covid.y, covid.r, covid.r*3);
  }
  
//define movement on y scale
//define gravity movement on y scale
//constrain jump height
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r*6);
  }

//define where to display and size
    show() {
        image(manImg, this.x, this.y, this.r*1.5, this.r*6);
    }
}
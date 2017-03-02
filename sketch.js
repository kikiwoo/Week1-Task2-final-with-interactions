//Task 2
//Existing piece of design with interaction: Composition with Large Red Plane, Yellow, Black, Gray, and Blue (1921)
// code by Kiki Woo 24Feb2017
function Box(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.c = color(232,149,35);
  
  this.draw = function() {
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
  
  this.isMouseInBox = function() {
    if(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      return true;
    } else {
      return true;
    }
  }
}

var box;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;


function setup() {
  createCanvas(600,600)
  background(0,0,0)
  colorMode(RGB);
  
  box = new Box(0,0,137,70);
  box1 = new Box(135,0,230,70);
  box2 = new Box(365,0,202,226);
  box3 = new Box(568,0,32,454);
  box4 = new Box(0,70,60,158);
  box5 = new Box(60,71,300,300);
  box6 = new Box(0,228,59,225);
  box7 = new Box(365,228,200,216);
  box8 = new Box(213,372,146,146);
  box9 = new Box(0,451,59,222);
  box10 = new Box(60,71,300,300);
  box11 = new Box(58,532,150,67);
  box12 = new Box(212,574,348,25);
  box13 = new Box(365,445,200,119);
  box14 = new Box(50,370,165,150);
  box15 = new Box(210,530,156,45);
  box16 = new Box(570,450,30,150);
}

function draw() {
  box.draw();
  box1.draw();
  box2.draw();
  box3.draw();
  box4.draw();
  box5.draw();
  box6.draw();
  box7.draw();
  box8.draw();
  box9.draw();
  box10.draw();
  box11.draw();
  box12.draw();
  box13.draw();
  box14.draw();
  box15.draw();
  box16.draw();
  
 /////vertical line
 strokeWeight(10);
 stroke(0,0,0);
 fill(0,0,0);
 line(55,74,55,585);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(138,30,138,65);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(210,376,210,600);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(363,74,363,600);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(460,235,460,442);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(565,0,565,600);
 
 //////landscape line
 stroke(0,0,0);
 fill(0,0,0);
 line(25,70,563,70);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(25,230,49,230);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(364,230,563,230);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(60,375,355,375);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(60,450,600,450);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(210,570,600,570);
 
 /////move bars
 rect(0, mouseY, 53, mouseY);
 rect(mouseX,0, mouseX,70);
 rect(565, mouseY, 400, mouseY);
 rect(mouseX,570, mouseX,600);
}

function mouseClicked() {
  var isInBox = box.isMouseInBox();
  if(isInBox) {
    box.c = color(random(255),10,107);
    box1.c = color(random(255),100,100);
    box2.c = color(random(255),60,100);
    box3.c = color(random(255),106,10);
    box4.c = color(random(255),200,40);
    box5.c = color(random(255),30,100);
    box6.c = color(random(255),100,100);
    box7.c = color(random(255),30,100);
    box8.c = color(random(255),230,150);
    box9.c = color(random(255),100,100);
    box10.c = color(random(255),10,40);
    box11.c = color(random(255),140,200);
    box12.c = color(random(255),195,150);
    box13.c = color(random(255),100,80);
    box14.c = color(random(255),109,90);
    box15.c = color(random(255),200,50);
    box16.c = color(random(255),220,150);
  }
}
// save this file as sketch.js
// Sketch One
var sketch1 = function( controller ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  controller.setup = function() {
    controller.createCanvas(400, 200);
  };

  controller.draw = function() {
    controller.background(0);
    controller.fill(255);
    controller.rect(x,y,50,50);
  };
};
var myp5 = new p5(sketch1, 'sketch1');

// Sketch Two
var sketch2 = function( controller ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  controller.setup = function() {
    controller.createCanvas(400, 200);
  };

  controller.draw = function() {
    controller.background(100);
    controller.fill(1);
    x += speed; 
    if(x > controller.width){
      x = 0; 
    }
    controller.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(sketch2, 'sketch2');

var sketch3 = function( controller ) {

    let contentContainerWidth = controller.windowWidth * .40;
    
    controller.setup = function () {
        controller.createCanvas(contentContainerWidth, 100);
        controller.background('grey');
        let inp = controller.createInput('');
        inp.position(0, 0);
        inp.size(100);
        inp.input(myInputEvent);
    }

    controller.draw = function () {
        console.log('you are typing: ', this.value());
    }
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}


var myp5 = new p5(sketch3, 'sketch3');
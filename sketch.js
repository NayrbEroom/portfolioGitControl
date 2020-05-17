
//assign it like a variable so you can do multiple sketches in one file
//it will also allow me to control the canvas with html/css
//instructions for assigning multiple sketches: http://www.joemckaystudio.com/multisketches/

let canvasSketch1 = function(controller) {

  let canvasX = 100;
  let canvasY = 100;
  controller.setup = function() {
    controller.createCanvas(700,410);
  };

  controller.draw = function() {
    controller.background(0);
    controller.fill(255);
    controller.rect(canvasX,canvasY, 50, 50);
  };
};

var myp5 = new p5(canvasSketch1, 'sketch1');

let canvasSketch2 = function(controller) {

  let canvasX = 100;
  let canvasY = 100;
  controller.setup = function() {
    controller.createCanvas(700,410);
  };

  controller.draw = function() {
    controller.background(0);
    controller.fill(255);
    controller.rect(canvasX,canvasY, 50, 50);

  };
};


var myp5 = new p5(canvasSketch2, 'sketch2');

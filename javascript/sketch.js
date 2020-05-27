
//assign it like a variable so you can do multiple sketches in one file
//it will also allow me to control the canvas with html/css
//instructions for assigning multiple sketches: http://www.joemckaystudio.com/multisketches/

let canvasSketch1 = function(controller) {

  let testArray = [123,1415,1235,5686,1352];
  let testArraySize = testArray.length;
  let objWidth = 4;
  let testButton;
  let orderedArray = bubbleSort(testArray);

  controller.setup = function() {
    canvControl = controller.createCanvas(700,410);

    console.log(orderedArray);


  };

  controller.draw = function() {
    let counter = 0;
    controller.background(104, 118, 145);

    while(counter < 6) {
      controller.fill(255);
      controller.rect(30*counter, counter, 50, testArray[counter] );
      counter++;
    }


    //controller.fill(255);
    //you need to do .fill first before making a shape


  };

  visualSort = function(sortingMethod, inputArr) {

  }


};

var myp5 = new p5(canvasSketch1, 'sketch1');

let bubbleSortSketch = function(controller) {

  controller.setup = function() {
    controller.createCanvas(700,410);
  };

  controller.draw = function() {
    controller.background(104, 118, 145);


  };
};


var myp5 = new p5(bubbleSortSketch, 'sketch2');

let testSketch = function(controller) {

  controller.setup = function() {
    controller.createCanvas(700,410);
  };

  controller.draw = function() {
    controller.background(104, 118, 145);


  };
};


var myp5 = new p5(testSketch, 'sketch3');

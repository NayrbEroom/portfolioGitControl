let testArray = [136, 151, 151, 1234, 14, 1516];
rectCreate = (item, index) => {

  if (item) {
    rect(windowWidth/2, windowHeight/2, 30, 30);
  }

  return null
}
testArray.forEach(rectCreate);


testFunction = (controller) => {
  var x = 100;
  var y = 100;

  controller.setup = () => {
    controller.createCanvas(640, 500);
  };
  controller.draw = () => {

  }

}











function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("Resized");
}

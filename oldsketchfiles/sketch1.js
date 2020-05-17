const canvasBorderX = 640;
const canvasBorderY = 500;

let myCanv = createCanvas(canvasBorderX, canvasBorderY);
myCanv.parent('sketch-holder');



function setup() {



  console.log("Start success");


}

function draw() {
  background(51);
  const canvasBorderX = 640;
  const canvasBorderY = 500;
  stroke(0);
  circle(canvasBorderX/2, canvasBorderY/2, 10);

}

/*function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("Resized");
}*/

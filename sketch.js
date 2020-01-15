function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log("Start success");


}

function draw() {
  background(51);


  //puck
  stroke(0);
  var ballVelocity
  circle(windowWidth/2, windowHeight/2, 10);

  //paddles



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("Resized");
}

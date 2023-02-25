
var img = "";
var status = "";
var objects = [];

function preload(){
  img = loadImage("basket_soccer.jpg");
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results); 
  objects = results;
}

function draw() {
  image(img, 0, 0, 640, 420);


    if(status != "")
    {
    }


  fill('#FF0000');
  text("Soccerball", 45, 75);
  noFill();
  stroke('#808080');
  rect(30, 60, 40, 350);

  fill('#00000');
  text("Basketball", 320, 120);
  noFill();
}
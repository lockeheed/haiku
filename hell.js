let capture;

function setup() {
createCanvas(windowWidth, windowHeight);
webcam = createCapture(VIDEO);
webcam.hide();
}

function draw() {
background(0);
//imageMode(CENTER);
image(webcam, 0, 0, windowWidth, windowHeight);
filter(GRAY);
//filter(ERODE);
}

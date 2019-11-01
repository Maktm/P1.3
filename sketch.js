// Canvas configuration
let canvasWidth = 1600;
let canvasHeight = 900;

// Video capture screen configuration
let capture;
let videoWidth = 640;
let videoHeight = 480;

function setup() {
    /**
     * Automatically called by P5js. Serves the purpose of
     * initializing the components.
     */
    createCanvas(canvasWidth, canvasHeight);

    /**
     * Create a camera and hide the capture because it
     * will cause two recordings to show up.
     */
    capture = createCapture(VIDEO);
    capture.size(canvasWidth, canvasHeight);
    capture.hide();
}

function enableCamera() {
    /**
     * Enables the camera and translates the image so that
     * it is inverted along the vertical as to make it
     * look like a proper mirror.
     */
    translate(videoWidth, 0);
    scale(-1.0, 1.0);
    image(capture, 0, 0, videoWidth, videoHeight);
    translate(videoWidth, 0);
    scale(-1.0, 1.0);
}

function draw() {
    /**
     * Called repeatedly on every frame by P5js to see
     * how to draw the next frame.
     */
    background(255);
    enableCamera();
}
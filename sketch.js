const canvasWidth = 1600;
const canvasHeight = 900;

let drawEngine = null;
let capture = null;

function setup() {
    /**
     * Automatically called by P5js and used to initialize the
     * components that are to be drawn on every frame.
     */

    createCanvas(canvasWidth, canvasHeight);

    capture = createCapture(VIDEO);
    capture.size(canvasWidth, canvasHeight);
    capture.hide();

    drawEngine = new DrawEngine([
        // Spotify web player
        new SpotifyDraggable(100, 100, 278, 358),
    ]);
}

function draw() {
    /**
     * Automatically called by P5js on every frame to determine
     * how to display the components by redrawing everything.
     */
    background(0);
    drawCamera();
    drawEngine.draw();
}

function mousePressed() {
    drawEngine.pressed();
}

function mouseReleased() {
    drawEngine.released();
}

function drawCamera() {
    /**
     * Gets the camera feed, inverts it across the vertical so
     * that it looks like a mirror, then displays it in the canvas.
     */
    const videoWidth = canvasWidth;
    const videoHeight = canvasHeight;

    translate(videoWidth, 0);
    scale(-1.0, 1.0);
    image(capture, 0, 0, videoWidth, videoHeight);
    translate(videoWidth, 0);
    scale(-1.0, 1.0);
}
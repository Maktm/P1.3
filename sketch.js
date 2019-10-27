class ExampleDraggable extends Draggable {
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }

    show() {
        super.show();

        if (this.dragging) {
            fill(10);
        } else if (this.rollover) {
            fill(300);
        } else {
            fill(275, 500);
        }

        // Update to the new background color
        rect(this.x, this.y, this.w, this.h);
    }
}

let drag;
let drag2;

function setup() {
    createCanvas(1000, 900);
    drag = new PlayerDraggable(100, 100, 400, 100);
    drag2 = new Draggable(200, 200, 100, 100);
}

function draw() {
    background(50);
    drag.update();
    drag.show();
    drag.over();
    drag2.update();
    drag2.show();
    drag2.over();
}

function mousePressed() {
    drag.pressed();
    drag2.pressed();
}

function mouseReleased() {
    drag.released();
    drag2.released();
}
function getWidgetPosition(widgetName) {
    /**
     * Returns the position to draw a window at depending
     * on the type of widget that is being drawn. To
     * determine what to pass for widgetName, look at the
     * dictionary definition below.
     */
    hardcodedWidgetPos =  {
        Weather: [0, 0],
        Events: [0, 0],
        Health: [0, 0],
        Twitter: [0, 0],
        Stocks: [0, 0],
        News: [0, 0],
        Messages: [0, 0],
        Spotify: [0, 0],
        Clock: [0, 0]
    };

    return hardcodedWidgetPos[widgetName];
}

class Draggable {
    constructor() {
        this.dragging = false; // Is the object being dragged?
        this.rollover = false; // Is the mouse over the ellipse?

        this.x = Math.random() * 20 + 1;
        this.y = Math.random() * 20 + 1;
        // Dimensions
        this.w = 500;
        this.h = 500;
    }

    over() {
        // Is mouse over object
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.rollover = true;
        } else {
        this.rollover = false;
        }

    }

    update() {

        // Adjust location if being dragged
        if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
        }

    }

    show() {

        stroke(0);
        // Different fill based on state
        if (this.dragging) {
        fill(50);
        } else if (this.rollover) {
        fill(100);
        } else {
        fill(175, 200);
        }
        rect(this.x, this.y, this.w, this.h);
    }

    pressed() {
        // Did I click on the rectangle?
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
        }
    }

    released() {
        // Quit dragging
        this.dragging = false;
    }
}
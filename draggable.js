class Draggable {
    constructor(x, y, w, h) {
        /**
         * Initializes an instance of a Draggable object. To have
         * the object constantly drawn onto the canvas, make sure
         * to call the show(), update() etc. functions in draw().
         */

        this.x = x; // Set the starting x position
        this.y = y; // Set the starting y position
        this.w = w; // Set the width of the Draggable object
        this.h = h; // Set the height of the Draggable object

        this.dragging = false;  // Tracks whether the object is being dragged
        this.rollover = false;  // Checks if the mouse is over the draggable
    }

    over() {
        /**
         * Determines whether the mouse is currently pointing over
         * the current instance of the Drawable object.
         */
        if (mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.h)) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    update() {
        /**
         * Updates the x and y positions of this instance of the Draggable
         * object if the object is currently being dragged.
         */
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }

    show() {
        /**
         * This function is responsible for drawing in the content
         * of a Draggable instance. To include your drawings inside of
         * a Draggable object, override this method and draw your stuff.
         */
    }

    pressed() {
        /**
         * This function is called repeatedly to check if, when the
         * mouse is pressed, the pressed in the region where the
         * box is drawn.
         */
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            this.dragging = true;
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }

    released() {
        this.dragging = false;
    }
}
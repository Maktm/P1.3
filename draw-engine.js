class DrawEngine {
    /**
     * A DrawEngine instance is used to avoid having to call the methods
     * for each component manually. Instead, you just have to register
     * the component inside of the DrawEngine instance when it is
     * instantiated then the update events are called automatically.
     */

    constructor(components) {
        this.components = components;
    }

    draw() {
        /**
         * This method is called on in each frame. It serves the purpose
         * of having to call the update(), show(), and over() methods
         * for each component manually.
         */
        this.components.forEach(function (component, index) {
            component.update();
            component.show();
            component.over();
        });
    }

    pressed() {
        /**
         * Each time the mouse is pressed, this method is called and it
         * passes the event onto each component so that each component
         * can determine whether they were the ones being clicked.
         */
        this.components.forEach(function (component, index) {
            component.pressed();
        });
    }

    released() {
        /**
         * Similar to pressed(), but obviously for a mouse release event.
         */
        this.components.forEach(function (component, index) {
            component.released();
        });
    }
}
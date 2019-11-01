class SpotifyDraggable extends Draggable {
    /**
     * Spotify player that is draggable across the canvas. Unlike the other
     * draggable instances, these ones will not be able to be dragged from
     * anywhere in the click area. Instead you have to drag it from the
     * "drag region" below the embedded Spotify web player.
     */
    constructor(x, y, w, h) {
        // Adds 50 to the specified height to make room for "drag region"
        super(x, y, w, h + 50);

        this.gridStack = createDiv('');
        this.gridStack.class('grid-stack');

        this.stackItem = createDiv('');
        this.stackItem.class('grid-stack-item');
        this.stackItem.attribute('data-gs-x', '0');
        this.stackItem.attribute('data-gs-y', '0');
        this.stackItem.attribute('data-gs-width', '4');
        this.stackItem.attribute('data-gs-height', '2');
        this.stackItem.parent(this.gridStack);

        this.itemContent = createDiv('');
        this.itemContent.class('grid-stack-item-content');
        this.itemContent.parent(this.stackItem);

        this.embedded = createDiv('');
        this.embedded.size(w, h);
        this.embedded.html(this.getEmbedCode());
        this.embedded.parent(this.itemContent);

        // TODO: Position the stack on top of the canvas and set the height
        $(function () {
            $('.grid-stack').gridstack();
        });
    }

    getEmbedCode() {
        /**
         * Returns the embed code for the Spotify web player. For now, the
         * web player is set to play a playlist I found for Piano music.
         *
         * TODO: In the "drag region", add a matching bg color and add the
         *  icon that shows that it's draggable (three lines).
         */
        return `
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO"
                width="278" height="358" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    }

    show() {
        super.show();
        this.embedded.position(this.x, this.y);
    }
}
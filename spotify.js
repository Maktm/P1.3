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

        this.embedded = createDiv('');
        this.embedded.size(w, h);
        this.embedded.html(this.getEmbedCode());
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
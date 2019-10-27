class PlayerDraggable extends Draggable {
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }

    show() {
        super.show();

        // Get the embedded spotify code and place it inside here
        let spotifyEmbed = document.getElementById('spotifyEmbed');
        spotifyEmbed.width = this.w;
        spotifyEmbed.height = this.h;
        spotifyEmbed.style.position = "absolute";
        spotifyEmbed.style.left = (this.x + 7) + 'px';
        spotifyEmbed.style.top = (this.y + 7) + 'px';
    }
}
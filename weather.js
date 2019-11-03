class WeatherDraggable extends Draggable {
    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.content = createDiv(`
         <canvas id="clear-day" width="64" height="64"></canvas>
        `);
        this.content.size(w, h);

        var icons = new Skycons({"color": "orange"});

        icons.set("clear-day", Skycons.CLEAR_DAY);
        icons.play();
    }

    show() {
        super.show();
        this.content.position(this.x, this.y);
    }
}
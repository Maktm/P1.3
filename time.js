class TimeDraggable extends Draggable {
    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.content = createDiv('');
        this.content.size(w, h);
        this.content.class('clock');

        this.clock = $('.clock').FlipClock({
            clockFace: 'TwelveHourClock'
        });
    }

    show() {
        this.content.position(this.x, this.y);
    }
}
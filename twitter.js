class TwitterDraggable extends Draggable {
    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.content = createDiv('');
        this.content.size(w,h);
        this.content.html(this.getTimeline());
    
    }

    getTimeline() {
        return `<a class="twitter-timeline" data-width="250" data-height="300" href="https://twitter.com/BleacherReport?ref_src=twsrc%5Etfw">Tweets by BleacherReport</a> 
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
    }

    show() {

        super.show();
        this.content.position(this.x, this.y);
    }
}
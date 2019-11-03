class CalendarDraggable extends Draggable {

    constructor(x, y, w, h) {

        super(x, y, w, h +50);

        this.embedded = createDiv('');
        this.embedded.size(w, h);
        this.embedded.html(this.getEmbedCode());
    }

    getEmbedCode(){
        return`
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23A79B8E&amp;ctz=America%2FChicago&amp;src=anl1YzkwMTlAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=NWdhMnFkcmZuaTJoNnUyM211dHA0dWNoNzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=c2liOWw0M2ZwY3IyaGNuaHN1YnE4bmVwMWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23A79B8E&amp;color=%2333B679&amp;color=%23AD1457&amp;color=%230B8043&amp;color=%23B39DDB" style="border-width:0" width="550" height="550" frameborder="0" scrolling="no"></iframe>`;
    }
    show() {
        super.show();
        this.embedded.position(this.x,this.y);
    }
}
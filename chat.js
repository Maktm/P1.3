class ChatDraggable extends Draggable {
    /**
     * Uses the talkjs library for UI drawing.
     */
    constructor(x, y, w, h) {
        super(x, y, w, h + 30);

        this.content = createDiv(``);
        this.content.size(w, h);
        this.content.attribute('id', 'talkjs-container');

        Talk.ready.then(function() {
            var me = new Talk.User({
                id: "123456",
                name: "Alice",
                role: "user",
                email: "alice@example.com",
                photoUrl: "https://demo.talkjs.com/img/alice.jpg",
                welcomeMessage: "Hey there! How are you? :-)"
            });
            window.talkSession = new Talk.Session({
                appId: "tq24Cbfn",
                me: me
            });
            var other = new Talk.User({
                id: "654321",
                name: "Sebastian",
                email: "Sebastian@example.com",
                photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
                welcomeMessage: "Hey, how can I help?"
            });

            var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));
            conversation.setParticipant(me);
            conversation.setParticipant(other);
            var inbox = talkSession.createInbox({selected: conversation});
            inbox.mount(document.getElementById("talkjs-container"));
        });
    }

    show() {
        super.show();
        this.content.position(this.x, this.y);
    }
}
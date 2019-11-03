let newsFormatted = '';

class NyTimesDraggable extends Draggable {
    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.populated = false;

        this.content = createDiv('');
        this.content.size(w, h);
        this.content.class('list-group');
        this.content.attribute('style', this.content.attribute('style') + 'background-color: #22272B;');
        this.content.html(this.getListUi());

        this.logo = createImg('res/nytimeslogo.png');
        this.logo.size(150, 21);

        // Get the data from NYTimes
        const apiUrl = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=Mz5EYmmoVke1VRLkQGgdNbSRUfvZjwa5';
        loadJSON(apiUrl, this.onDataReceived);
    }

    onDataReceived(data) {
        /**
         * Update the internal state so that it can be retrieved
         * and drawn later on.
         */
        for (let i = 0; i < data.results.length; i++) {
            let newsData = data.results[i];
            let title = newsData.title.slice(0, 45) + '...';
            let date = '1 day ago';
            let abstract = newsData.abstract;

            newsFormatted += `
            <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h6 class="mb-1">${title}</h6>
              <small>${date}</small>
            </div>
            <small class="mb-1">${abstract}</small>
            </a>
            `;
        }
    }

    getListUi() {
        return newsFormatted;
    }

    show() {
        super.show();
        this.content.position(this.x, this.y);

        // Draw the NYTimes logo above the component
        this.logo.position(this.x + (this.w - this.logo.width), this.y + this.h + 5);

        if (!this.populated && newsFormatted.length > 0) {
            this.content.html(this.getListUi());
            this.populated = true;
        }
    }
}
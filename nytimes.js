let newsFormatted = '';

class NyTimesDraggable extends Draggable {
    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.populated = false;

        this.content = createDiv('');
        this.content.size(w, h);
        this.content.class('list-group');
        this.content.html(this.getListUi());

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
            let title = newsData.title.slice(0, 30) + '...';
            let date = '1 day ago';
            let abstract = newsData.abstract;

            newsFormatted += `
            <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${title}</h5>
              <small>${date}</small>
            </div>
            <p class="mb-1">${abstract}</p>
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

        if (!this.populated && newsFormatted.length > 0) {
            this.content.html(this.getListUi());
            this.populated = true;
        }
    }
}
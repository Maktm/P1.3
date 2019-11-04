temperature = null;

class WeatherDraggable extends Draggable {
    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.content = createDiv('');
        this.content.size(w, h);

        loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Lubbock&APPID=d365b3893e2efbfac1e11e6808b6e5c6&units=imperial\n', this.onJsonReceived);
    }

    onJsonReceived(data) {
        console.log(data);
        temperature = data['main']['temp'];
    }

    show() {
        if (temperature != null) {
            // Draw the temperature onto the screen
            this.content.html(`<h1 class="display-3" style="color: white;">${temperature}</h1>`);
            this.content.position(this.x, this.y);
        }
    }
}